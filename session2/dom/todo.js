const todos = [
    {title: "wash1 dishes", person: "pouria"},
    {title: "clean room", person: "ahmad"},
    {title: "read book", person: "meisam"},
    {title: "do programming", person: "sara"}
]


function render(){
    const todosUl = document.getElementById("todos");
    todosUl.innerHTML = "";
    for (let todo of todos){
        const li = document.createElement("li");
        li.textContent = todo.title + " -> " + todo.person;
        todosUl.appendChild(li);
    }
}


function add(){
    const titleInput = document.getElementById("title");
    const personInput =document.getElementById("person");
    todos.push({
        title: titleInput.value,
        person: personInput.value
    })

    render();
    console.log("add clicked");
    console.log("todos arrays", todos)
}

render();