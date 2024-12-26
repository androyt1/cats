import TooltipButton from "./TooltipButton";

interface VoteButtonsProps {
  onVote: (value: number) => void;
}

const VoteButtons = ({ onVote }: VoteButtonsProps) => {
  return (
    <div className="flex gap-2">
      <TooltipButton
        onClick={() => onVote(1)}
        tooltipText="Upvote"
        className="bg-green-500 text-white hover:bg-green-600"
      >
        +1
      </TooltipButton>
      <TooltipButton
        onClick={() => onVote(-1)}
        tooltipText="Downvote"
        className="bg-red-500 text-white hover:bg-red-600"
      >
        -1
      </TooltipButton>
    </div>
  );
};

export default VoteButtons;
