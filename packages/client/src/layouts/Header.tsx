import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '~/lib/utils';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const menuItems = [
    { title: 'Home', link: '/' },
    { title: 'Users', link: '/users' },
    // { title: "Contact", link: "/" },
  ];

  return (
    <header className='z-50 flex w-full flex-wrap border-b border-gray-200 bg-white py-3 text-sm dark:border-gray-700 dark:bg-gray-800 sm:flex-nowrap sm:justify-start sm:py-0'>
      <nav className='relative mx-auto w-full px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between'>
          <NavLink
            className='flex-none text-xl font-semibold dark:text-white'
            to='/'
            aria-label='Brand'
          >
            Test
          </NavLink>
          <div className='sm:hidden' onClick={() => setShowMenu((prev) => !prev)}>
            <button
              type='button'
              className='toggle inline-flex items-center justify-center gap-2 rounded-md border bg-white p-2 align-middle text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:hover:bg-slate-800 dark:hover:text-white dark:focus:ring-offset-gray-800'
            >
              {showMenu ? (
                <svg
                  className='h-4 w-4'
                  width='16'
                  height='16'
                  fill='currentColor'
                  viewBox='0 0 16 16'
                >
                  <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
                </svg>
              ) : (
                <svg
                  className='h-4 w-4'
                  width='16'
                  height='16'
                  fill='currentColor'
                  viewBox='0 0 16 16'
                >
                  <path
                    fillRule='evenodd'
                    d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={cn('grow basis-full overflow-hidden transition-all duration-300 sm:block', {
            hidden: !showMenu,
          })}
        >
          <div className='mt-5 flex flex-col gap-y-4 gap-x-0 sm:mt-0 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:pl-7'>
            {menuItems.map((item) => (
              <NavLink
                key={item.title}
                className='font-medium text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 sm:py-6'
                to={item.link}
              >
                {item.title}
              </NavLink>
            ))}
          </div>
        </div>
        {/* <ThemeSwitcher /> */}
      </nav>
    </header>
  );
};

export default Header;
