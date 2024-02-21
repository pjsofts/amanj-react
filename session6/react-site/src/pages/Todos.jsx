import { useParams } from "react-router-dom";

const Todos = () => {
  const { id } = useParams();

  return (
    <div>
      Todos
      <div>Current Todo is {id}</div>
    </div>
  );
};

export default Todos;
