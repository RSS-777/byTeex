import { useEffect, useState } from "react";
import { client } from "../sanityClient";

type Question = {
  _key?: string;
  question?: string;
  answer?: string;
  isExpanded?: boolean;
};

export type FaqType = {
  title?: string;
  questions?: Question[];
  images?: any[];

  ctaButton?: {
    text?: string;
    link?: string;
  };

  reviewsInfo?: {
    stars?: number;
    reviewCount?: string;
  };
};

export const useFaq = () => {
  const [faq, setFaq] = useState<FaqType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = `*[_type == "faq"][0]{
      title,
      questions[]{
        question,
        answer,
        isExpanded
      },
      images,
      ctaButton{
        text,
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
        setFaq(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Sanity fetch error:", err);
        setLoading(false);
      });
  }, []);

  return { faq, loading };
};
