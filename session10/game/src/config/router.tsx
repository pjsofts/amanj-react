import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Layout from "../pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/about",
        element: <div className="text-[white]">About</div>,
      },
      {
        path: "/contact",
        element: <div className="text-[white]">Contact</div>,
      },
    ],
  },
]);

export default router;
