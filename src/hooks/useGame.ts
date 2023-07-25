import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';

interface Slug {
  id: number;
  slug: string;
  name: string;
  description_raw: string;
}

const apiClient = new APIClient<Slug>(`/games`);
const useGame = (slug: string) => {
  return useQuery({
    queryKey: ['games', slug],
    queryFn: () => apiClient.get(slug),
  });
};

export default useGame;
