const URL = " https://api.todoist.com/rest/v2";
const TOKEN = "052fc523d1a84f13d06ef40bb8210d7466796230";

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
