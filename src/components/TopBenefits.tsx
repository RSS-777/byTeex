import React, { useState } from "react";
import { useTopBenefits } from "../hooks/useTopBenefits";
import { urlFor } from "../sanityClient";

export const TopBenefits: React.FC = () => {
  const { topBenefits, loading } = useTopBenefits();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (loading) return <p className="p-6 text-center">Loading benefits...</p>;
  if (!topBenefits)
    return <p className="p-6 text-center">No benefits data found</p>;

  const hasImages =
    topBenefits.sliderImages && topBenefits.sliderImages.length > 0;
  const currentImage = hasImages
    ? topBenefits.sliderImages![currentImageIndex]
    : null;

  const goToPrevious = () => {
    if (hasImages) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? topBenefits.sliderImages!.length - 1 : prev - 1
      );
    }
  };

  const goToNext = () => {
    if (hasImages) {
      setCurrentImageIndex((prev) =>
        prev === topBenefits.sliderImages!.length - 1 ? 0 : prev + 1
      );
    }
  };

  return (
    <section className="relative w-full bg-stone-50 py-[92px] md:py-[77px] ">
      <div className="absolute z-1 top-0 left-0 right-0 bg-gradient-to-b from-[#F9F0E5] from-18% to-transparent h-[530px]"></div>
      {topBenefits.featuredInTitle &&
        topBenefits.featuredIn &&
        topBenefits.featuredIn.length > 0 && (
          <div className="relative z-2 container mx-auto px-6 mb-12">
            <p className="text-center text-sm text-gray-500 mb-6">
              {topBenefits.featuredInTitle}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {topBenefits.featuredIn.map((logo, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center h-12"
                >
                  <img
                    src={urlFor(logo).width(150).url()}
                    alt={`Featured in ${idx}`}
                    className="h-8 md:h-10 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

      <div className="relative z-2 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2">
            {topBenefits.title && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0b0b3b] leading-tight mb-8">
                {topBenefits.title}
              </h2>
            )}

            {topBenefits.benefits && topBenefits.benefits.length > 0 && (
              <ul className="space-y-6">
                {topBenefits.benefits.map((benefit, idx) => (
                  <li
                    key={benefit._key || idx}
                    className="flex items-start gap-4"
                  >
                    {benefit.icon && (
                      <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10">
                        <img
                          src={urlFor(benefit.icon).width(40).url()}
                          alt={benefit.title || `benefit-${idx}`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    )}
                    <div>
                      {benefit.title && (
                        <h3 className="text-lg md:text-xl font-semibold text-[#0b0b3b] mb-2">
                          {benefit.title}
                        </h3>
                      )}
                      {benefit.description && (
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                          {benefit.description}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {hasImages && currentImage && (
            <div className="w-full lg:w-1/2 flex flex-col items-center">
              <div className="relative w-full mb-4">
                <div className="relative bg-gradient-to-b from-amber-100 to-amber-50 rounded-lg overflow-hidden aspect-[3/4]">
                  <img
                    src={urlFor(currentImage.image).width(500).url()}
                    alt={currentImage.caption || "Product"}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 transition-all z-10"
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
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 transition-all z-10"
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
              </div>

              {currentImage.caption && (
                <p className="text-center text-gray-600 text-sm mb-4">
                  {currentImage.caption}
                </p>
              )}

              <div className="flex gap-2 flex-wrap justify-center">
                {topBenefits.sliderImages! &&
                  topBenefits.sliderImages!.map((img, idx) => (
                    <button
                      key={img._key || idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`relative w-10 h-12 rounded border-2 transition-all overflow-hidden ${
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
          )}
        </div>
      </div>
    </section>
  );
};

export default TopBenefits;
