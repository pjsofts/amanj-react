import axios from "axios";

const URL = import.meta.env.VITE_API_URL;

async function getTodos() {
  const { data } = await axios.get(URL + "/tasks");
  return data;
}

export { getTodos };
