import { createBrowserRouter } from "react-router-dom";
import Contact from "../pages/Contact";
import Todo from "../pages/Todo/Todo";
import About from "../pages/About";
import Home from "../pages/Home";
import Layout from "../layouts/Layout";
import AddTodo from "../pages/Todo/AddTodo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
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
        path: "/todo",
        element: <Todo />,
      },
      {
        path: "/todo/add",
        element: <AddTodo />,
      },
      {
        path: "/todo/:id",
        element: <AddTodo />,
      },
    ],
  },
]);

export default router;
