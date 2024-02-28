import { useState } from "react";

const C = ({ c, setC }) => {
  return (
    <div className="m-4 p-4 border border-solid border-[#ccc]">
      This is C: {c}
      <button onClick={() => setC(c + 1)}>Add C</button>
    </div>
  );
};

export default C;
