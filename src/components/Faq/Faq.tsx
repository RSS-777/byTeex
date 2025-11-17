import { useFaq } from "../../hooks/useFaq";
import { FaqList } from "./FaqList";
import { FaqImages } from "./FaqImages";
import { PrimaryLinkButton } from "../PrimaryLinkButton";
import { StarReviews } from "../StarReviews";

export const Faq = () => {
  const { faq, loading } = useFaq();

  if (loading) return <p className="p-6 text-center">Loading FAQ...</p>;
  if (!faq) return <p className="p-6 text-center">No FAQ data found</p>;

  return (
    <section className="w-full bg-white pt-[59px] lg:pt-[109px] px-[20px]">
      <div className="md:flex lg:flex-row justify-end items-start gap-[88px] px-2 min-[380px]:px-4">
        <FaqList faq={faq} />
        <FaqImages images={faq.images} />
      </div>
      <div className="block md:hidden mt-[39px]">
        <PrimaryLinkButton
          link={faq.ctaButton?.link || "#"}
          text={faq.ctaButton?.text || "Learn More"}
        />
        <StarReviews
          stars={faq.reviewsInfo?.stars || 0}
          text={faq.reviewsInfo?.reviewCount || ""}
          className="mt-[12px] justify-center"
        />
      </div>
    </section>
  );
};

export default Faq;
