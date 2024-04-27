import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { ActionCreatorWithPayload, PayloadAction } from "@reduxjs/toolkit";

function Input({
  title,
  slice,
  field,
  action,
  object,
}: {
  title: string;
  slice: string;
  field: string;
  object: string;
  action: ActionCreatorWithPayload<Partial<Todo>, "todo/setTodo">;
}) {
  const dispatch = useDispatch();
  const value = useSelector((state: RootState) => state[slice][object][field]);
  return (
    <div className="flex items-center gap-2 rounded-xl border bg-[#f1f1f1] border-gray p-4 m-4">
      <div className="text-primary capitalize w-24">{title}</div>
      <input
        onChange={(event) => {
          dispatch(action({ [field]: event.target.value }));
        }}
        value={value}
        className="border-secondary border rounded h-8 w-full p-2"
        type="text"
      />
    </div>
  );
}

export default Input;
