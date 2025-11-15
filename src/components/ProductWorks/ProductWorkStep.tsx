import { urlFor } from "../../sanityClient";

export type StepProps = {
  step: any;
  idx: number;
  bgClass?: string;
};

export const ProductWorkStep = ({ step, idx, bgClass }: StepProps) => {
  return (
    <div
      key={step._key || idx}
      className={`flex flex-col items-center text-center w-[288px] lg:w-full lg:max-w-[346px] aspect-[346/321] px2 md:px-8 py-[81px] rounded-lg ${bgClass}`}
    >
      <div>
        <img
          src={urlFor(step.icon).width(60).url()}
          alt={step.title || `step-${idx}`}
          className="w-12 h-12 object-contain"
        />
      </div>
      <h3 className="text-[22px] leading-[40px]">{step.title}</h3>
      <p className="text-[#676869] text-[15px] leading-[23px] mt-[14px] px-2">
        {step.description}
      </p>
    </div>
  );
};
