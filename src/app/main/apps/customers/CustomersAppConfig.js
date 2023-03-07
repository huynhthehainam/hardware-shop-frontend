import i18n from 'i18n';
import en from './i18n/en';
import vi from './i18n/vi';

const { authRoles } = require('app/auth');

const { lazy } = require('react');

i18n.addResourceBundle('en', 'customers', en);
i18n.addResourceBundle('vi', 'customers', vi);

export default {
  settings: {
    layout: {},
  },
  routes: [
    {
      path: '/apps/customers',
      component: lazy(() => import('./Customers')),
      auth: authRoles.shopAdmin,
    },
  ],
};
