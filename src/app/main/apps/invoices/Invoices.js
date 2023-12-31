import withReducer from 'app/store/withReducer';
import { styled } from '@mui/material/styles';
import FusePageCarded from '@fuse/core/FusePageCarded';
import reducer from './store';
import InvoicesHeader from './InvoicesHeader';
import InvoicesTable from './InvoicesTable';

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

const Invoices = () => {
  return <Root header={<InvoicesHeader />} content={<InvoicesTable />} innerScroll />;
};

export default withReducer('invoices', reducer)(Invoices);
