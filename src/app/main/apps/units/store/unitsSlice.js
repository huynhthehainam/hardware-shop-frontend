const { createSlice } = require('@reduxjs/toolkit');

const unitsSlice = createSlice({
  name: 'units',
  initialState: {
    units: [],
  },
  reducers: {
    setUnits: (state, action) => {
      state.units = action.payload;
    },
  },
});
export const { setUnits } = unitsSlice.actions;
export default unitsSlice.reducer;
