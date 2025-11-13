import { useEffect, useState } from "react";
import { client } from "../sanityClient";

type ReviewAuthor = {
  name?: string;
  avatar?: any;
};

type Review = {
  _key?: string;
  author?: ReviewAuthor;
  rating?: number;
  text?: string;
};

type CTAButton = {
  text?: string;
  image?: any;
  link?: string;
};

type ReviewsInfo = {
  stars?: number;
  reviewCount?: string;
};

type UserGeneratedContentType = {
  sectionTitle?: string;
  sectionDescription?: string;
  images?: any[];
  reviews?: Review[];
  ctaButton?: CTAButton;
  reviewsInfo?: ReviewsInfo;
};

export const useUserGenerated = () => {
  const [userGenerated, setUserGenerated] = useState<UserGeneratedContentType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = `*[_type == "userGeneratedContent"][0]{
      sectionTitle,
      sectionDescription,
      images,
      reviews[]{
        author{
          name,
          avatar
        },
        rating,
        text
      },
      ctaButton{
        text,
        image,
        link
      },
      reviewsInfo{
        stars,
        reviewCount
      }
    }`;

    client
      .fetch(query)
      .then((data) => {
        setUserGenerated(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Sanity fetch error:", err);
        setLoading(false);
      });
  }, []);

  return { userGenerated, loading };
};
