import { closeDialog } from 'app/store/fuse/dialogSlice';
import * as yup from 'yup';
import { TextField } from '@mui/material';

import { Controller, FormProvider, useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { createProductCategory } from 'custom-axios/commonRequest';

const schema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
});
export default (props) => {
  const dispatch = useDispatch();
  const { category, onCreated } = props;
  const { t } = useTranslation('common');

  const formContext = useForm({
    mode: 'onChange',
    defaultValues: {},
    resolver: yupResolver(schema),
  });
  const {
    control,
    formState: { errors },
    setValue,
    reset,
    watch,
    getValues,
  } = formContext;

  useEffect(() => {
    console.log('reset');
    reset({
      name: category.name,
      description: category.description,
    });
  }, [reset, category]);

  return (
    <FormProvider {...formContext}>
      <DialogTitle id="alert-dialog-title">{t('CREATE_PRODUCT_CATEGORY_TITLE')}</DialogTitle>
      <DialogContent>
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
          render={({ field }) => {
            return (
              <TextField
                {...field}
                className="mt-8 mb-16"
                error={!!errors.description}
                label={t('DESCRIPTION_LABEL')}
                id="address"
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
            console.log('daat', data);
            createProductCategory(data).then(() => {
              dispatch(closeDialog());

              if (onCreated) {
                onCreated();
              }
            });
          }}
          color="secondary"
        >
          {t('SAVE_BUTTON')}
        </Button>
      </DialogActions>
    </FormProvider>
  );
};
