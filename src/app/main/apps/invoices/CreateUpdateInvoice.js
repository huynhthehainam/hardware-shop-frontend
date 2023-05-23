import { styled } from '@mui/material/styles';
import FusePageCarded from '@fuse/core/FusePageCarded';
import { Controller, FormProvider, useFieldArray, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';

import { useParams } from 'react-router';
import _ from 'lodash';
import withReducer from 'app/store/withReducer';
import { useDeepCompareEffect } from '@fuse/hooks';
import * as yup from 'yup';
import FuseLoading from '@fuse/core/FuseLoading';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import {
  Autocomplete,
  Box,
  Button,
  CircularProgress,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import { closeDialog, openDialog } from 'app/store/fuse/dialogSlice';
import { createCustomer } from 'custom-axios/commonRequest';
import reducer from './store';
import constants from './constants';
import {
  getCustomers,
  getInvoiceById,
  getProducts,
  setMode,
  setNewInvoice,
} from './store/createUpdateInvoiceSlice';
import CreateUpdateInvoiceHeader from './CreateUpdateInvoiceHeader';
import { CreateUpdateCustomerDialog } from '../shared-components';
import Detail from './InvoiceDetail';

const Root = styled(FusePageCarded)(({ theme }) => ({
  '& .FusePageCarded-header': {
    minHeight: 72,
    height: 72,
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      minHeight: 96,
      height: 96,
    },
  },
}));
const schema = yup.object().shape({
  customer: yup.object().required(),
  details: yup.array().min(1),
});
const CreateUpdateInvoice = () => {
  const [tab, setTab] = useState(0);
  const { t } = useTranslation('invoices');
  const invoice = useSelector(({ invoices }) => invoices.createUpdateInvoice.invoice);
  const routeParams = useParams();
  const products = useSelector(({ invoices }) => invoices.createUpdateInvoice.products);
  const unitT = useTranslation('units').t;
  const shop = useSelector(({ auth }) => auth.user.shop);
  const [isCustomersLoading, setIsCustomersLoading] = useState(true);
  const mode = useSelector(({ invoices }) => invoices.createUpdateInvoice.mode);
  const customers = useSelector(({ invoices }) => invoices.createUpdateInvoice.customers);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isProductsLoading, setIsProductsLoading] = useState(true);
  const dispatch = useDispatch();
  useDeepCompareEffect(() => {
    const { invoiceId } = routeParams;

    if (invoiceId === 'new') {
      dispatch(setMode(constants.NEW_MODE));
      dispatch(setNewInvoice());
    } else {
      dispatch(setMode(constants.REVIEW_MODE));
      console.log('get invoice', invoiceId);
      dispatch(getInvoiceById(invoiceId));
    }
  }, [routeParams]);
  const formContext = useForm({
    mode: 'onChange',
    defaultValues: {},
    resolver: yupResolver(schema),
  });
  const { watch, reset, control, formState, setValue, getValues, register } = formContext;
  const { append, remove, fields } = useFieldArray({ control, name: 'details' });
  const { errors } = formState;
  useEffect(() => {
    reset(invoice);
  }, [reset, invoice]);
  useEffect(() => {
    dispatch(getCustomers()).then(() => {
      setIsCustomersLoading(false);
    });
    dispatch(getProducts()).then(() => {
      setIsProductsLoading(false);
    });
  }, [dispatch]);
  const addDetailRow = (product, isFamiliar) => {
    if (product) {
      console.log('selected product', product);
      append({
        productId: product.id,
        inventoryNumber: product.inventoryNumber,
        description: '',
        quantity: 0,
        originalPrice: product.originalPrice ?? 0,
        price:
          isFamiliar && product.priceForFamiliarCustomer
            ? product.priceForFamiliarCustomer
            : product.priceForCustomer,
        productName: `${product.name} | ${unitT(product.unitName.toUpperCase())}`,
        totalCost: 0.0,
      });
      setSelectedProduct(null);
    }
  };
  const form = watch();
  const customer = watch('customer');
  const handleRemoveRow = (index) => {
    remove(index);
  };
  if (_.isEmpty(form)) {
    return <FuseLoading />;
  }
  return (
    <FormProvider {...formContext}>
      <Root
        innerScroll
        header={<CreateUpdateInvoiceHeader />}
        content={
          <div className="p-16 sm:p-24 w-full">
            <div className="flex flex-col sm:flex-row w-full items-center sm:space-x-16">
              <Controller
                name="customer"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Autocomplete
                    loading={isCustomersLoading}
                    disabled={mode === constants.REVIEW_MODE}
                    className="mt-8 mb-16"
                    disablePortal
                    fullWidth
                    getOptionLabel={(item) => {
                      if (item.id > 0) {
                        let label = item.name;
                        if (item.phone) {
                          label += ` | ${item.phonePrefix}${item.phone}`;
                        } else if (item.address) {
                          label += ` | ${item.address}`;
                        }
                        label += ` | ${
                          item.isFamiliar ? t('FAMILIAR_CUSTOMER') : t('PASSERSBY_CUSTOMER')
                        }`;
                        return label;
                      }
                      return item.name;
                    }}
                    filterOptions={(options, state) => {
                      console.log('state', state);
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
                                  createCustomer(data).then((createdData) => {
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
                              {isCustomersLoading ? (
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
                      startAdornment: (
                        <InputAdornment position="start">{shop.cashUnitName}</InputAdornment>
                      ),
                    }}
                    variant="outlined"
                    fullWidth
                  />
                )}
              />
            </div>

            <div className="flex flex-col sm:flex-row w-full sm:space-x-16">
              {mode !== constants.REVIEW_MODE && (
                <Button
                  className="whitespace-nowrap mt-8 mb-16 sm:w-1/4 w-full"
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    const totalCost = getValues('totalCost');

                    const customerDebt = getValues('customerDebt');
                    const value = totalCost;
                    setValue('deposit', value);
                    const rest = totalCost + customerDebt - value;
                    setValue('rest', rest);
                  }}
                >
                  {t('PAY_ALL_BUTTON')}
                </Button>
              )}
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
                      startAdornment: (
                        <InputAdornment position="start">{shop.cashUnitName}</InputAdornment>
                      ),
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
                      startAdornment: (
                        <InputAdornment position="start">{shop.cashUnitName}</InputAdornment>
                      ),
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
                      startAdornment: (
                        <InputAdornment position="start">{shop.cashUnitName}</InputAdornment>
                      ),
                    }}
                    variant="outlined"
                    fullWidth
                  />
                )}
              />
            </div>
            {customer && (
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
                      <img
                        loading="lazy"
                        width="20"
                        src={item.thumbnail}
                        srcSet={item.thumbnail}
                        alt=""
                      />
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
                            {isProductsLoading ? (
                              <CircularProgress color="inherit" size={20} />
                            ) : null}
                            {params.InputProps.endAdornment}
                          </>
                        ),
                      }}
                    />
                  )}
                />
                {mode !== constants.REVIEW_MODE && (
                  <Button
                    className="ml-8 mt-8 mb-16 flex flex-col"
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      addDetailRow(selectedProduct, true);
                    }}
                  >
                    <Typography>{t('ADD_FAMILIAR_CUSTOMER_PRICE_BUTTON')}</Typography>
                    <Typography>
                      {shop.cashUnitName}{' '}
                      {selectedProduct && selectedProduct.priceForFamiliarCustomer
                        ? selectedProduct.priceForFamiliarCustomer.toLocaleString()
                        : 0}
                    </Typography>
                  </Button>
                )}
                {mode !== constants.REVIEW_MODE && (
                  <Button
                    className="ml-8 mt-8 mb-16 flex flex-col"
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      addDetailRow(selectedProduct, false);
                    }}
                  >
                    <Typography>{t('ADD_CUSTOMER_PRICE_BUTTON')}</Typography>
                    <Typography>
                      {shop.cashUnitName}{' '}
                      {selectedProduct && selectedProduct.priceForCustomer
                        ? selectedProduct.priceForCustomer.toLocaleString()
                        : 0}
                    </Typography>
                  </Button>
                )}
              </div>
            )}
            {fields.map((item, index) => (
              <Detail key={index} index={index} handleRemoveRow={handleRemoveRow} />
            ))}
          </div>
        }
      />
    </FormProvider>
  );
};

export default withReducer('invoices', reducer)(CreateUpdateInvoice);
