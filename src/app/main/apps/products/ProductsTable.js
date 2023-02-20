import FuseScrollbars from '@fuse/core/FuseScrollbars';
import Checkbox from '@mui/material/Checkbox';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FuseLoading from '@fuse/core/FuseLoading';
import { getProducts, setPage, setRowsPerPage } from './store/productsSlice';
import ProductsTableHead from './ProductsTableHead';

function ProductsTable(props) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.products.products.products);
  const page = useSelector((state) => state.products.products.page);
  const totalRecords = useSelector((state) => state.products.products.totalRecords);
  const rowsPerPage = useSelector((state) => state.products.products.rowsPerPage);
  const [loading, setLoading] = useState(true);
  const shop = useSelector(({ auth }) => auth.user.shop);
  const [selected, setSelected] = useState([]);
  const [order, setOrder] = useState({
    direction: 'asc',
    id: null,
  });

  useEffect(() => {
    dispatch(getProducts({ search: '' })).then(() => {
      setLoading(false);
    });
  }, [dispatch]);

  function handleRequestSort(event, property) {
    const id = property;
    let direction = 'desc';

    if (order.id === property && order.direction === 'desc') {
      direction = 'asc';
    }

    setOrder({
      direction,
      id,
    });
  }

  function handleSelectAllClick(event) {
    if (event.target.checked) {
      setSelected(data.map((n) => n.id));
      return;
    }
    setSelected([]);
  }

  function handleDeselect() {
    setSelected([]);
  }

  function handleClick(item) {
    props.history.push(`/apps/products/${item.id}`);
  }

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
    console.log('page change');
    dispatch(setPage(value));
    dispatch(getProducts());
  }

  function handleChangeRowsPerPage(event) {
    dispatch(setRowsPerPage(event.target.value));
    dispatch(getProducts());
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
          There are no products!
        </Typography>
      </motion.div>
    );
  }
  return (
    <div className="w-full flex flex-col">
      <FuseScrollbars className="flex-grow overflow-x-auto">
        <Table stickyHeader className="min-w-xl" aria-labelledby="tableTitle">
          <ProductsTableHead
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

                  <TableCell
                    className="w-52 px-4 md:px-0"
                    component="th"
                    scope="row"
                    padding="none"
                  >
                    {n.image ? (
                      <img className="w-full block rounded" src={n.image} alt={n.name} />
                    ) : (
                      <img
                        className="w-full block rounded"
                        src="assets/images/ecommerce/product-image-placeholder.png"
                        alt={n.name}
                      />
                    )}
                  </TableCell>

                  <TableCell className="p-4 md:p-16" component="th" scope="row">
                    {n.name}
                  </TableCell>

                  <TableCell className="p-4 md:p-16 truncate" component="th" scope="row">
                    {n.categories.join(', ')}
                  </TableCell>

                  <TableCell className="p-4 md:p-16" component="th" scope="row" align="right">
                    {n.unitName}
                  </TableCell>

                  <TableCell className="p-4 md:p-16" component="th" scope="row" align="right">
                    {n.mass && n.mass.toLocaleString()} {n.mass && <span> Kg </span>}
                  </TableCell>

                  <TableCell className="p-4 md:p-16" component="th" scope="row" align="right">
                    {n.pricePerMass && n.pricePerMass.toLocaleString()}
                    {n.pricePerMass && <span>VND</span>}
                  </TableCell>
                  <TableCell className="p-4 md:p-16" component="th" scope="row" align="right">
                    {n.percentForFamiliarCustomer && n.percentForFamiliarCustomer}
                    {n.percentForFamiliarCustomer && <span>%</span>}
                  </TableCell>
                  <TableCell className="p-4 md:p-16" component="th" scope="row" align="right">
                    {n.percentForCustomer && n.percentForCustomer}
                    {n.percentForCustomer && <span>%</span>}
                  </TableCell>
                  <TableCell className="p-4 md:p-16" component="th" scope="row" align="right">
                    {n.priceForFamiliarCustomer && n.priceForFamiliarCustomer.toLocaleString()}
                    {n.priceForFamiliarCustomer && <span> {shop.cashUnitName} </span>}
                  </TableCell>
                  <TableCell className="p-4 md:p-16" component="th" scope="row" align="right">
                    {n.priceForCustomer && n.priceForCustomer.toLocaleString()}
                    {n.priceForCustomer && <span> {shop.cashUnitName} </span>}
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
}

export default withRouter(ProductsTable);
