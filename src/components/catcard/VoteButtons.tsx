interface VoteButtonsProps {
  onVote: (value: number) => void;
}

const VoteButtons = ({ onVote }: VoteButtonsProps) => {
  return (
    <div>
      <button
        className="px-2 py-1 bg-green-500 text-white rounded"
        onClick={() => onVote(1)}
      >
        +1
      </button>
      <button
        className="px-2 py-1 bg-red-500 text-white rounded"
        onClick={() => onVote(-1)}
      >
        -1
      </button>
    </div>
  );
};

export default VoteButtons;
