import { configureStore } from '@reduxjs/toolkit';
import jwtService from 'app/services/jwtService';
import {
  HttpTransportType,
  HubConnectionBuilder,
  JsonHubProtocol,
  LogLevel,
} from '@microsoft/signalr';
import { urlConfig } from 'custom-axios';
import {
  increaseUnreadBySessionId,
  initContacts,
  markAsReadBySessionId,
  setSelectedContactId,
} from 'app/fuse-layouts/shared-components/chatPanel/store/contactsSlice';
import { downloadAssetById, downloadAssetsByIds } from 'custom-axios/commonRequest';
import {
  sendChatMessage,
  setChat,
} from 'app/fuse-layouts/shared-components/chatPanel/store/chatSlice';
import { setChatUsers } from 'app/fuse-layouts/shared-components/chatPanel/store/usersSlice';
import createReducer from './rootReducer';

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./rootReducer', () => {
    const newRootReducer = require('./rootReducer').default;
    store.replaceReducer(newRootReducer.createReducer());
  });
}

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
  const { createLogger } = require(`redux-logger`);
  const logger = createLogger({ collapsed: (getState, action, logEntry) => !logEntry.error });
  console.log('middleware logger', logger);
  middlewares.push(logger);
}

const startSignalRConnection = (connection) =>
  connection
    .start()
    .then(() => console.info('SignalR Connected'))
    .catch((err) => console.error('SignalR Connection Error: ', err));

let hubConnection;
const signalRMiddleware =
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    if (action.type === 'auth/user/setUser') {
      const accessToken = jwtService.getAccessToken();
      console.log('action store', accessToken);
      const baseUrl = process.env.REACT_APP_API_URL;
      const url = `${baseUrl}${urlConfig.chatHub}`;
      const transport = HttpTransportType.WebSockets;

      const options = {
        transport,
        logMessageContent: true,
        logger: LogLevel.Trace,
        accessTokenFactory: () => jwtService.getAccessToken(),
      };
      hubConnection = new HubConnectionBuilder()
        .withUrl(url, options)
        .withHubProtocol(new JsonHubProtocol())
        .build();

      hubConnection.on('InitContacts', (contacts) => {
        const assetIds = contacts
          .map((p) => p.assetId)
          .filter((value, index, array) => array.indexOf(value) === index);
        const promises = assetIds.map((assetId) => {
          return new Promise((downloadResolve) => {
            downloadAssetById(assetId).then((downloadUrl) => {
              downloadResolve({
                assetId,
                url: downloadUrl,
              });
            });
          });
        });
        Promise.all(promises).then((values) => {
          const validatedContacts = contacts.map((c) => {
            const assets = values.filter((v) => v.assetId === c.assetId);

            return {
              ...c,
              mood: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
              avatar: assets.length > 0 ? assets[0].url : 'assets/images/avatars/alice.jpg',
            };
          });

          dispatch(initContacts(validatedContacts));
        });
      });
      hubConnection.on('SuccessfullyCreatedChatSession', (createdSession) => {
        dispatch(setSelectedContactId(createdSession.id));

        const chat = {
          dialog: createdSession.messages.items.map((m) => {
            return { ...m, who: m.userGuid, message: m.content };
          }),
        };
        console.log('created session', createdSession);

        const assetIds = createdSession.users
          .map((u) => u.assetId)
          .filter((value, index, array) => array.indexOf(value) === index);
        downloadAssetsByIds(assetIds).then((values) => {
          const chatUsers = createdSession.users.map((u) => {
            return {
              ...u,
              avatar: values.find((v) => v.assetId === u.assetId).url,
            };
          });

          dispatch(setChatUsers(chatUsers));
          dispatch(setChat(chat));
        });
      });
      hubConnection.on('OtherDeviceReadAllMessage', (session) => {
        const { chatSessionId } = session;
        dispatch(markAsReadBySessionId(chatSessionId));
      });
      hubConnection.on('SomeoneSentMessage', (createdMessage) => {
        const { chatSessionId, createdUseGuid, message } = createdMessage;
        const { selectContactById } = getState().chatPanel.contacts;
        if (chatSessionId === setSelectedContactId) {
          // update chat
          dispatch(
            sendChatMessage({
              who: createdUseGuid,
              time: new Date(),
              message,
            })
          );
        } else {
          // add unread
          dispatch(increaseUnreadBySessionId(chatSessionId));
        }
        console.log();
      });
      hubConnection.onclose(() => setTimeout(startSignalRConnection(hubConnection), 5000));
      startSignalRConnection(hubConnection);
    }
    if (action.type === 'signalR/setSignalRMessage') {
      if (hubConnection) {
        const args = [action.payload.msgType, ...action.payload.msg];
        hubConnection.invoke(...args);
      }
    }
    return next(action);
  };
middlewares.push(signalRMiddleware);

const store = configureStore({
  reducer: createReducer(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(middlewares),
  devTools: process.env.NODE_ENV === 'development',
});

store.asyncReducers = {};

export const injectReducer = (key, reducer) => {
  if (store.asyncReducers[key]) {
    return false;
  }
  store.asyncReducers[key] = reducer;
  store.replaceReducer(createReducer(store.asyncReducers));
  return store;
};

export default store;
