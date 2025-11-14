import { renderStars } from "../utils/renderStars";

type RatingBannerProps = {
  stars: number;
  text: string;
  className?: string;
};

export const StarReviews = ({ stars, text, className }: RatingBannerProps) => {
  return (
    <div className={`flex items-center gap-2 ${className || ""}`}>
      <div className="text-sm">{renderStars(stars)}</div>
      <span className="font-[Work_Sans] text-[12px] text-[#828282] leading-[20px]">{text}</span>
    </div>
  );
};
