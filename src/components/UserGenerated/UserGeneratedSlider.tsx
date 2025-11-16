import React, { useState, useEffect } from "react";

interface UserGeneratedSliderProps {
  children?: React.ReactNode;
}

export const UserGeneratedSlider = ({ children }: UserGeneratedSliderProps) => {
  const [position, setPosition] = useState<number>(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [activeDot, setActiveDot] = useState<number>(0);
  const [heights, setHeights] = useState<number[]>([]);
  const [activeSlideHeight, setActiveSlideHeight] = useState<number | undefined>(undefined);
  const slideCount = React.Children.count(children);
  const slideStep = 299;
  const minHeight = heights.length > 0 ? Math.min(...heights) : undefined;

  const handleCardHeight = (idx: number, h: number) => {
    setHeights((prev) => {
      const newArr = [...prev];
      newArr[idx] = h;
      return newArr;
    });
  };

  useEffect(() => {
    if (heights[activeDot] !== undefined) {
      setActiveSlideHeight(heights[activeDot]);
    }
  }, [activeDot, heights]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const newActiveDot = Math.round(position / slideStep);
    setActiveDot(newActiveDot);
  }, [position]);

  const goToNext = () => {
    setPosition((prev) => (prev !== 598 ? prev + slideStep : 598));
  };

  const goToPrevious = () => {
    setPosition((prev) => (prev !== 0 ? prev - slideStep : 0));
  };

  const goToSlide = (index: number) => {
    const newPosition = index * slideStep;
    setPosition(newPosition);
  };

  return (
    <div className="relative w-[fit-content] mt-[37px] md:mt-[75px] mx-auto border border-[#EAEAEA] lg:border-none shadow-[0px_3px_10px_1px_#00000014] rounded-lg lg:shadow-none lg:rounded-none">
      <div className="relative overflow-hidden w-[299px] h-auto lg:w-full lg:h-auto lg:py-2 lg:px-2 xl:px-8 rounded-lg">
        <div
          className="relative lg:relative top-0 flex gap-0 lg:gap-[40px] min-w-[897px]"
          style={{
            left: isMobile ? `${-position}px` : undefined,
            height: isMobile ? `${activeSlideHeight}px` : "auto",
          }}
        >
          {React.Children.map(children, (child, idx) =>
            React.isValidElement(child)
              ? React.cloneElement(
                  child as React.ReactElement<{
                    onHeight?: (h: number) => void;
                  }>,
                  {
                    onHeight: (h: number) => handleCardHeight(idx, h),
                  }
                )
              : child
          )}
        </div>
      </div>

      <button
        onClick={goToPrevious}
        className="absolute left-[-30px] max-[390px]:left-0  max-[1024px]:left-[-40px]  transform -translate-y-1/2 z-10 cursor-pointer"
        style={{
          top:
            minHeight && !isMobile
              ? `${minHeight / 2}px`
              : activeSlideHeight
              ? `${activeSlideHeight / 2}px`
              : "50%",
        }}
        aria-label="Previous image"
      >
        <svg
          className={`w-8 h-8 ${
            position === 0 ? "text-[#C5C5C5]" : "text-[#676869]"
          }`}
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
        className="absolute right-[-38px] max-[390px]:right-[-5px]  max-[1024px]:right-[-48px] transform -translate-y-1/2 p-2 z-10 cursor-pointer"
        style={{
          top:
            minHeight && !isMobile
              ? `${minHeight / 2}px`
              : activeSlideHeight
              ? `${activeSlideHeight / 2}px`
              : "50%",
        }}
        aria-label="Next image"
      >
        <svg
          className={`w-8 h-8 ${
            position === 598 ? "text-[#C5C5C5]" : "text-[#676869]"
          }`}
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

      <div className="relative bottom-[-35px] flex justify-center gap-2 lg:hidden">
        {Array.from({ length: slideCount }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              activeDot === index ? "bg-[#000000]" : "bg-[#C4C4C4]"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
