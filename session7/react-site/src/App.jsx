import { useEffect, useState } from "react";
import Button from "./components/Button";

let number = 0;

const App = () => {
  const [counter, setCounter] = useState(0);
  const [showButtons, setShowbuttons] = useState(true);

  const [title, setTitle] = useState("");

  useEffect(() => {
    console.log("App is mounted");
  }, []);

  console.log("App is rendering");

  return (
    <div>
      Salam
      <div>
        <input
          value={title}
          onChange={(e) => {
            console.log("inside onchange", e.target.value);
            setTitle(e.target.value);
          }}
          type="text"
          placeholder="enter something"
        />
      </div>
      <div>Counter is {counter}</div>
      <div>Number is {number}</div>
      <div>Input value is {title}</div>
      {showButtons && (
        <Button
          text={"Add State"}
          onClick={() => {
            setCounter((prev) => prev + 1);
          }}
        />
      )}
      {showButtons && (
        <Button
          text={"Add Global"}
          onClick={() => {
            number = number + 1;
            console.log("I'm adding number", number);
          }}
        />
      )}
      <Button
        text={showButtons ? "Hide" : "Show"}
        onClick={() => {
          setShowbuttons((prev) => !prev);
        }}
      />
    </div>
  );
};

export default App;
