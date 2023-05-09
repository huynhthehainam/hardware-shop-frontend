import { useDebounce } from '@fuse/hooks';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { selectMainTheme } from 'app/store/fuse/settingsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getInvoices, setInvoiceSearchText } from './store/invoicesSlice';

const { Icon, Typography, ThemeProvider, Paper, Button, Input } = require('@mui/material');

const InvoicesHeader = () => {
  const { t } = useTranslation('invoices');
  const searchText = useSelector(({ invoices }) => invoices.invoices.searchText);
  const dispatch = useDispatch();
  const debounce = useDebounce((e) => {
    dispatch(getInvoices());
  }, 500);
  const handleSearchChanged = (ev) => {
    dispatch(setInvoiceSearchText(ev.target.value ?? ''));
    debounce(ev);
  };
  const mainTheme = useSelector(selectMainTheme);
  return (
    <div className="flex flex-1 w-full items-center justify-center justify-between">
      <div className="flex items-center">
        <Icon
          component={motion.span}
          initial={{
            scale: 0,
          }}
          animate={{ scale: 1, transition: { delay: 0.2 } }}
          className="text-24 md:text-32"
        >
          receipt_long
        </Icon>
        <Typography
          component={motion.span}
          initial={{ x: -20 }}
          animate={{ x: 0, transition: { delay: 0.2 } }}
          delay={300}
          className="hidden sm:flex text-16 md:text-24 mx-12 font-semibold"
        >
          {t('INVOICES_HEADER')}
        </Typography>
      </div>

      <div className="flex flex-1 items-center justify-center px-12">
        <ThemeProvider theme={mainTheme}>
          <Paper
            component={motion.div}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
            className="flex items-center w-full max-w-512 px-8 py-4 rounded-16 shadow"
          >
            <Icon color="action">search</Icon>

            <Input
              placeholder={t('SEARCH_PLACEHOLDER')}
              className="flex flex-1 mx-8"
              disableUnderline
              fullWidth
              value={searchText}
              inputProps={{
                'aria-label': 'Search',
              }}
              onChange={(ev) => handleSearchChanged(ev)}
            />
          </Paper>
        </ThemeProvider>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
      >
        <Button
          component={Link}
          to="/apps/invoice/new"
          className="whitespace-nowrap"
          variant="contained"
          color="secondary"
        >
          <span className="hidden sm:flex">{t('ADD_NEW_INVOICE_BUTTON')}</span>
          <span className="flex sm:hidden">{t('ADD_NEW_BUTTON')}</span>
        </Button>
      </motion.div>
    </div>
  );
};

export default InvoicesHeader;
