import { Game } from "../types/game";

const Card = ({ game }: { game: Game }) => {
  return (
    <div className="">
      <img
        className="rounded-t h-[237px] w-[356px]"
        src={game.background_image}
        alt={game.name}
      />
      <div className="h-36 rounded-b text-[white] text-xl bg-card-gray flex items-center justify-center">
        {game.name}
      </div>
    </div>
  );
};

export default Card;
