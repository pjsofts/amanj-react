import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./config/router";
import axios from "axios";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./config/query-client";
import { Provider } from "react-redux";
import { store } from "./store/store";

const token = import.meta.env.VITE_API_TOKEN;
axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </QueryClientProvider>
);
