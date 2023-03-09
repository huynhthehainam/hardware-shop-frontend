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

export default { getAllCountries };
