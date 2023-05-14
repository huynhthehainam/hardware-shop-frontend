import Icon from '@mui/material/Icon';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useFormContext } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LoadingButton } from '@mui/lab';
import { useState } from 'react';
import useNotification from '@fuse/hooks/useNotification';
import { downloadInvoicePdf } from 'custom-axios/commonRequest';
import { Button } from '@mui/material';
import FuseUtils from '@fuse/utils/FuseUtils';
import { closeDialog, openDialog } from 'app/store/fuse/dialogSlice';
import { AcceptanceDialog } from '../shared-components';
import constants from './constants';
import { createInvoice, restoreInvoiceById } from './store/createUpdateInvoiceSlice';
import PreviewDialog from './dialogs/PreviewDialog';
import DownloadOptionsDialog from './dialogs/DownloadOptionsDialog';

export default () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRestoreSubmitting, setIsRestoreSubmitting] = useState(false);
  const dispatch = useDispatch();
  const formContext = useFormContext();
  const { formState, watch, getValues, handleSubmit } = formContext;
  const { isValid, dirtyFields, errors } = formState;
  const { t } = useTranslation('invoices');
  const customer = watch('customer');
  const theme = useTheme();
  const history = useHistory();
  const shop = useSelector(({ auth }) => auth.user.shop);

  const mode = useSelector(({ invoices }) => invoices.createUpdateInvoice.mode);
  const { showNotification } = useNotification();
  const lang = useSelector(({ i18n }) => i18n.language);
  const handleCreateInvoice = (isAllowedToPrint = false) => {
    const data = getValues();

    setIsSubmitting(true);
    const validatedData = {
      customerId: data.customer.id,
      deposit: data.deposit,
      details: data.details.map((item) => {
        return {
          productId: item.productId,
          quantity: item.quantity,
          price: item.price,
          description: item.description,
          originalPrice: item.originalPrice,
        };
      }),
    };
    console.log('validated data', validatedData);
    dispatch(createInvoice(validatedData))
      .then((resp) => {
        if (isAllowedToPrint) {
          const invoiceId = resp.payload.id;
          downloadInvoicePdf(invoiceId, lang).then((url) => {
            FuseUtils.downloadUrl(url);
            showNotification({
              translation: 'CREATE_SUCCESSFULLY',
              options: { variant: 'success' },
            });
            setIsSubmitting(false);
            history.push('/apps/invoices');
          });
        } else {
          showNotification({
            translation: 'CREATE_SUCCESSFULLY',
            options: { variant: 'success' },
          });
          setIsSubmitting(false);
          history.push('/apps/invoices');
        }
      })
      .catch((e) => {
        setIsSubmitting(false);
      });
  };

  function handleRestoreInvoice() {
    dispatch(
      openDialog({
        maxWidth: 'xs',
        fullWidth: true,
        children: (
          <AcceptanceDialog
            title={t('RESTORE_INVOICE_TITLE')}
            content={t('RESTORE_INVOICE_CONTENT')}
            onAccept={() => {
              const data = getValues();
              setIsRestoreSubmitting(true);
              dispatch(restoreInvoiceById(data.id)).then(() => {
                setIsRestoreSubmitting(false);
              });
              dispatch(closeDialog());
            }}
          />
        ),
      })
    );
  }

  const downloadPdf = () => {
    const data = getValues();
    console.log('shop', shop);
    if (shop.isAllowedToShowInvoiceDownloadOptions) {
      dispatch(
        openDialog({
          maxWidth: 'xs',
          fullWidth: true,
          children: <DownloadOptionsDialog invoice={data} />,
        })
      );
    } else {
      downloadInvoicePdf(data.id, lang, {
        isAllowedToShowCustomerInformation: true,
        isAllowedToShowCustomerDeposit: true,
        isAllowedToShowShopInformation: true,
      }).then((url) => {
        FuseUtils.downloadUrl(url);
      });
    }
  };
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
                {t('NEW_INVOICE_LABEL', { customerName: customer ? customer.name : '' })}
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
        {mode === constants.REVIEW_MODE && (
          <LoadingButton
            className="whitespace-nowrap mx-4"
            variant="contained"
            loading={isRestoreSubmitting}
            color="warning"
            onClick={handleRestoreInvoice}
            startIcon={<Icon className="hidden sm:flex">restore</Icon>}
          >
            {t('RESTORE_BUTTON')}
          </LoadingButton>
        )}
        {mode === constants.REVIEW_MODE && (
          <Button
            className="whitespace-nowrap mx-4"
            variant="contained"
            color="secondary"
            onClick={downloadPdf}
            startIcon={<Icon className="hidden sm:flex">download</Icon>}
          >
            {t('DOWNLOAD_BUTTON')}
          </Button>
        )}
        {(mode === constants.UPDATE_MODE || mode === constants.NEW_MODE) && (
          <LoadingButton
            className="whitespace-nowrap mx-4"
            variant="contained"
            loading={isSubmitting}
            color="secondary"
            disabled={!isValid}
            onClick={() => {
              handleCreateInvoice(false);
            }}
          >
            {t('SAVE_BUTTON')}
          </LoadingButton>
        )}
        {(mode === constants.UPDATE_MODE || mode === constants.NEW_MODE) && (
          <LoadingButton
            className="whitespace-nowrap mx-4"
            variant="contained"
            loading={isSubmitting}
            color="secondary"
            disabled={!isValid}
            onClick={() => {
              handleCreateInvoice(true);
            }}
          >
            {t('SAVE_DOWNLOAD_BUTTON')}
          </LoadingButton>
        )}
        {(mode === constants.UPDATE_MODE || mode === constants.NEW_MODE) && (
          <LoadingButton
            className="whitespace-nowrap mx-4"
            variant="contained"
            loading={isSubmitting}
            color="secondary"
            disabled={!isValid}
            onClick={() => {
              dispatch(
                openDialog({
                  maxWidth: 'lg',
                  fullWidth: true,
                  children: <PreviewDialog formContext={formContext} />,
                })
              );
            }}
          >
            {t('PREVIEW_BUTTON')}
          </LoadingButton>
        )}
      </motion.div>
    </div>
  );
};
