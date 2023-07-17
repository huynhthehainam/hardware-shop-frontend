import { combineReducers } from '@reduxjs/toolkit';
import chat from './chatSlice';
import contacts from './contactsSlice';
import state from './stateSlice';
import users from './usersSlice';

const reducer = combineReducers({
  contacts,
  chat,
  users,
  state,
});

export default reducer;
