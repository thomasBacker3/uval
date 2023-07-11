import type { FC } from 'react';
import { User } from '../../types/User';
import getLastNameWithInitials from '../../utils/getLastNameWithInitials';

interface UserTableProps {
  users: User[];
}

const UserTable: FC<UserTableProps> = ({ users }) => {
  return (
    <div className='mb-5 overflow-x-auto'>
      <div className='inline-block min-w-full align-middle'>
        <div className='overflow-hidden rounded-lg border dark:border-gray-700'>
          <table className='min-w-full divide-y divide-gray-200 dark:divide-gray-700'>
            <thead>
              <tr>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium uppercase text-gray-500'
                >
                  Rank
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium uppercase text-gray-500'
                >
                  Name
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium uppercase text-gray-500'
                >
                  Base
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium uppercase text-gray-500'
                >
                  Garrison
                </th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-200 dark:divide-gray-700'>
              {users.map((u) => (
                <tr
                  key={u.id}
                  className='odd:bg-white even:bg-gray-100 dark:odd:bg-slate-900 dark:even:bg-slate-800'
                >
                  {/* <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800 dark:text-gray-200">
                    {idx + 1}
                  </td> */}
                  <td className='whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800 dark:text-gray-200'>
                    {u.rank.name}
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 text-sm text-gray-800 dark:text-gray-200'>
                    {getLastNameWithInitials(u)}
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 text-sm text-gray-800 dark:text-gray-200'>
                    Поощрением ЗНВАНР
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 text-sm text-gray-800 dark:text-gray-200'>
                    {u.garrison}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
