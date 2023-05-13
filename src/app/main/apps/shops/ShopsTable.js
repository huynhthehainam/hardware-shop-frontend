import FuseScrollbars from '@fuse/core/FuseScrollbars/FuseScrollbars';
import { Checkbox, Table, TableBody, TableCell, TablePagination, TableRow } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {} from '@mui/icons-material';
import { useHistory } from 'react-router';
import FuseLoading from '@fuse/core/FuseLoading/FuseLoading';
import ShopsTableHead from './ShopsTableHead';
import { getShops, setOrder, setPage, setRowsPerPage } from './store/shopsSlice';

export default (props) => {
  const dispatch = useDispatch();
  const data = useSelector(({ shops }) => shops.shops.shops);
  const [selected, setSelected] = useState([]);
  const order = useSelector(({ shops }) => shops.shops.order);
  const [loading, setLoading] = useState(true);

  const page = useSelector((state) => state.shops.shops.page);
  const totalRecords = useSelector((state) => state.shops.shops.totalRecords);
  const rowsPerPage = useSelector((state) => state.shops.shops.rowsPerPage);
  const history = useHistory();
  function handleSelectAllClick(event) {
    if (event.target.checked) {
      setSelected(data.map((n) => n));
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
    dispatch(getShops());
  }
  function handleDeselect() {
    setSelected([]);
  }
  useEffect(() => {
    console.log('get shops');
    dispatch(getShops()).then(() => {
      setLoading(false);
    });
  }, [dispatch]);
  function handleChangePage(event, value) {
    dispatch(setPage(value));
  }

  function handleChangeRowsPerPage(event) {
    dispatch(setRowsPerPage(event.target.value));
  }
  const handleClick = (row) => {
    console.log('row click');
  };
  function handleCheck(event, shop) {
    console.log('handle check');
    const selectedIndex = selected.indexOf(shop);
    let newSelected = [];
    console.log(selected, shop);

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, shop);
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
  const shop = useSelector(({ auth }) => auth.user.shop);
  if (loading) {
    return <FuseLoading />;
  }
  return (
    <div className="w-full flex flex-col">
      <FuseScrollbars className="flex-grow overflow-x-auto">
        <Table stickyHeader className="min-w-xl" aria-labelledby="tableTitle">
          <ShopsTableHead
            selectedShops={selected}
            order={order}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={data.length}
            onMenuItemClick={handleDeselect}
          />
          <TableBody>
            {data.map((n, index) => {
              const isSelected = selected.indexOf(n) !== -1;

              return (
                <TableRow
                  className="h-72 cursor-pointer"
                  hover
                  role="checkbox"
                  aria-checked={isSelected}
                  tabIndex={-1}
                  key={index}
                  selected={isSelected}
                  onClick={(event) => handleClick(n)}
                >
                  <TableCell className="w-40 md:w-64 text-center" padding="none">
                    <Checkbox
                      checked={isSelected}
                      onClick={(event) => event.stopPropagation()}
                      onChange={(event) => handleCheck(event, n)}
                    />
                  </TableCell>

                  <TableCell className="p-4 md:p-16" component="th" scope="row">
                    {n.name}
                  </TableCell>

                  <TableCell className="p-4 md:p-16" component="th" scope="row" align="left">
                    {n.address}
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
