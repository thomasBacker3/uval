import { createBrowserRouter } from 'react-router-dom';
import UsersPage from './pages/UsersPage';
import RootLayout from './layouts/RootLayout';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        index: false,
        element: <h1>main page</h1>,
      },
      {
        path: 'users',
        element: <UsersPage />,
      },
    ],
    errorElement: <NotFoundPage />,
  },
]);

export default router;
