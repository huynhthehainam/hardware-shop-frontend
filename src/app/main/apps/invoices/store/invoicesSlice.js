import mainAxios, { urlConfig } from 'custom-axios';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const getInvoices = createAsyncThunk(
  'invoices/invoices/getInvoices',
  (data, { dispatch, getState }) => {
    return new Promise((resolve, reject) => {
      const pageIndex = getState().invoices.invoices.page;
      const pageSize = getState().invoices.invoices.rowsPerPage;
      const { searchText, order } = getState().invoices.invoices;

      mainAxios
        .get(urlConfig.getInvoices, {
          params: {
            pageIndex,
            pageSize,
            search: searchText,
            sortFieldName: order.id,
            isSortAscending: order.direction === 'asc',
          },
        })
        .then((resp) => {
          dispatch(setData(resp.data.data));
          dispatch(setTotalRecords(resp.data.totalItems));
          resolve();
        });
    });
  }
);
const initialState = {
  searchText: '',
  data: [],
  order: {
    id: 'createdDate',
    direction: 'des',
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
    setTotalRecords: (state, action) => {
      state.totalRecords = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
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

export const {
  resetState,
  setInvoiceSearchText,
  setOrder,
  setPage,
  setRowsPerPage,
  setTotalRecords,
  setData,
} = invoicesSlice.actions;

export default invoicesSlice.reducer;
