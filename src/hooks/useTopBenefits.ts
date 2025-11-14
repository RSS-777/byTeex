import { useEffect, useState } from "react";
import { client } from "../sanityClient";

export type SliderImage = {
  _key?: string;
  image?: any;
  caption?: string;
};

export type Benefit = {
  _key?: string;
  icon?: any;
  title?: string;
  description?: string;
};

export type TopBenefitsType = {
  featuredInTitle?: string;
  featuredIn?: any[];
  title?: string;
  benefits?: Benefit[];
  sliderImages?: SliderImage[];
};

export const useTopBenefits = () => {
  const [topBenefits, setTopBenefits] = useState<TopBenefitsType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = `*[_type == "topBenefits"][0]{
      featuredInTitle,
      featuredIn,
      title,
      benefits[]{
        icon,
        title,
        description
      },
      sliderImages[]{
        image,
        caption
      }
    }`;

    client
      .fetch(query)
      .then((data) => {
        setTopBenefits(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Sanity fetch error:", err);
        setLoading(false);
      });
  }, []);

  return { topBenefits, loading };
};
