import { useFinal } from "../../hooks/useFinal";
import { urlFor } from "../../sanityClient";

export const Final = () => {
  const { finalCTA, loading } = useFinal();

  if (loading)
    return <p className="p-6 text-center">Loading final CTA section...</p>;
  if (!finalCTA)
    return <p className="p-6 text-center">No final CTA data found</p>;

  return (
    <section className="w-full bg-gray-50 py-12 lg:py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          {finalCTA.title && (
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0b0b3b] mb-4">
              {finalCTA.title}
            </h2>
          )}
          {finalCTA.subtitle && (
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              {finalCTA.subtitle}
            </p>
          )}
        </div>

        {finalCTA.mainImages && finalCTA.mainImages.length > 0 && (
          <div className="mb-12 flex justify-center">
            <div className="flex flex-wrap justify-center items-end gap-4 md:gap-6">
              {finalCTA.mainImages.slice(0, 3).map((img, idx) => {
                const sizes = [
                  "w-32 md:w-40 lg:w-48 translate-y-8 md:translate-y-12",
                  "w-40 md:w-56 lg:w-64",
                  "w-32 md:w-40 lg:w-48 translate-y-8 md:translate-y-12",
                ];
                const sizeClass = sizes[idx] || "w-40";

                return (
                  <div
                    key={idx}
                    className={`${sizeClass} rounded-lg overflow-hidden shadow-lg`}
                  >
                    <img
                      src={urlFor(img).width(500).url()}
                      alt={`Product ${idx + 1}`}
                      className="w-full h-auto object-cover aspect-auto"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <div className="flex justify-center mb-8">
          {finalCTA.ctaButton && (
            <a
              href={finalCTA.ctaButton.link || "#"}
              className="inline-flex items-center bg-[#0b0b3b] text-white px-8 md:px-10 py-3 md:py-4 rounded font-medium hover:opacity-90 transition-opacity gap-3"
            >
              <span>{finalCTA.ctaButton.text || "Learn More"}</span>
              {finalCTA.ctaButton.icon && (
                <img
                  src={urlFor(finalCTA.ctaButton.icon).width(20).url()}
                  alt="button icon"
                  className="w-5 h-5"
                />
              )}
            </a>
          )}
        </div>

        <div className="mb-12 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 pb-8 border-b border-gray-200">
          {finalCTA.shippingInfo && (
            <div className="flex items-center gap-3">
              {finalCTA.shippingInfo.icon && (
                <img
                  src={urlFor(finalCTA.shippingInfo.icon).width(40).url()}
                  alt="shipping"
                  className="w-6 h-6"
                />
              )}
              {finalCTA.shippingInfo.text && (
                <p className="text-gray-600 text-sm font-medium">
                  {finalCTA.shippingInfo.text}
                </p>
              )}
            </div>
          )}

          {finalCTA.paymentMethods && finalCTA.paymentMethods.length > 0 && (
            <div className="flex items-center gap-2 md:gap-3">
              <span className="text-xs text-gray-500">Payment:</span>
              <div className="flex gap-2">
                {finalCTA.paymentMethods.map((method, idx) => (
                  <img
                    key={idx}
                    src={urlFor(method).width(40).url()}
                    alt={`Payment method ${idx + 1}`}
                    className="h-6 object-contain"
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {finalCTA.additionalBenefits &&
          finalCTA.additionalBenefits.length > 0 && (
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
              {finalCTA.additionalBenefits.map((benefit, idx) => (
                <div
                  key={benefit._key || idx}
                  className="flex items-center gap-3 text-center md:text-left"
                >
                  {benefit.icon && (
                    <img
                      src={urlFor(benefit.icon).width(40).url()}
                      alt={benefit.text || `benefit-${idx}`}
                      className="w-6 h-6 flex-shrink-0"
                    />
                  )}
                  {benefit.text && (
                    <p className="text-gray-600 text-sm md:text-base">
                      {benefit.text}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
      </div>
    </section>
  );
};

export default Final;
