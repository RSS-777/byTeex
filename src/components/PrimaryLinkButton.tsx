import arrow from "../assets/icons/arrow.svg"

type TProps = {
link: string;
text: string;
classNameSpan?: string;
classNameButton?: string;
}

export const PrimaryLinkButton = ({ link, text, classNameSpan, classNameButton }: TProps) => {
  if (!link || !text) return null;

  return (
    <a
      href={link || "#"}
      className={`flex items-center justify-center font-[Work_Sans] bg-[#01005B] w-full max-w-[369px] text-lg text-white px-6 py-3 mx-auto rounded shadow hover:opacity-95 ${classNameButton || ""}`}
    >
      <span className="mr-3">{text}</span>
      <img
        src={arrow}
        alt="cta-icon"
        className={`w-4 h-4 ${classNameSpan || ""}`}
      />
    </a>
  );
};