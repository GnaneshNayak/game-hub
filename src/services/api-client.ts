import axios, { AxiosRequestConfig } from 'axios';

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiousInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'b710ee6b55624f5baa5e7c706c9d8844',
  },
});

class Apiclient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll = (config: AxiosRequestConfig) => {
    return axiousInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}
export default Apiclient;

// import axios from 'axios';

// export interface FetchResponse<T> {
//   count: number;
//   results: T[];
// }

// export default axios.create({
//   baseURL: 'https://api.rawg.io/api',
//   params: {
//     key: 'b710ee6b55624f5baa5e7c706c9d8844',
//   },
// });
