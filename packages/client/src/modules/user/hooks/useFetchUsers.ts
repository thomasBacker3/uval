import { useQuery } from '@tanstack/react-query';
import api from '~/modules/api';

export const useFetchUsers = () =>
  useQuery({ queryKey: ['users'], queryFn: () => api.users.getAll() });
