import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Heart } from "lucide-react";

interface TooltipButtonProps {
  onClick?: () => void;
  tooltipText: string;
  className?: string;
  children?: React.ReactNode;
  variant?: "default" | "favorite";
  isFavorite?: boolean;
}

const TooltipButton = ({
  onClick,
  tooltipText,
  className = "",
  children,
  variant = "default",
  isFavorite = false,
}: TooltipButtonProps) => {
  if (variant === "favorite") {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={onClick}
              className={`transition-colors border dark:border-white  p-2 shadow-sm shadow-stone-400 rounded-sm  ${className}`}
            >
              <Heart
                className={`size-6 text-red-600 ${
                  isFavorite ? "fill-current" : ""
                }`}
              />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{tooltipText}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button onClick={onClick} className={className}>
            {children}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltipText}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
export default TooltipButton;
