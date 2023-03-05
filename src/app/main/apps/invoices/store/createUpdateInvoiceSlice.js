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
  'invoices/createUpdateInvoice/getProducts',
  (data, { dispatch }) => {
    return new Promise((resolve, reject) => {
      mainAxios.get(urlConfig.getProducts).then((resp) => {
        dispatch(setProducts(resp.data.data));
        resolve();
      });
    });
  }
);

export const createInvoice = createAsyncThunk(
  'invoices/createUpdateInvoice/createInvoice',
  (data, { dispatch, getState }) => {
    return new Promise((resolve, reject) => {
      mainAxios
        .post(urlConfig.createInvoice, data)
        .then((resp) => {
          resolve();
        })
        .catch((e) => {
          reject();
        });
    });
  }
);

export const getInvoiceById = createAsyncThunk(
  'invoices/createUpdateInvoice/getInvoiceById',
  (id, { dispatch, getState }) => {
    return new Promise((resolve, reject) => {
      mainAxios.get(urlConfig.getInvoiceById(id)).then((resp) => {
        const { data } = resp.data;
        const invoice = {
          id: data.id,
          customer: {
            id: data.customerId,
            name: data.customerName,
            phone: data.customerPhone,
            address: data.customerAddress,
          },
          code: '',
          date: data.createdDate,
          customerDebt: data.debt,
          totalCost: data.totalCost,
          deposit: data.deposit,
          rest: data.rest,
          details: data.details.map((e) => {
            return {
              productId: e.productId,
              description: e.description,
              quantity: e.quantity,
              originalPrice: e.originalPrice,
              price: e.price,
              productName: `${e.productName} | ${e.unitName}`,
              totalCost: e.totalCost,
            };
          }),
        };
        dispatch(setInvoice(invoice));
        resolve();
      });
    });
  }
);

export const restoreInvoiceById = createAsyncThunk(
  'invoices/createUpdateInvoice/restoreInvoiceById',
  (id, { dispatch, getState }) => {
    return new Promise((resolve, reject) => {
      mainAxios.post(urlConfig.restoreInvoiceById(id)).then((resp) => {
        dispatch(setMode(constants.NEW_MODE));
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
    setInvoice: (state, action) => {
      state.invoice = action.payload;
    },
    setNewInvoice: (state, action) => {
      state.invoice = {
        customer: null,
        code: '',
        date: new Date(),
        customerDebt: 0.0,
        totalCost: 0.0,
        deposit: 0.0,
        rest: 0.0,
        details: [],
      };
    },
    setMode: (state, action) => {
      state.mode = action.payload;
    },
  },
});
export const { resetState, setCustomers, setNewInvoice, setMode, setProducts, setInvoice } =
  createUpdateInvoiceSlice.actions;
export default createUpdateInvoiceSlice.reducer;
