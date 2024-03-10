import { useEffect, useRef, useState } from "react";
import { getGames } from "./api/games";

import { Game } from "./types/game";
import Card from "./components/Card";

function App() {
  const timer = useRef<number | null>();
  const [games, setGames] = useState<Game[]>([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    async function getData() {
      const gamesData = await getGames(search);
      // console.log("inside get data games is", gameData);
      setGames(gamesData.results);
    }

    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      getData();
    }, 500);
  }, [search]);

  return (
    <>
      <div className="flex gap-4 p-4 ">
        <div className="w-40 shrink-0">Sidebar</div>
        <div>
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
                  setSearch(e.target.value);
                }}
                type="text"
                placeholder="Search..."
                className="rounded p-2"
              />
            </form>
          </div>
          <div className="flex flex-wrap gap-4 max-w-[1100px] ">
            {games.map((game) => {
              return <Card game={game} key={game.id} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
