import { urlFor } from "../sanityClient";
import type { ImageWithAlt } from "../hooks/useHeader";

export const HeroImages = ({ images }: { images?: ImageWithAlt[] }) => {
  if (!images || images.length < 3) return null;

  return (
    <div className="relative flex justify-center items-center md:order-2 w-full max-w-[725px] mx-auto py-[17px] overflow-hidden">
      <div className="absolute left-[clamp(5px,10vw,-67px)] top-1/2 -translate-y-1/2 w-[clamp(70px,10vw,134px)]  aspect-[3/4] bg-gradient-to-t from-[#F9F0E5] to-[#F9F0E54F]"></div>
      <div className="relative z-10 translate-x-6 md:translate-x-12">
        <img
          src={urlFor(images[2]).width(800).url()}
          alt={images[2].alt || "left image"}
          className="w-52 md:w-64 lg:w-72 aspect-[3/4] object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[#F9F0E5]/40"></div>
      </div>
      <div className="relative z-20 mx-2 md:mx-6">
        <img
          src={urlFor(images[1]).width(800).url()}
          alt={images[1].alt || "center image"}
          className="w-60 md:w-80 lg:w-[22rem] aspect-[3/4] object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[#F9F0E5]/50"></div>
      </div>
      <div className="relative z-10 -translate-x-6 md:-translate-x-12">
        <img
          src={urlFor(images[0]).width(800).url()}
          alt={images[0].alt || "right image"}
          className="w-52 md:w-64 lg:w-72 aspect-[3/4] object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[#F9F0E5]/40"></div>
      </div>
      <div className="absolute right-[clamp(5px,10vw,-67px)] top-1/2 -translate-y-1/2 w-[clamp(70px,10vw,134px)] aspect-[3/4] bg-gradient-to-t from-[#F9F0E5] to-[#F9F0E54F]"></div>
    </div>
  );
};
