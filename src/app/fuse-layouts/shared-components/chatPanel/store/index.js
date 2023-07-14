import { combineReducers } from '@reduxjs/toolkit';
import chat from './chatSlice';
import contacts from './contactsSlice';
import state from './stateSlice';

const reducer = combineReducers({
  contacts,
  chat,
  state,
});

export default reducer;
