import type { FC } from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const RootLayout: FC = () => {
  return (
    <>
      <Header />
      <div className='container mx-auto  rounded-lg p-4 dark:border-gray-700'>
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
