import { getGames } from "../api/games";
import { Game } from "../types/game";
import Card from "../components/Card";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Grid = () => {
  const search = useSelector((state: RootState) => state.game.search);
  const { error, data: games } = useQuery<{ results: Game[] }>({
    queryKey: ["games", search],
    queryFn: () => {
      return getGames(search);
    },
  });

  if (error) {
    return <div className="text-[white]">Error::::{error.message}</div>;
  }
  return (
    <div className="flex flex-wrap gap-4 max-w-[1100px] ">
      {games?.results.map((game) => {
        return <Card game={game} key={game.id} />;
      })}
    </div>
  );
};

export default Grid;
