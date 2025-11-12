import React from "react";
import { useFounder } from "../hooks/useFounder";
import { urlFor } from "../sanityClient";

export const Founder: React.FC = () => {
  const { founder, loading } = useFounder();

  if (loading)
    return <p className="p-6 text-center">Loading founder section...</p>;
  if (!founder) return <p className="p-6 text-center">No founder data found</p>;

  return (
    <section className="w-full bg-gray-100 py-12 lg:py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="w-full lg:w-1/3">
            <div className="relative flex flex-col gap-4 md:flex-row md:gap-4 lg:flex-col">
              {founder.mainImage && (
                <div className="relative w-full md:w-1/2 lg:w-full">
                  <img
                    src={urlFor(founder.mainImage).width(400).url()}
                    alt="Founder main"
                    className="w-full h-auto object-cover rounded-lg shadow-md"
                  />
                </div>
              )}

              {founder.additionalImages &&
                founder.additionalImages.length > 0 && (
                  <div className="flex gap-4 w-full md:w-1/2 lg:w-full lg:flex-row">
                    {founder.additionalImages.slice(0, 2).map((img, idx) => (
                      <div key={idx} className="flex-1">
                        <img
                          src={urlFor(img).width(200).url()}
                          alt={`Additional ${idx + 1}`}
                          className="w-full h-auto object-cover rounded-lg shadow-md"
                        />
                      </div>
                    ))}
                  </div>
                )}
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            {founder.title && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0b0b3b] leading-tight mb-6">
                {founder.title}
              </h2>
            )}

            {founder.description && founder.description.length > 0 && (
              <div className="space-y-4 mb-8 text-gray-600 text-sm md:text-base leading-relaxed">
                {founder.description.map((paragraph, idx) => (
                  <p key={idx} className="text-gray-600">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}

            {founder.ctaButton && (
              <div>
                <a
                  href={founder.ctaButton.link || "#"}
                  className="inline-block bg-[#0b0b3b] text-white px-8 py-3 rounded font-medium hover:opacity-90 transition-opacity"
                >
                  {founder.ctaButton.text || "Learn More"}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
