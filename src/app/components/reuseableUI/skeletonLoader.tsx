import React from "react";

interface SkeletonLoaderProps {
  type?: "card" | "text" | "image" | "hero" | "category" | "product";
  count?: number;
  className?: string;
}

export const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  type = "card",
  count = 1,
  className,
}) => {
  const renderSkeleton = () => {
    switch (type) {
      case "hero":
        return (
          <div
            className={`relative w-full bg-gray-200 animate-pulse ${
              className ?? ""
            }`}
          >
            <div className="container mx-auto relative flex flex-col items-center justify-center min-h-[559px] md:min-h-[506px] w-full px-2 gap-6 md:gap-8 lg:gap-10 ">
              <div className="w-full flex flex-col items-center justify-center">
                <div className="h-12 lg:h-[60px] md:h-10 w-[80%] lg:w-[40%] bg-gray-300 rounded mb-4"></div>
                <div className="h-7 lg:h-9 w-[40%] lg:w-[20%] bg-gray-300 rounded"></div>
              </div>
              <div className="flex flex-col md:flex-row max-w-[314px] items-start gap-4 md:gap-2.5 relative md:max-w-6xl w-full">
                <div className="flex flex-col md:flex-row w-full gap-2.5 max-w-6xl">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <div
                      key={index}
                      className="w-full bg-zinc-300 animate-pulse h-10 update-element-angle"
                    />
                  ))}
                </div>
                <div className="flex flex-row-reverse gap-2.5 w-full md:w-auto">
                  {Array.from({ length: 2 }).map((_, index) => (
                    <div
                      key={index}
                      className="w-full bg-zinc-300 animate-pulse h-10 update-element-angle"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case "category":
        return (
          <div
            className={`group block border border-gray-200 rounded-md overflow-hidden bg-white ${
              className ?? ""
            }`}
          >
            <div className="relative w-full h-[246px] bg-gray-200 animate-pulse">
              <div className="absolute top-0 flex flex-col justify-between w-full h-full z-10 p-8">
                <div className="h-16 w-full bg-gray-300 rounded "></div>
                <div className="h-6 w-1/2 bg-gray-300 rounded "></div>
              </div>
            </div>
          </div>
        );

      case "product":
        return (
          <div
            className={`group block border border-gray-200 rounded-md overflow-hidden bg-white ${
              className ?? ""
            }`}
          >
            <div className="relative w-full h-48 bg-gray-200 animate-pulse" />
            <div className="p-3">
              <div className="h-4 bg-gray-200 rounded w-4/4 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/3"></div>
            </div>
          </div>
        );

      case "text":
        return (
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
        );

      default:
        return (
          <div
            className={`bg-gray-200 animate-pulse rounded ${className ?? ""}`}
          />
        );
    }
  };

  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <React.Fragment key={index}>{renderSkeleton()}</React.Fragment>
      ))}
    </>
  );
};
