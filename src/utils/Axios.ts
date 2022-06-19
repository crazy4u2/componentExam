import axios, { AxiosError } from 'axios';
import config from '~config';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '~constants';

import { getCookie } from './Cookie';

// TODO:: 토큰 인증 실패시 리프레시 토큰 발급받는 api import 필요

export const AxiosInstance = axios.create({
  timeout: 10000,
  baseURL: config.API,
  headers: {
    apiKey: config.API_KEY as string,
  },
});

export const AxiosAuthInstance = axios.create({
  timeout: 10000,
  baseURL: config.AUTH_API,
  headers: {
    apiKey: config.AUTH_API_KEY as string,
  },
});

// AxiosInstance.defaults.headers.common['apiKey'] = `${config.API_KEY}`;
// AxiosAuthInstance.defaults.headers.common['apiKey'] = `${config.API_KEY}`;

AxiosInstance.interceptors.request.use(
  (req: any) => {
    const token = getCookie(ACCESS_TOKEN);
    req.headers.common.Authorization = `Bearer ${token}`;
    return req;
  },
  (err: AxiosError): Promise<AxiosError> => {
    return Promise.reject(err);
  }
);

AxiosInstance.interceptors.response.use(
  (res) => res,
  (...err): Promise<AxiosError> => {
    const { resultCode } = err[0].response.data;
    if (resultCode === 401) {
      // reqired refresh token function
      console.log('Token invalid');
    }

    return Promise.reject(err[0].response.data);
  }
);

AxiosAuthInstance.interceptors.request.use(
  (req: any) => req,
  (err: AxiosError): Promise<AxiosError> => {
    return Promise.reject(err);
  }
);

AxiosAuthInstance.interceptors.response.use(
  (res) => {
    // const { accessToken, refreshToken } = res.data.resultData;
    // localStorage.setItem(ACCESS_TOKEN, accessToken);
    // localStorage.setItem(REFRESH_TOKEN, refreshToken);
    return res;
  },
  (...err): Promise<AxiosError> => {
    return Promise.reject(err[0].response.data);
  }
);
