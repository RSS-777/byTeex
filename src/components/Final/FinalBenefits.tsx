import type { AdditionalBenefit } from "../../hooks/useFinal";
import { urlFor } from "../../sanityClient";

interface IFinalBenefitsProps {
  additionalBenefits: AdditionalBenefit[];
}

export const FinalBenefits = ({ additionalBenefits }: IFinalBenefitsProps) => {
  if (!additionalBenefits) return null;

  return (
    <div className="hidden md:flex justify-center mt-[23px]">
      {additionalBenefits?.map((benefit, idx) => (
        <div
          key={benefit._key || idx}
          className="flex items-center gap-[12px] text-center h-[51px]  border-r border-r-[#C4C4C466] px-[20px] last:border-r-0"
        >
          {benefit.icon && (
            <img
              src={urlFor(benefit.icon).width(33).url()}
              alt={benefit.text || `benefit-${idx}`}
              className="w-[33px] h-[33px] flex-shrink-0"
            />
          )}
          {benefit.text && (
            <p className="text-[#676869] text-left max-w-[120px] text-[14px] loading-[20px] tracking-[0.03em]">
              {benefit.text}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};
