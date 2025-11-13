import React, { useState } from "react";
import { useFaq } from "../hooks/useFaq";
import { urlFor } from "../sanityClient";

export const Faq: React.FC = () => {
  const { faq, loading } = useFaq();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  if (loading) return <p className="p-6 text-center">Loading FAQ...</p>;
  if (!faq) return <p className="p-6 text-center">No FAQ data found</p>;

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-12 lg:py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
          <div className="w-full lg:w-1/2">
            {faq.title && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0b0b3b] leading-tight mb-8">
                {faq.title}
              </h2>
            )}

            {faq.questions && faq.questions.length > 0 && (
              <div className="space-y-4">
                {faq.questions.map((item, idx) => {
                  const isExpanded =
                    expandedIndex === idx ||
                    (item.isExpanded && expandedIndex === null && idx === 0);

                  return (
                    <div
                      key={item._key || idx}
                      className="border-b border-gray-200 pb-4 last:border-b-0"
                    >
                      <button
                        onClick={() => toggleExpand(idx)}
                        className="w-full flex items-center justify-between text-left py-2 hover:opacity-75 transition-opacity"
                      >
                        <h3 className="text-lg md:text-lg font-medium text-[#0b0b3b] flex-1">
                          {item.question}
                        </h3>
                        <span className="ml-4 text-2xl text-[#0b0b3b] flex-shrink-0">
                          {isExpanded ? "−" : "+"}
                        </span>
                      </button>

                      {isExpanded && item.answer && (
                        <div className="pt-4 pb-2 text-gray-600 text-sm md:text-base leading-relaxed">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {faq.images && faq.images.length > 0 && (
            <div className="w-full lg:w-1/2 relative h-96 lg:h-full min-h-96">
              <div className="relative w-full h-full">
                {faq.images.slice(0, 3).map((img, idx) => {
                  const positions = [
                    "absolute right-0 top-0 w-2/3 lg:w-3/5 shadow-lg z-30",
                    "absolute left-8 lg:left-12 top-24 lg:top-20 w-3/5 lg:w-2/3 shadow-xl z-20",
                    "absolute left-0 bottom-0 w-1/2 lg:w-2/5 shadow-md z-10",
                  ];
                  const positionClass = positions[idx] || "absolute w-1/2";

                  return (
                    <img
                      key={idx}
                      src={urlFor(img).width(600).url()}
                      alt={`FAQ image ${idx + 1}`}
                      className={`${positionClass} rounded-lg object-cover aspect-auto`}
                    />
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Faq;
