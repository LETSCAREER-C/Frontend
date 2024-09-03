import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ListPage from '../pages/ListPage/ListPage';
import ReviewPage from '../pages/ReviewPage/ReviewPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "listpage",
        element: <ListPage />
      },
      {
        path: "review",
        element: <ReviewPage />
      },
    ],
  },
]);
