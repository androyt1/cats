import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface CatImageProps {
  url: string;
}

const CatImage = ({ url }: CatImageProps) => {
  return (
    <div className="transform-gpu backface-hidden perspective-1000">
      <LazyLoadImage
        alt="Cat"
        effect="blur"
        wrapperProps={{
          style: {
            transitionDelay: "1s",
            transform: "translateZ(0)",
            willChange: "transform",
          },
        }}
        src={url}
        className="rounded w-full h-48 object-cover transform-gpu will-change-transform"
        placeholder={
          <div className="w-full h-48 bg-gray-200 rounded animate-pulse" />
        }
      />
    </div>
  );
};

export default CatImage;
