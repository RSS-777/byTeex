import React, { useState } from "react";
import { useUserGenerated } from "../hooks/useUserGenerated";
import { urlFor } from "../sanityClient";

export const UserGenerated: React.FC = () => {
  const { userGenerated, loading } = useUserGenerated();
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  if (loading)
    return <p className="p-6 text-center">Loading user generated content...</p>;
  if (!userGenerated)
    return <p className="p-6 text-center">No user generated content found</p>;

  const hasReviews = userGenerated.reviews && userGenerated.reviews.length > 0;
  const reviewsPerSlide = 3;
  const totalSlides = hasReviews
    ? Math.ceil(userGenerated.reviews!.length / reviewsPerSlide)
    : 0;

  const goToPrevious = () => {
    setCurrentReviewIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentReviewIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const displayedReviews = hasReviews
    ? userGenerated.reviews!.slice(
        currentReviewIndex * reviewsPerSlide,
        (currentReviewIndex + 1) * reviewsPerSlide
      )
    : [];

  const renderStars = (rating: number | undefined) => {
    if (!rating) return null;
    return (
      <div className="flex gap-1 text-yellow-400">
        {Array.from({ length: Math.min(5, rating) }).map((_, i) => (
          <span key={i} className="text-lg">
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <section className="w-full bg-white py-12 lg:py-20">
      <div className="container mx-auto px-6">
        {/* Section title and description */}
        <div className="text-center mb-12">
          {userGenerated.sectionTitle && (
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0b0b3b] mb-4">
              {userGenerated.sectionTitle}
            </h2>
          )}
          {userGenerated.sectionDescription && (
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              {userGenerated.sectionDescription}
            </p>
          )}
        </div>

        {/* Image gallery */}
        {userGenerated.images && userGenerated.images.length > 0 && (
          <div className="mb-12 lg:mb-16">
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-3">
              {userGenerated.images.map((img, idx) => (
                <div
                  key={idx}
                  className="relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <img
                    src={urlFor(img).width(200).url()}
                    alt={`User generated ${idx}`}
                    className="w-full h-full object-cover aspect-square"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Reviews carousel */}
        {hasReviews && displayedReviews.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center gap-4 lg:gap-6">
              {/* Left arrow */}
              <button
                onClick={goToPrevious}
                className="flex-shrink-0 bg-white border border-gray-200 rounded-full p-2 hover:bg-gray-50 transition-colors z-10"
                aria-label="Previous reviews"
              >
                <svg
                  className="w-6 h-6 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Reviews grid */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {displayedReviews.map((review, idx) => (
                  <div
                    key={review._key || idx}
                    className="bg-gray-50 border border-gray-100 rounded-lg p-6 flex flex-col"
                  >
                    {/* Author info */}
                    <div className="flex items-center gap-3 mb-4">
                      {review.author?.avatar && (
                        <img
                          src={urlFor(review.author.avatar).width(48).url()}
                          alt={review.author.name || "Author"}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      )}
                      {!review.author?.avatar && (
                        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 text-sm font-semibold">
                          {review.author?.name
                            ? review.author.name[0].toUpperCase()
                            : "A"}
                        </div>
                      )}
                      <div>
                        {review.author?.name && (
                          <p className="font-semibold text-gray-800">
                            {review.author.name}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Rating */}
                    {review.rating !== undefined && (
                      <div className="mb-3">{renderStars(review.rating)}</div>
                    )}

                    {/* Review text */}
                    {review.text && (
                      <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                        {review.text}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Right arrow */}
              <button
                onClick={goToNext}
                className="flex-shrink-0 bg-white border border-gray-200 rounded-full p-2 hover:bg-gray-50 transition-colors z-10"
                aria-label="Next reviews"
              >
                <svg
                  className="w-6 h-6 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* CTA Button */}
        <div className="flex flex-col items-center gap-6 mb-8">
          {userGenerated.ctaButton && (
            <a
              href={userGenerated.ctaButton.link || "#"}
              className="inline-flex items-center bg-[#0b0b3b] text-white px-8 py-3 rounded font-medium hover:opacity-90 transition-opacity gap-3"
            >
              <span>{userGenerated.ctaButton.text || "Learn More"}</span>
              {userGenerated.ctaButton.image && (
                <img
                  src={urlFor(userGenerated.ctaButton.image).width(20).url()}
                  alt="button icon"
                  className="w-5 h-5"
                />
              )}
            </a>
          )}
        </div>

        {/* Reviews info (stars + count) */}
        {userGenerated.reviewsInfo && (
          <div className="flex items-center justify-center gap-2 text-center">
            {userGenerated.reviewsInfo.stars !== undefined && (
              <div className="flex gap-1">
                {Array.from({
                  length: Math.min(5, userGenerated.reviewsInfo.stars),
                }).map((_, i) => (
                  <span key={i} className="text-xl text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
            )}
            {userGenerated.reviewsInfo.reviewCount && (
              <p className="text-gray-600 text-sm">
                {userGenerated.reviewsInfo.reviewCount}
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default UserGenerated;
