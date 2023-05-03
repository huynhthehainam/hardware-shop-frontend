import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import mainAxios, { urlConfig } from 'custom-axios';
import _ from 'lodash';

export const getNotifications = createAsyncThunk(
  'notificationPanel/data/getData',
  (data, { dispatch, getState }) => {
    return new Promise((resolve, reject) => {
      mainAxios.get(urlConfig.getUserNotifications).then((resp) => {
        const notifications = resp.data.data;
        const newNotifications = notifications.map((notification) => {
          notification.isOld = true;
          return notification;
        });
        dispatch(setNotifications(newNotifications));
      });
    });
  }
);

export const createNotification = createAsyncThunk(
  'notificationPanel/data/createNotification',
  ({ message, options, translation, translationParams }, { dispatch, getState }) => {
    return new Promise((resolve, reject) => {
      const { variant } = options;
      console.log('create noti api', translation, message, translationParams);
      mainAxios
        .post(urlConfig.createUserNotification, {
          message,
          variant,
          translation,
          translationParams,
        })
        .then((resp) => {
          const { id } = resp.data.data;
          let { notifications } = getState().notificationPanel.data;
          notifications = [
            ...notifications,
            { id, message, options, translation, translationParams },
          ];
          dispatch(setNotifications(notifications));
          resolve();
        });
    });
  }
);

export const dismissNotification = createAsyncThunk(
  'notificationPanel/data/createNotification',
  (id, { dispatch, getState }) => {
    return new Promise((resolve, reject) => {
      mainAxios.post(urlConfig.dismissUserNotificationById(id)).then((resp) => {
        const { notifications } = getState().notificationPanel.data;

        const newNotifications = [...notifications];
        _.remove(newNotifications, (e) => e.id === id);

        dispatch(setNotifications(newNotifications));
        resolve();
      });
    });
  }
);

export const dismissAllNotification = createAsyncThunk(
  'notificationPanel/data/dismissAllNotification',
  (data, { dispatch, getState }) => {
    return new Promise((resolve, reject) => {
      mainAxios.post(urlConfig.dismissAllUserNotifications).then((resp) => {
        dispatch(setNotifications([]));
        resolve();
      });
    });
  }
);

const initialState = {
  notifications: [],
};

const dataSlice = createSlice({
  name: 'notificationPanel/data',
  initialState,
  reducers: {
    setNotifications: (state, action) => {
      state.notifications = action.payload;
    },
  },
});

export const { dismissItem, dismissAll, addNotification, setNotifications } = dataSlice.actions;

export default dataSlice.reducer;
