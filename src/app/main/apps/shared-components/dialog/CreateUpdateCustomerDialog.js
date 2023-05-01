import { TextField, FormControl, Select, MenuItem, InputAdornment } from '@mui/material';
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
import _ from 'lodash';
import FuseLoading from '@fuse/core/FuseLoading';

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
  }, [setCountries, reset]);

  useEffect(() => {
    if (countries.length > 0)
      if (customer) {
        const newCustomer = { ...customer };
        newCustomer.phoneCountryId = newCustomer.phoneCountryId ?? countries[0].id;
        reset(newCustomer);
      } else {
        reset({
          id: 0,
          name: '',
          phone: '',
          address: '',
          isFamiliar: false,
          phoneCountryId: countries[0].id,
        });
      }
  }, [customer, countries, reset]);
  const handleSaveCustomer = () => {
    const data = getValues();
    console.log('create customer data', data);
    if (data.id === 0) {
      props.createCustomer(data);
    } else {
      props.updateCustomer(data);
    }
  };
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
        {t('CREATE_CUSTOMER_TITLE', { name: form.name })}
      </DialogTitle>
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
        <div className="flex w-full mt-8 mb-16">
          <Controller
            name="phoneCountryId"
            control={control}
            render={({ field }) => {
              return (
                <FormControl className="w-1/5">
                  <Select
                    id="phone-country-select"
                    value={field.value}
                    onChange={(e) => {
                      field.onChange(e.target.value);
                    }}
                  >
                    {countries.map((e, index) => {
                      return (
                        <MenuItem key={e.id} value={e.id}>
                          <img className="max-w-none w-auto h-20" src={e.logoUrl} alt="product" />
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
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
                  className="ml-8 flex-1"
                  error={!!errors.phone}
                  required
                  label={t('CUSTOMER_PHONE_LABEL')}
                  id="phone"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        {_.find(countries, (e) => e.id === form.phoneCountryId).phonePrefix}
                      </InputAdornment>
                    ),
                  }}
                />
              );
            }}
          />
        </div>
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
