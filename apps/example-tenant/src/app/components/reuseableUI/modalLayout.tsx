"use client";

import { cn } from "@/app/utils/functions";
import { ModalCrossIcon } from "@/app/utils/svgs/paymentProcessingIcons/modalCrossIcon";
import { useEffect, useRef, useCallback, useId } from "react";

const ModalLayout = ({
  children,
  isModalOpen,
  onClose,
  className,
  removeCrossIcon,
  removeBgClose = false,
  heading,
}: {
  children: React.ReactNode;
  isModalOpen: boolean;
  onClose: () => void;
  className?: string;
  removeCrossIcon?: boolean;
  removeBgClose?: boolean;
  heading?: string;
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);
  const headingId = useId();

  // Handle Escape key
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape" && !removeBgClose) {
      onClose();
    }
  }, [onClose, removeBgClose]);

  // Focus trap
  const handleTabKey = useCallback((e: KeyboardEvent) => {
    if (e.key !== "Tab" || !modalRef.current) return;

    const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (e.shiftKey && document.activeElement === firstElement) {
      e.preventDefault();
      lastElement?.focus();
    } else if (!e.shiftKey && document.activeElement === lastElement) {
      e.preventDefault();
      firstElement?.focus();
    }
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      // Store the currently focused element
      previousActiveElement.current = document.activeElement as HTMLElement;
      document.body.style.overflow = "hidden";
      
      // Add event listeners
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("keydown", handleTabKey);

      // Focus the modal or first focusable element
      requestAnimationFrame(() => {
        const focusableElements = modalRef.current?.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements && focusableElements.length > 0) {
          focusableElements[0].focus();
        } else {
          modalRef.current?.focus();
        }
      });
    } else {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keydown", handleTabKey);

      // Restore focus to the previously focused element
      if (previousActiveElement.current) {
        previousActiveElement.current.focus();
      }
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keydown", handleTabKey);
    };
  }, [isModalOpen, handleKeyDown, handleTabKey]);

  return (
    <>
      <div className={cn("", isModalOpen ? "fixed left-0 top-0 h-full w-full z-[100]" : "")}>
        {isModalOpen && (
          <div
            onClick={() => {
              if (!removeBgClose) {
                onClose()
              }
            }}
            aria-hidden="true"
            className="bg-black/60 w-full h-full absolute top-0 z-[110]"
          />
        )}
        <div
          ref={modalRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={heading ? headingId : undefined}
          tabIndex={-1}
          className={cn(
            `fixed bottom-0 overflow-y-auto lg:inset-0 h-[calc(100dvh-8rem)] m-auto w-full lg:h-fit z-[120] bg-white lg:max-w-5xl px-4 py-6 md:px-6 lg:p-10 transition-all duration-[400ms] ease-in-out`,
            isModalOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none",
            className
          )}
        >
          <div className="flex items-center justify-between w-full">
            {
              heading && (
                <h2 id={headingId} className="font-semibold text-[var(--color-secondary-800)] font-secondary text-xl" >
                  {heading}
                </h2>
              )
            }
            {!removeCrossIcon && (
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="text-black absolute top-5 right-5 [&>svg]:size-4 size-6 p-1 rounded-full bg-[var(--color-secondary-200)] hover:bg-[var(--color-secondary-400)]/20 cursor-pointer"
              >
                {ModalCrossIcon}
              </button>
            )}
          </div>

          {children}
        </div>
      </div>
    </>
  );
};

export default ModalLayout;
