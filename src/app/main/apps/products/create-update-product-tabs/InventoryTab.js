import { useEffect } from 'react';
import { Controller, useFieldArray, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import constants from '../constants';
import { getWarehouses } from '../store/newUpdateProduct';

const { TextField, Autocomplete, Select, MenuItem, CircularProgress } = require('@mui/material');
const { Inventory } = require('@mui/icons-material');

function WarehouseInventory(props) {
  const formContext = useFormContext();
  const { control, getValues, watch } = formContext;
  const warehouseName = watch(`warehouses.${props.warehouseIndex}.name`);
  const { t } = useTranslation('products');

  return (
    <div>
      <Controller
        name={`warehouses.${props.warehouseIndex}.quantity`}
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            label={t('QUANTITY_OF_WAREHOUSE_LABEL', { name: warehouseName })}
            id={`warehouses.${props.warehouseIndex}.id`}
            type="number"
            variant="outlined"
            fullWidth
            autoFocus
          />
        )}
      />
    </div>
  );
}

function InventoryTab() {
  const formContext = useFormContext();
  const dispatch = useDispatch();
  const { control } = formContext;
  const mode = useSelector(({ products }) => products.newUpdateProduct.mode);

  const { append, remove, fields } = useFieldArray({ control, name: 'warehouses' });
  useEffect(() => {
    if (mode === constants.NEW_MODE) {
      dispatch(getWarehouses()).then((resp) => {
        const { payload } = resp;
        console.log('warehouses', resp);
        payload.forEach((item) => {
          append({
            warehouseId: item.id,
            name: item.name,
            quantity: 0,
          });
        });
      });
    }
  }, [dispatch, append, mode]);
  return (
    <div>
      {fields.map((warehouse, index) => (
        <WarehouseInventory key={warehouse.id} warehouseIndex={index} />
      ))}
    </div>
  );
}

export default InventoryTab;
