import { useEffect, useState } from "react";
import { client } from "../sanityClient";

type CTAButton = {
  text?: string;
  link?: string;
  icon?: any;
};

type ShippingInfo = {
  icon?: any;
  text?: string;
};

type AdditionalBenefit = {
  _key?: string;
  icon?: any;
  text?: string;
};

type FinalCTAType = {
  title?: string;
  subtitle?: string;
  mainImages?: any[];
  ctaButton?: CTAButton;
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
