import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Tooltip from '@mui/material/Tooltip';
import TableHead from '@mui/material/TableHead';
import { useTranslation } from 'react-i18next';

const rows = [
  {
    id: 'name',
    align: 'center',
    disablePadding: false,
    translate: 'NAME_LABEL',
    label: 'Name',
    sort: true,
  },
  {
    id: 'phone',
    align: 'center',
    disablePadding: false,
    label: 'Categories',
    translate: 'PHONE_LABEL',
    sort: false,
  },
  {
    id: 'address',
    align: 'center',
    disablePadding: false,
    translate: 'ADDRESS_LABEL',
    sort: true,
  },
  {
    id: 'debt',
    align: 'right',
    disablePadding: false,
    translate: 'DEBT_LABEL',
    sort: true,
  },
  {
    id: 'isFamiliar',
    align: 'center',
    disablePadding: false,
    translate: 'IS_FAMILIAR_LABEL',
    sort: false,
  },
  {
    id: 'actions',
    align: 'center',
    disablePadding: false,
    translate: 'ACTIONS_LABEL',
    sort: false,
  },
];

function CustomersTableHead(props) {
  const { t } = useTranslation('customers');

  const createSortHandler = (row) => (event) => {
    if (row.sort) props.onRequestSort(event, row.id);
  };

  return (
    <TableHead>
      <TableRow className="h-48 sm:h-64">
        {rows.map((row) => {
          return (
            <TableCell
              className="p-4 md:p-16"
              key={row.id}
              align={row.align}
              padding={row.disablePadding ? 'none' : 'normal'}
              sortDirection={props.order.id === row.id ? props.order.direction : false}
            >
              <Tooltip
                title="Sort"
                placement={row.align === 'right' ? 'bottom-end' : 'bottom-start'}
                enterDelay={300}
              >
                <TableSortLabel
                  active={props.order.id === row.id}
                  direction={props.order.id === row.id ? props.order.direction : 'asc'}
                  onClick={createSortHandler(row)}
                  className="font-semibold"
                  hideSortIcon={!row.sort}
                >
                  {t(row.translate ?? '')}
                </TableSortLabel>
              </Tooltip>
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
}

export default CustomersTableHead;
