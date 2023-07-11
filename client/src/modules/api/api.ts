import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

axios.defaults.baseURL = 'http://localhost:4000';

export const rootApi = {
  get: <T>(url: string, config?: AxiosRequestConfig) =>
    axios.get<T>(url, config).then(responseBody),
  //   !FIX {} body
  // eslint-disable-next-line @typescript-eslint/ban-types
  post: <T>(url: string, body: {}, config?: AxiosRequestConfig) =>
    axios.post<T>(url, body, config).then(responseBody),
};
