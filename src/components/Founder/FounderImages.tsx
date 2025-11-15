import { urlFor } from "../../sanityClient";

type Props = {
  main: any;
  additional?: any[];
};

export const FounderImages = ({ main, additional = [] }: Props) => {
  if (!main) return null;

  return (
    <div className="relative lg:top-auto w-full max-w-[381px] mx-auto lg:mx-0 lg:ml-20  px-6 lg:px-0">
      <img
        src={urlFor(main).width(400).url()}
        alt="main"
        className="w-full h-auto object-cover"
      />
      <img
        src={urlFor(additional[0]).width(200).url()}
        alt="additionall 1"
        className="absolute top-0 left-0 w-[clamp(101px,20vw,155px)] object-cover transform -translate-x-1/4 -translate-y-1/4"
      />
      <img
        src={urlFor(additional[1]).width(200).url()}
        alt="Additional 2"
        className="absolute bottom-0 right-0 w-[clamp(109px,20vw,128px)] h-[clamp(111px,20vw,175px)] object-cover transform translate-x-1/4 translate-y-1/4"
      />
    </div>
  );
};
