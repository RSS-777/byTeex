import { useEffect, useState } from "react";
import { useHeader } from "../hooks/useHeader";
import { urlFor } from "../sanityClient";

export const Header = () => {
  const headerData = useHeader();
  const [windowWidth, setWindowWidth] = useState<number>(1024);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  const renderStars = (rating: number, maxStars = 5) => {
    return Array.from({ length: maxStars }).map((_, i) => (
      <span key={i} className="text-yellow-500">
        {i < rating ? "★" : "☆"}
      </span>
    ));
  };

  if (!headerData) return <p className="p-6 text-center">Loading header...</p>;

  return (
    <header className="w-full bg-white">
      {headerData.navigationText && headerData.navigationText.length > 0 && (
        <div className="bg-[#F9F0E5] h-[36px] flex justify-center items-center">
          <p className="font-[Work_Sans] text-[11px] leading-[35px] text-[#565656] px-2">
            {headerData.navigationText
              .filter((_, i) => {
                if (windowWidth < 687) return i === 1;
                if (windowWidth < 900) return i === 0 || i === 1;
                return true;
              })
              .map((t, i, arr) => (
                <span key={i} className="inline-flex items-center">
                  {t}
                  {i !== arr.length - 1 && (
                    <span className="text-[6px] mx-2">|</span>
                  )}
                </span>
              ))}
          </p>
        </div>
      )}

      <div className=" relative p-[20px] pt-[14px]">
        <div className="m-auto md:mx-[96px] md:mt-[19px] w-[200px] h-[36px]">
          {headerData.logo && (
            <img
              src={urlFor(headerData.logo).width(200).height(36).url()}
              alt="Logo"
              className="w-full h-full object-contain"
            />
          )}
        </div>

        <div className="relative flex flex-col md:flex-row mt-[13px] md:mt-[61.66px]">
          <h1 className=" md:absolute top-0 left-0 text-center  mx-auto  md:text-left  md:ml-[102px]  max-w-[592px]">
            {headerData.title}
          </h1>

          <div className="flex flex-col md:gap-2 md:flex-row">
            {headerData?.images && headerData.images.length >= 3 && (
              <div className="relative flex justify-center items-center md:order-2 w-full max-w-[725px] mx-auto py-[17px] overflow-hidden">
                <div className="absolute left-[clamp(5px,10vw,-67px)] top-1/2 -translate-y-1/2 w-[clamp(70px,10vw,134px)]  aspect-[3/4] bg-gradient-to-t from-[#F9F0E5] to-[#F9F0E54F]"></div>

                <div className="relative z-10 translate-x-6 md:translate-x-12">
                  <img
                    src={urlFor(headerData.images[2]).width(800).url()}
                    alt={headerData.images[2].alt || "left image"}
                    className="w-52 md:w-64 lg:w-72 aspect-[3/4] object-cover shadow-lg"
                  />
                  <div className="absolute inset-0 -z-10 bg-[#F9F0E5]/40"></div>
                </div>

                <div className="relative z-20 mx-2 md:mx-6">
                  <img
                    src={urlFor(headerData.images[1]).width(800).url()}
                    alt={headerData.images[1].alt || "center image"}
                    className="w-60 md:w-80 lg:w-[22rem] aspect-[3/4] object-cover shadow-xl"
                  />
                  <div className="absolute inset-0 -z-10 bg-[#F9F0E5]/50"></div>
                </div>

                <div className="relative z-10 -translate-x-6 md:-translate-x-12">
                  <img
                    src={urlFor(headerData.images[0]).width(800).url()}
                    alt={headerData.images[0].alt || "right image"}
                    className="w-52 md:w-64 lg:w-72 aspect-[3/4] object-cover  shadow-md"
                  />
                  <div className="absolute inset-0 -z-10 bg-[#F9F0E5]/40"></div>
                </div>

                <div className="absolute right-[clamp(5px,10vw,-67px)] top-1/2 -translate-y-1/2 w-[clamp(70px,10vw,134px)] aspect-[3/4] bg-gradient-to-t from-[#F9F0E5] to-[#F9F0E54F]"></div>
              </div>
            )}

            <div className="mt-[24px] md:ml-[106px] md:mt-20">
              <ul className="space-y-4  mt-[24px]">
                {headerData.features?.map((f, idx) => (
                  <li key={f._key || idx} className="flex items-center gap-2.5">
                    {f.icon && (
                      <img
                        src={urlFor(f.icon).width(40).url()}
                        alt={f.text || `feature-${idx}`}
                        className="w-10 h-10 rounded-full bg-amber-50 p-2"
                      />
                    )}
                    <span className="text-[text-gray-600]">{f.text}</span>
                  </li>
                ))}
              </ul>
              <a
                href={headerData.ctaButton?.link || "#"}
                className="flex items-center justify-center font-[Work_Sans] bg-[#01005B] w-full max-w-[369px] text-lg text-white px-6 py-3 mt-[29px] mx-auto md:ml-0 rounded shadow hover:opacity-95"
              >
                <span className="mr-3">
                  {headerData.ctaButton?.text || "Learn more"}
                </span>
                <img
                  src={urlFor(headerData.ctaButton?.icon).width(20).url()}
                  alt="cta-icon"
                  className="w-4 h-4 md:self-end"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="relative z-2 w-full max-w-[416px]  bg-white rounded-lg shadow-sm p-4 mt-[31px] mb-[-100px] md:mb-[-98px] mx-auto md:ml-[106px]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden text-sm text-gray-600">
              {headerData.review?.avatar ? ( 
                <img
                  src={urlFor(headerData.review.avatar).width(40).url()}
                  alt={
                    headerData.review.avatar.alt ||
                    headerData.review?.author ||
                    "Author avatar"
                  }
                  className="w-full h-full object-cover"
                />
              ) : (
                <span>
                  {headerData.review?.author
                    ? headerData.review.author[0]
                    : "A"}
                </span>
              )}
            </div>
            <div className="flex items-start md:items-center gap-2">
              <div className="flex flex-col md:flex-row md:items-center md:gap-4">
                <div className="text-sm md:order-2">
                  {headerData.review?.rating &&
                    renderStars(headerData.review.rating)}
                </div>
                 <div className="text-[15px] leading-[23px] text-[#676869]">
                  {headerData.review?.author}
                </div>
              </div>
              <p className="text-[11px] leading-[20px] text-[#828282] font-[Work_Sans] tracking-[0.02em]">
                {headerData.review?.additionalInfo}
              </p>
            </div>
          </div>
          <div className="mt-3 text-[12px] leading-[23px] text-[#676869] font-[Work_Sans]">
            {headerData.review?.text}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
