import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Input from '@mui/material/Input';
import Paper from '@mui/material/Paper';
import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { selectMainTheme } from 'app/store/fuse/settingsSlice';
import { useDebounce } from '@fuse/hooks';
import { useTranslation } from 'react-i18next';
import { closeDialog, openDialog } from 'app/store/fuse/dialogSlice';
import { setSearchText, getCustomers, setPage, createCustomer } from './store/customersSlice';
import { CreateUpdateCustomerDialog } from '../shared-components';

function CustomersHeader() {
  const dispatch = useDispatch();
  const searchText = useSelector((state) => state.customers.customers.searchText);
  const mainTheme = useSelector(selectMainTheme);
  const { t } = useTranslation('customers');
  const debounce = useDebounce((e) => {
    dispatch(setPage(0));
    dispatch(getCustomers());
  }, 500);
  const handleSearchChanged = (ev) => {
    dispatch(setSearchText(ev.target.value ?? ''));
    debounce(ev);
  };
  const handleCreateCustomer = () => {
    dispatch(
      openDialog({
        children: (
          <CreateUpdateCustomerDialog
            createCustomer={(data) => {
              dispatch(createCustomer(data)).then(() => {
                dispatch(closeDialog());
                dispatch(getCustomers());
              });
            }}
          />
        ),
      })
    );
  };
  return (
    <div className="flex flex-1 w-full items-center justify-between">
      <div className="flex items-center">
        <Icon
          component={motion.span}
          initial={{ scale: 0 }}
          animate={{ scale: 1, transition: { delay: 0.2 } }}
          className="text-24 md:text-32"
        >
          perm_contact_calendar
        </Icon>
        <Typography
          component={motion.span}
          initial={{ x: -20 }}
          animate={{ x: 0, transition: { delay: 0.2 } }}
          delay={300}
          className="hidden sm:flex text-16 md:text-24 mx-12 font-semibold"
        >
          {t('CUSTOMERS_HEADER')}
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
              placeholder={t('SEARCH')}
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
          className="whitespace-nowrap mx-4"
          variant="contained"
          color="secondary"
          onClick={handleCreateCustomer}
          startIcon={<Icon className="hidden sm:flex">add</Icon>}
        >
          {t('CREATE_BUTTON')}
        </Button>
      </motion.div>
    </div>
  );
}

export default CustomersHeader;
