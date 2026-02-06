export default function BlogPostLoading() {
  return (
    <main className="h-full w-full">
      <div className="container mx-auto max-w-[1276px]">
        <div className="flex flex-col items-start w-full gap-8 px-4 md:px-6 py-12 md:py-16 lg:py-24">
          <div className="flex flex-col items-start gap-5 w-full">
            {/* Breadcrumb skeleton */}
            <div className="flex items-center gap-2">
              <div className="h-4 w-12 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-4 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-4 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
            </div>
            {/* Title skeleton */}
            <div className="h-10 w-3/4 bg-gray-200 rounded animate-pulse" />
            {/* Topic tag skeleton */}
            <div className="h-6 w-24 bg-gray-100 rounded-full animate-pulse" />
            {/* Date skeleton */}
            <div className="h-4 w-40 bg-gray-200 rounded animate-pulse" />
          </div>

          <div className="w-full flex flex-col items-start gap-6">
            {/* Content skeleton */}
            <div className="w-full space-y-4">
              <div className="h-4 bg-gray-100 rounded animate-pulse" />
              <div className="h-4 bg-gray-100 rounded animate-pulse w-11/12" />
              <div className="h-4 bg-gray-100 rounded animate-pulse" />
              <div className="h-4 bg-gray-100 rounded animate-pulse w-4/5" />
              <div className="h-4 bg-gray-100 rounded animate-pulse w-3/4" />
              <div className="h-64 bg-gray-100 rounded animate-pulse mt-6" />
              <div className="h-4 bg-gray-100 rounded animate-pulse" />
              <div className="h-4 bg-gray-100 rounded animate-pulse w-5/6" />
              <div className="h-4 bg-gray-100 rounded animate-pulse w-11/12" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
