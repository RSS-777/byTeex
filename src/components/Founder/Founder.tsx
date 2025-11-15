import { useFounder } from "../../hooks/useFounder";
import { PrimaryLinkButton } from "../PrimaryLinkButton";
import { FounderImages } from "./FounderImages";

export const Founder = () => {
  const { founder, loading } = useFounder();

  if (loading)
    return <p className="p-6 text-center">Loading founder section...</p>;
  if (!founder) return <p className="p-6 text-center">No founder data found</p>;

  return (
    <section className="w-full bg-[#F0EEEF] pt-[39px] lg:pt-[113px] pb-[14px] lg:pb-[95px] px-[37px]">
      <div className=" relative flex flex-col lg:flex-row lg:justify-evenly items-start gap-8 lg:gap-16 pt-[130px] lg:pt-[0px]">
        <FounderImages
          main={founder.mainImage}
          additional={founder.additionalImages}
        />
        <div className="w-full max-w-[641px] mx-auto lg:mx-0 mt-[76px] lg:mt-0">
          <h2 className="absolute left-1/2 -translate-x-1/2 text-center lg:text-left w-full lg:relative top-[39px] lg:top-auto text-[#2A2996]  mb-6">
            {founder.title}
          </h2>
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
