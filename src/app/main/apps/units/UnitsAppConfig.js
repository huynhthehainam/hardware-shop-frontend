import { authRoles } from 'app/auth';
import { lazy } from 'react';
import i18n from 'i18n';
import en from './i18n/en';
import vi from './i18n/vi';

i18n.addResourceBundle('en', 'units', en);
i18n.addResourceBundle('vi', 'units', vi);
const UnitsAppConfig = {
  settings: {},
  routes: [
    {
      path: '/apps/units',
      component: lazy(() => import('./Units')),
      auth: authRoles.sysAdmin,
    },
  ],
};

export default UnitsAppConfig;
