console.log("hello world");

const number = 10;

const Todo = (props) =>
  React.createElement("div", {}, [
    React.createElement("h2", {}, "task:" + props.task),
    React.createElement("h2", {}, "name:" + props.name),
  ]);

const App = () =>
  React.createElement("div", {}, [
    React.createElement("h1", { className: "pouria" }, "Hello React"),
    React.createElement("h2", {}, "Hello Everyone"),
    React.createElement(Todo, { className:"red",task: "wash dishes", name: "pouria" }),
    React.createElement(Todo, { task: "clean room", name: "sara" }),
    React.createElement(Todo, { task: "learn react", name: "ahmad" }),
  ]);

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
