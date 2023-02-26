import axios from 'axios';

const mainAxios = axios.create({ baseURL: process.env.REACT_APP_API_URL });
export const urlConfig = {
  login: '/api/auth/login',
  loginByToken: '/api/auth/loginByToken',
  getCurrentUserAvatar: '/api/users/me/getAvatar',
  getProducts: '/api/products',
  getCategories: '/api/productCategories',
  getUnitCategories: '/api/unitCategories',
  getUnits: '/api/units',
  getWarehouses: '/api/warehouses',
  createProduct: '/api/products',
  convertUnitValueById: (id) => `/api/units/${id}/roundValue`,
  uploadProductImageById: (id) => `/api/products/${id}/uploadImage`,
  getAssetByProductIdAndAssetId: (productId, assetId) =>
    `/api/products/${productId}/assets/${assetId}`,
  getProductDetailById: (id) => `/api/products/${id}`,
  getProductThumbnailById: (id) => `/api/products/${id}/thumbnail`,
  selectProductThumbnailById: (id) => `/api/products/${id}/selectThumbnail`,
  updateProductById: (id) => `/api/products/${id}/update`,
  getCustomers: '/api/customers',
  updateCurrentUserInterfaceConfig: '/api/users/me/updateInterfaceSettings',
};
export default mainAxios;
