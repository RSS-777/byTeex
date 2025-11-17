import React, { useState } from "react";
import { urlFor } from "../../sanityClient";

export type SliderImage = {
  _key?: string;
  image?: any;
  caption?: string;
};

type TopBenefitsSliderProps = {
  images: SliderImage[];
};

export const TopBenefitsSlider: React.FC<TopBenefitsSliderProps> = ({
  images,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const hasImages = images && images.length > 0;
  const currentImage = hasImages ? images[currentImageIndex] : null;

  const goToPrevious = () => {
    if (hasImages) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? images.length - 1 : prev - 1
      );
    }
  };

  const goToNext = () => {
    if (hasImages) {
      setCurrentImageIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }
  };

  if (!hasImages || !currentImage) return null;

  return (
    <div className="relative order-1 lg:order-2 w-full flex flex-col items-center mt-[95px] lg:mt-0 px-4 max-w-[433px] mx-auto">
      <div className="relative w-full mb-[7px] overflow-visible">
        <div className="relative overflow-hidden aspect-[2/3]">
          <img
            src={urlFor(currentImage.image).width(500).url()}
            alt={currentImage.caption || "Product"}
            className="w-full h-full object-cover "
          />
        </div>

        {currentImage.caption && (
          <p className="text-center text-gray-600 text-[13px] leading-[22px] mt-1">
            {currentImage.caption}
          </p>
        )}
        <button
          onClick={goToPrevious}
          className="absolute left-[-30px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
          aria-label="Previous image"
        >
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={goToNext}
          className="absolute right-[-38px] top-1/2 transform -translate-y-1/2 p-2 z-10 cursor-pointer"
          aria-label="Next image"
        >
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      <div className="absolute bottom-[40px] flex gap-2 flex-wrap justify-center">
        {images.map((img, idx) => (
          <button
            key={img._key || idx}
            onClick={() => setCurrentImageIndex(idx)}
            className={`relative z-20 w-[22px] h-[23px] cursor-pointer transition-all overflow-hidden ${
              idx === currentImageIndex
                ? "border-gray-400"
                : "border-gray-200 opacity-60 hover:opacity-100"
            }`}
            aria-label={`Go to image ${idx + 1}`}
          >
            <img
              src={urlFor(img.image).width(80).url()}
              alt={`Thumbnail ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};
