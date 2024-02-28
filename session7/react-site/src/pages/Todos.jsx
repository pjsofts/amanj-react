import { useMutation, useQuery } from "@tanstack/react-query";
import { addTodo, getTodos } from "../api/todos";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import classes from "./todos.module.css";

const Todos = () => {
  const queryClient = useQueryClient();

  const [value, setValue] = useState("");
  const query = useQuery({ queryKey: ["todos"], queryFn: getTodos });
  console.log("todos data is", query.data);

  // Mutations
  const { mutate, isPending } = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  return (
    <div>
      Todos
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        type="button"
        onClick={() => {
          mutate(value);
        }}
      >
        Add Todo
      </button>
      <div className={classes.todoHolder}>
        {query.data?.map((todo) => (
          <span key={todo.id}>
            <div className="todo">{todo.content}</div>
          </span>
        ))}
        {isPending && <span className="pending">{value}</span>}
      </div>
    </div>
  );
};

export default Todos;
