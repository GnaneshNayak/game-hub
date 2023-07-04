import { useQuery } from '@tanstack/react-query';

import ApiClient, { FetchResponse } from '../services/api-client';
import platforms from '../data/platforms';

const apiClient = new ApiClient<Platform>('/platforms/lists/parent');
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24h,
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;

// import useData from './useData';

// export interface Platform {
//   id: number;
//   name: string;
//   slug: string;
// }

// const usePlatforms = () => useData<Platform>('/platforms/lists/parents');

// export default usePlatforms;
