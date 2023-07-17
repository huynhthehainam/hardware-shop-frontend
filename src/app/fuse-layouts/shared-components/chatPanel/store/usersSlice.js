const { createSlice } = require('@reduxjs/toolkit');

const usersSlice = createSlice({
  name: 'chatPanel/users',
  initialState: {
    users: [],
  },
  reducers: {
    setChatUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});
export const { setChatUsers } = usersSlice.actions;
export default usersSlice.reducer;
