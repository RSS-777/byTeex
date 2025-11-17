type Props = {
  navigationText?: string[];
  windowWidth: number;
};

export const HeaderAnnouncementBar = ({
  navigationText,
  windowWidth,
}: Props) => {
 if (!navigationText || navigationText.length === 0 || windowWidth === 0) return null;

  return (
    <div className="bg-[#F9F0E5] h-[36px] flex justify-center items-center">
      <p className="font-[Work_Sans] text-[11px] leading-[35px] text-[#565656] px-2">
        {navigationText
          .filter((_, i) => {
            if (windowWidth < 687) return i === 1;
            if (windowWidth < 900) return i === 0 || i === 1;
            return true;
          })
          .map((t, i, arr) => (
            <span key={i} className="inline-flex items-center">
              {t}
              {i !== arr.length - 1 && (
                <span className="text-[6px] mx-2">|</span>
              )}
            </span>
          ))}
      </p>
    </div>
  );
};
