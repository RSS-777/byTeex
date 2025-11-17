import { useState } from "react";
import type { FaqType } from "../../hooks/useFaq";
interface IFaqProps {
  faq: FaqType;
}

export const FaqList = ({ faq }: IFaqProps) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  return (
    <div className="w-full md:max-w-[630px] md:ml-[20px] lg:ml-[100px]">
      <h2 className="text-center md:text-left">{faq.title}</h2>
      <hr className="h-1 border-[#EAEAEA] mt-[24px] lg:mt-[39px]" />
      {faq.questions?.map((item, idx) => (
        <div
          key={item._key || idx}
          className="border-b border-[#EAEAEA] mt-4 pb-[19px]"
        >
          <button
            onClick={() => toggleExpand(idx)}
            className="w-full flex items-center justify-between text-left py-2 cursor-pointer"
          >
            <h3 className="text-[18px] loading-{24px} flex-1 tracking-[4%]">
              {item.question}
            </h3>
            <span className="max-[380px]:mr-1 min-[380px]:mr-4 text-[31px] text-[#01005B] flex-shrink-0">
              {expandedIndex === idx ||
              (item.isExpanded && expandedIndex === null && idx === 0)
                ? "−"
                : "+"}
            </span>
          </button>
          {(expandedIndex === idx ||
            (item.isExpanded && expandedIndex === null && idx === 0)) &&
            item.answer && (
              <p className="text-[14px] leading-[20px] lg:text-[15px] lg:leading-[22px] text-[#676869] tracking-[3%]">
                {item.answer}
              </p>
            )}
        </div>
      ))}
    </div>
  );
};
