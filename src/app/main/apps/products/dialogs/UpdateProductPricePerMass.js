import {
  Autocomplete,
  Button,
  CircularProgress,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputAdornment,
  TextField,
} from '@mui/material';
import { useEffect, useState } from 'react';
import * as yup from 'yup';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { addPricePerMass, getAllCategories } from 'custom-axios/commonRequest';
import { closeDialog } from 'app/store/fuse/dialogSlice';
import _ from 'lodash';

const schema = yup.object().shape({
  categories: yup.array().min(1),
  amount: yup.number().required(),
});
export default (props) => {
  const { onUpdated } = props;
  const [categories, setCategories] = useState([]);
  const [isProductCategoriesLoading, setIsProductCategoriesLoading] = useState(true);
  const { t } = useTranslation('products');
  const dispatch = useDispatch();
  const formContext = useForm({
    mode: 'onChange',
    defaultValues: {},
    resolver: yupResolver(schema),
  });
  useEffect(() => {
    console.log('get categories');
    getAllCategories().then((data) => {
      setCategories(data);
      setIsProductCategoriesLoading(false);
    });
  }, []);

  const { control, getValues, formState } = formContext;
  const { isValid, dirtyFields } = formState;
  const shop = useSelector(({ auth }) => auth.user.shop);
  return (
    <FormProvider {...formContext}>
      <DialogTitle>{t('UPDATE_PRICE_PER_MASS_TITLE')}</DialogTitle>
      <DialogContent>
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
          name="amount"
          control={control}
          render={({ field }) => {
            return (
              <TextField
                value={field.value?.toLocaleString()}
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
            console.log(data);
            const validatedData = {
              categoryIds: data.categories.map((e) => e.id),
              amountOfCash: data.amount,
            };
            addPricePerMass(validatedData).then(() => {
              dispatch(closeDialog());
              if (onUpdated) onUpdated();
            });
          }}
          disabled={_.isEmpty(dirtyFields) || !isValid}
          color="secondary"
        >
          {t('UPDATE_BUTTON')}
        </Button>
      </DialogActions>
    </FormProvider>
  );
};
