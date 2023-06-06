import FuseUtils from '@fuse/utils/FuseUtils';
import mainAxios from './mainAxios';
import urlConfig from './urlConfig';

export const getAllCountries = () => {
  return new Promise((resolve, reject) => {
    mainAxios.get(urlConfig.getCountries).then((resp) => {
      console.log(resp.data.data);
      const promises = resp.data.data.map((e) => {
        return new Promise((downloadResolve) => {
          mainAxios
            .get(urlConfig.getCountryIconById(e.id), { responseType: 'blob' })
            .then((downloadResp) => {
              const url = URL.createObjectURL(downloadResp.data);
              downloadResolve({ ...e, logoUrl: url });
            });
        });
      });
      Promise.all(promises).then((values) => {
        console.log('values', values);
        resolve(values);
      });
    });
  });
};

export const getCustomerDetailById = (id) => {
  return new Promise((resolve, reject) => {
    mainAxios.get(urlConfig.getCustomerDetailById(id)).then((resp) => {
      resolve(resp.data.data);
    });
  });
};

export const getCustomerDebtHistoriesById = (id) => {
  return new Promise((resolve) => {
    mainAxios.get(urlConfig.getCustomerDebtHistoriesById(id)).then((resp) => {
      resolve(resp.data);
    });
  });
};
export const getCustomerInvoicesById = (id) => {
  return new Promise((resolve) => {
    mainAxios.get(urlConfig.getCustomerInvoicesById(id)).then((resp) => {
      resolve(resp.data);
    });
  });
};

export const getShopsList = (params) => {
  return new Promise((resolve) => {
    mainAxios.get(urlConfig.getShops, { params }).then((resp) => {
      resolve(resp.data);
    });
  });
};
export const createCustomer = (data) => {
  return new Promise((resolve, reject) => {
    const { phone } = data;
    if (!phone || phone.length === 0) {
      data.phone = null;
      data.phoneCountryId = null;
    }
    mainAxios.post(urlConfig.createCustomer, data).then((resp) => {
      resolve(resp.data.data);
    });
  });
};

export const updateCustomer = (params) => {
  return new Promise((resolve, reject) => {
    const { id, data } = params;
    mainAxios.post(urlConfig.updateCustomerById(id), data).then(() => {
      resolve();
    });
  });
};

export const getAllProducts = () => {
  return new Promise((resolve, reject) => {
    mainAxios.get(urlConfig.getProducts).then((resp) => {
      resolve(resp.data.data);
    });
  });
};

export const downloadProductThumbnailById = (id) => {
  return new Promise((resolve) => {
    mainAxios
      .get(urlConfig.getProductThumbnailById(id), { responseType: 'blob' })
      .then((resp) => {
        const blob = resp.data;
        const url = URL.createObjectURL(blob);
        resolve(url);
      })
      .catch(() => {
        resolve(null);
      });
  });
};

export const downloadAssetById = (id) => {
  return new Promise((resolve) => {
    mainAxios
      .get(urlConfig.getAssetById(id), { responseType: 'blob' })
      .then((resp) => {
        const blob = resp.data;
        const url = URL.createObjectURL(blob);
        resolve(url);
      })
      .catch(() => {
        resolve(null);
      });
  });
};

export const getAllCategories = () => {
  return new Promise((resolve, reject) => {
    mainAxios.get(urlConfig.getCategories).then((resp) => {
      resolve(resp.data.data);
    });
  });
};

export const addPricePerMass = (data) => {
  return new Promise((resolve, reject) => {
    mainAxios.post(urlConfig.addPricePerMass, data).then((resp) => {
      resolve();
    });
  });
};

export const createProductCategory = (data) => {
  return new Promise((resolve) => {
    mainAxios.post(urlConfig.createProductCategory, data).then((resp) => {
      resolve();
    });
  });
};

export const payAllDebt = (id) => {
  return new Promise((resolve, reject) => {
    mainAxios.post(urlConfig.payAllDebtById(id)).then((resp) => {
      resolve();
    });
  });
};
export const downloadInvoicePdf = (id, lang, options) => {
  return new Promise((resolve, reject) => {
    const apiLanguage = FuseUtils.generateApiLanguage(lang);
    mainAxios
      .get(urlConfig.getInvoicePdfById(id), {
        responseType: 'blob',
        params: { lang: apiLanguage, ...options },
      })
      .then((resp) => {
        const blob = resp.data;
        const url = URL.createObjectURL(blob);
        resolve(url);
      });
  });
};

export const downloadCustomerInvoicesPdf = (id, lang) => {
  return new Promise((resolve, reject) => {
    const apiLanguage = FuseUtils.generateApiLanguage(lang);
    mainAxios
      .get(urlConfig.getCustomerInvoicesPdfById(id), {
        responseType: 'blob',
        params: { lang: apiLanguage },
      })
      .then((resp) => {
        const blob = resp.data;
        const url = URL.createObjectURL(blob);
        resolve(url);
      });
  });
};
export const removeProductById = (id) => {
  return new Promise((resolve) => {
    mainAxios
      .post(urlConfig.softlyRemoveProductById(id))
      .then((resp) => {
        resolve();
      })
      .catch((err) => {
        resolve();
      });
  });
};
export const downloadCustomersDebtPdf = (lang) => {
  return new Promise((resolve) => {
    const apiLanguage = FuseUtils.generateApiLanguage(lang);
    mainAxios
      .get(urlConfig.getAllDebtsPdf, {
        responseType: 'blob',
        params: {
          lang: apiLanguage,
        },
      })
      .then((resp) => {
        const blob = resp.data;
        const url = URL.createObjectURL(blob);
        resolve(url);
      });
  });
};
export default { getAllCountries };
