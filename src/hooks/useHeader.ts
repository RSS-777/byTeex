
import { useEffect, useState } from "react";
import { client } from "../sanityClient";

export type ImageWithAlt = {
  asset: any;
  alt?: string;
};

export type Feature = {
  _key?: string;
  icon?: any;
  text?: string;
};

export type CTA = {
  text?: string;
  icon?: ImageWithAlt;
  link?: string;
};

export type Review = {
  author?: string;
  avatar?: ImageWithAlt;
  rating?: number;
  text?: string;
  additionalInfo?: string;
};

export type HeaderType = {
  logo?: ImageWithAlt;
  navigationText?: string[];
  title?: string;
  features?: Feature[];
  ctaButton?: CTA;
  review?: Review;
  images?: ImageWithAlt[];
};

export const useHeader = () => {
  const [header, setHeader] = useState<HeaderType | null>(null);

  useEffect(() => {
    const query = `*[_type == "header"][0]{
      logo, navigationText, title, features[]{icon, text}, ctaButton{ text, icon, link }, review{author, avatar{asset, alt}, rating, text, additionalInfo}, images
    }`;

    client
      .fetch(query)
      .then((data) => setHeader(data))
      .catch((err) => console.error("Sanity fetch error:", err));
  }, []);

  return header;
};
