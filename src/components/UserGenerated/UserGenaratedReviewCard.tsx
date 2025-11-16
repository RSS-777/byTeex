import { useLayoutEffect, useRef } from "react";
import { urlFor } from "../../sanityClient";
import { StarReviews } from "../StarReviews";
import type { Review } from "../../hooks/useUserGenerated";

interface ReviewCardProps {
  review: Review;
  onHeight?: (h: number) => void;
}

export const UserGenaratedReviewCard = ({
  review,
  onHeight,
}: ReviewCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (ref.current && onHeight) {
      onHeight(ref.current.offsetHeight);
    }
  }, [ref.current]);

  return (
    <div
      ref={ref}
      className="bg-[#FFFFFF] lg:border border-[#EAEAEA] lg:shadow-[0px_3px_10px_1px_#00000014] lg:rounded-lg p-8 flex flex-col w-full max-w-[299px] lg:max-w-[338px] h-[fit-content]"
    >
      <div className="flex items-center gap-3 mb-4">
        {review.author?.avatar && (
          <img
            src={urlFor(review.author.avatar).width(48).url()}
            alt={review.author.name || "Author"}
            className="w-10 h-10 rounded-full object-cover"
          />
        )}
        <div className="flex flex-col">
          <StarReviews stars={review.rating || 0} text="" />
          <div>
            {review.author?.name && (
              <p className="text-[15px] leading-[23px] text-[#676869]">
                {review.author.name ?? "A"}
              </p>
            )}
          </div>
        </div>
      </div>

      {review.text && (
        <p className=" font-[Work_Sans] text-[15px] leading-[23px] tracking-[4%] text-[#676869] flex-grow">
          {review.text}
        </p>
      )}
    </div>
  );
};
