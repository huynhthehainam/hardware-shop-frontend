import withReducer from 'app/store/withReducer';
import { styled } from '@mui/material/styles';
import FusePageCarded from '@fuse/core/FusePageCarded';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import _ from 'lodash';
import FuseLoading from '@fuse/core/FuseLoading';
import { Tab, Tabs } from '@mui/material';
import { useParams } from 'react-router';
import { useDeepCompareEffect } from '@fuse/hooks';
import { useDispatch, useSelector } from 'react-redux';
import reducer from './store';
import ProductHeader from './ProductHeader';
import BasicInfoTab from './create-update-product-tabs/BasicInfoTab';
import { getProductById, setMode, setNewProduct } from './store/newUpdateProduct';
import ImagesTab from './create-update-product-tabs/ImagesTab';
import PricingTab from './create-update-product-tabs/PricingTab';
import InventoryTab from './create-update-product-tabs/InventoryTab';
import constants from './constants';

const Root = styled(FusePageCarded)(({ theme }) => ({
  '& .FusePageCarded-header': {
    minHeight: 72,
    height: 72,
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      minHeight: 136,
      height: 136,
    },
  },
}));

const schema = yup.object().shape({
  name: yup.string().required('ENTER_NAME_VALIDATION'),
  unitId: yup.number().required('ENTER_UNIT_VALIDATION'),
  priceForCustomer: yup.number().required('ENTER_PRICE_VALIDATION'),
  images: yup.array().min(1),
  thumbnailId: yup.string().required(),
});
const CreateOrUpdateProduct = () => {
  const [tab, setTab] = useState(0);
  const dispatch = useDispatch();
  const routeParams = useParams();
  const product = useSelector(({ products }) => products.newUpdateProduct.product);
  const formContext = useForm({
    mode: 'onChange',
    defaultValues: {},
    resolver: yupResolver(schema),
  });
  const { reset, watch, control, onChange, formState } = formContext;
  const form = watch();
  useDeepCompareEffect(() => {
    const { productId } = routeParams;
    if (productId === 'new') {
      dispatch(setMode(constants.NEW_MODE));
      dispatch(setNewProduct());
    } else {
      dispatch(setMode(constants.UPDATE_MODE));
      dispatch(getProductById({ id: productId }));
    }
  }, [routeParams]);
  useEffect(() => {
    console.log('reset');
    reset(product);
  }, [reset, product]);
  if (_.isEmpty(form)) {
    return <FuseLoading />;
  }
  return (
    <FormProvider {...formContext}>
      <Root
        header={<ProductHeader />}
        contentToolbar={
          <Tabs
            value={tab}
            onChange={(event, value) => {
              setTab(value);
            }}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            classes={{ root: 'w-full h-64' }}
          >
            <Tab className="h-64" label="Basic Info" />
            <Tab className="h-64" label="Product Images" />
            <Tab className="h-64" label="Pricing" />
            <Tab className="h-64" label="Inventory" />
          </Tabs>
        }
        content={
          <div className="p-16 sm:p-24 max-w-2xl">
            <div className={tab !== 0 ? 'hidden' : ''}>
              <BasicInfoTab />
            </div>
            <div className={tab !== 1 ? 'hidden' : ''}>
              <ImagesTab />
            </div>
            <div className={tab !== 2 ? 'hidden' : ''}>
              <PricingTab />
            </div>
            <div className={tab !== 3 ? 'hidden' : ''}>
              <InventoryTab />
            </div>
          </div>
        }
        innerScroll
      />
    </FormProvider>
  );
};

export default withReducer('products', reducer)(CreateOrUpdateProduct);
