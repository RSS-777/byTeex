import { useEffect, useState } from "react";
import { client } from "../sanityClient";

export type CTAButton = {
  text?: string;
  link?: string;
};

export type FounderType = {
  title?: string;
  description?: string[];
  mainImage?: any;
  additionalImages?: any[];
  ctaButton?: CTAButton;
};

export const useFounder = () => {
  const [founder, setFounder] = useState<FounderType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = `*[_type == "founder"][0]{
      title,
      description,
      mainImage,
      additionalImages,
      ctaButton{
        text,
        link
      }
    }`;

    client
      .fetch(query)
      .then((data) => {
        setFounder(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Sanity fetch error:", err);
        setLoading(false);
      });
  }, []);

  return { founder, loading };
};
