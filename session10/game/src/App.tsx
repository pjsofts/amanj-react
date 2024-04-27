import Grid from "./components/Grid";
import Search from "./components/Search";

function App() {
  return (
    <>
      <div className="flex gap-4 p-4 ">
        <div className="w-40 shrink-0">Sidebar</div>
        <div>
          <Search />
          <Grid />
        </div>
      </div>
    </>
  );
}

export default App;
