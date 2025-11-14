import { urlFor } from "../../sanityClient";
import type { ImageWithAlt } from "../../hooks/useHeader";

export const Logo = ({ logo }: { logo?: ImageWithAlt }) => {
  if (!logo) return null;

  return (
    <div className="m-auto md:mx-[96px] md:mt-[19px] w-[200px] h-[36px]">
      <img
        src={urlFor(logo).width(200).height(36).url()}
        alt="Logo"
        className="w-full h-full object-contain"
      />
    </div>
  );
};
