import { useProductWorks } from "../../hooks/useProductWorks";
import { ProductWorkStep } from "./ProductWorkStep";
import { PrimaryLinkButton } from "../PrimaryLinkButton";
import { StarReviews } from "../StarReviews";
import { ProductWorksSlider } from "./ProductWorksSlider";

export const ProductWorks = () => {
  const { productWorks, loading } = useProductWorks();

  if (loading)
    return <p className="p-6 text-center">Loading product works...</p>;
  if (!productWorks)
    return <p className="p-6 text-center">No product works data found</p>;

  return (
    <section className="w-full max-w-[1120px] mx-auto bg-white pt-[57px] md:pt-[75px] px-[14px] lg:px-[41px] overflow-hidden">
      {productWorks.title && (
        <h2 className="text-center">{productWorks.title}</h2>
      )}
      <ProductWorksSlider>
        {productWorks.steps?.map((step, idx) => {
          const bgClass = idx === 1 ? "bg-[#F9F0E6]" : "bg-[#F0EEEF]";
          return (
            <ProductWorkStep
              key={step._key || idx}
              step={step}
              idx={idx}
              bgClass={bgClass}
            />
          );
        })}
      </ProductWorksSlider>
      <PrimaryLinkButton
        link="#"
        text={productWorks.htoButton?.text || ""}
        classNameButton="mt-[41px] lg:mt-[56px]"
      />
      <StarReviews
        stars={productWorks.reviewsInfo?.stars ?? 0}
        text={productWorks.reviewsInfo?.reviewCount ?? ""}
        className="justify-center mt-3"
      />
    </section>
  );
};

export default ProductWorks;
