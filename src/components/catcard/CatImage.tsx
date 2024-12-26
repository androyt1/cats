import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface CatImageProps {
  url: string;
}

const CatImage = ({ url }: CatImageProps) => {
  return (
    <LazyLoadImage
      alt="Cat"
      effect="blur"
      wrapperProps={{
        style: { transitionDelay: "1s" },
      }}
      src={url}
      className="rounded w-full h-48 object-cover"
    />
  );
};

export default CatImage;
