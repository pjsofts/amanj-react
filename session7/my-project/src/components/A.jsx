import { useState } from "react";

const A = ({ c }) => {
  const [a, setA] = useState(0);
  return (
    <div className="m-4 p-4 border border-solid border-[#ccc]">
      <div>This is A: {a}</div>
      <div>C value is: {c}</div>
      <button onClick={() => setA(a + 1)}>Add A</button>
    </div>
  );
};

export default A;
