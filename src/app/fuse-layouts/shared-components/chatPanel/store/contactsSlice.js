import { createSlice } from '@reduxjs/toolkit';

import { closeChatPanel } from './stateSlice';

const contactsSlice = createSlice({
  name: 'chatPanel/contacts',
  initialState: {
    contacts: [],
    selectContactById: null,
  },
  reducers: {
    setSelectedContactId: (state, action) => {
      state.selectedContactId = action.payload;
    },
    removeSelectedContactId: (state, action) => {
      state.selectedContactId = null;
    },
    initContacts: (state, action) => {
      state.contacts = action.payload;
    },
  },
  extraReducers: {
    [closeChatPanel]: (state, action) => {
      state.selectedContactId = null;
    },
  },
});

export const { setSelectedContactId, removeSelectedContactId, initContacts } =
  contactsSlice.actions;

export default contactsSlice.reducer;
