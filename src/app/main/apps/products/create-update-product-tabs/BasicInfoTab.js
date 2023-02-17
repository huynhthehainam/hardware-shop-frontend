import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../store/newUpdateProduct';

const { TextField, Autocomplete, Select, MenuItem, CircularProgress } = require('@mui/material');
const { Controller, useFormContext } = require('react-hook-form');

function BasicInfoTab() {
  const formContext = useFormContext();
  const dispatch = useDispatch();
  const { t } = useTranslation('products');
  const { control, formState } = formContext;
  const { errors } = formState;
  const categories = useSelector(({ products }) => products.newUpdateProduct.categories);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    dispatch(getCategories()).then(() => {
      setLoading(false);
    });
  }, [dispatch]);
  return (
    <>
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
              helperText={errors?.name?.message}
              label={t('NAME_LABEL')}
              autoFocus
              id="name"
              variant="outlined"
              fullWidth
            />
          );
        }}
      />
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            id="description"
            label={t('DESCRIPTION_LABEL')}
            type="text"
            multiline
            rows={5}
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="categories"
        control={control}
        defaultValue={[]}
        render={({ field: { onChange, value } }) => (
          <Autocomplete
            loading={loading}
            className="mt-8 mb-16"
            multiple
            getOptionLabel={(item) => {
              return item.name;
            }}
            options={[...categories]}
            value={value}
            onChange={(event, newValue) => {
              onChange(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder={t('CATEGORIES_PLACE_HOLDER')}
                label={t('CATEGORIES_LABEL')}
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <>
                      {loading ? <CircularProgress color="inherit" size={20} /> : null}
                      {params.InputProps.endAdornment}
                    </>
                  ),
                }}
              />
            )}
          />
        )}
      />
    </>
  );
}

export default BasicInfoTab;
