import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setSelectedContactId } from './contactsSlice';
import { closeChatPanel } from './stateSlice';

export const getChat = createAsyncThunk(
  'chatPanel/chat/getChat',
  async ({ contactId }, { dispatch, getState }) => {
    const { id: userId } = getState().chatPanel.user;

    const response = await axios.get('/api/chat/get-chat', {
      params: {
        contactId,
        userId,
      },
    });
    const { chat, userChatList } = await response.data;

    dispatch(setSelectedContactId(contactId));

    return chat;
  }
);

export const sendMessage = createAsyncThunk(
  'chatPanel/chat/sendMessage',
  async ({ messageText, chatId, contactId }, { dispatch, getState }) => {
    const response = await axios.post('/api/chat/send-message', { chatId, messageText, contactId });

    const { message, userChatList } = await response.data;

    return message;
  }
);

const chatSlice = createSlice({
  name: 'chatPanel/chat',
  initialState: null,
  reducers: {
    removeChat: (state, action) => null,
  },
  extraReducers: {
    [getChat.fulfilled]: (state, action) => action.payload,
    [sendMessage.fulfilled]: (state, action) => {
      state.dialog = [...state.dialog, action.payload];
    },
    [closeChatPanel]: (state, action) => null,
  },
});

export const { removeChat } = chatSlice.actions;

export default chatSlice.reducer;
