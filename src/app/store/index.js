import { configureStore } from '@reduxjs/toolkit';
import jwtService from 'app/services/jwtService';
import {
  HttpTransportType,
  HubConnectionBuilder,
  JsonHubProtocol,
  LogLevel,
} from '@microsoft/signalr';
import { urlConfig } from 'custom-axios';
import { initContacts } from 'app/fuse-layouts/shared-components/chatPanel/store/contactsSlice';
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
      const hubConnection = new HubConnectionBuilder()
        .withUrl(url, options)
        .withHubProtocol(new JsonHubProtocol())
        .build();
      console.log('store', hubConnection);
      hubConnection.on('InitContacts', (contacts) => {
        const validatedContacts = contacts.map((c) => {
          return {
            ...c,
            id: `${c.id}`,
            status: c.status,
            name: `${c.username}`,
            unread: c.unread,
            mood: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            avatar: 'assets/images/avatars/alice.jpg',
          };
        });
        dispatch(initContacts(validatedContacts));
      });
      hubConnection.onclose(() => setTimeout(startSignalRConnection(hubConnection), 5000));
      startSignalRConnection(hubConnection);
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
