import mainAxios, { urlConfig } from 'custom-axios';
import _ from 'lodash';

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

export const getUnitCategories = createAsyncThunk(
  'products/newUpdateProduct/getUnitCategories',
  (params, { dispatch }) => {
    return new Promise((resolve, reject) => {
      mainAxios.get(urlConfig.getUnitCategories).then((resp) => {
        const categories = resp.data.data;
        dispatch(setUnitCategories(categories));
        resolve();
      });
    });
  }
);
export const getUnits = createAsyncThunk(
  'products/newUpdateProduct/getUnits',
  (params, { dispatch, getState }) => {
    return new Promise((resolve, reject) => {
      const categoryId = getState().products.newUpdateProduct.unitCategoryId;
      mainAxios.get(urlConfig.getUnits, { params: { categoryId } }).then((resp) => {
        const units = resp.data.data;
        dispatch(setUnits(units));
        resolve();
      });
    });
  }
);
export const getWarehouses = createAsyncThunk(
  'products/newUpdateProduct/getWarehouses',
  (params, { dispatch }) => {
    return new Promise((resolve, reject) => {
      mainAxios.get(urlConfig.getWarehouses).then((resp) => {
        const warehouses = resp.data.data;
        resolve(warehouses);
      });
    });
  }
);
export const getProductById = createAsyncThunk(
  'products/newUpdateProduct/getProductById',
  (params, { getState, dispatch }) => {
    const { id } = params;
    return new Promise((resolve, reject) => {
      mainAxios.get(urlConfig.getProductDetailById(id)).then((resp) => {
        const product = resp.data.data;

        const { assets } = product;
        const promises = assets.map((asset) => {
          return new Promise((downloadResolve, downloadReject) => {
            const assetId = asset.id;
            const { assetType } = asset;
            mainAxios
              .get(urlConfig.getAssetByProductIdAndAssetId(product.id, assetId), {
                responseType: 'blob',
              })
              .then((downloadResp) => {
                const reader = new FileReader();
                const blob = downloadResp.data;
                const url = URL.createObjectURL(blob);
                reader.onloadend = () => {
                  const newImage = {
                    id: assetId,
                    url,
                    type: 'image',
                    blob,
                    assetType,
                  };
                  downloadResolve(newImage);
                };
                reader.readAsDataURL(blob);
              })
              .catch((err) => {
                downloadReject();
              });
          });
        });
        Promise.all(promises).then((values) => {
          const blobs = values.map((e) => e.blob);
          const newProduct = { ...product };

          newProduct.imageUrls = values;
          newProduct.images = blobs;
          newProduct.thumbnailId = _.find(values, (e) => e.assetType === 'thumbnail')?.id;
          newProduct.warehouses = product.warehouses.map((e) => {
            return { ...e, name: e.warehouseName };
          });
          dispatch(setProduct(newProduct));
          resolve();
        });
      });
    });
  }
);

export const createProduct = createAsyncThunk(
  'products/newUpdateProduct/createProduct',
  (data, { dispatch }) => {
    const { images } = data;
    delete data.images;

    return new Promise((resolve, reject) => {
      mainAxios
        .post(urlConfig.createProduct, data)
        .then((resp) => {
          const { id } = resp.data.data;
          const promises = images.map((image) => {
            return new Promise((uploadResolve, uploadReject) => {
              const formData = new FormData();
              formData.append('image', image);
              formData.append('assetType', image.assetType);
              mainAxios
                .post(urlConfig.uploadProductImageById(id), formData)
                .then((uploadResp) => {
                  uploadResolve(uploadResp);
                })
                .catch((err) => {
                  uploadReject();
                });
            });
          });
          Promise.all(promises).then(() => {
            resolve();
          });
        })
        .catch((e) => {
          reject();
        });
    });
  }
);
export const updateProduct = createAsyncThunk(
  'products/newUpdateProduct/updateProduct',
  (data, { dispatch }) => {
    return new Promise((resolve, reject) => {
      mainAxios.post(urlConfig.updateProductById(data.id), data).then((resp) => {
        resolve();
      });
    });
  }
);
export const selectThumbnail = createAsyncThunk(
  'products/newUpdateProduct/selectThumbnail',
  (params) => {
    return new Promise((resolve, reject) => {
      mainAxios
        .post(urlConfig.selectProductThumbnailById(params.productId), { assetId: params.assetId })
        .then((resp) => {
          resolve();
        });
    });
  }
);
export const uploadImage = createAsyncThunk(
  'products/newUpdateProduct/uploadImage',
  (params, { dispatch }) => {
    const { productId, image } = params;
    return new Promise((resolve, reject) => {
      const formData = new FormData();
      formData.append('image', image);
      formData.append('assetType', image.assetType);
      mainAxios
        .post(urlConfig.uploadProductImageById(productId), formData)
        .then((uploadResp) => {
          const { id } = uploadResp.data.data;
          resolve({ id });
        })
        .catch((err) => {
          reject();
        });
    });
  }
);

const initialState = {
  product: {},
  categories: [],
  unitCategories: [],
  units: [],
  mode: 'new',

  unitCategoryId: null,
};

const newProductSlice = createSlice({
  name: 'newProduct',
  initialState,
  reducers: {
    resetState: (state, action) => {},
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setUnits: (state, action) => {
      state.units = action.payload;
    },
    setUnitCategories: (state, action) => {
      state.unitCategories = action.payload;
    },
    setUnitCategoryId: (state, action) => {
      state.unitCategoryId = action.payload;
    },
    setProduct: (state, action) => {
      state.product = action.payload;
    },
    setMode: (state, action) => {
      state.mode = action.payload;
    },
    setNewProduct: (state, action) => {
      state.product = {
        id: 0,
        name: '',
        categories: [],
        description: '',
        images: [],
        imageUrls: [],
        thumbnailId: null,
        mass: null,
        pricePerMass: null,
        unitId: null,
        unitName: '',
        percentForFamiliarCustomer: null,
        percentForCustomer: null,
        priceForFamiliarCustomer: null,
        priceForCustomer: null,
        warehouses: [],
      };
    },
  },
});
export const {
  resetState,
  setCategories,
  setNewProduct,
  setUnitCategories,
  setUnitCategoryId,
  setUnits,
  setMode,
  setProduct,
} = newProductSlice.actions;

export default newProductSlice.reducer;
