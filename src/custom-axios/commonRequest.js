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
export const createCustomer = (data) => {
  return new Promise((resolve, reject) => {
    if (data.phone && data.phone !== '') data.phone = `+84${data.phone}`;
    mainAxios.post(urlConfig.createCustomer, data).then((resp) => {
      resolve();
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

export const payAllDebt = (id) => {
  return new Promise((resolve, reject) => {
    mainAxios.post(urlConfig.payAllDebtById(id)).then((resp) => {
      resolve();
    });
  });
};

export default { getAllCountries };
