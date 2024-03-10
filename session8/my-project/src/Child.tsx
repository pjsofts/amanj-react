import { useRef } from "react";

const Child = () => {
  let simple = 0;
  const value = useRef(0);
  return (
    <div>
      simple:{simple}
      <div>value: {value.current}</div>
      <button
        onClick={() => {
          simple += 1;
          console.log("simple is", simple);
        }}
      >
        Add Simple
      </button>
      <button
        onClick={() => {
          value.current = value.current + 1;
          console.log("inside add value, value:", value.current);
        }}
      >
        Add Value
      </button>
    </div>
  );
};

export default Child;
