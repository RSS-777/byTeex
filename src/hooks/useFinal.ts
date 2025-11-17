import { useEffect, useState } from "react";
import { client } from "../sanityClient";

type CTAButton = {
  text?: string;
  link?: string;
  icon?: any;
};

export type ShippingInfo = {
  icon?: any;
  text?: string;
};

export type AdditionalBenefit = {
  _key?: string;
  icon?: any;
  text?: string;
};

type StarReviews = {
  stars?: number;
  text?: string;
};

type FinalCTAType = {
  title?: string;
  subtitle?: string;
  mainImages?: any[];
  ctaButton?: CTAButton;
  starReviews?: StarReviews;
  shippingInfo?: ShippingInfo;
  paymentMethods?: any[];
  additionalBenefits?: AdditionalBenefit[];
};

export const useFinal = () => {
  const [finalCTA, setFinalCTA] = useState<FinalCTAType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = `*[_type == "finalCTA"][0]{
      title,
      subtitle,
      mainImages,
      ctaButton{
        text,
        link,
        icon
      },
      starReviews{
        stars,
        text
      },
      shippingInfo{
        icon,
        text
      },
      paymentMethods,
      additionalBenefits[]{
        icon,
        text
      }
    }`;

    client
      .fetch(query)
      .then((data) => {
        setFinalCTA(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Sanity fetch error:", err);
        setLoading(false);
      });
  }, []);

  return { finalCTA, loading };
};
