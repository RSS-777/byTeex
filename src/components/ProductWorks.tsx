import React from "react";
import { useProductWorks } from "../hooks/useProductWorks";
import { urlFor } from "../sanityClient";

export const ProductWorks: React.FC = () => {
  const { productWorks, loading } = useProductWorks();

  if (loading)
    return <p className="p-6 text-center">Loading product works...</p>;
  if (!productWorks)
    return <p className="p-6 text-center">No product works data found</p>;

  const renderStars = (count: number | undefined) => {
    if (!count) return null;
    return (
      <span className="text-yellow-400">
        {Array.from({ length: Math.min(5, count || 0) }).map((_, i) => (
          <span key={i}>★</span>
        ))}
      </span>
    );
  };

  return (
    <section className="w-full bg-white py-12 lg:py-20">
      <div className="container mx-auto px-6">
        {productWorks.title && (
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0b0b3b] text-center mb-12 lg:mb-16">
            {productWorks.title}
          </h2>
        )}

        {productWorks.steps && productWorks.steps.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {productWorks.steps.map((step, idx) => (
              <div
                key={step._key || idx}
                className={`flex flex-col items-center text-center p-6 rounded-lg transition-colors ${
                  idx === 1
                    ? "bg-amber-50 border border-amber-100"
                    : "bg-gray-100 border border-gray-200"
                }`}
              >
                {step.icon && (
                  <div className="mb-4">
                    <img
                      src={urlFor(step.icon).width(60).url()}
                      alt={step.title || `step-${idx}`}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                )}

                {step.title && (
                  <h3 className="text-lg md:text-xl font-semibold text-[#0b0b3b] mb-2">
                    {step.title}
                  </h3>
                )}

                {step.description && (
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {step.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-col items-center mb-8">
          {productWorks.htoButton && (
            <a
              href={productWorks.htoButton.link || "#"}
              className="inline-flex items-center bg-[#0b0b3b] text-white px-8 py-3 rounded font-medium hover:opacity-90 transition-opacity gap-3"
            >
              <span>{productWorks.htoButton.text || "Learn More"}</span>
              {productWorks.htoButton.image && (
                <img
                  src={urlFor(productWorks.htoButton.image).width(20).url()}
                  alt="button icon"
                  className="w-5 h-5"
                />
              )}
            </a>
          )}
        </div>

        {productWorks.reviewsInfo && (
          <div className="flex items-center justify-center gap-2 text-center">
            {productWorks.reviewsInfo.stars !== undefined && (
              <div className="flex gap-1">
                {renderStars(productWorks.reviewsInfo.stars)}
              </div>
            )}
            {productWorks.reviewsInfo.reviewCount && (
              <p className="text-gray-600 text-sm">
                {productWorks.reviewsInfo.reviewCount}
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductWorks;
