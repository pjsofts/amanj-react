import { formateDate } from "../../utils/date";

function TodoCard({ todo }: { todo: Todo }) {
  return (
    <div className="p-4 m-4 rounded-xl border border-gray">
      <div className="font-bold text-secondary">{todo.content}</div>
      <div>
        <span className="text-primary">created at:</span>{" "}
        {formateDate(todo.created_at)}
      </div>
      <div>
        <span className="text-primary">description:</span> {todo.description}
      </div>
    </div>
  );
}

export default TodoCard;
