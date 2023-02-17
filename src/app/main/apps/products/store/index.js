import products from './productsSlice';
import newUpdateProduct from './newUpdateProduct';

const { combineReducers } = require('@reduxjs/toolkit');

const reducer = combineReducers({ products, newUpdateProduct });
export default reducer;
