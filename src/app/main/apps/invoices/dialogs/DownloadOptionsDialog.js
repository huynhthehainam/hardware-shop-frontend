import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import {
  DialogContent,
  DialogTitle,
  DialogActions,
  Button,
  FormControl,
  FormControlLabel,
  Checkbox,
  FormHelperText,
} from '@mui/material';
import { closeDialog } from 'app/store/fuse/dialogSlice';
import { downloadInvoicePdf } from 'custom-axios/commonRequest';
import FuseUtils from '@fuse/utils/FuseUtils';

const schema = yup.object().shape({
  isAllowedToShowCustomerInformation: yup.bool().required(),
  isAllowedToShowCustomerDeposit: yup.bool().required(),
  isAllowedToShowShopInformation: yup.bool().required(),
});
export default (props) => {
  const { t } = useTranslation('invoices');
  const { invoice } = props;
  const dispatch = useDispatch();
  const shop = useSelector(({ auth }) => auth.user.shop);
  const formContext = useForm({
    mode: 'onChange',
    defaultValues: {
      isAllowedToShowCustomerInformation: true,
      isAllowedToShowCustomerDeposit: true,
      isAllowedToShowShopInformation: true,
    },
    resolver: yupResolver(schema),
  });
  const { control, getValues, formState } = formContext;
  const { errors } = formState;
  const lang = useSelector(({ i18n }) => i18n.language);

  return (
    <FormProvider {...formContext}>
      <DialogTitle id="alert-dialog-title">
        {t('DOWNLOAD_OPTIONS_TITLE', { customerName: invoice.customer.name })}
      </DialogTitle>
      <DialogContent className="flex flex-col items-start">
        <Controller
          name="isAllowedToShowCustomerInformation"
          control={control}
          render={({ field }) => (
            <FormControl
              className="items-center"
              error={!!errors.isAllowedToShowCustomerInformation}
            >
              <FormControlLabel
                label={t('SHOW_CUSTOMER_INFORMATION_DESC')}
                control={<Checkbox value={field.value} onChange={field.onChange} defaultChecked />}
              />
              <FormHelperText>{errors?.isAllowedToShowCustomerInformation?.message}</FormHelperText>
            </FormControl>
          )}
        />
        <Controller
          name="isAllowedToShowCustomerDeposit"
          control={control}
          render={({ field }) => (
            <FormControl className="items-center" error={!!errors.isAllowedToShowCustomerDeposit}>
              <FormControlLabel
                label={t('SHOW_CUSTOMER_DEPOSIT_DESC')}
                control={<Checkbox value={field.value} onChange={field.onChange} defaultChecked />}
              />
              <FormHelperText>{errors?.isAllowedToShowCustomerDeposit?.message}</FormHelperText>
            </FormControl>
          )}
        />
        <Controller
          name="isAllowedToShowShopInformation"
          control={control}
          render={({ field }) => (
            <FormControl className="items-center" error={!!errors.isAllowedToShowShopInformation}>
              <FormControlLabel
                label={t('SHOW_SHOP_INFORMATION_DESC')}
                control={<Checkbox value={field.value} onChange={field.onChange} defaultChecked />}
              />
              <FormHelperText>{errors?.isAllowedToShowShopInformation?.message}</FormHelperText>
            </FormControl>
          )}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => dispatch(closeDialog())} color="error">
          {t('CANCEL_BUTTON')}
        </Button>

        <Button
          onClick={() => {
            const options = getValues();
            console.log('ok ok ', options);
            downloadInvoicePdf(invoice.id, lang, options).then((url) => {
              FuseUtils.downloadUrl(url);
              dispatch(closeDialog());
            });
          }}
          color="secondary"
        >
          {t('OK_BUTTON')}
        </Button>
      </DialogActions>
    </FormProvider>
  );
};
