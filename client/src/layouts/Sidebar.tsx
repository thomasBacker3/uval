import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className='fixed top-0 left-0 z-40 h-screen w-64 -translate-x-full border-r border-gray-200 bg-white pt-20 transition-transform dark:border-gray-700 dark:bg-gray-800 md:translate-x-0'>
      <div className='h-full overflow-y-auto bg-white px-3 pb-4 dark:bg-gray-800'>
        <ul className='space-y-2'>
          <li>
            <NavLink
              to='#'
              className='flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
            >
              <svg
                className='h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'></path>
              </svg>
              <span className='ml-3 flex-1 whitespace-nowrap'>Test</span>
              <span className='ml-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300'>
                Pro
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
