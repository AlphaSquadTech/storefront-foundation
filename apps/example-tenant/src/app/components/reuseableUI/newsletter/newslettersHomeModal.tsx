"use client";

import { useEffect, useState } from "react";
import { NewsLetterClient } from "./newsletterClient";

const NewslettersHomeModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const isPermanentlyClosed = localStorage.getItem(
      "newsletterPermanentlyClosed",
    );

    if (isPermanentlyClosed === "true") {
      return;
    }

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handlePermanentClose = () => {
    setIsClosing(true);

    setTimeout(() => {
      setIsVisible(false);
      localStorage.setItem("newsletterPermanentlyClosed", "true");
    }, 300);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`fixed bottom-0 sm:right-2 bg-white z-10 shadow-2xl w-full sm:w-fit transition-transform duration-300 ease-in-out ${
        isClosing ? "translate-x-full" : "translate-x-0"
      }`}
    >
      <div className="[&>main>div]:px-0 [&>main>div>div]:py-2 [&>main>div>div>div]:!hidden px-4 sm:px-6 py-4 sm:py-7">
        <h1 className="text-center text-base sm:text-xl font-primary">
          WANT ACCESS TO EXCLUSIVE DEALS?
        </h1>
        <p className="font-secondary text-center text-sm sm:text-base pt-2 pb-2 max-w-[350px] mx-auto">
          Sign up to receive access to our latest updates and best offers.
        </p>

        <NewsLetterClient
          handleClose={handlePermanentClose}
          isModalNewsletter={true}
        />
        <p
          onClick={handlePermanentClose}
          className="cursor-pointer text-center text-sm sm:text-base pt-3 text-zinc-600 hover:text-gray-700/70 uppercase w-fit mx-auto"
        >
          No, Thanks
        </p>
      </div>
    </div>
  );
};

export default NewslettersHomeModal;
