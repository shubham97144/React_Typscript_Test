import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
// import SimpleLayout from './layouts/simple';
//
import UserPage from './pages/UserPage';
import Page404 from './pages/Page404';
import RolePage from './pages/RolePage';
import AddEditRole from './pages/AddEditRole';
import AddEditUser from './pages/AddEditUser';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      // element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/user" />, index: true },
        { path: 'user', element: <UserPage /> },
        { path: 'create-new-user', element: <AddEditUser /> },
        { path: 'update-user/:id', element: <AddEditUser /> },
        { path: 'role', element: <RolePage /> },
        { path: 'create-new-role', element: <AddEditRole /> },
        { path: 'update-role/:id', element: <AddEditRole /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
