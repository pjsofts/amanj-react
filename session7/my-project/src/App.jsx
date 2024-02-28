import { useState } from "react";
import "./App.css";
import A from "./components/A";
import B from "./components/B";
import C from "./components/C";
import Products from "./components/Products";

function App() {
  const [c, setC] = useState(0);
  return (
    <>
      <Products />
      <h1>This is app</h1>
      <A c={c} setC={setC} />
      <B />
      <C c={c} setC={setC} />
    </>
  );
}

export default App;
