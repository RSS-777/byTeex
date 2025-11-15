import React from "react";
import { useFounder } from "../hooks/useFounder";
import { urlFor } from "../sanityClient";
import { PrimaryLinkButton } from "./PrimaryLinkButton";

export const Founder: React.FC = () => {
  const { founder, loading } = useFounder();

  if (loading)
    return <p className="p-6 text-center">Loading founder section...</p>;
  if (!founder) return <p className="p-6 text-center">No founder data found</p>;

  return (
    <section className="w-full bg-[#F0EEEF] pt-[39px] lg:pt-[113px] pb-[14px] lg:pb-[95px] px-[37px]">
        <div className=" relative flex flex-col lg:flex-row lg:justify-evenly items-start gap-8 lg:gap-16 pt-[130px] lg:pt-[0px]">
           
          <div className="relative lg:top-auto w-full max-w-[381px] mx-auto lg:mx-0 lg:ml-20  px-6 lg:px-0">
            <img
              src={urlFor(founder.mainImage).width(400).url()}
              alt="Founder main"
              className="w-full h-auto object-cover"
            />

            {founder.additionalImages && founder.additionalImages[0] && (
              <img
                src={urlFor(founder.additionalImages[0]).width(200).url()}
                alt="Additional 1"
                className="absolute top-0 left-0 w-[clamp(101px,20vw,155px)] object-cover transform -translate-x-1/4 -translate-y-1/4"
              />
            )}

            {founder.additionalImages && founder.additionalImages[1] && (
              <img
                src={urlFor(founder.additionalImages[1]).width(200).url()}
                alt="Additional 2"
                className="absolute bottom-0 right-0 w-[clamp(109px,20vw,128px)] h-[clamp(111px,20vw,175px)] object-cover transform translate-x-1/4 translate-y-1/4"
              />
            )}
          </div>
          
          <div className="w-full max-w-[641px] mx-auto lg:mx-0 mt-[76px] lg:mt-0">
            <h2 className="absolute left-1/2 -translate-x-1/2 text-center lg:text-left w-full lg:relative top-[39px] lg:top-auto text-[#2A2996]  mb-6">{founder.title}</h2>

            {founder.description?.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-[15px] leading-[23px] mb-6 text-[#6C6C6C]"
              >
                {paragraph}
              </p>
            ))}

            <PrimaryLinkButton
              link={founder.ctaButton?.link || "#"}
              text="Customize Your Outfit"
              classNameSpan="invisible"
              classNameButton="ml-0 hidden lg:flex"
            />
          </div>

        </div>
    </section>
  );
};

export default Founder;
