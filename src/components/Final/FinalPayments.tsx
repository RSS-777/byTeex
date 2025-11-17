import type { ShippingInfo } from "../../hooks/useFinal";
import { urlFor } from "../../sanityClient";

interface IFinalProps {
  shippingInfo?: ShippingInfo;
  paymentMethods?: any[];
}
export const FinalPayments = ({
  shippingInfo,
  paymentMethods,
}: IFinalProps) => {
  if (!shippingInfo && (!paymentMethods || paymentMethods.length === 0))
    return null;

  return (
    <div className="items-center justify-center mt-[13px] hidden md:flex">
      <div className="flex items-center gap-3 h-[17px] px-[10px] border-r-2 border-r-[#C4C4C440]">
        <img
          src={urlFor(shippingInfo?.icon).width(11).url()}
          alt="shipping"
          className="w-[11px] h-[11px]"
        />
        <p className="text-[10px] leading-[17px] tracking-[0.04em] text-[#1FAD40]">
          {shippingInfo?.text}
        </p>
      </div>
      <div className="w-[243px] h-[22px] px-[5px]">
        {paymentMethods?.map((method, idx) => (
          <img
            key={idx}
            src={urlFor(method).width(243).url()}
            alt={`Payment method ${idx + 1}`}
            className="h-6 object-contain"
          />
        ))}
      </div>
    </div>
  );
};
