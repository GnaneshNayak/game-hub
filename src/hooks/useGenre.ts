import { useQuery } from '@tanstack/react-query';
import genres from '../data/genres';
import apiClient, { FetchResponse } from '../services/api-client';

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>('/genres').then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;

// import { useQuery } from '@tanstack/react-query';
// import genres from '../data/genres';
// import apiClient from '../services/api-client';
// import { FetchResponse } from './useData';

// export interface Genre {
//   id: number;
//   name: string;
//   slug: string;
//   image_background: string;
// }

// const useGenres = () => {
//   return useQuery({
//     queryKey: ['genres'],
//     queryFn: () =>
//       apiClient.get<FetchResponse<Genre>>('/genres').then((res) => res.data),
//     staleTime: 24 * 60 * 60 * 1000, //24h
//     initialData: { count: genres.length, results: genres },
//   });
// };

// export default useGenres;
// import genres from '../data/genres';

// export interface Genre {
//   id: number;
//   name: string;
//   slug: string;
//   image_background: string;
// }

// const useGenres = () => ({ data: genres, isLoading: false, error: null });

// export default useGenres;
