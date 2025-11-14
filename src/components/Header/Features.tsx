import { urlFor } from "../../sanityClient";
import type { Feature } from "../../hooks/useHeader";

export const Features = ({ features }: { features?: Feature[] }) => {
  if (!features?.length) return null;
  return (
    <ul className="space-y-4  mt-[24px]">
      {features?.map((f, idx) => (
        <li key={f._key || idx} className="flex items-center gap-2.5">
          {f.icon && (
            <img
              src={urlFor(f.icon).width(40).url()}
              alt={f.text || `feature-${idx}`}
              className="w-10 h-10 rounded-full bg-amber-50 p-2"
            />
          )}
          <span className="text-[text-gray-600]">{f.text}</span>
        </li>
      ))}
    </ul>
  );
};
