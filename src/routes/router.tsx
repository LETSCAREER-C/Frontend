import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ListPage from "../pages/ListPage/ListPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/ListPage",
    element: <ListPage />
  }
]);
