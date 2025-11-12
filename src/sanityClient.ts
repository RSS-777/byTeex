
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "v3y74hlh", 
  dataset: "production",  
  apiVersion: "2025-11-12",
  useCdn: false,          
});

const builder = imageUrlBuilder(client);
export const urlFor = (source: any) => builder.image(source);
