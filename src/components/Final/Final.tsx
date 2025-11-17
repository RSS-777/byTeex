import { useFinal } from "../../hooks/useFinal";
import { HeroImages } from "../HeroImages";
import { PrimaryLinkButton } from "../PrimaryLinkButton";
import { StarReviews } from "../StarReviews";
import { FinalPayments } from "./FinalPayments";
import { FinalBenefits } from "./FinalBenefits";

export const Final = () => {
  const { finalCTA, loading } = useFinal();

  if (loading)
    return <p className="p-6 text-center">Loading final CTA section...</p>;
  if (!finalCTA)
    return <p className="p-6 text-center">No final CTA data found</p>;

  return (
    <section className="relative w-full pt-[52px] md:pt-[84px] bg-white px-[20px] pb-[52px] md:pb-[83px]">
      <div className="mb-[15px] md:mb-[25px]">
        <h2 className="text-center">{finalCTA.title}</h2>
        <p className="text-[15px] loading-[22px] tracking-[0.03em] text-[#676869] text-center mt-3 max-w-[587px] mx-auto">
          {finalCTA.subtitle}
        </p>
      </div>
      <div className="relative z-2">
        <HeroImages images={finalCTA.mainImages} />
        <PrimaryLinkButton
          link={finalCTA.ctaButton?.link || "#"}
          text={finalCTA.ctaButton?.text || "Learn More"}
          classNameButton="mt-[52px]"
        />
        <StarReviews
          stars={finalCTA.starReviews?.stars || 0}
          text={finalCTA.starReviews?.text || ""}
          className="mt-[13px] md:hidden justify-center"
        />
        <FinalPayments
          shippingInfo={finalCTA.shippingInfo}
          paymentMethods={finalCTA.paymentMethods}
        />
        <FinalBenefits additionalBenefits={finalCTA.additionalBenefits || []} />
      </div>
      <div className="absolute z-1 left-0 bottom-0 before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(360deg,#F9F0E5_0%,rgba(249,240,229,0.18)_43.05%,rgba(249,240,229,0)_100%)] h-[508px] w-full"></div>
    </section>
  );
};

export default Final;
