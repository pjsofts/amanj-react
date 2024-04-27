import { useQuery } from "@tanstack/react-query";
import { getTodos } from "./todos";

function useGetTodos() {
  return useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      return await getTodos();
    },
  });
}

export { useGetTodos };
