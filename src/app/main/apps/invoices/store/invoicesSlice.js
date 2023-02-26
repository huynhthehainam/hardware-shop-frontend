const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  searchText: '',
  data: [],
  order: {
    id: 'code',
    direction: 'asc',
  },
  totalRecords: 0,
  rowsPerPage: 5,

  page: 0,
};

const invoicesSlice = createSlice({
  initialState,
  name: 'invoices',

  reducers: {
    resetState: (state, action) => {},

    setInvoiceSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    setOrder: (state, action) => {
      state.order = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setRowsPerPage: (state, action) => {
      state.rowsPerPage = action.payload;
    },
  },
});

export const { resetState, setInvoiceSearchText, setOrder, setPage, setRowsPerPage } =
  invoicesSlice.actions;

export default invoicesSlice.reducer;
