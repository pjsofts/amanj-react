import { useState } from "react";
import Todo from "./components/Todo";

const todosData = [
  {task: "wash dishes", name: "pouria", id:1},
  {task: "learn react", name: "ahmad", id:2},
  {task: "clean1 room", name: "sara", id:3},
  {task: "buy stuff", name: "mehdi", id:4},
]

const App = ()=>{
  const [todos, setTodos] = useState(todosData)

  console.log("rerending app", todos);

  return <div>
    Salam
    
    <input type="text" placeholder="task"/>
    <input type="text" placeholder="name"/>
    <button onClick={()=>{
      setTodos(prevTodos => [...prevTodos, {task: "new", name: "new", id: Math.random()}])
    }} type="button">Add</button>

    {todos.map(todo=>{
      return <Todo key={todo.id} task={todo.task} name={todo.name} />
    })}
  </div>
}


export default App;