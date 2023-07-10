import type { FC } from 'react';
import { User } from '../../types/User';

interface UserProfileProps {
  user: User;
}

const UserProfile: FC<UserProfileProps> = ({ user }) => {
  return <div>hello? {user.name}!</div>;
};

export default UserProfile;
