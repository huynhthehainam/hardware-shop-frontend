import { Autocomplete, TextField, CircularProgress, InputAdornment } from '@mui/material';
import { useEffect, useState } from 'react';
import { Controller, FormProvider, useForm, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import { closeDialog, openDialog } from 'app/store/fuse/dialogSlice';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { getCustomers } from '../store/createUpdateInvoiceSlice';
import constants from '../constants';

const schema = yup.object().shape({
  name: yup.string().required(),
  phone: yup.string().length(9),
  address: yup.string(),
  isFamiliar: yup.bool(),
});
const CreateCustomerDialog = (props) => {
  const { customerName } = props;
  const dispatch = useDispatch();
  const formContext = useForm({
    mode: 'onChange',
    defaultValues: {},
    resolver: yupResolver(schema),
  });
  const { t } = useTranslation('invoices');
  const { control, formState, setValue, reset, watch, getValues } = formContext;
  const { errors } = formState;
  useEffect(() => {
    console.log('reset form', customerName);
    reset({
      name: customerName,
      phone: '',
      address: '',
      isFamiliar: false,
    });
  }, [customerName, reset]);
  const handleSaveCustomer = () => {
    const data = getValues();
    console.log('create customer', data);
  };
  const name = watch('name');
  return (
    <FormProvider {...formContext}>
      <DialogTitle id="alert-dialog-title">{t('CREATE_CUSTOMER_TITLE', { name })}</DialogTitle>
      <DialogContent>
        <Controller
          name="name"
          control={control}
          render={({ field }) => {
            return (
              <TextField
                {...field}
                className="mt-8 mb-16"
                error={!!errors.name}
                required
                label={t('CUSTOMER_NAME_LABEL')}
                autoFocus
                id="name"
                variant="outlined"
                fullWidth
              />
            );
          }}
        />
        <Controller
          name="phone"
          control={control}
          render={({ field }) => {
            return (
              <TextField
                {...field}
                className="mt-8 mb-16"
                error={!!errors.phone}
                required
                label={t('CUSTOMER_PHONE_LABEL')}
                id="phone"
                variant="outlined"
                fullWidth
                InputProps={{
                  startAdornment: <InputAdornment position="start">+84</InputAdornment>,
                }}
              />
            );
          }}
        />
        <Controller
          name="address"
          control={control}
          render={({ field }) => {
            return (
              <TextField
                {...field}
                className="mt-8 mb-16"
                error={!!errors.address}
                required
                label={t('CUSTOMER_ADDRESS_LABEL')}
                id="address"
                variant="outlined"
                fullWidth
              />
            );
          }}
        />
        <Controller
          name="isFamiliar"
          control={control}
          render={({ field: { onChange, value } }) => (
            <FormControlLabel
              className="mt-8 mb-16"
              label={t('CUSTOMER_IS_FAMILIAR_LABEL')}
              control={
                <Switch
                  onChange={(ev) => {
                    onChange(ev.target.checked);
                  }}
                  checked={value}
                  name="hasAutoCalculatePermission"
                />
              }
            />
          )}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => dispatch(closeDialog())} color="error">
          {t('CANCEL_BUTTON')}
        </Button>
        <Button onClick={handleSaveCustomer} color="secondary">
          {t('SAVE_BUTTON')}
        </Button>
      </DialogActions>
    </FormProvider>
  );
};
export default () => {
  const [isCustomersLoading, setIsCustomersLoading] = useState(true);
  const formContext = useFormContext();
  const { control, setValue, getValues } = formContext;
  const dispatch = useDispatch();
  const customers = useSelector(({ invoices }) => invoices.createUpdateInvoice.customers);
  const shop = useSelector(({ auth }) => auth.user.shop);

  useEffect(() => {
    dispatch(getCustomers()).then(() => {
      setIsCustomersLoading(false);
    });
  }, [dispatch]);
  const { t } = useTranslation('invoices');
  const mode = useSelector(({ invoices }) => invoices.createUpdateInvoice.mode);
  return (
    <div>
      <Controller
        name="customer"
        control={control}
        defaultValue={[]}
        render={({ field: { onChange, value } }) => (
          <Autocomplete
            loading={isCustomersLoading}
            disabled={mode === constants.REVIEW_MODE}
            className="mt-8 mb-16"
            disablePortal
            getOptionLabel={(item) => {
              let label = item.name;
              if (item.phone) {
                label += ` | ${item.phone}`;
              } else if (item.address) {
                label += ` | ${item.address}`;
              }
              return label;
            }}
            filterOptions={(options, state) => {
              const filteredOptions = [];
              const { inputValue } = state;
              options.forEach((item) => {
                const query = `${item.name ?? ''}${item.phone ?? ''}${item.address ?? ''}`;
                if (query.toLowerCase().includes(state.inputValue.toLowerCase())) {
                  filteredOptions.push(item);
                }
              });
              if (inputValue !== '' && filteredOptions.length === 0) {
                console.log('add item', inputValue);
                filteredOptions.push({
                  id: 0,
                  inputValue,
                  name: `Add "${inputValue}"`,
                });
              }
              return filteredOptions;
            }}
            isOptionEqualToValue={(option, newValue) => {
              return option.id === newValue.id;
            }}
            options={[...customers]}
            value={value}
            onChange={(event, newValue) => {
              console.log('new customer', newValue);

              if (newValue.id === 0) {
                dispatch(
                  openDialog({
                    children: <CreateCustomerDialog customerName={newValue.inputValue} />,
                  })
                );
              } else {
                setValue('customerDebt', newValue.debt);
                onChange(newValue);
              }
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder={t('SELECT_CUSTOMER_PLACE_HOLDER')}
                label={t('CUSTOMER_LABEL')}
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <>
                      {isCustomersLoading ? <CircularProgress color="inherit" size={20} /> : null}
                      {params.InputProps.endAdornment}
                    </>
                  ),
                }}
              />
            )}
          />
        )}
      />
      <Controller
        name="customerDebt"
        control={control}
        render={({ field }) => (
          <TextField
            disabled
            {...field}
            value={field.value.toLocaleString()}
            className="mt-8 mb-16"
            label={t('DEBT_LABEL')}
            id="pricePerMass"
            InputProps={{
              startAdornment: <InputAdornment position="start">{shop.cashUnitName}</InputAdornment>,
            }}
            variant="outlined"
            fullWidth
          />
        )}
      />
      <Controller
        name="totalCost"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            value={field.value.toLocaleString()}
            disabled
            className="mt-8 mb-16"
            label={t('TOTAL_COST_LABEL')}
            id="pricePerMass"
            InputProps={{
              startAdornment: <InputAdornment position="start">{shop.cashUnitName}</InputAdornment>,
            }}
            variant="outlined"
            fullWidth
          />
        )}
      />
      <Controller
        name="deposit"
        control={control}
        render={({ field }) => (
          <TextField
            value={field.value.toLocaleString()}
            inputMode="numeric"
            disabled={mode === constants.REVIEW_MODE}
            onChange={(ev) => {
              let valueStr = ev.target.value;
              valueStr = valueStr.replaceAll(',', '');
              let value = parseFloat(valueStr);
              if (!value) value = 0;
              field.onChange(value);
              const totalCost = getValues('totalCost');
              const customerDebt = getValues('customerDebt');
              const rest = totalCost + customerDebt - value;
              setValue('rest', rest);
            }}
            className="mt-8 mb-16"
            label={t('DEPOSIT_LABEL')}
            id="pricePerMass"
            InputProps={{
              startAdornment: <InputAdornment position="start">{shop.cashUnitName}</InputAdornment>,
            }}
            variant="outlined"
            fullWidth
          />
        )}
      />
      <Controller
        name="rest"
        control={control}
        render={({ field }) => (
          <TextField
            value={field.value.toLocaleString()}
            inputMode="numeric"
            disabled
            onChange={(e) => {}}
            className="mt-8 mb-16"
            label={t('REST_LABEL')}
            id="pricePerMass"
            InputProps={{
              startAdornment: <InputAdornment position="start">{shop.cashUnitName}</InputAdornment>,
            }}
            variant="outlined"
            fullWidth
          />
        )}
      />
    </div>
  );
};
