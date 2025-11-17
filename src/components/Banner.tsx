import { useBanner } from "../hooks/useBanner";
import { urlFor } from "../sanityClient";

export const Banner = () => {
  const { banner, loading } = useBanner();

  if (loading) return <p className="p-6 text-center">Loading banner...</p>;
  if (!banner) return <p className="p-6 text-center">No banner data found</p>;

  return (
    <section className="w-full bg-[#F0EEEF] pt-[52px] md:pt-[39px] pb-[56px] md:pb-[42px] mt-[52px] md:mt-[42px]">
      <h2
        className="text-[25px] loading-[40px] text-center  md:!text-[#15005B] tracking-[0.04em]"
        style={{ color: "#2A2996" }}
      >
        {banner.title}
      </h2>

      <div className="flex flex-col items-center md:flex-row justify-center mt-[15px] md:mt-[26px]">
        {banner.stats?.map((stat, idx) => (
          <div
            key={stat._key || idx}
            className="flex flex-col items-center  text-center last:hidden md:last:flex border-b border-b-[#C4C4C480] md:border-b-0 md:border-r md:border-r-[#C4C4C480] last:border-r-0 w-[282px] md:w-auto px-[41px] md:h-[122px] pb-[16px] pt-[23px]  md:pt-[0]"
          >
            {stat.icon && (
              <div className="mb-4">
                <img
                  src={urlFor(stat.icon).width(42).url()}
                  alt={stat.description || `stat-${idx}`}
                  className=" object-contain"
                />
              </div>
            )}

            {stat.value && (
              <p
                className="md:!text-[#15005B] text-center text-[22px]  font-semibold leading-[20px] tracking-[0.02em] mt-[13px]"
                style={{ color: "#2A2996" }}
              >
                {stat.value}
              </p>
            )}

            {stat.description && (
              <p
                className="md:!text-[#15005B] text-center text-[14px] leading-[20px] tracking-[0.03em] mt-1"
                style={{ color: "#2A2996" }}
              >
                {stat.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Banner;
