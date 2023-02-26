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
import constants from './constants';

export default () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();
  const methods = useFormContext();
  const { formState, watch, getValues, handleSubmit } = methods;
  const { isValid, dirtyFields, errors } = formState;
  const { t } = useTranslation('invoices');
  const customer = watch('customer');
  const theme = useTheme();
  const history = useHistory();
  const mode = useSelector(({ invoices }) => invoices.createUpdateInvoice.mode);
  function handleSaveProduct() {}

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
            to="/apps/invoices"
            color="inherit"
          >
            <Icon className="text-20">
              {theme.direction === 'ltr' ? 'arrow_back' : 'arrow_forward'}
            </Icon>
            <span className="hidden sm:flex mx-4 font-medium">{t('MANAGE_INVOICES_LABEL')}</span>
          </Typography>
        </motion.div>

        <div className="flex items-center max-w-full">
          <div className="flex flex-col min-w-0 mx-8 sm:mc-16">
            <motion.div initial={{ x: -20 }} animate={{ x: 0, transition: { delay: 0.3 } }}>
              <Typography className="text-16 sm:text-20 truncate font-semibold">
                {customer ? customer.name : t('NEW_INVOICE_LABEL')}
              </Typography>
              <Typography variant="caption" className="font-medium">
                {t('INVOICE_DETAIL')}
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
};
