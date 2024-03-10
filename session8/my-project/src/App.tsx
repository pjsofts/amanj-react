import { useRef, useState } from "react";
import "./App.css";
import Child from "./Child";

function App() {
  const [counter, setCounter] = useState(0);
  const [show, setShow] = useState(true);
  const value = useRef(0);
  return (
    <>
      <div>counter: {counter}</div>
      <div>value: {value.current}</div>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Add Counter
      </button>
      <button
        onClick={() => {
          value.current = value.current + 1;
          console.log("inside add value, value:", value.current);
        }}
      >
        Add Value
      </button>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        hide
      </button>
      {show && <Child />}
      {show && <Child />}
    </>
  );
}

export default App;
