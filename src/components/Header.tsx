import React from "react";
import { useHeader } from "../hooks/useHeader";
import { urlFor } from "../sanityClient";

export const Header: React.FC = () => {
  const header = useHeader();

  if (!header) return <p className="p-6 text-center">Loading header...</p>;

  const logo = header.logo || header.log;

  return (
    <header className="w-full bg-white">
      {header.navigationText && header.navigationText.length > 0 && (
        <div className="bg-amber-50 text-xs text-gray-700 border-b border-amber-100">
          <div className="container mx-auto px-6 py-2 flex justify-center">
            <div className="flex flex-wrap items-center gap-2 text-center">
              {header.navigationText.map((t, i) => (
                <span key={i} className="px-1">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-6 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/2">
            <div className="flex items-center justify-start mb-6">
              {logo && (
                <img
                  src={urlFor(logo).width(240).url()}
                  alt="Logo"
                  className="h-10 md:h-12"
                />
              )}
            </div>

            {header.title && (
              <h1 className="text-4xl md:text-5xl font-semibold text-[#0b0b3b] leading-tight mb-6">
                {header.title}
              </h1>
            )}

            {header.features && header.features.length > 0 && (
              <ul className="space-y-4 mb-6">
                {header.features.map((f, idx) => (
                  <li key={f._key || idx} className="flex items-start gap-4">
                    {f.icon && (
                      <img
                        src={urlFor(f.icon).width(40).url()}
                        alt={f.text || `feature-${idx}`}
                        className="w-10 h-10 rounded-full bg-amber-50 p-2"
                      />
                    )}
                    <span className="text-gray-600">{f.text}</span>
                  </li>
                ))}
              </ul>
            )}

            {header.ctaButton && (
              <div className="mb-8">
                <a
                  href={header.ctaButton.link || "#"}
                  className="inline-flex items-center bg-[#0b0b3b] text-white px-6 py-3 rounded shadow hover:opacity-95"
                >
                  <span className="mr-3">
                    {header.ctaButton.text || "Learn more"}
                  </span>
                  {header.ctaButton.icon && (
                    <img
                      src={urlFor(header.ctaButton.icon).width(20).url()}
                      alt="cta-icon"
                      className="w-4 h-4"
                    />
                  )}
                </a>
              </div>
            )}

            {header.review && (
              <div className="bg-white border rounded-lg shadow-sm p-4 max-w-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-sm text-gray-600">
                    {header.review.author ? header.review.author[0] : "A"}
                  </div>
                  <div>
                    <div className="text-sm font-medium">
                      {header.review.author}
                    </div>
                    {header.review.additionalInfo && (
                      <div className="text-xs text-gray-400">
                        {header.review.additionalInfo}
                      </div>
                    )}
                  </div>
                </div>
                <div className="mt-3 text-gray-600 text-sm">
                  {header.review.text}
                </div>
              </div>
            )}
          </div>

          <div className="w-full lg:w-1/2 relative flex justify-center">
            <div className="w-full max-w-lg relative">
              {header.images && header.images.length > 0 && (
                <div className="relative w-full h-80 md:h-96">
                  {header.images.slice(0, 3).map((img, i) => {
                    const positions = [
                      "absolute left-0 top-8 w-3/5 shadow-lg",
                      "absolute left-20 top-0 w-2/5 shadow-xl z-20",
                      "absolute right-0 top-16 w-2/5 shadow-md",
                    ];
                    const cls = positions[i] || "absolute w-2/5";
                    return (
                      <img
                        key={i}
                        src={urlFor(img).width(800).url()}
                        alt={`hero-${i}`}
                        className={`${cls} object-cover rounded-md`}
                        style={{
                          aspectRatio: "3/4",
                        }}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
