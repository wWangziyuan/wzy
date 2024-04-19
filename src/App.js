import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './login';
import Callroll from './callroll';
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
      element: <Callroll />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
