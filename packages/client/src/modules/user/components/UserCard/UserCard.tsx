import type { FC } from 'react';
import { useState } from 'react';
import { User } from '../../types/User';
import getLastNameWithInitials from '../../utils/getLastNameWithInitials';
import { Card, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import { cn } from '~/lib/utils';

type UserCardProps = {
  user: User;
  onSelect: (user: User, isSelected: boolean) => void;
  selected?: boolean;
};

const UserCard: FC<UserCardProps> = ({ user, onSelect, selected = false }) => {
  const [isSelected, setIsSelected] = useState(selected);

  const onClickHandler = () => {
    setIsSelected((prev) => !prev);
    onSelect(user, isSelected);
  };

  return (
    <Card
      onClick={onClickHandler}
      className={cn(' cursor-pointer', { 'bg-blue-200 text-blue-900': isSelected })}
    >
      <CardHeader>
        <CardTitle>{getLastNameWithInitials(user)}</CardTitle>
        <CardDescription>{user.garrison}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default UserCard;
