const urlConfig = {
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
  getAssetById: (id) => `/api/assets/${id}`,
  selectProductThumbnailById: (id) => `/api/products/${id}/selectThumbnail`,
  updateProductById: (id) => `/api/products/${id}/update`,
  getCustomers: '/api/customers',
  updateCurrentUserInterfaceConfig: '/api/users/me/updateInterfaceSettings',
  createInvoice: '/api/invoices',
  getCurrentShopLogo: '/api/shops/yourShop/logo',
  getInvoices: '/api/invoices',
  getUserNotifications: '/api/users/me/notifications',
  createUserNotification: '/api/users/me/notifications',
  dismissUserNotificationById: (id) => `/api/users/me/notifications/${id}/dismiss`,
  dismissAllUserNotifications: '/api/users/me/dismissAllNotifications',
  getInvoiceById: (id) => `/api/invoices/${id}`,
  restoreInvoiceById: (id) => `/api/invoices/${id}/restore`,
  createCustomer: '/api/customers',
  getCountries: '/api/countries',
  getCountryIconById: (id) => `/api/countries/${id}/icon`,
  updateCustomerById: (id) => `/api/customers/${id}/update`,
  getCustomerDetailById: (id) => `/api/customers/${id}`,
  getCustomerDebtHistoriesById: (id) => `/api/customers/${id}/debtHistories`,
  getCustomerInvoicesById: (id) => `/api/customers/${id}/invoices`,
  addPricePerMass: '/api/products/addPricePerMass',
  softlyRemoveProductById: (id) => `/api/products/${id}/softlyDelete`,
  payAllDebtById: (id) => `/api/customers/${id}/payAllDebt`,
  getInvoicePdfById: (id) => `/api/invoices/${id}/pdf`,
  getCustomerInvoicesPdfById: (id) => `/api/customers/${id}/allInvoicesPdf`,
  getAllDebtsPdf: '/api/customers/allDebtsPdf',
  getShops: '/api/shops',
  createProductCategory: '/api/productCategories',
};

export default urlConfig;
