import {
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  InputAdornment,
} from '@mui/material';
import { useEffect } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import Button from '@mui/material/Button';

import FuseLoading from '@fuse/core/FuseLoading';
import { closeDialog } from 'app/store/fuse/dialogSlice';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { getCustomerDetailById } from 'custom-axios/commonRequest';

const schema = yup.object().shape({
  amount: yup.number().required(),
});
export default (props) => {
  const { t } = useTranslation('customers');
  const { customerId, borrowDebt, payBack } = props;
  const dispatch = useDispatch();
  const shop = useSelector(({ auth }) => auth.user.shop);
  const formContext = useForm({
    mode: 'onChange',
    defaultValues: {},
    resolver: yupResolver(schema),
  });
  const { reset, control, watch, getValues } = formContext;
  useEffect(() => {
    getCustomerDetailById(customerId).then((customer) => {
      reset({
        id: customer.id,
        name: customer.name,
        amount: 0,
      });
    });
  }, [customerId, reset]);
  const form = watch();

  if (_.isEmpty(form)) {
    return (
      <>
        <DialogContent>
          <FuseLoading />
        </DialogContent>
      </>
    );
  }
  return (
    <FormProvider {...formContext}>
      <DialogTitle id="alert-dialog-title">
        {t('PAY_DEBT_DIALOG_TITLE', { name: form.name })}
      </DialogTitle>
      <DialogContent>
        <Controller
          name="amount"
          control={control}
          render={({ field }) => {
            console.log('field', field);
            return (
              <TextField
                value={field.value.toLocaleString()}
                inputMode="numeric"
                onChange={(ev) => {
                  let valueStr = ev.target.value;
                  valueStr = valueStr.replaceAll(',', '');
                  let value = parseFloat(valueStr);
                  if (!value) value = 0;
                  field.onChange(value);
                }}
                className="mt-8 mb-16"
                label={t('AMOUNT_LABEL')}
                id="pricePerMass"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">{shop.cashUnitName}</InputAdornment>
                  ),
                }}
                variant="outlined"
                fullWidth
              />
            );
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => dispatch(closeDialog())} color="error">
          {t('CANCEL_BUTTON')}
        </Button>
        <Button
          onClick={() => {
            const data = getValues();
            borrowDebt(data);
          }}
          color="secondary"
        >
          {t('BORROW_BUTTON')}
        </Button>
        <Button
          onClick={() => {
            const data = getValues();
            payBack(data);
          }}
          color="secondary"
        >
          {t('PAY_BACK_BUTTON')}
        </Button>
      </DialogActions>
    </FormProvider>
  );
};
