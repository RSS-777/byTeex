import { urlFor } from "../../sanityClient";
import type { CTA } from "../../hooks/useHeader";

export const CTAButton = ({ cta }: { cta?: CTA }) => {
  if (!cta) return null;

  return (
    <a
      href={cta.link || "#"}
      className="flex items-center justify-center font-[Work_Sans] bg-[#01005B] w-full max-w-[369px] text-lg text-white px-6 py-3 mt-[29px] mx-auto md:ml-0 rounded shadow hover:opacity-95"
    >
      <span className="mr-3">{cta.text || "Learn more"}</span>
      <img
        src={urlFor(cta.icon).width(20).url()}
        alt="cta-icon"
        className="w-4 h-4 md:self-end"
      />
    </a>
  );
};
