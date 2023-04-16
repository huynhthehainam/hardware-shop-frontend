import { authRoles } from 'app/auth';
import { lazy } from 'react';

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
