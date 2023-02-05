import i18n from 'i18n';
import en from './i18n/en';
import vi from './i18n/vi';

const { lazy } = require('react');

i18n.addResourceBundle('en', 'products', en);
i18n.addResourceBundle('vi', 'products', vi);

const ProductsAppConfig = {
  settings: {
    layout: {},
  },
  routes: [
    {
      path: '/apps/products',
      component: lazy(() => import('./Products')),
    },
  ],
};
export default ProductsAppConfig;
