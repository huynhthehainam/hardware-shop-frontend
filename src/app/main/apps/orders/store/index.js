import orders from './ordersSlice';

const { combineReducers } = require('@reduxjs/toolkit');

const reducer = combineReducers({ orders });
export default reducer;
