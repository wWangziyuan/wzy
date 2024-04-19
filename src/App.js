import { Button, Input } from '@douyinfe/semi-ui';
import { Typography } from '@douyinfe/semi-ui';
import { useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from 'react-router-dom';
import Login from './login';
const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <div>Hello world!</div>,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/callroll',
      element: <div>点名</div>,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
