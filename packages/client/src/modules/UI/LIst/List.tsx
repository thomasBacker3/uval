import type { FC, ReactNode } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ListProps {
  children?: ReactNode;
}

const List: FC<ListProps> = ({ children }) => {
  return (
    <div className='flex justify-center'>
      <ul className='w-96 rounded-lg border border-gray-200 bg-white text-gray-900'>{children}</ul>
    </div>
  );
};

export default List;
