import FuseUtils from '@fuse/utils/FuseUtils';
import mainAxios, { urlConfig } from 'custom-axios';
import jwtDecode from 'jwt-decode';

class JwtService extends FuseUtils.EventEmitter {
  init() {
    this.setInterceptors();
    this.handleAuthentication();
  }

  setInterceptors = () => {
    mainAxios.interceptors.response.use(
      (response) => {
        return response;
      },
      (err) => {
        return new Promise((resolve, reject) => {
          if (err.response.status === 401 && err.config && !err.config.__isRetryRequest) {
            // if you ever get an unauthorized response, logout the user
            this.emit('onAutoLogout', 'Invalid access_token');
            this.setSession(null);
          }
          throw err;
        });
      }
    );
  };

  handleAuthentication = () => {
    const accessToken = this.getAccessToken();

    if (!accessToken) {
      this.emit('onNoAccessToken');

      return;
    }

    if (this.isAuthTokenValid(accessToken)) {
      this.setSession(accessToken);
      this.emit('onAutoLogin', true);
    } else {
      this.setSession(null);
      this.emit('onAutoLogout', 'access_token expired');
    }
  };

  createUser = (data) => {
    return new Promise((resolve, reject) => {
      mainAxios.post('/api/auth/register', data).then((response) => {
        if (response.data.user) {
          this.setSession(response.data.access_token);
          resolve(response.data.user);
        } else {
          reject(response.data.error);
        }
      });
    });
  };

  signInWithUsernameAndPassword = (username, password) => {
    return new Promise((resolve, reject) => {
      mainAxios
        .post(urlConfig.login, {
          username,
          password,
        })
        .then((response) => {
          const { data } = response.data;
          this.setSession(data.accessToken);
          const { user } = data;
          mainAxios
            .get(urlConfig.getCurrentUserAvatar, { responseType: 'blob' })
            .then((getAvatarResponse) => {
              console.log(getAvatarResponse.data);
              user.data.photoURL = URL.createObjectURL(getAvatarResponse.data);
              this.convertRole(user);
              resolve(user);
            })
            .catch((e) => {
              resolve(data.user);
            });
        })
        .catch((e) => {
          const { error } = e.response.data;
          console.log(error);
          reject(FuseUtils.convertToStandardError(error));
        });
    });
  };

  convertRole = (user) => {
    user.role = [user.role.toLowerCase()];
    if (user.shop) {
      user.role = [...user.role, `shop-${user.shop.role.toLowerCase()}`];
    }
    console.log('convert role', user);
    return user;
  };

  signInWithToken = () => {
    return new Promise((resolve, reject) => {
      console.log('sign in with token', this.getAccessToken());
      mainAxios
        .post(urlConfig.loginByToken, {
          token: this.getAccessToken(),
        })
        .then((response) => {
          const { data } = response.data;
          this.setSession(data.accessToken);
          let { user } = data;
          console.log('in in', data, user);
          mainAxios
            .get(urlConfig.getCurrentUserAvatar, { responseType: 'blob' })
            .then((getAvatarResponse) => {
              console.log(getAvatarResponse.data);
              user.data.photoURL = URL.createObjectURL(getAvatarResponse.data);
              console.log(user);
              user = this.convertRole(user);
              resolve(user);
            })
            .catch((e) => {
              resolve(data.user);
            });
        })
        .catch((error) => {
          console.log('sing out');
          this.logout();
          reject(new Error('Failed to login with token.'));
        });
    });
  };

  updateUserData = (user) => {
    return mainAxios.post('/api/auth/user/update', {
      user,
    });
  };

  setSession = (accessToken) => {
    if (accessToken) {
      localStorage.setItem('jwt_access_token', accessToken);
      mainAxios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    } else {
      localStorage.removeItem('jwt_access_token');
      delete mainAxios.defaults.headers.common.Authorization;
    }
  };

  logout = () => {
    this.setSession(null);
  };

  isAuthTokenValid = (accessToken) => {
    if (!accessToken) {
      return false;
    }
    const decoded = jwtDecode(accessToken);
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      console.warn('access token expired');
      return false;
    }

    return true;
  };

  getAccessToken = () => {
    return window.localStorage.getItem('jwt_access_token');
  };
}

const instance = new JwtService();

export default instance;
