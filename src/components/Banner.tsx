import React from "react";
import { useBanner } from "../hooks/useBanner";
import { urlFor } from "../sanityClient";

export const Banner: React.FC = () => {
  const { banner, loading } = useBanner();

  if (loading) return <p className="p-6 text-center">Loading banner...</p>;
  if (!banner) return <p className="p-6 text-center">No banner data found</p>;

  return (
    <section className="w-full bg-gray-100 py-12 lg:py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">

          <div className="w-full lg:w-3/4">
            {banner.title && (
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#0b0b3b] text-center lg:text-right mb-8">
                {banner.title}
              </h2>
            )}

            {banner.stats && banner.stats.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {banner.stats.map((stat, idx) => (
                  <div
                    key={stat._key || idx}
                    className="flex flex-col items-center text-center"
                  >
                    {stat.icon && (
                      <div className="mb-4">
                        <img
                          src={urlFor(stat.icon).width(60).url()}
                          alt={stat.description || `stat-${idx}`}
                          className="w-12 h-12 md:w-14 md:h-14 object-contain"
                        />
                      </div>
                    )}

                    {stat.value && (
                      <p className="text-2xl md:text-3xl font-semibold text-[#0b0b3b] mb-2">
                        {stat.value}
                      </p>
                    )}

                    {stat.description && (
                      <p className="text-gray-600 text-sm md:text-base">
                        {stat.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
