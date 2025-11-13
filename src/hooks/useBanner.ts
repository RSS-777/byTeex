import { useEffect, useState } from "react";
import { client } from "../sanityClient";

type Stat = {
  _key?: string;
  icon?: any;
  value?: string;
  description?: string;
};

type InfoBannerType = {
  title?: string;
  stats?: Stat[];
};

export const useBanner = () => {
  const [banner, setBanner] = useState<InfoBannerType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = `*[_type == "infoBanner"][0]{
      title,
      stats[]{
        icon,
        value,
        description
      }
    }`;

    client
      .fetch(query)
      .then((data) => {
        setBanner(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Sanity fetch error:", err);
        setLoading(false);
      });
  }, []);

  return { banner, loading };
};
