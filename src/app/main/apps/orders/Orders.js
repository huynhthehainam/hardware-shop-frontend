import FusePageCarded from '@fuse/core/FusePageCarded';
import { styled } from '@mui/styles';
import withReducer from 'app/store/withReducer';
import reducer from './store';
import OrdersHeader from './OrdersHeader';
import OrdersTable from './OrdersTable';

const Root = styled(FusePageCarded)(({ theme }) => ({
  '& .FusePageCarded-header': {
    minHeight: 72,
    height: 72,
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      minHeight: 136,
      height: 136,
    },
  },
  '& .FusePageCarded-content': {
    display: 'flex',
  },
  '& .FusePageCarded-contentCard': {
    overflow: 'hidden',
  },
}));

function Orders() {
  return <Root header={<OrdersHeader />} content={<OrdersTable />} innerScroll />;
}

export default withReducer('orders', reducer)(Orders);
