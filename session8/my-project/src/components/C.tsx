import { useDispatch, useSelector } from "react-redux";
import { incrementC } from "../store/slices/counterSlice";
import { RootState } from "../store/store";
const C = () => {
  const dispatch = useDispatch();
  const c = useSelector((state: RootState) => state.counter.c);
  return (
    <div className="m-4 p-4 border border-solid border-[#ccc]">
      This is C: {c}
      <button onClick={() => dispatch(incrementC())}>Add C</button>
    </div>
  );
};

export default C;
