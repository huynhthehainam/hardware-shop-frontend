import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import mainAxios, { urlConfig } from 'custom-axios';

export const getProducts = createAsyncThunk(
  'products/products/getProducts',
  (params, { dispatch, getState }) => {
    const { searchText, page, rowsPerPage, order } = getState().products.products;

    return new Promise((resolve, reject) => {
      mainAxios
        .get(urlConfig.getProducts, {
          params: {
            search: searchText,
            pageIndex: page,
            pageSize: rowsPerPage,
            sortFieldName: order.id,
            isSortAscending: order.direction === 'asc',
          },
        })
        .then((response) => {
          response.data.data.forEach((item) => {
            item.image = null;
            item.categories = item.productCategoryNames;
          });
          dispatch(setProducts(response.data.data));
          dispatch(getThumbnails());
          dispatch(setTotalRecords(response.data.totalItems));
          resolve(response.data.data);
        });
    });
  }
);
export const getThumbnails = createAsyncThunk(
  'products/products/getThumbnails',
  (params, { dispatch, getState }) => {
    return new Promise((resolve, reject) => {
      const { products } = getState().products.products;
      const promises = products.map(
        (item, index) =>
          new Promise((thumbnailResolve) => {
            const newItem = { ...item };
            const url = urlConfig.getProductThumbnailById(item.id);
            mainAxios
              .get(url, { responseType: 'blob' })
              .then((response) => {
                const { data } = response;
                const blobUrl = URL.createObjectURL(data);
                newItem.image = blobUrl;
                thumbnailResolve(newItem);
              })
              .catch((err) => {
                thumbnailResolve(newItem);
              });
          })
      );
      Promise.all(promises).then((values) => {
        dispatch(setProducts(values));
        resolve();
      });
    });
  }
);

export const removeProducts = createAsyncThunk(
  'products/products/removeProducts',
  (productIds, { dispatch, getState }) => {
    return new Promise((resolve) => {
      const promises = productIds.map((id) => {
        return new Promise((removeProductResolve) => {
          mainAxios
            .post(urlConfig.softlyRemoveProductById(id))
            .then(removeProductResolve(id))
            .catch((e) => {
              removeProductResolve(id);
            });
        });
      });
      Promise.all(promises).then((values) => {
        resolve(values);
      });
    });
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    selectedProduct: null,
    searchText: '',
    products: [],
    rowsPerPage: 20,
    page: 0,
    totalRecords: 0,
    order: {
      id: 'name',
      direction: 'asc',
    },
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },

    setProductsSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setRowsPerPage: (state, action) => {
      state.rowsPerPage = action.payload;
    },
    setTotalRecords: (state, action) => {
      state.totalRecords = action.payload;
    },
    setOrder: (state, action) => {
      state.order = action.payload;
    },
  },
});

export const {
  setProductsSearchText,
  setSelectedProduct,
  setProducts,
  setThumbnails,
  setPage,
  setRowsPerPage,
  setTotalRecords,
  setOrder,
} = productsSlice.actions;

export default productsSlice.reducer;
