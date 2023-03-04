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
  createInvoice: '/api/invoices',
  getCurrentShopLogo: '/api/shops/yourShop/Logo',
  getInvoices: '/api/invoices',
  getUserNotifications: '/api/users/me/notifications',
  createUserNotification: '/api/users/me/notifications',
  dismissUserNotificationById: (id) => `/api/users/me/notifications/${id}/dismiss`,
  dismissAllUserNotifications: '/api/users/me/dismissAllNotifications',
  getInvoiceById: (id) => `/api/invoices/${id}`,
};
export default mainAxios;
