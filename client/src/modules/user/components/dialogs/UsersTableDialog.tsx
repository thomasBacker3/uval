import { FC } from 'react';
// import { sortUsersByRank } from '~/utils';
import UserTable from '../UserTable/UserTable';
import { User } from '../../types/User';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog';
import { Button } from '~/components/ui/button';

interface UsersTableModalProps {
  users: User[];
  onClick: () => void;
}

const UsersTableModal: FC<UsersTableModalProps> = ({ users, onClick }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button onClick={onClick} size='sm'>
          Generate ({users.length})
        </Button>
      </DialogTrigger>
      <DialogContent className='max-w-screen-lg'>
        <DialogHeader>
          <DialogTitle>Users</DialogTitle>
        </DialogHeader>
        <UserTable users={users} />
      </DialogContent>
    </Dialog>
  );
};

export default UsersTableModal;
