import { useDispatch, useSelector } from "react-redux";
import { useAddTodo, useEditTodo } from "../../api/todos.mutation";
import Button from "../../components/Button";
import { clearTodo } from "../../store/todo.slice";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../../store/store";

function SaveButton() {
  const { id } = useParams();
  const addMutation = useAddTodo();
  const editMutation = useEditTodo();
  const dispatch = useDispatch();
  const todo = useSelector((state: RootState) => state.todo.todo);
  const navigate = useNavigate();

  return (
    <Button
      success={true}
      onClick={async () => {
        if (id) {
          editMutation.mutate({ todo, id });
        } else {
          addMutation.mutate(todo);
        }
        dispatch(clearTodo());
        navigate("/todo");
      }}
    >
      Save
    </Button>
  );
}

export default SaveButton;
