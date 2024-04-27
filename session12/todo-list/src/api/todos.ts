import axios from "axios";

const URL = import.meta.env.VITE_API_URL;

async function getTodos() {
  const { data } = await axios.get(URL + "/tasks");
  return data;
}

async function getTodo(id: string) {
  const { data } = await axios.get(`${URL}/tasks/${id}`);
  return data;
}

async function addTodo(todo: Partial<Todo>) {
  await axios.post(URL + "/tasks", todo);
}

async function editTodo({ todo, id }: { todo: Partial<Todo>; id: string }) {
  await axios.post(`${URL}/tasks/${id}`, todo);
}

export { getTodos, addTodo, getTodo, editTodo };
