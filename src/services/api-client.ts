import axios, { AxiosRequestConfig } from 'axios';

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiousInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'ca5478f184d941d682bca64fc29f6fff',
  },
});

class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll = async (config: AxiosRequestConfig) => {
    return await axiousInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}
export default APIClient;
