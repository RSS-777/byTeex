import { urlFor } from "../../sanityClient";
import type { Benefit } from "../../hooks/useTopBenefits";

type TopBenefitsListProps = {
  benefits: Benefit[];
};

export const TopBenefitsList = ({ benefits }: TopBenefitsListProps) => {
  return (
    <ul className="space-y-2 mt-4 lg:mt-[85px]">
      {benefits.map((benefit, idx) => (
        <li
          key={benefit._key || idx}
          className="flex flex-col lg:flex-row items-center lg:items-start gap-[20px] lg:gap-[32px] border-b lg:border-b-0 border-gray-300 last:border-b-0 pb-8 lg:pb-0 mx-6 max-w-[550px] mx-auto"
        >
          <div className="flex-shrink-0 w-8 h-8 lg:w-10 lg:h-10">
            <img
              src={urlFor(benefit.icon).width(40).url()}
              alt={benefit.title || `benefit-${idx}`}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="lg:mt-2">
            {benefit.title && (
              <h3 className="text-[20px] lg:text-[22px] leading-[24px] text-center lg:text-left">
                {benefit.title}
              </h3>
            )}
            {benefit.description && (
              <p className="text-center lg:text-left text-[14px] lg:text-[15px] leading-[18px] lg:leading-[23px] text-[#676869] mt-5 lg:mt-[6px] max-w-[497px]">
                {benefit.description}
              </p>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};
