import { useEffect, useState } from "react";
import { useHeader } from "../../hooks/useHeader";
import { HeaderAnnouncementBar } from "./HeaderAnnouncementBar";
import { Logo } from "./Logo";
import { HeroImages } from "../HeroImages";
import { Features } from "./Features";
import { PrimaryLinkButton } from "../PrimaryLinkButton";
import { ReviewCard } from "./ReviewCard";

export const Header = () => {
  const headerData = useHeader();
  const [windowWidth, setWindowWidth] = useState<number>(typeof window !== "undefined" ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  },[]);

  if (!headerData) return <p className="p-6 text-center">Loading header...</p>;

  return (
    <header className="w-full bg-white">
      <HeaderAnnouncementBar
        navigationText={headerData.navigationText}
        windowWidth={windowWidth}
      />
      <div className=" relative p-[20px] pt-[14px]">
        <Logo logo={headerData.logo} />
        <div className="relative flex flex-col md:flex-row mt-[13px] md:mt-[61.66px]">
          <h1 className=" md:absolute top-0 left-0 text-center  mx-auto  md:text-left  md:ml-[102px]  max-w-[592px]">
            {headerData.title}
          </h1>
          <div className="flex flex-col md:gap-2 md:flex-row">
            <HeroImages images={headerData.images} />
            <div className="mt-[24px] md:ml-[106px] md:mt-20">
              <Features features={headerData.features} />
              <PrimaryLinkButton
                link="#"
                text={headerData.ctaButton?.text || ""}
                classNameSpan="md:self-end"
                classNameButton="mt-[29px] md:ml-0"
              />
            </div>
          </div>
        </div>
        <ReviewCard review={headerData.review} />
      </div>
    </header>
  );
};

export default Header;
