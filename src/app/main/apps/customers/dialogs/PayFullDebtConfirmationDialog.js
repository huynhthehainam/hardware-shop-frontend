import { Button, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { closeDialog } from 'app/store/fuse/dialogSlice';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { getCustomers } from '../store/customersSlice';
import { payAllDebt } from '../../../../../custom-axios/commonRequest';

export default (props) => {
  const { t } = useTranslation('customers');
  const dispatch = useDispatch();
  const { customer } = props;
  return (
    <>
      <DialogTitle>{t('PAY_FULL_DEBT_TITLE', { name: customer.name })}</DialogTitle>
      <DialogContent>{t('ARE_YOU_SURE', { name: customer.name })}</DialogContent>
      <DialogActions>
        <Button onClick={() => dispatch(closeDialog())} color="error">
          {t('CANCEL_BUTTON')}
        </Button>
        <Button
          onClick={() => {
            payAllDebt(customer.id).then(() => {
              dispatch(closeDialog());
              dispatch(getCustomers());
            });
          }}
          color="error"
        >
          {t('OK_BUTTON')}
        </Button>
      </DialogActions>
    </>
  );
};
