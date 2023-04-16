const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

const initialState = {
  shops: [],
  searchText: '',
  rowsPerPage: 5,
  page: 0,
  totalRecords: 0,
  order: {
    id: 'name',
    direction: 'asc',
  },
};

export const getShops = createAsyncThunk(
  'shops/shops/getShops',
  (params, { dispatch, getState }) => {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }
);

const shopsSlice = createSlice({
  name: 'shops',
  initialState,
  reducers: {
    setShops: (state, action) => {
      state.shops = action.payload;
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setRowsPerPage: (state, action) => {
      state.rowsPerPage = action.payload;
    },
    setTotalRecords: (state, action) => {
      state.totalRecords = action.payload;
    },
    setOrder: (state, action) => {
      state.order = action.payload;
    },
  },
});

export const { setShops, setSearchText, setPage, setRowsPerPage, setTotalRecords, setOrder } =
  shopsSlice.actions;
export default shopsSlice.reducer;
