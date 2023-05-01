import { useDebounce } from '@fuse/hooks';
import _ from '@lodash';
import FuseUtils from '@fuse/utils/FuseUtils';
import {
  Autocomplete,
  TextField,
  CircularProgress,
  Button,
  Icon,
  Box,
  InputAdornment,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { Controller, useFieldArray, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../store/createUpdateInvoiceSlice';
import constants from '../constants';

const Detail = (props) => {
  const { index } = props;
  const formContext = useFormContext();
  const { control, watch, getValues, setValue } = formContext;
  const { t } = useTranslation('invoices');
  const shop = useSelector(({ auth }) => auth.user.shop);
  const mode = useSelector(({ invoices }) => invoices.createUpdateInvoice.mode);
  const totalCostDebounce = useDebounce((totalCost) => {
    FuseUtils.convertUnitValue(shop.cashUnitId, totalCost).then((newValue) => {
      setValue(`details.${index}.totalCost`, newValue);
      const details = getValues('details');
      let globalCost = 0.0;
      details.forEach((detail) => {
        globalCost += detail.totalCost;
      });
      setValue(`totalCost`, globalCost);
      const deposit = getValues('deposit');
      const customerDebt = getValues('customerDebt');

      const rest = globalCost + customerDebt - deposit;

      setValue('rest', rest);
    });
  }, 500);
  const inventoryNumber = getValues(`details.${index}.inventoryNumber`);
  return (
    <div className="flex w-full">
      <div className="flex flex-col w-1/4">
        <Controller
          control={control}
          name={`details.${index}.productName`}
          render={({ field }) => {
            return (
              <TextField
                disabled
                {...field}
                className="mt-8 mb-16 w-full"
                label={t('PRODUCT_NAME_LABEL')}
                id="productName"
                variant="outlined"
                autoFocus
              />
            );
          }}
        />
        <Controller
          name={`details.${index}.quantity`}
          control={control}
          render={({ field }) => (
            <TextField
              value={field.value.toLocaleString()}
              disabled={mode === constants.REVIEW_MODE}
              onChange={(e) => {
                let valueStr = e.target.value;
                valueStr = valueStr.replaceAll(',', '');
                let value = parseFloat(valueStr);
                if (!value) value = 0;
                if (value > inventoryNumber) {
                  value = 0;
                }
                field.onChange(value);
                const priceStr = getValues(`details.${index}.price`);
                const price = parseFloat(priceStr);
                const quantity = value;
                const totalCost = price * quantity;
                if (totalCost) {
                  totalCostDebounce(totalCost);
                }
              }}
              className="mt-8 mb-16  w-full"
              label={t('QUANTITY_LABEL')}
              id="pricePerMass"
              InputProps={{
                endAdornment:
                  mode === constants.NEW_MODE ? (
                    <InputAdornment position="end">{`< ${inventoryNumber}`}</InputAdornment>
                  ) : undefined,
              }}
              type="number"
              variant="outlined"
            />
          )}
        />
      </div>
      <div className="flex flex-col w-1/4 mx-4">
        <Controller
          name={`details.${index}.price`}
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              value={field.value.toLocaleString()}
              inputMode="numeric"
              disabled={mode === constants.REVIEW_MODE}
              onChange={(ev) => {
                let valueStr = ev.target.value;
                valueStr = valueStr.replaceAll(',', '');
                let value = parseFloat(valueStr);
                if (!value) value = 0;
                field.onChange(value);
                const quantityStr = getValues(`details.${index}.quantity`);
                const quantity = parseFloat(quantityStr);
                const price = value;
                const totalCost = price * quantity;

                if (totalCost) {
                  totalCostDebounce(totalCost);
                }
              }}
              className="mt-8 mb-16 w-full"
              label={t('PRICE_LABEL')}
              id="pricePerMass"
              InputProps={{
                lang: 'en-US',
                startAdornment: (
                  <InputAdornment position="start">{shop.cashUnitName}</InputAdornment>
                ),
              }}
              variant="outlined"
            />
          )}
        />
        <Controller
          name={`details.${index}.totalCost`}
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              value={field.value.toLocaleString()}
              inputMode="numeric"
              disabled
              className="mt-8 mb-16 w-full"
              label={t('TOTAL_COST_LABEL')}
              id="pricePerMass"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">{shop.cashUnitName}</InputAdornment>
                ),
              }}
              variant="outlined"
            />
          )}
        />
      </div>
      <Controller
        name={`details.${index}.description`}
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            disabled={mode === constants.REVIEW_MODE}
            className="mt-8 mb-16 mx-4 flex-1"
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
      {mode !== constants.REVIEW_MODE && (
        <div className="flex flex-col w-1/9 mx-4 items-center justify-center">
          <Button
            className="whitespace-nowrap mx-8 mt-8 mb-16"
            variant="contained"
            color="error"
            onClick={() => {
              props.handleRemoveRow(index);
            }}
            startIcon={<Icon className="hidden sm:flex">delete</Icon>}
          >
            {t('REMOVE_BUTTON')}
          </Button>
        </div>
      )}
    </div>
  );
};
export default () => {
  const formContext = useFormContext();
  const { control, watch } = formContext;
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isProductsLoading, setIsProductsLoading] = useState(true);
  const { append, remove, fields } = useFieldArray({ control, name: 'details' });
  const { t } = useTranslation('invoices');
  const products = useSelector(({ invoices }) => invoices.createUpdateInvoice.products);
  const mode = useSelector(({ invoices }) => invoices.createUpdateInvoice.mode);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts()).then(() => {
      setIsProductsLoading(false);
    });
  }, [dispatch]);
  const handleRemoveRow = (index) => {
    remove(index);
  };
  const customer = watch('customer');
  if (!customer) {
    return (
      <Typography className="text-13 sm:text-20 mb-16" color="textSecondary">
        {t('GO_BACK_BASIC_MSG')}
      </Typography>
    );
  }
  return (
    <div>
      <div className="flex w-full">
        <Autocomplete
          className="mt-8 mb-16 flex-1"
          disablePortal
          disabled={mode === constants.REVIEW_MODE}
          options={[...products]}
          value={selectedProduct}
          onChange={(event, newValue) => {
            setSelectedProduct(newValue);
          }}
          getOptionDisabled={(item) => {
            return item.inventoryNumber <= 0;
          }}
          getOptionLabel={(item) => {
            return `${item.name} (${item.inventoryNumber})`;
          }}
          renderOption={(props, item) => (
            <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
              <img loading="lazy" width="20" src={item.thumbnail} srcSet={item.thumbnail} alt="" />
              {`${item.name} (${item.inventoryNumber})`}
            </Box>
          )}
          loading={isProductsLoading}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder={t('SELECT_PRODUCT_PLACE_HOLDER')}
              label={t('PRODUCT_LABEL')}
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <>
                    {isProductsLoading ? <CircularProgress color="inherit" size={20} /> : null}
                    {params.InputProps.endAdornment}
                  </>
                ),
              }}
            />
          )}
        />
        {mode !== constants.REVIEW_MODE && (
          <Button
            className="whitespace-nowrap mx-8 mt-8 mb-16"
            variant="contained"
            color="primary"
            onClick={() => {
              if (selectedProduct) {
                console.log('select', selectedProduct);
                if (!_.find(fields, (e) => e.productId === selectedProduct.id)) {
                  console.log('selected product', selectedProduct);
                  append({
                    productId: selectedProduct.id,
                    inventoryNumber: selectedProduct.inventoryNumber,
                    description: '',
                    quantity: 0,
                    originalPrice: selectedProduct.originalPrice ?? 0,
                    price:
                      customer.isFamiliar && selectedProduct.priceForFamiliarCustomer
                        ? selectedProduct.priceForFamiliarCustomer
                        : selectedProduct.priceForCustomer,
                    productName: `${selectedProduct.name} | ${selectedProduct.unitName}`,
                    totalCost: 0.0,
                  });
                }
              }
            }}
            startIcon={<Icon className="hidden sm:flex">add</Icon>}
          >
            {t('ADD_BUTTON')}
          </Button>
        )}
      </div>

      {fields.map((item, index) => (
        <Detail key={index} index={index} handleRemoveRow={handleRemoveRow} />
      ))}
    </div>
  );
};
