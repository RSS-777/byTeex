import { useState } from "react";
interface ProductWorksSliderProps {
  children?: React.ReactNode;
}

export const ProductWorksSlider = ({ children }: ProductWorksSliderProps) => {
  const [position, setPosition] = useState<number>(0);

  const goToNext = () => {
    setPosition((prev) => (prev !== 576 ? (prev += 288) : 576));
    console.log(position);
  };
  const goToPrevious = () => {
    setPosition((prev) => (prev !== 0 ? (prev -= 288) : 0));
    console.log(position);
  };

  return (
    <div className="relative w-[fit-content] mt-[23px] lg:mt-[46px] mx-auto">
      <div className="relative overflow-hidden w-[288px] h-[288px] lg:w-full lg:h-auto  rounded-lg">
        <div
          className={`absolute lg:relative top-0 flex gap-0 lg:gap-[40px] min-w-[864px]`}
          style={{ left: `${-position}px` }}
        >
          {children}
        </div>
      </div>
      <button
        onClick={goToPrevious}
        className="absolute left-[-20px] min-[380px]:left-[-30px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
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
        className="absolute right-[-28px] min-[380px]:right-[-38px] top-1/2 transform -translate-y-1/2 p-2 z-10 cursor-pointer"
        aria-label="Next image"
      >
        <svg
          className={`w-6 h-6 ${
            position === 576 ? "text-[#C5C5C5]" : "text-[#676869]"
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
    </div>
  );
};
