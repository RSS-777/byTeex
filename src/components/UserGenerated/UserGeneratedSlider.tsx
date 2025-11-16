import React, { useState, useEffect } from "react";

interface UserGeneratedSliderProps {
  children?: React.ReactNode;
  desktopSlideMaxWidth?: number;
  modileSlideMaxWidth?: number;
  visibleSlidesDesktop?: number;
}

export const UserGeneratedSlider = ({
  children,
  modileSlideMaxWidth = 299,
  desktopSlideMaxWidth = 338,
  visibleSlidesDesktop = 3,
}: UserGeneratedSliderProps) => {
  const [position, setPosition] = useState<number>(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [activeDot, setActiveDot] = useState<number>(0);
  const [heights, setHeights] = useState<number[]>([]);
  const [activeSlideHeight, setActiveSlideHeight] = useState<
    number | undefined
  >(undefined);
  const [gapDesktop, setGapDesktop] = useState<number>(40);
  const [slideWidthDesktop, setSlideWidthDesktop] =
    useState<number>(desktopSlideMaxWidth);
  const [slideWidthMobile, setSlideWidthMobile] =
    useState<number>(modileSlideMaxWidth);
  const padding = 16;
  const slideCount = React.Children.count(children);
  const slideStep = isMobile ? slideWidthMobile : slideWidthDesktop;
  const slideFullStep =
    (isMobile ? slideWidthMobile : slideWidthDesktop) +
    (isMobile ? 0 : gapDesktop);
  const minHeight = heights.length > 0 ? Math.min(...heights) : undefined;
  const minWidthContainer = isMobile
    ? slideStep * slideCount
    : slideStep * slideCount + (gapDesktop * slideCount - 1) + padding;
  const maxPosition = isMobile
    ? (slideCount - 1) * slideStep
    : (slideCount - visibleSlidesDesktop) * (slideStep + gapDesktop);
  const widthSlider = isMobile
    ? slideStep
    : slideStep * visibleSlidesDesktop +
      gapDesktop * (visibleSlidesDesktop - 1) +
      padding;

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
    const handleResize = () => {
      const w = window.innerWidth;
      setIsMobile(w < 1024);

      setSlideWidthDesktop(
        Math.min(
          desktopSlideMaxWidth,
          Math.max(200, (w / 1465) * desktopSlideMaxWidth)
        )
      );

      setSlideWidthMobile(
        Math.min(
          modileSlideMaxWidth,
          Math.max(100, (w / 430) * modileSlideMaxWidth)
        )
      );
      setGapDesktop(w >= 1200 ? 40 : w >= 768 ? 20 : 10);
      setPosition(0);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const newActiveDot = Math.round(position / slideStep);
    setActiveDot(newActiveDot);
  }, [position]);

  const goToNext = () => {
    setPosition((prev) => {
      const next = prev + slideFullStep;
      return next <= maxPosition ? next : maxPosition;
    });
  };

  const goToPrevious = () => {
    setPosition((prev) => Math.max(prev - slideFullStep, 0));
  };

  const goToSlide = (index: number) => {
    const newPosition = index * slideStep;
    setPosition(newPosition);
  };

  return (
    <div className="relative w-[fit-content] mt-[37px] md:mt-[75px] mx-auto border border-[#EAEAEA] lg:border-none shadow-[0px_3px_10px_1px_#00000014] rounded-lg lg:shadow-none lg:rounded-none">
      <div
        className="relative overflow-hidden h-auto lg:h-auto lg:py-2 lg:px-2 rounded-lg"
        style={{ width: widthSlider }}
      >
        <div
          key={
            isMobile
              ? `mobile-${slideWidthMobile}`
              : `desktop-${slideWidthDesktop}`
          }
          className="flex gap-0 lg:gap-[40px]"
          style={{
            transform: `translateX(-${position}px)`,
            height: isMobile ? `${activeSlideHeight}px` : "auto",
            minWidth: minWidthContainer,
            gap: isMobile ? 0 : gapDesktop,
            transition: "transform 0.4s ease, height 0.4s ease",
          }}
        >
          {React.Children.map(children, (child, idx) =>
            React.isValidElement(child)
              ? React.cloneElement(
                  child as React.ReactElement<{
                    onHeight?: (h: number) => void;
                    style?: React.CSSProperties;
                  }>,
                  {
                    onHeight: (h: number) => handleCardHeight(idx, h),
                    style: {
                      width: isMobile ? slideWidthMobile : slideWidthDesktop,
                      flexShrink: 0,
                    },
                  }
                )
              : child
          )}
        </div>
      </div>

      <button
        onClick={goToPrevious}
        className="absolute left-[-58px] max-[390px]:left-[-38px] transform -translate-y-1/2 p-2 z-10 cursor-pointer"
        style={{
          top:
            minHeight && !isMobile
              ? `${minHeight / 2 + 12}px`
              : activeSlideHeight
              ? `${activeSlideHeight / 2}px`
              : "50%",
        }}
        disabled={position === 0}
        aria-label="Previous image"
      >
        <svg
          className={`w-6 h-6 ${
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
        className="absolute right-[-58px] max-[390px]:right-[-38px] transform -translate-y-1/2 p-2 z-10 cursor-pointer"
        style={{
          top:
            minHeight && !isMobile
              ? `${minHeight / 2 + 12}px`
              : activeSlideHeight
              ? `${activeSlideHeight / 2}px`
              : "50%",
        }}
        disabled={position === maxPosition}
        aria-label="Next image"
      >
        <svg
          className={`w-6 h-6 ${
            position === maxPosition ? "text-[#C5C5C5]" : "text-[#676869]"
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
