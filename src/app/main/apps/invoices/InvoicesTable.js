import { setOrder, setPage, setRowsPerPage } from './store/invoicesSlice';
import InvoicesTableHead from './InvoicesTableHead';

const { default: FuseScrollbars } = require('@fuse/core/FuseScrollbars');
const { Table, TableBody, TableRow, TablePagination } = require('@mui/material');
const { useState } = require('react');
const { useSelector, useDispatch } = require('react-redux');

const InvoicesTable = () => {
  const [selected, setSelected] = useState([]);
  const data = useSelector(({ invoices }) => invoices.invoices.data);
  const page = useSelector((state) => state.invoices.invoices.page);
  const totalRecords = useSelector((state) => state.invoices.invoices.totalRecords);
  const rowsPerPage = useSelector((state) => state.invoices.invoices.rowsPerPage);
  const dispatch = useDispatch();
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
              return <TableRow className="h-72 cursor-pointer" />;
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
