import { TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import Icon from '@mui/material/Icon';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import LoadingButton from '@mui/lab/LoadingButton';
import { useState } from 'react';
import FuseUtils from '@fuse/utils/FuseUtils';
import { addNotification } from 'app/fuse-layouts/shared-components/notificationPanel/store/dataSlice';
import NotificationModel from 'app/fuse-layouts/shared-components/notificationPanel/model/NotificationModel';

const { useFormContext, Controller } = require('react-hook-form');

function PricingTab() {
  const dispatch = useDispatch();
  const formContext = useFormContext();
  const { control, formState, setValue, getValues } = formContext;

  const { t } = useTranslation('products');
  const shop = useSelector(({ auth }) => {
    return auth.user.shop;
  });
  const { isValid, dirtyFields, errors } = formState;
  const [isPriceForCustomerCalculating, setIsPriceForCustomerCalculating] = useState(false);
  const [isPriceForFamiliarCustomerCalculating, setIsPriceForFamiliarCustomerCalculating] =
    useState(false);
  function handleCalculateNotification(mass, percent, pricePerMass) {
    if (!mass) {
      dispatch(
        addNotification(
          NotificationModel({
            message: t('ADD_MASS_NOTIFICATION_MSG'),
            options: {
              variant: 'error',
            },
          })
        )
      );
    }
    if (!percent) {
      dispatch(
        addNotification(
          NotificationModel({
            message: t('ADD_PERCENT_NOTIFICATION_MSG'),
            options: {
              variant: 'error',
            },
          })
        )
      );
    }
    if (!pricePerMass) {
      dispatch(
        addNotification(
          NotificationModel({
            message: t('ADD_PRICE_PER_MASS_NOTIFICATION_MSG'),
            options: {
              variant: 'error',
            },
          })
        )
      );
    }
  }
  return (
    <div>
      <Controller
        name="pricePerMass"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            label={t('PRICE_PER_MASS_LABEL')}
            id="pricePerMass"
            InputProps={{
              startAdornment: <InputAdornment position="start">{shop.cashUnitName}</InputAdornment>,
            }}
            type="number"
            variant="outlined"
            fullWidth
          />
        )}
      />
      <Controller
        name="percentForFamiliarCustomer"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            label={t('PERCENT_FOR_FAMILIAR_CUSTOMER_LABEL')}
            id="pricePerMass"
            InputProps={{
              startAdornment: <InputAdornment position="start">%</InputAdornment>,
              endAdornment: (
                <InputAdornment position="end">
                  <LoadingButton
                    onClick={() => {
                      const massStr = getValues('mass');
                      const percentStr = field.value;

                      const pricePerMassStr = getValues('pricePerMass');
                      const mass = parseFloat(massStr);

                      const percent = parseFloat(percentStr);
                      const pricePerMass = parseFloat(pricePerMassStr);
                      if (mass > 0 && percent > 0 && pricePerMass > 0) {
                        setIsPriceForFamiliarCustomerCalculating(true);
                        const newValue = (mass * pricePerMass * (100 + percent)) / 100;
                        FuseUtils.convertUnitValue(shop.cashUnitId, newValue).then(
                          (newValueResp) => {
                            setValue('priceForFamiliarCustomer', newValueResp);
                            setIsPriceForFamiliarCustomerCalculating(false);
                          }
                        );
                      } else {
                        handleCalculateNotification(mass, percent, pricePerMass);
                      }
                    }}
                    endIcon={<Icon fontSize="small">calculate</Icon>}
                    loading={isPriceForFamiliarCustomerCalculating}
                    loadingPosition="end"
                    variant="contained"
                  >
                    {t('CALCULATE_BUTTON')}
                  </LoadingButton>
                </InputAdornment>
              ),
            }}
            type="number"
            variant="outlined"
            fullWidth
          />
        )}
      />
      <Controller
        name="percentForCustomer"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            label={t('PERCENT_FOR_CUSTOMER_LABEL')}
            id="pricePerMass"
            InputProps={{
              startAdornment: <InputAdornment position="start">%</InputAdornment>,
              endAdornment: (
                <InputAdornment position="end">
                  <LoadingButton
                    onClick={() => {
                      const massStr = getValues('mass');
                      const percentStr = field.value;

                      const pricePerMassStr = getValues('pricePerMass');
                      const mass = parseFloat(massStr);

                      const percent = parseFloat(percentStr);
                      const pricePerMass = parseFloat(pricePerMassStr);
                      if (mass > 0 && percent > 0 && pricePerMass > 0) {
                        setIsPriceForCustomerCalculating(true);
                        const newValue = (mass * pricePerMass * (100 + percent)) / 100;
                        FuseUtils.convertUnitValue(shop.cashUnitId, newValue).then(
                          (newValueResp) => {
                            setValue('priceForCustomer', newValueResp);
                            setIsPriceForCustomerCalculating(false);
                          }
                        );
                      } else {
                        handleCalculateNotification(mass, percent, pricePerMass);
                      }
                    }}
                    endIcon={<Icon fontSize="small">calculate</Icon>}
                    loading={isPriceForCustomerCalculating}
                    loadingPosition="end"
                    variant="contained"
                  >
                    {t('CALCULATE_BUTTON')}
                  </LoadingButton>
                </InputAdornment>
              ),
            }}
            type="number"
            variant="outlined"
            fullWidth
          />
        )}
      />
      <Controller
        name="hasAutoCalculatePermission"
        control={control}
        render={({ field: { onChange, value } }) => (
          <FormControlLabel
            className="mt-8 mb-16"
            label={t('HAS_AUTO_CALCULATE_LABEL')}
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

      <Controller
        name="priceForFamiliarCustomer"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            label={t('PRICE_FOR_FAMILIAR_CUSTOMER_LABEL')}
            id="pricePerMass"
            InputProps={{
              startAdornment: <InputAdornment position="start">{shop.cashUnitName}</InputAdornment>,
            }}
            type="number"
            variant="outlined"
            fullWidth
          />
        )}
      />
      <Controller
        name="priceForCustomer"
        control={control}
        render={({ field }) => {
          return (
            <TextField
              {...field}
              className="mt-8 mb-16"
              label={t('PRICE_FOR_CUSTOMER_LABEL')}
              id="priceForCustomer"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">{shop.cashUnitName}</InputAdornment>
                ),
              }}
              type="number"
              variant="outlined"
              autoFocus
              required
              fullWidth
            />
          );
        }}
      />
    </div>
  );
}

export default PricingTab;
