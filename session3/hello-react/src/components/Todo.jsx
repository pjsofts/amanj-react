const Todo = (props)=>{
    return <div className="todo">
      <h2>task: {props.task} </h2> 
      <h2>name: {props.name}</h2> 
    </div>
}


export default Todo;