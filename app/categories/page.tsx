"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

const categoryIconMap: Record<string, React.ReactNode> = {
  "gadgets": (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="15" width="30" height="20" rx="3" fill="#E3F2FD" stroke="#1E88E5" strokeWidth="2" />
      <circle cx="15" cy="25" r="4" fill="#FF5722" />
      <rect x="25" y="20" width="5" height="10" rx="1" fill="#1E88E5" />
      <path d="M10 10H30L35 15V35H5V15L10 10Z" stroke="#333" strokeWidth="1" strokeDasharray="2 2" />
      <circle cx="20" cy="8" r="3" fill="#333" />
    </svg>
  ),
  "smart-electronics": (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 30V15L20 8L30 15V30H10Z" fill="#F1F8E9" stroke="#4CAF50" strokeWidth="2" />
      <circle cx="20" cy="22" r="4" fill="#1E88E5" />
      <path d="M15 35H25" stroke="#333" strokeWidth="2" strokeLinecap="round" />
      <circle cx="20" cy="12" r="2" fill="#4CAF50" />
    </svg>
  ),
  "home-lifestyle": (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="20" height="25" rx="2" fill="#F3E5F5" stroke="#9C27B0" strokeWidth="2" />
      <rect x="15" y="15" width="10" height="5" fill="#9C27B0" />
      <rect x="15" y="25" width="10" height="5" fill="#E1BEE7" />
      <path d="M5 10H35" stroke="#333" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  "beauty-personal": (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="12" y="10" width="16" height="25" rx="4" fill="#FFF3E0" stroke="#FF9800" strokeWidth="2" />
      <rect x="15" y="5" width="10" height="5" fill="#333" />
      <circle cx="20" cy="22" r="5" fill="#FF9800" opacity="0.3" />
      <path d="M15 30H25" stroke="#FF9800" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  "healthy-food": (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 20C10 10 30 10 30 20V30C30 35 10 35 10 30V20Z" fill="#E8F5E9" stroke="#4CAF50" strokeWidth="2" />
      <path d="M15 15C15 10 25 10 25 15" stroke="#4CAF50" strokeWidth="2" />
      <circle cx="18" cy="25" r="3" fill="#F44336" />
      <circle cx="25" cy="22" r="2" fill="#FFC107" />
    </svg>
  ),
  "fashion": (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="8" width="24" height="24" rx="12" fill="#E3F2FD" stroke="#1E88E5" strokeWidth="2" />
      <path d="M15 20L18 23L25 16" stroke="#1E88E5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="30" cy="10" r="4" fill="#FFC107" />
    </svg>
  ),
  "mom-baby": (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="12" r="6" fill="#FCE4EC" stroke="#F06292" strokeWidth="2" />
      <path d="M10 35C10 25 30 25 30 35" fill="#FCE4EC" stroke="#F06292" strokeWidth="2" />
      <circle cx="25" cy="25" r="5" fill="#E3F2FD" stroke="#1E88E5" strokeWidth="2" />
    </svg>
  ),
  "home-kitchen": (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 20L20 5L35 20V35H5V20Z" fill="#FFF3E0" stroke="#FF5722" strokeWidth="2" />
      <rect x="15" y="20" width="10" height="10" fill="#FF5722" />
      <path d="M18 10H22" stroke="#333" strokeWidth="2" />
    </svg>
  ),
  "appliances": (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="5" width="20" height="30" rx="2" fill="#ECEFF1" stroke="#607D8B" strokeWidth="2" />
      <line x1="10" y1="18" x2="30" y2="18" stroke="#607D8B" strokeWidth="2" />
      <rect x="22" y="10" width="4" height="4" fill="#607D8B" />
      <circle cx="15" cy="25" r="3" fill="#607D8B" />
    </svg>
  ),
  "fitness-health": (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 35C20 35 5 25 5 15C5 10 10 5 15 5C18 5 20 8 20 8C20 8 22 5 25 5C30 5 35 10 35 15C35 25 20 35 20 35Z" fill="#FCE4EC" stroke="#F06292" strokeWidth="2" />
      <rect x="12" y="18" width="16" height="4" rx="2" fill="#333" />
      <rect x="10" y="17" width="2" height="6" rx="1" fill="#333" />
      <rect x="28" y="17" width="2" height="6" rx="1" fill="#333" />
    </svg>
  ),
  "smart-watch": (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="12" y="12" width="16" height="16" rx="4" fill="#333" />
      <rect x="16" y="5" width="8" height="7" fill="#555" />
      <rect x="16" y="28" width="8" height="7" fill="#555" />
      <circle cx="20" cy="20" r="4" fill="#1E88E5" />
    </svg>
  ),
  "religious": (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 35H30V20C30 15 25 10 20 10C15 10 10 15 10 20V35Z" fill="#FFF9C4" stroke="#FBC02D" strokeWidth="2" />
      <path d="M20 5V10" stroke="#FBC02D" strokeWidth="2" />
      <circle cx="20" cy="5" r="1" fill="#FBC02D" />
      <rect x="18" y="25" width="4" height="10" fill="#FBC02D" />
    </svg>
  ),
  "peripherals": (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="12" y="10" width="16" height="20" rx="8" fill="#E3F2FD" stroke="#1E88E5" strokeWidth="2" />
      <line x1="20" y1="10" x2="20" y2="18" stroke="#1E88E5" strokeWidth="2" />
      <rect x="10" y="32" width="20" height="4" rx="2" fill="#333" />
    </svg>
  ),
  "smart-furniture": (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 10H30V15H10V10Z" fill="#FFF3E0" stroke="#FF9800" strokeWidth="2" />
      <rect x="15" y="15" width="10" height="20" fill="#FF9800" />
      <rect x="12" y="30" width="16" height="5" fill="#333" />
    </svg>
  ),
  "books": (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="28" width="20" height="5" fill="#4CAF50" stroke="#388E3C" strokeWidth="1" />
      <rect x="10" y="22" width="20" height="5" fill="#FFC107" stroke="#FFA000" strokeWidth="1" />
      <rect x="10" y="16" width="20" height="5" fill="#F44336" stroke="#D32F2F" strokeWidth="1" />
      <path d="M10 16V33" stroke="#333" strokeWidth="2" />
    </svg>
  ),
  "others": (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="8" width="8" height="8" rx="1" fill="#1E88E5" />
      <rect x="24" y="8" width="8" height="8" rx="1" fill="#1E88E5" />
      <rect x="8" y="24" width="8" height="8" rx="1" fill="#1E88E5" />
      <rect x="24" y="24" width="8" height="8" rx="4" fill="#1E88E5" />
    </svg>
  ),
};

const defaultGenericIcon = (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="10" width="30" height="25" rx="3" fill="#ECEFF1" stroke="#607D8B" strokeWidth="2" />
    <path d="M15 10V15H25V10" stroke="#607D8B" strokeWidth="2" />
    <circle cx="20" cy="22" r="3" fill="#1E88E5" />
  </svg>
);

const fallbackCategories = [
  { name: "Gadgets", slug: "gadgets", icon: categoryIconMap["gadgets"], parent_id: null },
  { name: "Smart Electronics", slug: "smart-electronics", icon: categoryIconMap["smart-electronics"], parent_id: null },
  { name: "Home & Lifestyle", slug: "home-lifestyle", icon: categoryIconMap["home-lifestyle"], parent_id: null },
  { name: "Beauty & Personal", slug: "beauty-personal", icon: categoryIconMap["beauty-personal"], parent_id: null },
  { name: "Healthy Food", slug: "healthy-food", icon: categoryIconMap["healthy-food"], parent_id: null },
  { name: "Fashion", slug: "fashion", icon: categoryIconMap["fashion"], parent_id: null },
  { name: "Mom & Baby", slug: "mom-baby", icon: categoryIconMap["mom-baby"], parent_id: null },
  { name: "Home & Kitchen", slug: "home-kitchen", icon: categoryIconMap["home-kitchen"], parent_id: null },
  { name: "Appliances", slug: "appliances", icon: categoryIconMap["appliances"], parent_id: null },
  { name: "Fitness & Health", slug: "fitness-health", icon: categoryIconMap["fitness-health"], parent_id: null },
  { name: "Smart Watch", slug: "smart-watch", icon: categoryIconMap["smart-watch"], parent_id: null },
  { name: "Religious", slug: "religious", icon: categoryIconMap["religious"], parent_id: null },
  { name: "Peripherals", slug: "peripherals", icon: categoryIconMap["peripherals"], parent_id: null },
  { name: "Smart Furniture", slug: "smart-furniture", icon: categoryIconMap["smart-furniture"], parent_id: null },
  { name: "Books", slug: "books", icon: categoryIconMap["books"], parent_id: null },
  { name: "Others", slug: "others", icon: categoryIconMap["others"], parent_id: null },
];

const recentProducts = [
  { id: 1, title: "প্রিমিয়াম সিজন ফ্রেশ মিক্স খেজুর কম্বো প্যাকেজ", price: 1760, image: "/fresh_dates.png" },
  { id: 2, title: "আকর্ষণীয় এম্ব্রয়ডারী ডিজাইনের নতুন কালেকশন", price: 690, image: "/embroidery_dress.png" },
  { id: 3, title: "ঈদের আনন্দে বাবা ছেলে একসাথে আকর্ষণীয় ডিজাইনের ম্যাচিং পাঞ্জাবী", price: 980, image: "/matching_panjabi.png" },
  { id: 4, title: "প্রিমিয়াম কটন ফেব্রিক পাঞ্জাবী", price: 1380, image: "/soft_katan_panjabi.png" },
  { id: 5, title: "কাফ হাতা ডিজাইনে প্রিমিয়াম ব্ল্যাক পাঞ্জাবী", price: 1150, image: "/black_panjabi_cuff.png" },
];

export default function CategoriesPage() {
  const [dbCategories, setDbCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data, error } = await supabase
          .from("categories")
          .select("*")
          .order("sort_order", { ascending: true });

        if (data && !error && data.length > 0) {
          setDbCategories(data);
        }
      } catch (err) {
        console.error("Failed to load categories in storefront:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  // Format list to separate roots and subcategories
  const activeList = dbCategories.length > 0 ? dbCategories : fallbackCategories.map(f => ({ ...f, id: f.slug }));

  const rootCategories = activeList.filter((c) => !c.parent_id);
  const subCategoryMap: Record<string, any[]> = {};
  activeList.forEach((c) => {
    if (c.parent_id) {
      const pId = String(c.parent_id);
      if (!subCategoryMap[pId]) {
        subCategoryMap[pId] = [];
      }
      subCategoryMap[pId].push(c);
    }
  });

  const displayCategories = rootCategories.map((c) => ({
    id: String(c.id || c.slug),
    name: c.name,
    slug: c.slug,
    icon: categoryIconMap[c.slug] || defaultGenericIcon,
    subCategories: subCategoryMap[String(c.id || c.slug)] || [],
  }));

  return (
    <div className="flex flex-col min-h-screen bg-[#f4f4f4]">
      <Header />
      
      <main className="flex-1 pb-20 md:pb-12">
        {/* Categories Section */}
        <section className="container-custom py-6 md:py-10">
          <h1 className="text-xl md:text-2xl font-bold text-gray-800 text-center mb-8">Categories</h1>
          
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="w-8 h-8 border-4 border-[#1a80c2] border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {displayCategories.map((category, index) => (
                <div 
                  key={index}
                  className="bg-white p-5 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-slate-50 p-2.5 rounded-xl text-slate-500">
                        {category.icon}
                      </div>
                      <Link
                        href={`/category/${category.slug}`}
                        className="font-bold text-gray-800 hover:text-[#1a80c2] transition-colors text-base"
                      >
                        {category.name}
                      </Link>
                    </div>

                    {category.subCategories.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {category.subCategories.map((sub: any, subIndex: number) => (
                          <Link
                            key={subIndex}
                            href={`/category/${sub.slug}`}
                            className="text-[10px] md:text-xs font-semibold text-gray-500 bg-gray-50 border border-gray-100 rounded-full px-2.5 py-1 hover:text-[#1a80c2] hover:bg-blue-50/50 hover:border-blue-100 transition-all"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  <Link
                    href={`/category/${category.slug}`}
                    className="text-xs font-bold text-[#1a80c2] hover:underline flex items-center gap-1 group mt-2 animate-all"
                  >
                    <span>Explore Catalog</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Recent Products Section */}
        <section className="container-custom py-6 md:py-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800">Recent Product</h2>
            <Link
              href="/"
              className="text-gray-500 text-sm font-medium hover:text-[#1a80c2] flex items-center gap-1"
            >
              <span>View All</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
            {recentProducts.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <BottomNav />
    </div>
  );
}
