interface FavouriteButtonProps {
  isFavourite: boolean;
  onToggle: () => void;
}

const FavouriteButton = ({ isFavourite, onToggle }: FavouriteButtonProps) => {
  return (
    <button
      className={`text-xl ${isFavourite ? "text-red-500" : "text-gray-500"}`}
      onClick={onToggle}
    >
      ♥
    </button>
  );
};

export default FavouriteButton;
