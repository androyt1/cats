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
}

const CatCard = ({ id, url, score }: CatCardProps) => {
  const [idOfNewFavourite, setIdOfNewFavourite] = useState<string | null>(() =>
    getLocalStorage(`cat-${id}-isFavourite`, null)
  );

  const [currentScore, setCurrentScore] = useState<number>(() =>
    getLocalStorage(`cat-${id}-score`, score)
  );

  useEffect(() => {
    setLocalStorage(`cat-${id}-isFavourite`, idOfNewFavourite);
  }, [idOfNewFavourite, id]);

  useEffect(() => {
    setLocalStorage(`cat-${id}-score`, currentScore);
  }, [currentScore, id]);

  const handleVote = async (value: number) => {
    try {
      if (currentScore === 0 && value === -1) return;
      await voteCat(id, value);
      setCurrentScore((prev) => prev + value);
    } catch (error) {
      console.error("Error voting:", error);
    }
  };

  const handleFavourite = async () => {
    try {
      const response = await favouriteCat(id);
      setIdOfNewFavourite(response.data.id);
    } catch (error) {
      console.error("Error favoriting:", error);
    }
  };

  const handleUnfavourite = async () => {
    if (!idOfNewFavourite) return;
    try {
      await unfavouriteCat(idOfNewFavourite);
      setIdOfNewFavourite(null);
    } catch (error) {
      console.error("Error unfavoriting:", error);
    }
  };

  const isFavourite = Boolean(idOfNewFavourite);

  return (
    <div className="p-4 border dark:border-white rounded bg-white dark:bg-stone-800 shadow-sm shadow-stone-400 ">
      <CatImage url={url} />
      <div className="mt-2 flex justify-between items-center">
        <FavouriteButton
          isFavourite={isFavourite}
          onToggle={isFavourite ? handleUnfavourite : handleFavourite}
        />
        <VoteButtons onVote={handleVote} />
      </div>
      <p className="mt-2 text-center">Score: {currentScore}</p>
    </div>
  );
};

export default CatCard;
