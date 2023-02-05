import { lazy } from 'react';

const OrdersAppConfig = {
  settings: {
    layout: {},
  },
  routes: [
    {
      path: '/apps/orders',
      component: lazy(() => import('./Orders')),
    },
  ],
};

export default OrdersAppConfig;
