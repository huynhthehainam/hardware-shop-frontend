import axios from 'axios';

const mainAxios = axios.create({ baseURL: process.env.REACT_APP_API_URL });
export const urlConfig = {
  login: '/api/auth/login',
  loginByToken: '/api/auth/loginByToken',
  getCurrentUserAvatar: '/api/users/me/getAvatar',
  getProducts: '/api/products',
  getProductThumbnail: (id) => `/api/products/${id}/thumbnail`,
};
export default mainAxios;
