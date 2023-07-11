import type { FC } from 'react';
import useUserStore from '../../store';
import UserCard from '../UserCard/UserCard';
import { User } from '../../types/User';

interface UserListProps {
  users: User[];
}

const UserList: FC<UserListProps> = ({ users }) => {
  const selectedUsers = useUserStore((state) => state.selectedUsers);
  const selectUser = useUserStore((state) => state.selectUser);
  const unselectUser = useUserStore((state) => state.unselectUser);

  if (users?.length === 0) return <h1>no users</h1>;

  const onSelectHander = (user: User, isSelected: boolean) => {
    isSelected ? unselectUser(user) : selectUser(user);
  };

  return (
    <>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        {users.map((user) => (
          <div className='mb-2' key={user.id}>
            <UserCard
              user={user}
              onSelect={onSelectHander}
              selected={selectedUsers.some((u) => u.id === user.id)}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default UserList;
