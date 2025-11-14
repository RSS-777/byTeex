import { useTopBenefits } from "../../hooks/useTopBenefits";
import { LogosCarousel } from "./LogosCarousel";
import { TopBenefitsSlider } from "./TopBenefitsSlider";
import { TopBenefitsList } from "./TopBenefitsList";
import { StarReviews } from "../StarReviews";
import { PrimaryLinkButton } from "../PrimaryLinkButton";

export const TopBenefits = () => {
  const { topBenefits, loading } = useTopBenefits();

  if (loading) return <p className="p-6 text-center">Loading benefits...</p>;
  if (!topBenefits)
    return <p className="p-6 text-center">No benefits data found</p>;

  return (
    <section className="relative w-full bg-stone-50 pt-[92px] lg:pt-[77px] pb-[43px] lg:pb-[54px]">
      <div className="absolute z-1 top-0 left-0 right-0 bg-gradient-to-b from-[#F9F0E5] from-18% to-transparent h-[230px]"></div>
      {topBenefits.featuredInTitle &&
        topBenefits.featuredIn &&
        topBenefits.featuredIn.length > 0 && (
          <div className="relative z-2 mx-auto px-6">
            <p className="text-center text-xl text-[#868787] leading-[23px]">
              {topBenefits.featuredInTitle}
            </p>
            <LogosCarousel logos={topBenefits.featuredIn} />
          </div>
        )}

      <div className="relative z-2 flex flex-col lg:flex-row gap-6 items-start justify-evenly mt-[6px] lg:mt-[110px] px-[25px] lg:px-[108px]">
        <div className=" order-2 lg:order-1 w-full">
          <h2 className="absolute left-1/2 transform -translate-x-1/2 lg:relative w-full top-0 text-center lg:text-left px-6">
            {topBenefits.title}
          </h2>
          <TopBenefitsList benefits={topBenefits.benefits!} />
          <PrimaryLinkButton
            link="#"
            text="Customize Your Outfit"
            classNameButton="lg:hidden "
          />
          <StarReviews
            text="Over 500+ 5 Star Reviews Online"
            stars={5}
            className="mt-[7px] justify-center lg:hidden "
          />
        </div>
        <TopBenefitsSlider images={topBenefits.sliderImages!} />
      </div>
    </section>
  );
};

export default TopBenefits;
