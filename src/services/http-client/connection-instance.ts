import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const __DEV__ = process.env.NODE_ENV === 'development';

const ConnectionInstance = Axios.create({
  timeout: 20000,
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  paramsSerializer(params) {
    const searchParams = new URLSearchParams();
    // eslint-disable-next-line no-restricted-syntax
    for (const key of Object.keys(params)) {
      const param = params[key];
      if (param !== undefined) {
        if (Array.isArray(param)) {
          param.forEach((p, i) => {
            searchParams.append(`${key}[${i}]`, p);
          });
        } else {
          searchParams.append(key, param);
        }
      }
    }
    return searchParams.toString();
  }
});

ConnectionInstance.interceptors.request.use(
  (requestConfig: AxiosRequestConfig) => {
    return requestConfig;
  },
  (error) => {
    if (__DEV__) {
      console.error('RedFox API Request Error:', error);
    }
    return Promise.reject(error);
  }
);

ConnectionInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // Try to find the access token from response
    if (response.data?.token?.accessToken) {
      ConnectionInstance.defaults.headers = {
        ...ConnectionInstance.defaults.headers,
        Authorization: `Bearer ${response.data?.token?.accessToken}`
      };
    }

    return response;
  },
  (error) => {
    if (__DEV__) {
      console.error('RedFox API Response Error:', error);
    }
    const errorMessage = error?.response?.data?.message;
    if (errorMessage) {
      return Promise.reject(new Error(errorMessage));
    }
    return Promise.reject(error);
  }
);

export default ConnectionInstance;
