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
    markAsReadBySessionId: (state, action) => {
      const sessionId = action.payload;
      const newContacts = state.contacts.map((c) => {
        return {
          ...c,
          unread: c.id === sessionId ? 0 : c.unread,
        };
      });
      state.contacts = newContacts;
    },
    increaseUnreadBySessionId: (state, action) => {
      const sessionId = action.payload;
      const newContacts = state.contacts.map((c) => {
        return {
          ...c,
          unread: c.id === sessionId ? c.unread + 1 : c.unread,
        };
      });
      state.contacts = newContacts;
    },
  },
  extraReducers: {
    [closeChatPanel]: (state, action) => {
      state.selectedContactId = null;
    },
  },
});

export const {
  setSelectedContactId,
  removeSelectedContactId,
  initContacts,
  markAsReadBySessionId,
  increaseUnreadBySessionId,
} = contactsSlice.actions;

export default contactsSlice.reducer;
