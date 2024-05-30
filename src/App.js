import { createBrowserRouter, RouterProvider } from 'react-router-dom';
<<<<<<< HEAD
import Login from './login/login';
import Callroll from './callroll';
import React from 'react';
import { List } from '@douyinfe/semi-ui';


class SimpleList extends React.Component {
    render() {
      const data = [
        { name: '张恩淇', points: 0 },
        { name: '王子浩然', points: 0 },
        { name: '赵胤轩', points: 0 },
        { name: '曾奕洲', points: 0 },
        { name: '付子豪', points: 0 },
        { name: '段啸俣', points: 0 },
        { name: '高涵', points: 0 },
        { name: '王子元', points: 0 },
        { name: '吴廷潇', points: 0 },
      ];
    }
  }

=======
import Login from './login';
import Callroll from './pages/callroll';
>>>>>>> 378a321d4070a4f9b84a77956da2ca5f9cc69341
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

const bodyParser = require('body-parser');
app.use(bodyParser.json());

function Text() {
  const [data, setData] = useState('');

  useEffect(() => {
      http.post("/teacher/login", {
          username: 'guest',
          password: '123456'
      })
        .then(res => localStorage.setItem('taken', res.data.token));
  },{})

  const text = () => {
    http.get('/text').then(res => setData(res.data));
  }

  return (
    <>
      <button onClick={text}>text</button>
      <div>{data}</div>  
    </>

  );
}
