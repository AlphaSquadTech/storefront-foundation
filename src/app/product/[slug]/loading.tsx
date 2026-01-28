import LoadingUI from "@/app/components/reuseableUI/loadingUI";

export default function ProductLoading() {
  return (
    <div className="lg:container lg:mx-auto px-4 py-12 md:px-6 md:py-16 lg:px-4 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product image skeleton */}
        <div className="relative w-full aspect-square bg-gray-100 rounded-lg overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-pulse w-3/4 h-3/4 bg-gray-200 rounded" />
          </div>
        </div>
        {/* Product details skeleton */}
        <div className="space-y-4">
          <div className="h-8 bg-gray-200 rounded w-3/4 animate-pulse" />
          <div className="h-6 bg-gray-200 rounded w-1/3 animate-pulse" />
          <div className="space-y-2 mt-4">
            <div className="h-4 bg-gray-100 rounded animate-pulse" />
            <div className="h-4 bg-gray-100 rounded animate-pulse w-5/6" />
            <div className="h-4 bg-gray-100 rounded animate-pulse w-4/6" />
          </div>
          <div className="h-12 bg-gray-200 rounded w-1/2 animate-pulse mt-6" />
        </div>
      </div>
    </div>
  );
}
