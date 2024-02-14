import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Layout from "../pages/Layout";
import Params from "../pages/Params";
import Todos from "../pages/Todos";

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
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/params",
        element: <Params />,
      },
      {
        path: "/todos/:id",
        element: <Todos />,
      },
    ],
  },
]);

export default router;
