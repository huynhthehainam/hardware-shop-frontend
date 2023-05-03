import { motion } from 'framer-motion';
import Typography from '@mui/material/Typography';
import FuseLoading from '@fuse/core/FuseLoading';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { getInvoices, setOrder, setPage, setRowsPerPage } from './store/invoicesSlice';
import InvoicesTableHead from './InvoicesTableHead';

const { default: FuseScrollbars } = require('@fuse/core/FuseScrollbars');
const {
  Table,
  TableBody,
  TableRow,
  TablePagination,
  TableCell,
  Checkbox,
} = require('@mui/material');
const { useState, useEffect } = require('react');
const { useSelector, useDispatch } = require('react-redux');

const InvoicesTable = () => {
  const [selected, setSelected] = useState([]);
  const { t } = useTranslation('invoices');
  const [loading, setLoading] = useState(true);
  const data = useSelector(({ invoices }) => invoices.invoices.data);
  const page = useSelector((state) => state.invoices.invoices.page);
  const totalRecords = useSelector((state) => state.invoices.invoices.totalRecords);
  const rowsPerPage = useSelector((state) => state.invoices.invoices.rowsPerPage);
  const dispatch = useDispatch();
  const history = useHistory();
  const order = useSelector(({ invoices }) => invoices.invoices.order);
  function handleSelectAllClick(event) {
    if (event.target.checked) {
      setSelected(data.map((n) => n.id));
      return;
    }
    setSelected([]);
  }
  function handleRequestSort(event, property) {
    const id = property;
    let direction = 'desc';

    if (order.id === property && order.direction === 'desc') {
      direction = 'asc';
    }

    dispatch(
      setOrder({
        direction,
        id,
      })
    );
    dispatch(getInvoices());
  }
  const shop = useSelector(({ auth }) => auth.user.shop);
  console.log('data', data);
  useEffect(() => {
    dispatch(getInvoices()).then(() => {
      setLoading(false);
    });
  }, [dispatch]);
  const handleClick = (row) => {
    history.push({ pathname: `/apps/invoice/${row.id}` });
  };
  function handleCheck(event, id) {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  }

  function handleChangePage(event, value) {
    dispatch(setPage(value));
  }

  function handleChangeRowsPerPage(event) {
    dispatch(setRowsPerPage(event.target.value));
  }
  function handleDeselect() {
    setSelected([]);
  }
  if (loading) {
    return <FuseLoading />;
  }
  if (data.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.1 } }}
        className="flex flex-1 items-center justify-center h-full"
      >
        <Typography color="textSecondary" variant="h5">
          {t('NO_INVOICE_MESSAGE')}
        </Typography>
      </motion.div>
    );
  }
  return (
    <div className="w-full flex flex-col">
      <FuseScrollbars className="flex-grow overflow-x-auto">
        <Table stickyHeader className="min-w-xl" aria-labelledby="tableTitle">
          <InvoicesTableHead
            selectedProductIds={selected}
            order={order}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={data.length}
            onMenuItemClick={handleDeselect}
          />
          <TableBody>
            {data.map((n, index) => {
              const isSelected = selected.indexOf(n.id) !== -1;
              const createdDate = moment.utc(n.createdDate).local().format('YYYY-MM-DD');
              return (
                <TableRow
                  className="h-72 cursor-pointer"
                  hover
                  role="checkbox"
                  aria-checked={isSelected}
                  tabIndex={-1}
                  key={n.id}
                  selected={isSelected}
                  onClick={(event) => handleClick(n)}
                >
                  <TableCell className="w-40 md:w-64 text-center" padding="none">
                    <Checkbox
                      checked={isSelected}
                      onClick={(event) => event.stopPropagation()}
                      onChange={(event) => handleCheck(event, n.id)}
                    />
                  </TableCell>

                  <TableCell className="p-4 md:p-16" component="th" scope="row">
                    {n.customerName}
                  </TableCell>

                  <TableCell className="p-4 md:p-16" component="th" scope="row" align="left">
                    {`${n.customerPhonePrefix ?? ''}${n.customerPhone ?? ''}`}
                  </TableCell>

                  <TableCell className="p-4 md:p-16" component="th" scope="row" align="left">
                    {n.customerAddress}
                  </TableCell>
                  <TableCell className="p-4 md:p-16" component="th" scope="row" align="left">
                    {n.code}
                  </TableCell>
                  <TableCell className="p-4 md:p-16" component="th" scope="row" align="left">
                    {createdDate}
                  </TableCell>
                  <TableCell className="p-4 md:p-16" component="th" scope="row" align="right">
                    {n.totalCost.toLocaleString()}
                    {<span> {shop.cashUnitName} </span>}
                  </TableCell>
                  <TableCell className="p-4 md:p-16" component="th" scope="row" align="right">
                    {n.deposit.toLocaleString()}
                    {<span> {shop.cashUnitName} </span>}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </FuseScrollbars>
      <TablePagination
        className="flex-shrink-0 border-t-1"
        component="div"
        count={totalRecords}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 20]}
        page={page}
        backIconButtonProps={{
          'aria-label': 'Previous Page',
        }}
        nextIconButtonProps={{
          'aria-label': 'Next Page',
        }}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default InvoicesTable;
