
import { HttpResponse, http } from "msw";
import mock_todos from "../mock";

const URL = import.meta.env.VITE_API_URL;
export const restHandlers = [
  http.get(URL + "/tasks", () => {
    return HttpResponse.json(mock_todos);
  }),
];

