import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { setSearch } from "../store/gameSlice";

const Search = () => {
  const search = useSelector((state: RootState) => state.game.search);
  const dispatch = useDispatch();
  return (
    <div className="p-4 text-xl font-bold flex items-center justify-between md:min-w-[1100px]">
      <div className="text-[white]">GameZone</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          value={search}
          onChange={(e) => {
            dispatch(setSearch(e.target.value));
          }}
          type="text"
          placeholder="Search..."
          className="rounded p-2"
        />
      </form>
    </div>
  );
};
export default Search;
