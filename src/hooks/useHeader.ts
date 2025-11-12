
import { useEffect, useState } from "react";
import { client } from "../sanityClient";

type Feature = {
  _key?: string;
  icon?: any;
  text?: string;
};

type CTA = {
  text?: string;
  icon?: any;
  link?: string;
};

type Review = {
  author?: string;
  rating?: number;
  text?: string;
  additionalInfo?: string;
};

type HeaderType = {
  logo?: any;
  log?: any;
  navigationText?: string[];
  title?: string;
  features?: Feature[];
  ctaButton?: CTA;
  review?: Review;
  images?: any[];
};

export const useHeader = () => {
  const [header, setHeader] = useState<HeaderType | null>(null);

  useEffect(() => {
    const query = `*[_type == "header"][0]{
      logo, log, navigationText, title, features[]{icon, text}, ctaButton{ text, icon, link }, review{author, rating, text, additionalInfo}, images
    }`;

    client
      .fetch(query)
      .then((data) => setHeader(data))
      .catch((err) => console.error("Sanity fetch error:", err));
  }, []);

  return header;
};
