import { useEffect, useState } from "react";
import { favouriteCat, unfavouriteCat, voteCat } from "@/api/catApi";
import CatImage from "./CatImage";
import FavouriteButton from "./FavouriteButton";
import VoteButtons from "./VoteButtons";
import { getLocalStorage, setLocalStorage } from "./utils";

interface CatCardProps {
  id: string;
  url: string;
  score: number;
  favouriteId?: string;
}

const CatCard = ({ id, url, score, favouriteId }: CatCardProps) => {
  const [isFavourite, setIsFavourite] = useState<boolean>(() => {
    return getLocalStorage(`cat-${id}-isFavourite`, !!favouriteId);
  });

  const [currentScore, setCurrentScore] = useState<number>(() => {
    return getLocalStorage(`cat-${id}-score`, score);
  });

  useEffect(() => {
    setLocalStorage(`cat-${id}-isFavourite`, isFavourite);
  }, [isFavourite, id]);

  useEffect(() => {
    setLocalStorage(`cat-${id}-score`, currentScore);
  }, [currentScore, id]);

  const handleFavourite = async () => {
    if (isFavourite && favouriteId) {
      await unfavouriteCat(favouriteId);
      setIsFavourite(false);
    } else {
      await favouriteCat(id);
      setIsFavourite(true);
    }
  };

  const handleVote = async (value: number) => {
    await voteCat(id, value);
    setCurrentScore((prev) => prev + value);
  };

  return (
    <div className="p-4 border rounded">
      <CatImage url={url} />
      <div className="mt-2 flex justify-between items-center">
        <FavouriteButton isFavourite={isFavourite} onToggle={handleFavourite} />
        <VoteButtons onVote={handleVote} />
      </div>
      <p className="mt-2 text-center">Score: {currentScore}</p>
    </div>
  );
};

export default CatCard;
