import TooltipButton from "./TooltipButton";

interface FavouriteButtonProps {
  isFavourite: boolean;
  onToggle: () => void;
}

const FavouriteButton = ({ isFavourite, onToggle }: FavouriteButtonProps) => {
  return (
    <TooltipButton
      variant="favorite"
      isFavorite={isFavourite}
      onClick={onToggle}
      tooltipText={isFavourite ? "Remove from favorites" : "Add to favorites"}
    />
  );
};

export default FavouriteButton;
