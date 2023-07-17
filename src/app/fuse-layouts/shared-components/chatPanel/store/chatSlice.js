import { createSlice } from '@reduxjs/toolkit';
import { closeChatPanel } from './stateSlice';

const chatSlice = createSlice({
  name: 'chatPanel/chat',
  initialState: null,
  reducers: {
    removeChat: (state, action) => null,
    setChat: (state, action) => action.payload,
    sendChatMessage: (state, action) => {
      const newDialog = [...state.dialog, action.payload];
      state.dialog = newDialog;
    },
  },
  extraReducers: {
    [closeChatPanel]: (state, action) => null,
  },
});

export const { removeChat, setChat, sendChatMessage } = chatSlice.actions;

export default chatSlice.reducer;
