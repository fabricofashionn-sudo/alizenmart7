import Header from "@/components/Header";

export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f4f4f4]">
      {/* Header is rendered instantly as it contains client navigation/search */}
      <Header />
      
      <main className="flex-1 pb-20 md:pb-12">
        {/* Hero Section Skeleton */}
        <section className="container-custom py-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Main Slider Skeleton */}
            <div className="md:col-span-3 h-[250px] md:h-[400px] bg-white rounded-md animate-pulse shadow-sm flex items-center justify-center">
              <div className="w-12 h-12 rounded-full border-4 border-[#0B5A70] border-t-transparent animate-spin" />
            </div>
            {/* Side Banners Skeleton */}
            <div className="hidden md:flex flex-col gap-4">
              <div className="flex-1 h-[192px] bg-white rounded-md animate-pulse shadow-sm" />
              <div className="flex-1 h-[192px] bg-white rounded-md animate-pulse shadow-sm" />
            </div>
          </div>
        </section>

        {/* Flash Sale Section Skeleton */}
        <section className="container-custom mb-6 md:mb-8">
          <div className="bg-white rounded-md p-3 md:p-4 shadow-sm border border-gray-100">
            {/* Section Title */}
            <div className="flex justify-between items-center mb-4 md:mb-6 pb-2 border-b border-gray-100">
              <div className="h-6 w-32 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
            </div>
            
            {/* Grid of Card Skeletons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="bg-white rounded-lg p-3 border border-gray-100 flex flex-col h-full shadow-sm animate-pulse">
                  <div className="aspect-square bg-gray-100 rounded-md mb-3" />
                  <div className="w-full h-4 bg-gray-200 rounded mb-2" />
                  <div className="w-2/3 h-4 bg-gray-200 rounded mb-4" />
                  <div className="flex gap-2 mt-auto">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-100 rounded-md" />
                    <div className="flex-1 h-8 md:h-10 bg-gray-100 rounded-md" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section Skeleton */}
        <section className="container-custom mb-6 md:mb-8">
          <div className="bg-white rounded-md p-4 shadow-sm border border-gray-100">
            <div className="h-6 w-44 bg-gray-200 rounded mb-6 animate-pulse" />
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="flex flex-col items-center animate-pulse">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-100 rounded-full mb-2" />
                  <div className="w-14 h-3 bg-gray-200 rounded" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Campaign Banner Skeleton */}
        <section className="container-custom mb-6 md:mb-8">
          <div className="h-32 md:h-40 bg-[#0B5A70]/10 rounded-lg md:rounded-md animate-pulse shadow-sm" />
        </section>

        {/* Featured Products Section Skeleton */}
        <section className="container-custom">
          <div className="flex justify-between items-center mb-4 md:mb-6">
            <div className="h-6 w-40 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg p-3 border border-gray-100 flex flex-col h-full shadow-sm animate-pulse">
                <div className="aspect-square bg-gray-100 rounded-md mb-3" />
                <div className="w-full h-4 bg-gray-200 rounded mb-2" />
                <div className="w-2/3 h-4 bg-gray-200 rounded mb-4" />
                <div className="flex gap-2 mt-auto">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-100 rounded-md" />
                  <div className="flex-1 h-8 md:h-10 bg-gray-100 rounded-md" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
