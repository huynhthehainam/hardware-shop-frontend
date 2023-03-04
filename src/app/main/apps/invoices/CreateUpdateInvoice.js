import { styled } from '@mui/material/styles';
import FusePageCarded from '@fuse/core/FusePageCarded';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';

import { useParams } from 'react-router';
import _ from 'lodash';
import withReducer from 'app/store/withReducer';
import { useDeepCompareEffect } from '@fuse/hooks';
import * as yup from 'yup';
import FuseLoading from '@fuse/core/FuseLoading';
import { Tab, Tabs } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import reducer from './store';
import BasicInfoTab from './create-update-invoice-tabs/BasicInfoTab';
import constants from './constants';
import { getInvoiceById, setMode, setNewInvoice } from './store/createUpdateInvoiceSlice';
import DetailsTab from './create-update-invoice-tabs/DetailsTab';
import CreateUpdateInvoiceHeader from './CreateUpdateInvoiceHeader';
import PdfTab from './create-update-invoice-tabs/PdfTab';

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
  customer: yup.object().required(),
  details: yup.array().min(1),
});
const CreateUpdateInvoice = () => {
  const [tab, setTab] = useState(0);
  const { t } = useTranslation('invoices');
  const invoice = useSelector(({ invoices }) => invoices.createUpdateInvoice.invoice);
  const routeParams = useParams();
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
  const { watch, reset } = formContext;
  useEffect(() => {
    reset(invoice);
  }, [reset, invoice]);

  const form = watch();
  if (_.isEmpty(form)) {
    return <FuseLoading />;
  }
  return (
    <FormProvider {...formContext}>
      <Root
        innerScroll
        header={<CreateUpdateInvoiceHeader />}
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
            <Tab className="h-64" label={t('BASIC_INFO_TAB')} />
            <Tab className="h-64" label={t('DETAIL_TAB')} />
            <Tab className="h-64" label={t('PDF_TAB')} />
          </Tabs>
        }
        content={
          <div className="p-16 sm:p-24 max-w-2xl w-full">
            <div className={tab !== 0 ? 'hidden' : ''}>
              <BasicInfoTab />
            </div>
            <div className={tab !== 1 ? 'hidden' : ''}>
              <DetailsTab />
            </div>
            <div className={tab !== 2 ? 'hidden' : ''}>
              <PdfTab
                order={{
                  reference: 'asfasf',
                  date: '2023-02-23 14:14:14',
                  customer: {
                    firstName: 'fas',
                    lastName: 'asf',
                    invoiceAddress: {
                      address: 'asfasf',
                    },
                    phone: 'fsaf',
                    email: 'asfas',
                  },
                  products: [],
                  subtotal: 12,
                  tax: 233,
                  discount: 123,
                  total: 2424,
                }}
              />
            </div>
          </div>
        }
      />
    </FormProvider>
  );
};

export default withReducer('invoices', reducer)(CreateUpdateInvoice);
