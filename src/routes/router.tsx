import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ListPage from "../pages/ListPage/ListPage";
import ReviewPage from "../pages/ReviewPage/ReviewPage";
import DetailPage from "../pages/DetailPage/DetailPage";
import NotFound from "../pages/NotFound/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/program/:programId",
        element: <DetailPage />,
      },
      {
        path: "listpage",
        element: <ListPage />,
      },
      {
        path: "review",
        element: <ReviewPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
