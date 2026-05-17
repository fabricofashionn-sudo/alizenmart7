"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { useCart } from "@/context/CartContext";
import { HugeiconsIcon } from "@hugeicons/react";
import { TruckDeliveryIcon, ShoppingCart01Icon, UserIcon } from "@hugeicons/core-free-icons";

const Header = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { totalItems } = useCart();

  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const categories = [
    { name: "Gadgets", hasSub: true, slug: "gadgets" },
    { name: "Smart Electronics", hasSub: true, slug: "smart-electronics" },
    { name: "Home & Lifestyle", hasSub: true, slug: "home-lifestyle" },
    { name: "Beauty & Personal", hasSub: true, slug: "beauty-personal" },
    { name: "Healthy Food", hasSub: true, slug: "healthy-food" },
    { name: "Fashion", hasSub: true, slug: "fashion" },
    { name: "Mom & Baby", hasSub: true, slug: "mom-baby" },
    { name: "Home & Kitchen", hasSub: true, slug: "home-kitchen" },
    { name: "Appliances", hasSub: true, slug: "appliances" },
    { name: "Fitness & Health", hasSub: true, slug: "fitness-health" },
    { name: "Smart Watch", hasSub: false, slug: "smart-watch" },
    { name: "Religious", hasSub: true, slug: "religious" },
    { name: "Peripherals", hasSub: true, slug: "peripherals" },
    { name: "Smart Furniture", hasSub: false, slug: "smart-furniture" },
    { name: "Books", hasSub: true, slug: "books" },
    { name: "Others", hasSub: false, slug: "others" },
  ];

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Mobile Drawer Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-[100] transition-opacity duration-300 md:hidden ${
          isDrawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsDrawerOpen(false)}
      ></div>

      {/* Mobile Drawer */}
      <div 
        className={`fixed top-0 left-0 bottom-0 w-[80%] max-w-[300px] bg-white z-[101] shadow-2xl transition-transform duration-300 md:hidden flex flex-col ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="bg-[#1a80c2] p-4 flex items-center justify-between">
          <button onClick={() => setIsDrawerOpen(false)} className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
          <Link href="/" className="flex items-center" onClick={() => setIsDrawerOpen(false)}>
            <div className="relative h-8 w-28">
              <Image 
                src="/logo/logo2.png" 
                alt="Fabrico Fashion Logo" 
                fill
                sizes="112px"
                className="object-contain" 
                priority
              />
            </div>
          </Link>
        </div>

        {/* Drawer Body - Categories */}
        <div className="flex-1 overflow-y-auto no-scrollbar">
          {categories.map((cat, index) => (
            <div key={index} className="border-b border-gray-100">
              <Link 
                href={`/category/${cat.slug}`} 
                className="flex items-center justify-between p-3.5 hover:bg-gray-50 transition-colors"
                onClick={() => setIsDrawerOpen(false)}
              >
                <span className="text-sm font-medium text-gray-700">{cat.name}</span>
                {cat.hasSub && (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                )}
              </Link>
            </div>
          ))}
        </div>

        {/* Drawer Footer */}
        <div className="p-4 border-t border-gray-100 text-center">
          <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
            All Rights Reserved by Fabrico Fashion
          </p>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="bg-[#1a80c2] py-2 md:py-3 shadow-sm">
        <div className="container-custom flex flex-col gap-3 md:gap-4">
          <div className="flex items-center justify-between gap-4">
            {/* Mobile Menu Icon */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsDrawerOpen(true)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>

            {/* Logo */}
            <Link href="/" className="flex-shrink-0 md:flex-none absolute left-1/2 -translate-x-1/2 md:relative md:left-0 md:translate-x-0">
              <div className="relative h-8 md:h-10 w-32 md:w-40 flex items-center">
                <Image 
                  src="/logo/logo2.png" 
                  alt="Fabrico Fashion Logo" 
                  fill
                  sizes="(max-width: 768px) 128px, 160px"
                  className="object-contain object-left md:object-center" 
                  priority 
                />
              </div>
            </Link>

            {/* Search Bar - Desktop Only */}
            <form onSubmit={handleSearchSubmit} className="hidden md:flex flex-1 max-w-xl relative mx-4">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search product, brand, and more..."
                className="w-full bg-white px-4 py-2 rounded-sm outline-none text-sm pr-12"
              />
              <button type="submit" className="absolute right-0 top-0 bottom-0 px-4 bg-[#FF5722] text-white rounded-r-sm flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </button>
            </form>

            {/* Action Icons */}
            <div className="flex items-center gap-3 md:gap-5 text-white">
              <Link href="/track-order" className="hidden lg:flex items-center gap-1.5 hover:opacity-80 transition-opacity text-[13px] font-semibold">
                 <HugeiconsIcon icon={TruckDeliveryIcon} size={20} color="currentColor" strokeWidth={2} />
                 <span>Track Order</span>
              </Link>
              
              <Link href="/checkout" className="relative flex items-center justify-center p-1 hover:opacity-80 transition-opacity">
                <div className="relative">
                  <HugeiconsIcon icon={ShoppingCart01Icon} size={24} color="currentColor" strokeWidth={2} />
                  <span className="absolute -top-1.5 -right-1.5 bg-[#FF5722] text-white text-[10px] w-4.5 h-4.5 rounded-full flex items-center justify-center font-bold border-2 border-[#1a80c2]">
                    {totalItems}
                  </span>
                </div>
                <span className="hidden md:inline ml-2 text-[13px] font-semibold">Cart({totalItems})</span>
              </Link>

              <Link href="/account" className="hidden md:flex items-center gap-1.5 hover:opacity-80 transition-opacity text-[13px] font-semibold">
                <HugeiconsIcon icon={UserIcon} size={20} color="currentColor" strokeWidth={2} />
                <span>Account</span>
              </Link>
            </div>
          </div>

          {/* Search Bar - Mobile Only */}
          <form onSubmit={handleSearchSubmit} className="md:hidden w-full relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search product, brand, and more..."
              className="w-full bg-white px-4 py-2.5 rounded-sm outline-none text-sm pr-12 shadow-sm"
            />
            <button type="submit" className="absolute right-0 top-0 bottom-0 px-4 bg-[#FF5722] text-white rounded-r-sm flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>

      <div className="hidden md:block bg-white border-b border-gray-100 shadow-sm overflow-x-auto no-scrollbar">
        <div className="container-custom flex items-center justify-between gap-4 py-3 text-[14px] font-bold text-gray-700 whitespace-nowrap">
          {categories.slice(0, 10).map((cat, index) => (
            <Link 
              key={index}
              href={`/category/${cat.slug}`} 
              className="hover:text-primary transition-colors"
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
