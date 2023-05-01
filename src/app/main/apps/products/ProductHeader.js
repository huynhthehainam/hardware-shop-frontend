import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useFormContext } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import _ from '@lodash';
import { useTranslation } from 'react-i18next';
import { LoadingButton } from '@mui/lab';
import { useState } from 'react';
import useNotification from '@fuse/hooks/useNotification';
import { createProduct, updateProduct } from './store/newUpdateProductSlice';
import constants from './constants';

function ProductHeader(props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();
  const methods = useFormContext();
  const { formState, watch, getValues, handleSubmit } = methods;
  const { isValid, dirtyFields, errors } = formState;
  const thumbnailId = watch('thumbnailId');
  const images = watch('imageUrls');
  const { t } = useTranslation('products');
  const name = watch('name');
  const theme = useTheme();
  const history = useHistory();
  const mode = useSelector(({ products }) => products.newUpdateProduct.mode);
  const { showNotification } = useNotification();
  function handleSaveProduct() {
    const data = getValues();
    data.categoryIds = data.categories.map((e) => e.id);
    setIsSubmitting(true);
    if (mode === constants.UPDATE_MODE) {
      const validatedData = {
        id: data.id,
        name: data.name,
        description: data.description,
        unitId: data.unitId,
        categoryIds: data.categoryIds,
        mass: data.mass,
        pricePerMass: data.pricePerMass,
        percentForFamiliarCustomer: data.percentForFamiliarCustomer,
        percentForCustomer: data.percentForCustomer,
        hasAutoCalculatePermission: data.hasAutoCalculatePermission,
        priceForFamiliarCustomer: data.priceForFamiliarCustomer,
        priceForCustomer: data.priceForCustomer,

        warehouses: data.warehouses.map((e) => {
          return { warehouseId: e.warehouseId, quantity: parseFloat(e.quantity) };
        }),
      };
      dispatch(updateProduct(validatedData)).then((resp) => {
        showNotification({
          translation: 'UPDATE_SUCCESSFULLY',
          options: { variant: 'success' },
        });

        setIsSubmitting(false);
        history.push({ pathname: '/apps/products' });
      });
    } else {
      const validatedData = {
        name: data.name,
        description: data.description,
        unitId: data.unitId,
        categoryIds: data.categoryIds,
        mass: data.mass,
        pricePerMass: data.pricePerMass,
        percentForFamiliarCustomer: data.percentForFamiliarCustomer,
        percentForCustomer: data.percentForCustomer,
        hasAutoCalculatePermission: data.hasAutoCalculatePermission,
        priceForFamiliarCustomer: data.priceForFamiliarCustomer,
        priceForCustomer: data.priceForCustomer,
        images: data.images.map((e) => {
          const isThumbnail = e.myId === data.thumbnailId;
          e.assetType = isThumbnail ? constants.THUMBNAIL_ASSET_TYPE : constants.SLIDE_ASSET_TYPE;
          return e;
        }),
        warehouses: data.warehouses.map((e) => {
          return { warehouseId: e.warehouseId, quantity: parseFloat(e.quantity) };
        }),
      };
      dispatch(createProduct(validatedData))
        .then((resp) => {
          setIsSubmitting(false);
          history.push({ pathname: '/apps/products' });
        })
        .catch((err) => {
          setIsSubmitting(false);
        });
    }
  }

  function handleRemoveProduct() {}

  return (
    <div className="flex flex-1 w-full items-center justify-between">
      <div className="flex flex-col items-start max-w-full min-w-0">
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { delay: 0.3 } }}
        >
          <Typography
            className="flex items-center sm:mb-12"
            component={Link}
            role="button"
            to="/apps/products"
            color="inherit"
          >
            <Icon className="text-20">
              {theme.direction === 'ltr' ? 'arrow_back' : 'arrow_forward'}
            </Icon>
            <span className="hidden sm:flex mx-4 font-medium">{t('MANAGE_PRODUCTS')}</span>
          </Typography>
        </motion.div>

        <div className="flex items-center max-w-full">
          <motion.div
            className="hidden sm:flex"
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { delay: 0.3 } }}
          >
            {images.length > 0 && thumbnailId ? (
              <img
                className="w-32 sm:w-48 rounded"
                src={_.find(images, { id: thumbnailId }).url}
                alt={name}
              />
            ) : (
              <img
                className="w-32 sm:w-48 rounded"
                src="assets/images/ecommerce/product-image-placeholder.png"
                alt={name}
              />
            )}
          </motion.div>
          <div className="flex flex-col min-w-0 mx-8 sm:mc-16">
            <motion.div initial={{ x: -20 }} animate={{ x: 0, transition: { delay: 0.3 } }}>
              <Typography className="text-16 sm:text-20 truncate font-semibold">
                {name || t('NEW_PRODUCT_PLACEHOLDER')}
              </Typography>
              <Typography variant="caption" className="font-medium">
                {t('PRODUCT_DETAIL')}
              </Typography>
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div
        className="flex"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
      >
        {mode === constants.UPDATE_MODE && (
          <Button
            className="whitespace-nowrap mx-4"
            variant="contained"
            color="error"
            onClick={handleRemoveProduct}
            startIcon={<Icon className="hidden sm:flex">delete</Icon>}
          >
            {t('REMOVE_BUTTON')}
          </Button>
        )}
        <LoadingButton
          className="whitespace-nowrap mx-4"
          variant="contained"
          loading={isSubmitting}
          color="secondary"
          disabled={_.isEmpty(dirtyFields) || !isValid}
          onClick={handleSaveProduct}
        >
          {t('SAVE_BUTTON')}
        </LoadingButton>
      </motion.div>
    </div>
  );
}

export default ProductHeader;
