const URL = import.meta.env.VITE_BACKEND_URL;
const TOKEN = import.meta.env.VITE_TOKEN;

console.log("this is a test, url:, token:", URL, TOKEN);

async function getTodos() {
  const response = await fetch(`${URL}/tasks`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });
  const data = await response.json();
  return data;
}

async function addTodo(content) {
  const response = await fetch(`${URL}/tasks`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content }),
  });
  const data = await response.json();
  return data;
}

export { getTodos, addTodo };
