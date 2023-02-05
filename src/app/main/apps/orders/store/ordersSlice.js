import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getOrders = createAsyncThunk('eCommerceApp/orders/getOrders', async () => {
  const response = await axios.get('/api/e-commerce-app/orders');
  const data = await response.data;
  return data;
});

export const removeOrders = createAsyncThunk(
  'eCommerceApp/orders/removeOrders',
  async (orderIds, { dispatch, getState }) => {
    await axios.post('/api/e-commerce-app/remove-orders', { orderIds });

    return orderIds;
  }
);

const ordersSlice = createSlice({
  name: 'orders',

  initialState: {
    selectedOrder: null,
    searchText: '',
    orders: [],
  },
  reducers: {
    setSelectedOrder: (state, action) => {
      state.selectedOrder = action.payload;
    },
    setOrdersSearchText: {
      reducer: (state, action) => {
        state.searchText = action.payload;
      },
    },
  },
});

export const { setSelectedOrder, setOrdersSearchText } = ordersSlice.actions;
export default ordersSlice.reducer;
