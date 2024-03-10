import { useDispatch, useSelector } from "react-redux";
import { incrementB } from "../store/slices/counterSlice";
import { RootState } from "../store/store";

const B = () => {
  const dispatch = useDispatch();
  const b = useSelector((state:RootState) => state.counter.b);
  return (
    <div className="m-4 p-4 border border-solid border-[#ccc]">
      This is B : {b}
      <button onClick={() => dispatch(incrementB())}>Add B</button>
    </div>
  );
};

export default B;
