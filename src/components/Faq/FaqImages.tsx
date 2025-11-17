import { urlFor } from "../../sanityClient";

interface IFaqProps {
  images?: any[];
}

export const FaqImages = ({ images }: IFaqProps) => {
  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full max-w-[430px] aspect-[2/3] hidden md:block lg:mr-[25px] xl:mr-[69px] flex-shrink: 1">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[52.7%] h-[55%]">
          <div className="absolute left-[-22%] top-[-17%] w-[65.6%] h-[52.6%] bg-gradient-to-t from-[#F9F0E5] to-[#F9F0E54F]"></div>
          <img
            src={urlFor(images?.[0]).width(227).url()}
            alt="FAQ image"
            className="absolute top-0 left-0 w-full h-full object-contain z-10"
          />
          <img
            src={urlFor(images?.[2]).width(216).url()}
            alt="FAQ image"
            className="absolute left-[-35%] bottom-[-32%] w-[95%] object-contain"
          />
          <img
            src={urlFor(images?.[1]).width(167).url()}
            alt="FAQ image"
            className="absolute top-[-38%] right-[-36%] w-[73.5%] aspect-[167/253] object-contain"
          />
          <div className="absolute right-[-28%] bottom-[-10%] w-[59%] h-[53%] bg-gradient-to-t from-[#F9F0E5] to-[#F9F0E54F]"></div>
        </div>
      </div>
    </div>
  );
};
