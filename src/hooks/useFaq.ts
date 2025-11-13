import { useEffect, useState } from "react";
import { client } from "../sanityClient";

type Question = {
  _key?: string;
  question?: string;
  answer?: string;
  isExpanded?: boolean;
};

type FaqType = {
  title?: string;
  questions?: Question[];
  images?: any[];
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
      images
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
