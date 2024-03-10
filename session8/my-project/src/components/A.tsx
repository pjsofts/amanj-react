import { useDispatch, useSelector } from "react-redux";
import { incrementA } from "../store/slices/counterSlice";
import { RootState } from "../store/store";
const A = () => {
  const dispatch = useDispatch();
  const a = useSelector((state: RootState) => state.counter.a);
  const c = useSelector((state: RootState) => state.counter.c);
  return (
    <div className="m-4 p-4 border border-solid border-[#ccc]">
      <div>This is A: {a}</div>
      <div>C value is: {c}</div>
      <button onClick={() => dispatch(incrementA())}>Add A</button>
    </div>
  );
};

export default A;
