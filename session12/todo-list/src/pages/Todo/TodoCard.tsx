import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

function TodoCard({ todo }: { todo: Todo }) {
  const navigate = useNavigate();
  return (
    <div className="flex items-center p-4 m-4 rounded-xl border border-gray">
      <div className="flex-1">
        <div data-testid="todo-content" className="font-bold text-secondary">
          {todo.content}
        </div>
        <div>
          <span className="text-primary">created at:</span>{" "}
          {todo.created_at.toString()}
        </div>
        <div>id: {todo.id}</div>
        <div>
          <span className="text-primary">description:</span> {todo.description}
        </div>
      </div>
      <Button
        onClick={() => {
          navigate(`/todo/${todo.id}`);
        }}
      >
        {" "}
        Edit
      </Button>
    </div>
  );
}

export default TodoCard;
