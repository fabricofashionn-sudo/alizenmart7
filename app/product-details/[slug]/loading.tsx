import Header from "@/components/Header";

export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f4f4f4]">
      {/* Header is rendered instantly */}
      <Header />

      <main className="flex-1 pb-20 md:pb-12 pt-6">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-6">
            
            {/* Left and Middle Sections Container */}
            <div className="flex-1 flex flex-col md:flex-row gap-6">
              
              {/* Left Section (Gallery) */}
              <div className="w-full md:w-[45%] flex gap-3">
                {/* Thumbnails (Hidden on mobile) */}
                <div className="hidden md:flex flex-col gap-2 w-16 md:w-20 shrink-0">
                  {[...Array(4)].map((_, idx) => (
                    <div
                      key={idx}
                      className="border border-gray-100 rounded-lg p-1 bg-white animate-pulse"
                    >
                      <div className="aspect-square w-full bg-gray-200 rounded-md" />
                    </div>
                  ))}
                </div>

                {/* Main Image Skeleton */}
                <div className="flex-1 border border-gray-100 rounded-lg bg-white overflow-hidden shadow-sm aspect-square animate-pulse flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border-4 border-[#0B5A70] border-t-transparent animate-spin" />
                </div>
              </div>

              {/* Middle Section (Product Info) */}
              <div className="w-full md:w-[55%] flex flex-col pt-2">
                {/* Title Skeleton */}
                <div className="h-8 w-5/6 bg-gray-200 rounded mb-4 animate-pulse" />
                
                {/* Ratings Skeleton */}
                <div className="h-4 w-32 bg-gray-200 rounded mb-6 animate-pulse" />

                {/* Pricing Skeleton */}
                <div className="h-10 w-28 bg-gray-200 rounded mb-6 animate-pulse" />

                {/* Actions Skeleton */}
                <div className="flex items-center gap-4 mb-8">
                  {/* Quantity box */}
                  <div className="h-11 w-28 bg-gray-200 rounded-md animate-pulse" />
                  {/* Add to Cart button */}
                  <div className="hidden md:block flex-1 h-11 bg-gray-200 rounded-md animate-pulse" />
                  {/* Order Now button */}
                  <div className="hidden md:block flex-1 h-11 bg-gray-200 rounded-md animate-pulse" />
                </div>

                {/* Metadata Skeleton */}
                <div className="flex flex-col gap-3.5 mt-2">
                  <div className="h-4 w-40 bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 w-48 bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
                </div>
              </div>

            </div>

            {/* Right Section (Category Sidebar - Hidden on mobile) */}
            <div className="hidden lg:block w-full lg:w-[280px] shrink-0">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 animate-pulse">
                <div className="h-6 w-24 bg-gray-200 rounded mb-6" />
                <div className="flex flex-col gap-3">
                  {[...Array(5)].map((_, index) => (
                    <div key={index} className="flex items-center gap-4 py-2">
                      <div className="w-10 h-10 rounded-lg bg-gray-200 shrink-0" />
                      <div className="h-4 w-28 bg-gray-200 rounded" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Section (Tabs) */}
          <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden animate-pulse">
            <div className="flex border-b border-gray-100 p-4 gap-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-8 w-24 bg-gray-200 rounded-full" />
              ))}
            </div>
            <div className="p-6 md:p-8 flex flex-col gap-3 min-h-[250px]">
              <div className="h-4 w-full bg-gray-200 rounded" />
              <div className="h-4 w-5/6 bg-gray-200 rounded" />
              <div className="h-4 w-4/5 bg-gray-200 rounded" />
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
