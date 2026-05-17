import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const categoryName = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="flex flex-col min-h-screen bg-[#f4f4f4]">
      <Header />
      <main className="flex-1 py-6 md:py-10">
        <div className="container-custom">
          <div className="bg-white rounded-md p-6 shadow-sm border border-gray-100 min-h-[400px] flex flex-col items-center justify-center text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{categoryName}</h1>
            <p className="text-gray-500 max-w-md">
              Showing products for {categoryName}. In a real application, you would fetch and display the product list for this category here.
            </p>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full">
                {/* Placeholder for products */}
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="aspect-square bg-gray-50 rounded animate-pulse"></div>
                ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}
