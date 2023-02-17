import mainAxios, { urlConfig } from 'custom-axios';

const { ExpandRounded } = require('@mui/icons-material');
const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const getCategories = createAsyncThunk(
  'products/newUpdateProduct/getCategories',
  (params, { dispatch, getState }) => {
    return new Promise((resolve, reject) => {
      mainAxios.get(urlConfig.getCategories).then((resp) => {
        const categories = resp.data.data;
        dispatch(setCategories(categories));
        resolve();
      });
    });
  }
);

const initialState = {
  product: {},
  categories: [],
};

const newProductSlice = createSlice({
  name: 'newProduct',
  initialState,
  reducers: {
    resetState: (state, action) => {},
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setNewProduct: (state, action) => {
      state.product = {
        id: 0,
        name: '',
        categories: [],
        description: '',
        images: [],
        imageUrls: [],
        thumbnailId: '',
      };
    },
  },
});
export const { resetState, setCategories, setNewProduct } = newProductSlice.actions;

export default newProductSlice.reducer;
