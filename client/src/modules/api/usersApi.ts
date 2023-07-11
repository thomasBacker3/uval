import { User } from '../user/types/User';
import { rootApi } from './api';

export const usersApi = {
  getAll: () => rootApi.get<User[]>('/users'),
  // getOne: (id: string) => rootApi.get<User>(`/users/${id}`),
  //   createOne: (data: User) => request.post<User>('/users', data),
};
