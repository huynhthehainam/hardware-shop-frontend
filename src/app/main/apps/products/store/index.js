import products from './productsSlice';

const { combineReducers } = require('@reduxjs/toolkit');

const reducer = combineReducers({ products });
export default reducer;
