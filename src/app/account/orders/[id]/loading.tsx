export default function OrderDetailLoading() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-6">
        {/* Back link skeleton */}
        <div className="h-5 w-32 bg-gray-200 rounded animate-pulse" />
        {/* Title skeleton */}
        <div className="h-8 w-48 bg-gray-200 rounded animate-pulse mt-2" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Order items section */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-md shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <div className="space-y-2">
                <div className="h-6 w-32 bg-gray-200 rounded animate-pulse" />
                <div className="h-4 w-40 bg-gray-100 rounded animate-pulse" />
              </div>
              <div className="h-6 w-20 bg-green-100 rounded-full animate-pulse" />
            </div>

            {/* Order items skeleton */}
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center border-b border-gray-100 pb-4 last:border-b-0">
                  <div className="w-16 h-16 bg-gray-200 rounded-md animate-pulse" />
                  <div className="ml-4 flex-1 space-y-2">
                    <div className="h-5 w-48 bg-gray-200 rounded animate-pulse" />
                    <div className="h-4 w-16 bg-gray-100 rounded animate-pulse" />
                  </div>
                  <div className="h-5 w-20 bg-gray-200 rounded animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Summary section */}
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-white rounded-md shadow-sm p-6">
            <div className="h-6 w-32 bg-gray-200 rounded animate-pulse mb-4" />
            <div className="space-y-3">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex justify-between">
                  <div className="h-4 w-20 bg-gray-100 rounded animate-pulse" />
                  <div className="h-4 w-16 bg-gray-100 rounded animate-pulse" />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-md shadow-sm p-6">
            <div className="h-6 w-36 bg-gray-200 rounded animate-pulse mb-4" />
            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-100 rounded animate-pulse" />
              <div className="h-4 w-3/4 bg-gray-100 rounded animate-pulse" />
              <div className="h-4 w-2/3 bg-gray-100 rounded animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
