import TodoCard from "./TodoCard";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useGetTodos } from "../../api/todos.queries";

function Todo() {
  const navigate = useNavigate();
  const { data, isError, isLoading } = useGetTodos();

  if (isError) {
    return <div>Some error happened </div>;
  }
  if (isLoading) {
    return <div>It's loading</div>;
  }

  return (
    <div>
      <div className="flex justify-end px-4">
        <Button
          onClick={() => {
            navigate("/todo/add");
          }}
        >
          Add Todo
        </Button>
      </div>
      {data?.map((todo: Todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default Todo;
