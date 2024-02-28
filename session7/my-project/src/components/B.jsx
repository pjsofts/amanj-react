import { useState } from "react";

const B = () => {
  const [b, setB] = useState(0);
  return (
    <div className="m-4 p-4 border border-solid border-[#ccc]">
      This is B : {b}
      <button onClick={() => setB(b + 1)}>Add B</button>
    </div>
  );
};

export default B;
