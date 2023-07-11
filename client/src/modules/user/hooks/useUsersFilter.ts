import { User } from '../types/User';

export const useUsersFilter = (users: User[], value: string | undefined) => {
  const filteredUsers = users.filter((u) =>
    `${u.lastName}${u.name}${u.chatNickname}`
      .toLocaleLowerCase()
      .includes(value?.toLocaleLowerCase() || ''),
  );

  return {
    users: filteredUsers,
  };
};
