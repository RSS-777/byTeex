import { useEffect, useState } from "react";
import { urlFor } from "../../sanityClient";

interface IUserProps {
  images: any[];
}

export const UserGeneratedImages: React.FC<IUserProps> = ({ images }) => {
  const [maxVisibleImages, setMaxVisibleImages] = useState<number>(22);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 580) setMaxVisibleImages(8);
      else if (window.innerWidth < 768) setMaxVisibleImages(10);
      else if (window.innerWidth < 900) setMaxVisibleImages(14);
      else if (window.innerWidth < 1200) setMaxVisibleImages(22);
      else setMaxVisibleImages(22);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!images || images.length === 0) return null;

  const visibleImages = images.slice(0, maxVisibleImages);
  const columnsCount = Math.ceil(visibleImages.length / 2);

  return (
    <div
      className="grid grid-rows-2 gap-[5px] md:gap-[6px] w-full mt-[55px]"
      style={{ gridTemplateColumns: `repeat(${columnsCount}, 1fr)` }}
    >
      {visibleImages.map((img, idx) => (
        <div key={img._key || idx}>
          <img
            src={urlFor(img).width(200).url()}
            alt={img.alt || `User generated ${idx}`}
            className="w-full object-cover aspect-square"
          />
        </div>
      ))}
    </div>
  );
};
