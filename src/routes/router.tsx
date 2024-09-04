import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import DetailPage from '../pages/DetailPage/DetailPage';
import NotFound from '../pages/NotFound/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/program/:programId',
        element: <DetailPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
