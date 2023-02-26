import products from './productsSlice';
import newUpdateProduct from './newUpdateProductSlice';

const { combineReducers } = require('@reduxjs/toolkit');

const reducer = combineReducers({ products, newUpdateProduct });
export default reducer;
