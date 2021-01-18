import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const { REACT_APP_DEV_API: apiDev } = process.env;

const getAxiosInstance = (options: AxiosRequestConfig): AxiosInstance => {
  const instance = Axios.create(options);

  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (err) => {
      console.log(err);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      const res = response.data;
      // 不了解 api 返回，先默认有 code 且为 200 的情况是正常的数据
      if (res.code && res.code === 200) {
        return res;
      } else {
        return Promise.reject({ code: 6000, message: 'unknown...' });
      }
    },
    (err) => {
      const error = { code: 6001, message: 'Response Error!' };
      if (err.response) {
        switch (err.response.status) {
          case 401:
            break;
          case 403:
            break;
          case 404:
            error.code = 404;
            error.message = 'Request API Not Found!';
            break;
        }
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

export default getAxiosInstance({ baseURL: apiDev });
