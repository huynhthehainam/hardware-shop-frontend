import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import mainAxios, { urlConfig } from 'custom-axios';

export const getCustomers = createAsyncThunk(
  'customers/customers/getCustomers',
  (data, { dispatch, getState }) => {
    return new Promise((resolve, reject) => {
      const search = getState().customers.customers.searchText;
      const pageIndex = getState().customers.customers.page;
      const pageSize = getState().customers.customers.rowsPerPage;
      mainAxios
        .get(urlConfig.getCustomers, {
          params: {
            search,
            pageIndex,
            pageSize,
          },
        })
        .then((resp) => {
          const customers = resp.data.data.map((e) => {
            return { ...e, fullPhone: `${e.phonePrefix ?? ''}${e.phone ?? ''}` };
          });
          dispatch(setCustomers(customers));
          dispatch(setTotalRecords(resp.data.totalItems));
          resolve();
        });
    });
  }
);

const customersSlice = createSlice({
  name: 'customers',
  initialState: {
    searchText: '',
    customers: [],
    rowsPerPage: 10,
    page: 0,
    totalRecords: 0,
    order: {
      id: 'name',
      direction: 'asc',
    },
  },
  reducers: {
    setCustomers: (state, action) => {
      state.customers = action.payload;
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

export const { setSearchText, setCustomers, setPage, setRowsPerPage, setTotalRecords, setOrder } =
  customersSlice.actions;

export default customersSlice.reducer;
