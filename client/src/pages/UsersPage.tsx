import { FC, useState } from 'react';
import useUserStore from '~/modules/user/store';
import { useCopyToClipboard } from '~/hooks/useCopyToClipboard';
import { useMutation, useQuery } from '@tanstack/react-query';
import { UserList } from '~/modules/user';
import { User } from '~/modules/user/types/User';
import api from '~/modules/api';
import { Button } from '~/components/ui/button';
import UsersTableDialog from '~/modules/user/components/dialogs/UsersTableDialog';
import { Copy } from 'lucide-react';
import Loader from '~/modules/UI/Loader/Loader';
import { useToast } from '~/components/ui/use-toast';
import { InputDataForm } from '~/modules/inputData';
import useInputData from '~/modules/inputData/store';
import { addDays, format } from 'date-fns';
import { Label } from '~/components/ui/label';
import { Input } from '~/components/ui/input';
import { useUsersFilter } from '~/modules/user/hooks/useUsersFilter';
import useDownloadFile from '~/hooks/useDownloadFile';

const UsersPage: FC = () => {
  const { data: users, isLoading } = useQuery<User[]>(['users'], api.users.getAll);

  const [filterValue, setFilterValue] = useState<string>();
  const selectedUsers = useUserStore((state) => state.selectedUsers);
  const { users: filteredUsers } = useUsersFilter(users || [], filterValue);

  const { saveFile } = useDownloadFile();

  const { toast } = useToast();
  const [_, copy] = useCopyToClipboard();

  const { dates, type } = useInputData();

  const generateDocs = useMutation(api.docs.genUval, {
    onSuccess: () => {
      toast({
        title: 'Docs successfully created.',
        variant: 'success',
      });
    },
    onError: () => {
      toast({
        title: 'Oooops! Document creation error!',
        variant: 'destructive',
      });
    },
  });

  const onGenerateData = async () => {
    if (!dates?.from || !dates.to) {
      toast({ title: 'Fill in all the fields!', variant: 'destructive' });
      return;
    }

    const res = await generateDocs.mutateAsync({
      userIds: selectedUsers.map((u) => u.id),
      input: {
        dates: {
          start: format(dates?.from, 'dd.MM.yyyy'),
          finish: format(dates.to, 'dd.MM.yyyy'),
          money: format(addDays(dates.to, 1), 'dd.MM.yyyy'),
          finishTime: '20.00',
        },
        type,
        year: new Date().getFullYear(),
      },
    });

    saveFile(res, 'uval.zip');
  };

  const copyNicknames = async () => {
    const str = selectedUsers.map((u, idx) => `${idx + 1}. @${u.chatNickname}`).join('\n');
    await copy(str);
    toast({ title: 'Nicknames copied!' });
  };

  if (isLoading) return <Loader />;
  if (!users) return <h1>Error</h1>;

  return (
    <>
      <div className='flex items-center justify-between mb-6'>
        <div className='flex flex-col  gap-2 w-1/2'>
          <Label htmlFor='filter'>Filter</Label>
          <Input type='text' value={filterValue} onChange={(e) => setFilterValue(e.target.value)} />
        </div>

        <div className='flex gap-3'>
          <Button size='sm' onClick={copyNicknames}>
            <span className='mr-2'>Copy nicknames</span>
            <Copy className='h-4 w-4' />
          </Button>
          <UsersTableDialog users={selectedUsers} onClick={onGenerateData} />
        </div>
      </div>

      <InputDataForm />

      <UserList users={filteredUsers} />
    </>
  );
};

export default UsersPage;
