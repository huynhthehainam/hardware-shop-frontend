import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import mainAxios, { urlConfig } from 'custom-axios';

export const getProducts = createAsyncThunk(
  'products/getProducts',
  ({ search }, { dispatch, getState }) => {
    console.log('get products', search);
    return new Promise((resolve, reject) => {
      mainAxios
        .get(urlConfig.getProducts, {
          params: {
            search,
          },
        })
        .then((response) => {
          const thumbnails = [];
          for (const item of response.data.data) {
            thumbnails.push({
              id: item.id,
              url: null,
            });
            item.images = [];
            item.categories = item.productCategoryNames;
          }
          console.log('finish', response.data.data);
          dispatch(setThumbnails(thumbnails));
          dispatch(setProducts(response.data.data));
          resolve(response.data.data);
        });
    });
  }
);
export const getThumbnails = createAsyncThunk(
  'products/getThumbnails',
  (params, { dispatch, getState }) => {
    return new Promise((resolve, reject) => {
      const { thumbnails } = getState().products.products;
      const promises = thumbnails.map(
        (item, index) =>
          new Promise((thumbnailResolve) => {
            const url = urlConfig.getProductThumbnail(item.id);
            mainAxios.get(url, { responseType: 'blob' }).then((response) => {
              const { data } = response;
              const blobUrl = URL.createObjectURL(data);

              thumbnailResolve({
                index,
                url: blobUrl,
              });
            });
          })
      );
      Promise.all(promises).then((values) => {
        dispatch(setThumbnails(values));
        resolve();
      });
    });
  }
);

export const removeProducts = createAsyncThunk(
  'products/removeProducts',
  async (productIds, { dispatch, getState }) => {
    await mainAxios.post('/api/e-commerce-app/remove-products', { productIds });

    return productIds;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: { selectedProduct: null, searchText: '', products: [], thumbnails: [] },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setThumbnails: (state, action) => {
      state.thumbnails = action.payload;
    },
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },

    setProductsSearchText: (state, action) => {
      state.searchText = action.payload;
    },
  },
});

export const { setProductsSearchText, setSelectedProduct, setProducts, setThumbnails } =
  productsSlice.actions;

export default productsSlice.reducer;
