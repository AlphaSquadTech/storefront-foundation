import { cn } from "@/app/utils/functions";
import React from "react";

interface ButtonProps {
  content: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const SecondaryButton = ({
  content,
  type,
  onClick,
  className = "",
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={cn(
        "font-secondary border border-[var(--color-secondary-900)] bg-[var(--color-secondary-900)] disabled:pointer-events-none text-[var(--color-secondary-50)] hover:text-black hover:bg-zinc-300 transition-all ease-in-out duration-300 font-semibold cursor-pointer -tracking-[0.04px] px-4 py-2",
        className
      )}
    >
      {content}
    </button>
  );
};

export default SecondaryButton;
