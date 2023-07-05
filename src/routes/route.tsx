import { createBrowserRouter } from 'react-router-dom';
import Home from '../page/home';
import Login from '../page/login';
import App from '../App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

export default router;
