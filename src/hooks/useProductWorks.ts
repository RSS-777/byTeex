import { useEffect, useState } from "react";
import { client } from "../sanityClient";

type Step = {
  _key?: string;
  icon?: any;
  title?: string;
  description?: string;
};

type HtoButton = {
  text?: string;
  image?: any;
  link?: string;
};

type ReviewsInfo = {
  stars?: number;
  reviewCount?: string;
};

type HowToOrderType = {
  title?: string;
  steps?: Step[];
  htoButton?: HtoButton;
  reviewsInfo?: ReviewsInfo;
};

export const useProductWorks = () => {
  const [productWorks, setProductWorks] = useState<HowToOrderType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = `*[_type == "howToOrder"][0]{
      title,
      steps[]{
        icon,
        title,
        description
      },
      htoButton{
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
        setProductWorks(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Sanity fetch error:", err);
        setLoading(false);
      });
  }, []);

  return { productWorks, loading };
};
