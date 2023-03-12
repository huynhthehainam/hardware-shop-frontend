import { Autocomplete, TextField, CircularProgress, InputAdornment } from '@mui/material';
import { useEffect, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { closeDialog, openDialog } from 'app/store/fuse/dialogSlice';
import { createCustomer, getCustomers } from '../store/createUpdateInvoiceSlice';
import constants from '../constants';
import { CreateUpdateCustomerDialog } from '../../shared-components';

export default () => {
  const [isCustomersLoading, setIsCustomersLoading] = useState(true);
  const formContext = useFormContext();
  const { control, setValue, getValues } = formContext;
  const dispatch = useDispatch();
  const customers = useSelector(({ invoices }) => invoices.createUpdateInvoice.customers);
  const shop = useSelector(({ auth }) => auth.user.shop);

  const onCustomerCreated = () => {
    dispatch(getCustomers()).then(() => {
      setIsCustomersLoading(false);
    });
  };
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
                label += ` | ${item.phonePrefix}${item.phone}`;
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
                filteredOptions.push({
                  id: 0,
                  inputValue,
                  name: `${t('ADD_BUTTON')} "${inputValue}"`,
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
                    children: (
                      <CreateUpdateCustomerDialog
                        customer={{
                          id: 0,
                          address: '',
                          name: newValue.inputValue,
                          phone: '',
                          isFamiliar: false,
                        }}
                        createCustomer={(data) => {
                          dispatch(createCustomer(data)).then(() => {
                            dispatch(closeDialog());
                            setIsCustomersLoading(true);
                            dispatch(getCustomers()).then(() => {
                              setIsCustomersLoading(false);
                            });
                          });
                        }}
                      />
                    ),
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
