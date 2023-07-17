const { createSlice } = require('@reduxjs/toolkit');

const signalRSlice = createSlice({
  name: 'signalR',
  initialState: null,
  reducers: {
    setSignalRMessage: (state, action) => {
      state = action.payload;
    },
  },
});
export const { setSignalRMessage } = signalRSlice.actions;
export default signalRSlice.reducer;
