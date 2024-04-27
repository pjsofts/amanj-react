import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { setTodo } from "../../store/todo.slice";

function AddTodo() {
  const navigate = useNavigate();
  return (
    <div>
      AddTodo
      <Input
        slice="todo"
        object="todo"
        action={setTodo}
        field="content"
        title="content"
      />
      <Input
        slice="todo"
        action={setTodo}
        object="todo"
        field="description"
        title="description"
      />
      <div className="flex gap-4 mt-10">
        <Button
          success={true}
          onClick={() => {
            navigate("/todo");
          }}
        >
          Save
        </Button>
        <Button
          danger={true}
          onClick={() => {
            navigate("/todo");
          }}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}

export default AddTodo;
