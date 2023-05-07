import { useDebounce } from '@fuse/hooks';
import FuseUtils from '@fuse/utils/FuseUtils';
import { TextField, Button, Icon, InputAdornment } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import constants from './constants';

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
      <div className="flex flex-col sm:flex-row w-full items-center sm:space-x-16">
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
        <Controller
          name={`details.${index}.description`}
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              disabled={mode === constants.REVIEW_MODE}
              className="mt-8 mb-16 w-full"
              id="description"
              label={t('DESCRIPTION_LABEL')}
              type="text"
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
    </div>
  );
};
export default Detail;
