import {
  DialogTitle,
  DialogContent,
  DialogActions,
  TableHead,
  TableCell,
  Tooltip,
  TableSortLabel,
  Table,
  Card,
  TableBody,
  TableRow,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import FuseLoading from '@fuse/core/FuseLoading';

import { closeDialog } from 'app/store/fuse/dialogSlice';
import FuseScrollbars from '@fuse/core/FuseScrollbars';
import { getCustomerDebtHistoriesById, getCustomerDetailById } from 'custom-axios/commonRequest';
import moment from 'moment';

const rows = [
  {
    id: 'createdDate',
    align: 'center',
    disablePadding: false,
    translate: 'CREATED_DATE_LABEL',
  },
  {
    id: 'reason',
    align: 'left',
    disablePadding: false,
    translate: 'REASON_LABEL',
  },

  {
    id: 'amount',
    align: 'right',
    disablePadding: false,
    translate: 'AMOUNT_LABEL',
  },
  {
    id: 'change',
    align: 'right',
    disablePadding: false,
    translate: 'CHANGE_LABEL',
  },
];

export default (props) => {
  const [customer, setCustomer] = useState(null);
  const dispatch = useDispatch();
  const { t } = useTranslation('customers');
  const { customerId } = props;
  const shop = useSelector(({ auth }) => auth.user.shop);
  useEffect(() => {
    getCustomerDetailById(customerId).then((customerResponse) => {
      getCustomerDebtHistoriesById(customerId).then((resp) => {
        customerResponse.debtHistories = resp.data;
        setCustomer(customerResponse);
      });
    });
  }, [customerId]);
  console.log('customer', customer);
  if (!customer) {
    return (
      <>
        <DialogContent>
          <FuseLoading />
        </DialogContent>
      </>
    );
  }
  return (
    <>
      <DialogTitle id="alert-dialog-title">
        {t('DEBT_HISTORY_TITLE', { name: customer.name })}
      </DialogTitle>
      <DialogContent>
        <Card className="w-full flex flex-col" style={{ height: '300px' }}>
          <FuseScrollbars className="flex-grow overflow-x-auto">
            <Table stickyHeader className="min-w-sm" aria-labelledby="tableTitle">
              <TableHead>
                <TableRow className="h-48 sm:h-64">
                  {rows.map((row) => {
                    return (
                      <TableCell
                        className="p-4 md:p-16"
                        key={row.id}
                        align={row.align}
                        padding={row.disablePadding ? 'none' : 'normal'}
                      >
                        <Tooltip
                          title="Sort"
                          placement={row.align === 'right' ? 'bottom-end' : 'bottom-start'}
                          enterDelay={300}
                        >
                          <TableSortLabel className="font-semibold" hideSortIcon>
                            {t(row.translate ?? '')}
                          </TableSortLabel>
                        </Tooltip>
                      </TableCell>
                    );
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {customer.debtHistories.map((n, index) => {
                  const createdDate = moment.utc(n.createdDate).local().format('YYYY-MM-DD');
                  return (
                    <TableRow key={n.id}>
                      <TableCell className="p-4 md:p-16" component="th" scope="row" align="center">
                        {createdDate}
                      </TableCell>
                      <TableCell className="p-4 md:p-16" component="th" scope="row" align="left">
                        {t(n.reason, n.reasonParams)}
                      </TableCell>
                      <TableCell className="p-4 md:p-16" component="th" scope="row" align="right">
                        {n.changeOfDebt.toLocaleString()} <span> {shop.cashUnitName}</span>
                      </TableCell>
                      <TableCell className="p-4 md:p-16" component="th" scope="row" align="right">
                        {n.oldDebt.toLocaleString()} <span>{shop.cashUnitName}</span> -&gt;{' '}
                        {n.newDebt.toLocaleString()} <span>{shop.cashUnitName}</span>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </FuseScrollbars>
        </Card>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => dispatch(closeDialog())} color="error">
          {t('CANCEL_BUTTON')}
        </Button>
      </DialogActions>
    </>
  );
};
