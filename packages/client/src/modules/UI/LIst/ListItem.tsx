import type { FC, ReactNode } from 'react';

export interface ListItemProps {
  children?: ReactNode;
}

const ListItem: FC<ListItemProps> = ({ children }) => {
  return <li className='w-full border-b border-gray-200 px-6 py-2'>{children}</li>;
};

export default ListItem;
