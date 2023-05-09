import Checkbox from '@mui/material/Checkbox';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Tooltip from '@mui/material/Tooltip';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box } from '@mui/system';
import TableHead from '@mui/material/TableHead';
import { useTranslation } from 'react-i18next';
import { closeDialog, openDialog } from 'app/store/fuse/dialogSlice';
import { removeProductById } from 'custom-axios/commonRequest';
import { AcceptanceDialog } from '../shared-components';
import { getProducts } from './store/productsSlice';

const rows = [
  {
    id: 'image',
    align: 'left',
    disablePadding: true,
    label: '',
    sort: false,
  },
  {
    id: 'name',
    align: 'right',
    disablePadding: false,
    translate: 'NAME_LABEL',
    label: 'Name',
    sort: true,
  },
  {
    id: 'categories',
    align: 'left',
    disablePadding: false,
    label: 'Categories',
    translate: 'CATEGORIES_LABEL',
    sort: false,
  },
  {
    id: 'unit',
    align: 'center',
    disablePadding: false,
    label: 'Unit',
    translate: 'UNIT_LABEL',
    sort: false,
  },
  {
    id: 'mass',
    align: 'right',
    disablePadding: false,
    label: 'Price',
    translate: 'MASS_LABEL',
    sort: true,
  },
  {
    id: 'pricePerMass',
    align: 'right',
    disablePadding: false,
    label: 'Price per mass',
    translate: 'PRICE_PER_MASS_LABEL',
    sort: true,
  },
  {
    id: 'percentForFamiliarCustomer',
    align: 'right',
    disablePadding: false,
    label: 'Percent for familiar customer',
    translate: 'PERCENT_FOR_FAMILIAR_CUSTOMER_LABEL',
    sort: true,
  },
  {
    id: 'percentForCustomer',
    align: 'right',
    disablePadding: false,
    label: 'Percent for familiar customer',
    translate: 'PERCENT_FOR_CUSTOMER_LABEL',
    sort: true,
  },
  {
    id: 'priceForFamiliarCustomer',
    align: 'right',
    disablePadding: false,
    label: 'Price',
    translate: 'PRICE_FOR_FAMILIAR_CUSTOMER_LABEL',
    sort: true,
  },
  {
    id: 'priceForCustomer',
    align: 'right',
    disablePadding: false,
    label: 'Price',
    translate: 'PRICE_FOR_CUSTOMER_LABEL',
    sort: true,
  },
];

function ProductsTableHead(props) {
  const { t } = useTranslation('products');
  const { selectedProducts } = props;
  const numSelected = selectedProducts.length;
  const { onMenuItemClick } = props;
  const [selectedProductsMenu, setSelectedProductsMenu] = useState(null);

  const dispatch = useDispatch();

  const createSortHandler = (row) => (event) => {
    if (row.sort) props.onRequestSort(event, row.id);
  };

  function openSelectedProductsMenu(event) {
    setSelectedProductsMenu(event.currentTarget);
  }

  function closeSelectedProductsMenu() {
    setSelectedProductsMenu(null);
  }
  return (
    <TableHead>
      <TableRow className="h-48 sm:h-64">
        <TableCell padding="none" className="w-40 md:w-64 text-center z-99">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < props.rowCount}
            checked={props.rowCount !== 0 && numSelected === props.rowCount}
            onChange={props.onSelectAllClick}
          />
          {numSelected > 0 && (
            <Box
              className="flex items-center justify-center absolute w-64 top-0 ltr:left-0 rtl:right-0 mx-56 h-64 z-10 border-b-1"
              sx={{
                background: (theme) => theme.palette.background.paper,
              }}
            >
              <IconButton
                aria-owns={selectedProductsMenu ? 'selectedProductsMenu' : null}
                aria-haspopup="true"
                onClick={openSelectedProductsMenu}
                size="large"
              >
                <Icon>more_horiz</Icon>
              </IconButton>
              <Menu
                id="selectedProductsMenu"
                anchorEl={selectedProductsMenu}
                open={Boolean(selectedProductsMenu)}
                onClose={closeSelectedProductsMenu}
              >
                <MenuList>
                  <MenuItem
                    onClick={() => {
                      onMenuItemClick();
                      closeSelectedProductsMenu();
                      dispatch(
                        openDialog({
                          maxWidth: 'xs',
                          fullWidth: true,
                          children: (
                            <AcceptanceDialog
                              title={t('REMOVE_PRODUCTS_DIALOG_TITLE')}
                              content={t('REMOVE_PRODUCTS_CONTENT', {
                                products: selectedProducts.map((e) => e.name).join(', '),
                              })}
                              onAccept={() => {
                                const promises = selectedProducts.map((product) => {
                                  return removeProductById(product.id);
                                });
                                Promise.all(promises).then((values) => {
                                  dispatch(closeDialog());
                                  dispatch(getProducts());
                                });
                              }}
                            />
                          ),
                        })
                      );
                    }}
                  >
                    <ListItemIcon className="min-w-40">
                      <Icon>delete</Icon>
                    </ListItemIcon>
                    <ListItemText primary={t('REMOVE_BUTTON')} />
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          )}
        </TableCell>
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
        }, this)}
      </TableRow>
    </TableHead>
  );
}

export default ProductsTableHead;
