import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { clearTodo, setTodo } from "../../store/todo.slice";
import { useDispatch } from "react-redux";
import SaveButton from "./SaveButton";
import { useEffect } from "react";
import { getTodo } from "../../api/todos";

function AddTodo() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  console.log("id is", id);

  useEffect(() => {
    async function getData(id: string) {
      const todo = await getTodo(id);
      dispatch(setTodo(todo));
    }
    if (id) {
      getData(id);
    }
  }, [id, dispatch]);

  return (
    <div>
      {id ? "Edit Todo" : "Add Todo"}
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
        <SaveButton />
        <Button
          danger={true}
          onClick={() => {
            dispatch(clearTodo());
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
