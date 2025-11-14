import { urlFor } from "../../sanityClient";
import { renderStars } from "../../utils/renderStars";
import type { Review } from "../../hooks/useHeader";

export const ReviewCard = ({ review }: { review?: Review }) => {
  if (!review) return null;

  return (
    <div className="relative z-2 w-full max-w-[416px]  bg-white rounded-lg shadow-sm p-4 mt-[31px] mb-[-100px] md:mb-[-98px] mx-auto md:ml-[106px]">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden text-sm text-gray-600">
          {review?.avatar ? (
            <img
              src={urlFor(review.avatar).width(40).url()}
              alt={review.avatar.alt || review?.author || "Author avatar"}
              className="w-full h-full object-cover"
            />
          ) : (
            <span>{review?.author ? review.author[0] : "A"}</span>
          )}
        </div>
        <div className="flex items-start md:items-center gap-2">
          <div className="flex flex-col md:flex-row md:items-center md:gap-4">
            <div className="text-sm md:order-2">
              {review?.rating && renderStars(review.rating)}
            </div>
            <div className="text-[15px] leading-[23px] text-[#676869]">
              {review?.author}
            </div>
          </div>
          <p className="text-[11px] leading-[20px] text-[#828282] font-[Work_Sans] tracking-[0.02em]">
            {review?.additionalInfo}
          </p>
        </div>
      </div>
      <p className="mt-3 text-[12px] leading-[23px] text-[#676869] font-[Work_Sans]">
        {review?.text}
      </p>
    </div>
  );
}
