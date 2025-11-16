import { useUserGenerated } from "../../hooks/useUserGenerated";
import { UserGeneratedImages } from "./UserGeneratedImages";
import { PrimaryLinkButton } from "../PrimaryLinkButton";
import { UserGenaratedReviewCard } from "./UserGenaratedReviewCard";
import { UserGeneratedSlider } from "./UserGeneratedSlider";
import { StarReviews } from "../StarReviews";

export const UserGenerated = () => {
  const { userGenerated, loading } = useUserGenerated();

  if (loading)
    return <p className="p-6 text-center">Loading user generated content...</p>;
  if (!userGenerated)
    return <p className="p-6 text-center">No user generated content found</p>;

  const doubledReviews = [
    ...(userGenerated.reviews ?? []),
    ...(userGenerated.reviews ?? []),
  ]; // For test.

  return (
    <section className="w-full bg-white py-12 lg:py-20 pt-[59px] md:pt-[74px]">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0b0b3b] mx-3">
          {userGenerated.sectionTitle}
        </h2>

        <p className=" mx-auto text-[#676869] text-[15px] leading-[23px] max-w-[613px] px-[20px] mt-[25px]">
          {userGenerated.sectionDescription}
        </p>
      </div>
      <UserGeneratedImages images={userGenerated.images ?? []} />
      <div className="px-[20px]">
        <UserGeneratedSlider
          visibleSlidesDesktop={3}
          modileSlideMaxWidth={299}
          desktopSlideMaxWidth={338}
        >
          {doubledReviews.map((review, idx) => (
            <UserGenaratedReviewCard key={review._key || idx} review={review} />
          ))}
        </UserGeneratedSlider>
        <PrimaryLinkButton
          link={userGenerated.ctaButton?.link || "#"}
          text={userGenerated.ctaButton?.text || "Learn More"}
          classNameButton="mt-[63px]"
        />
        <StarReviews
          stars={userGenerated.reviewsInfo?.stars || 0}
          text={userGenerated.reviewsInfo?.reviewCount || ""}
          className="mt-[12px] justify-center"
        />
      </div>
    </section>
  );
};

export default UserGenerated;
