import axiosInstance from './axios';

export const getBanner = <T = APIS.IBannerRequest>() => {
  return axiosInstance.get<T>('/banner');
};
