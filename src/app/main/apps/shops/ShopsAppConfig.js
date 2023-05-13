import { authRoles } from 'app/auth';
import { lazy } from 'react';
import i18n from 'i18n';
import en from './i18n/en';
import vi from './i18n/vi';

i18n.addResourceBundle('en', 'shops', en);
i18n.addResourceBundle('vi', 'shops', vi);

const ShopsAppConfig = {
  settings: {},
  routes: [
    {
      path: '/apps/shops',
      component: lazy(() => import('./Shops')),
      auth: authRoles.sysAdmin,
    },
  ],
};

export default ShopsAppConfig;
