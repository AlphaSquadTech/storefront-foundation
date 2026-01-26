import React from "react";
interface ButtonProps {
  content: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}
const TertiaryButton = ({
  content,
  onClick,
  className = "",
  style = {},
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      style={style}
      className={`font-secondary font-semibold uppercase underline underline-offset-2 hover:underline-offset-4 transition-all ease-in-out duration-300 cursor-pointer -tracking-[0.035px] text-sm ${className}`}
    >
      {content}
    </button>
  );
};

export default TertiaryButton;
