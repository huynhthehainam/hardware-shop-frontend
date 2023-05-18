import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import InputAdornment from '@mui/material/InputAdornment';
import { useDispatch, useSelector } from 'react-redux';

import { Box } from '@mui/system';
import { openDialog } from 'app/store/fuse/dialogSlice';
import {
  getCategories,
  getUnitCategories,
  getUnits,
  setUnitCategoryId,
} from '../store/newUpdateProductSlice';
import { CreateUpdateProductCategoryDialog } from '../../shared-components';

const {
  TextField,
  Autocomplete,
  Select,
  MenuItem,
  CircularProgress,
  FormControl,
  InputLabel,
} = require('@mui/material');
const { Controller, useFormContext } = require('react-hook-form');

function BasicInfoTab() {
  const formContext = useFormContext();
  const dispatch = useDispatch();
  const { t } = useTranslation('products');
  const { control, formState, setValue } = formContext;
  const { errors } = formState;
  const categories = useSelector(({ products }) => products.newUpdateProduct.categories);
  const unitCategories = useSelector(({ products }) => products.newUpdateProduct.unitCategories);
  const units = useSelector(({ products }) => products.newUpdateProduct.units);
  const unitCategoryId = useSelector(({ products }) => products.newUpdateProduct.unitCategoryId);

  const [isProductCategoriesLoading, setIsProductCategoriesLoading] = useState(true);
  const [isUnitCategoriesLoading, setIsUnitCategoriesLoading] = useState(true);
  const [isUnitLoading, setIsUnitLoading] = useState(true);
  useEffect(() => {
    dispatch(getCategories()).then(() => {
      setIsProductCategoriesLoading(false);
    });
    dispatch(getUnitCategories()).then(() => {
      setIsUnitCategoriesLoading(false);
    });
    dispatch(getUnits()).then(() => {
      setIsUnitLoading(false);
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
              helperText={t(errors?.name?.message)}
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
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth className="mt-8 mb-16">
          <InputLabel id="unitCategoryLabel">{t('UNIT_CATEGORY_LABEL')}</InputLabel>
          <Select
            labelId="unitCategoryLabel"
            value={unitCategoryId}
            label={t('UNIT_CATEGORY_LABEL')}
            endAdornment={
              isUnitCategoriesLoading ? (
                <InputAdornment position="end">
                  <CircularProgress size={20} />
                </InputAdornment>
              ) : null
            }
            onChange={(e) => {
              setValue('unitId', null);
              setIsUnitLoading(true);
              dispatch(setUnitCategoryId(e.target.value));
              dispatch(getUnits()).then(() => {
                setIsUnitLoading(false);
              });
            }}
          >
            {unitCategories.map((e) => (
              <MenuItem value={e.id} key={`unitCategory-${e.id}`}>
                {e.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Controller
        name="unitId"
        control={control}
        render={({ field }) => (
          <Box sx={{ minWidth: 120 }}>
            <FormControl required fullWidth className="mt-8 mb-16">
              <InputLabel id="unitLabel">{t('UNIT_LABEL')}</InputLabel>
              <Select
                labelId="unitLabel"
                {...field}
                endAdornment={
                  isUnitLoading ? (
                    <InputAdornment position="end">
                      <CircularProgress size={20} />
                    </InputAdornment>
                  ) : null
                }
                {...field}
                label={t('UNIT_LABEL')}
              >
                {units.map((e) => (
                  <MenuItem value={e.id} key={`unit-${e.id}`}>
                    {e.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        )}
      />

      <Controller
        name="categories"
        control={control}
        defaultValue={[]}
        render={({ field: { onChange, value } }) => (
          <Autocomplete
            loading={isProductCategoriesLoading}
            className="mt-8 mb-16"
            multiple
            getOptionLabel={(item) => {
              return item.name;
            }}
            isOptionEqualToValue={(option, newValue) => {
              return option.id === newValue.id;
            }}
            filterOptions={(options, state) => {
              const filteredOptions = [];
              const { inputValue } = state;
              options.forEach((item) => {
                if (item.name.toLowerCase().includes(inputValue.toLowerCase())) {
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
            options={[...categories]}
            value={value}
            onChange={(event, newValues) => {
              const validatedValues = [];
              newValues.forEach((item) => {
                if (item.id > 0) {
                  validatedValues.push(item);
                }
              });
              onChange(validatedValues);

              if (newValues.length > 0) {
                const lastValue = newValues[newValues.length - 1];
                console.log('lastValue', lastValue);
                if (lastValue.id === 0) {
                  dispatch(
                    openDialog({
                      children: (
                        <CreateUpdateProductCategoryDialog
                          category={{
                            id: 0,
                            description: '',
                            name: lastValue.inputValue,
                          }}
                          onCreated={() => {
                            setIsProductCategoriesLoading(true);
                            dispatch(getCategories()).then(() => {
                              setIsProductCategoriesLoading(false);
                            });
                          }}
                        />
                      ),
                    })
                  );
                }
              }
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder={t('CATEGORIES_PLACE_HOLDER')}
                label={t('CATEGORIES_LABEL')}
                variant="outlined"
                inputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <>
                      {isProductCategoriesLoading ? (
                        <CircularProgress color="inherit" size={20} />
                      ) : null}
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
        name="mass"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            label={t('MASS_LABEL')}
            id="pricePerMass"
            InputProps={{
              startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
            }}
            type="number"
            variant="outlined"
            fullWidth
          />
        )}
      />
    </>
  );
}

export default BasicInfoTab;
