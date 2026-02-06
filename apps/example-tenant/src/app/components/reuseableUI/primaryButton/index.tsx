import { cn } from "@/app/utils/functions";
import React from "react";

interface ButtonProps {
  content: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const PrimaryButton = ({
  content,
  onClick,
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={cn(
        "px-4 py-2 font-secondary ring-1 ring-[var(--color-primary)] hover:ring-[var(--color-primary)] hover:text-[var(--color-primary)] bg-[var(--color-primary)] hover:bg-white transition-all ease-in-out duration-300 text-white disabled:ring-zinc-400 disabled:pointer-events-none disabled:text-[var(--color-secondary-400)] disabled:bg-[var(--color-secondary-300)] font-semibold cursor-pointer uppercase text-base -tracking-[0.04px] ",
        className
      )}
    >
      {content}
    </button>
  );
};

export default PrimaryButton;
