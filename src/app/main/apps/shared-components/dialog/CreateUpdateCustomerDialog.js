import { TextField, InputAdornment, FormControl, Select, MenuItem } from '@mui/material';
import { useEffect, useState } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import { closeDialog } from 'app/store/fuse/dialogSlice';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { getAllCountries } from 'custom-axios';

const schema = yup.object().shape({
  name: yup.string().required(),
  phone: yup.string().length(9),
  address: yup.string(),
  isFamiliar: yup.bool(),
});
const CreateCustomerDialog = (props) => {
  const { customer } = props;
  const dispatch = useDispatch();
  const formContext = useForm({
    mode: 'onChange',
    defaultValues: {},
    resolver: yupResolver(schema),
  });

  const [countries, setCountries] = useState([]);
  const { t } = useTranslation('invoices');
  const { control, formState, setValue, reset, watch, getValues } = formContext;
  const { errors } = formState;
  useEffect(() => {
    getAllCountries().then((data) => {
      setCountries(data);
    });
  }, [setCountries]);
  useEffect(() => {
    console.log('reset form', customer);
    if (customer) {
      reset(customer);
    } else {
      reset({
        id: 0,
        name: '',
        phone: '',
        address: '',
        isFamiliar: false,
      });
    }
  }, [customer, reset]);
  const handleSaveCustomer = () => {
    const data = getValues();
    if (data.id === 0) {
      props.createCustomer(data);
    } else {
      props.updateCustomer(data);
    }
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
                  startAdornment: (
                    <InputAdornment position="start">
                      <FormControl sx={{}}>
                        <Select
                          id="demo-simple-select-readonly"
                          value={1}
                          label="Age"
                          onChange={(e) => {
                            console.log('e', e);
                          }}
                          inputProps={{ 'aria-label': 'Without label' }}
                        >
                          {countries.map((e) => {
                            console.log('item', e);
                            return <MenuItem value={e.id}>{e.name}</MenuItem>;
                          })}
                        </Select>
                      </FormControl>
                    </InputAdornment>
                  ),
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
export default CreateCustomerDialog;
