import mainAxios, { urlConfig } from 'custom-axios';
import constants from '../constants';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const getCustomers = createAsyncThunk(
  'invoices/createUpdateInvoice/getCustomers',
  (data, { dispatch }) => {
    return new Promise((resolve, reject) => {
      mainAxios.get(urlConfig.getCustomers).then((resp) => {
        const customers = resp.data.data;
        dispatch(setCustomers(customers));
        resolve();
      });
    });
  }
);
export const getProducts = createAsyncThunk(
  'invoices/createUpdateProduct/getProducts',
  (data, { dispatch }) => {
    return new Promise((resolve, reject) => {
      mainAxios.get(urlConfig.getProducts).then((resp) => {
        dispatch(setProducts(resp.data.data));
        resolve();
      });
    });
  }
);

const initialState = {
  customers: [],
  invoice: {},
  mode: constants.NEW_MODE,
  products: [],
};

const createUpdateInvoiceSlice = createSlice({
  initialState,
  name: 'createUpdateInvoice',
  reducers: {
    resetState: (state, action) => {},
    setCustomers: (state, action) => {
      state.customers = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setNewInvoice: (state, action) => {
      state.invoice = {
        customer: null,
        details: [],
      };
    },
    setMode: (state, action) => {
      state.mode = action.payload;
    },
  },
});
export const { resetState, setCustomers, setNewInvoice, setMode, setProducts } =
  createUpdateInvoiceSlice.actions;
export default createUpdateInvoiceSlice.reducer;
