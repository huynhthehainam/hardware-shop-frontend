import i18n from 'i18n';
import en from './i18n/en';
import vi from './i18n/vi';

const { authRoles } = require('app/auth');
const { lazy } = require('react');

i18n.addResourceBundle('en', 'invoices', en);
i18n.addResourceBundle('vi', 'invoices', vi);

const InvoicesAppConfig = {
  settings: {
    layout: {},
  },
  routes: [
    {
      path: '/apps/invoices',
      component: lazy(() => import('./Invoices')),
      auth: authRoles.shopStaff,
    },
    {
      path: '/apps/invoice/:invoiceId',
      component: lazy(() => import('./CreateUpdateInvoice')),
      auth: authRoles.shopStaff,
    },
  ],
};

export default InvoicesAppConfig;
