"use client";

import Link from "next/link";

const categories = [
  {
    name: "Gadgets",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="15" width="30" height="20" rx="3" fill="#E3F2FD" stroke="#1E88E5" strokeWidth="2" />
        <circle cx="15" cy="25" r="4" fill="#FF5722" />
        <rect x="25" y="20" width="5" height="10" rx="1" fill="#1E88E5" />
        <path d="M10 10H30L35 15V35H5V15L10 10Z" stroke="#333" strokeWidth="1" strokeDasharray="2 2" />
        <circle cx="20" cy="8" r="3" fill="#333" />
      </svg>
    ),
  },
  {
    name: "Smart Electronics",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 30V15L20 8L30 15V30H10Z" fill="#F1F8E9" stroke="#4CAF50" strokeWidth="2" />
        <circle cx="20" cy="22" r="4" fill="#1E88E5" />
        <path d="M15 35H25" stroke="#333" strokeWidth="2" strokeLinecap="round" />
        <circle cx="20" cy="12" r="2" fill="#4CAF50" />
      </svg>
    ),
  },
  {
    name: "Home & Lifestyle",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="20" height="25" rx="2" fill="#F3E5F5" stroke="#9C27B0" strokeWidth="2" />
        <rect x="15" y="15" width="10" height="5" fill="#9C27B0" />
        <rect x="15" y="25" width="10" height="5" fill="#E1BEE7" />
        <path d="M5 10H35" stroke="#333" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Beauty & Personal",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="12" y="10" width="16" height="25" rx="4" fill="#FFF3E0" stroke="#FF9800" strokeWidth="2" />
        <rect x="15" y="5" width="10" height="5" fill="#333" />
        <circle cx="20" cy="22" r="5" fill="#FF9800" opacity="0.3" />
        <path d="M15 30H25" stroke="#FF9800" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Healthy Food",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 20C10 10 30 10 30 20V30C30 35 10 35 10 30V20Z" fill="#E8F5E9" stroke="#4CAF50" strokeWidth="2" />
        <path d="M15 15C15 10 25 10 25 15" stroke="#4CAF50" strokeWidth="2" />
        <circle cx="18" cy="25" r="3" fill="#F44336" />
        <circle cx="25" cy="22" r="2" fill="#FFC107" />
      </svg>
    ),
  },
  {
    name: "Fashion",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="24" height="24" rx="12" fill="#E3F2FD" stroke="#1E88E5" strokeWidth="2" />
        <path d="M15 20L18 23L25 16" stroke="#1E88E5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="30" cy="10" r="4" fill="#FFC107" />
      </svg>
    ),
  },
  {
    name: "Mom & Baby",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="12" r="6" fill="#FCE4EC" stroke="#F06292" strokeWidth="2" />
        <path d="M10 35C10 25 30 25 30 35" fill="#FCE4EC" stroke="#F06292" strokeWidth="2" />
        <circle cx="25" cy="25" r="5" fill="#E3F2FD" stroke="#1E88E5" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: "Home & Kitchen",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 20L20 5L35 20V35H5V20Z" fill="#FFF3E0" stroke="#FF5722" strokeWidth="2" />
        <rect x="15" y="20" width="10" height="10" fill="#FF5722" />
        <path d="M18 10H22" stroke="#333" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: "Appliances",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="5" width="20" height="30" rx="2" fill="#ECEFF1" stroke="#607D8B" strokeWidth="2" />
        <line x1="10" y1="18" x2="30" y2="18" stroke="#607D8B" strokeWidth="2" />
        <rect x="22" y="10" width="4" height="4" fill="#607D8B" />
        <circle cx="15" cy="25" r="3" fill="#607D8B" />
      </svg>
    ),
  },
  {
    name: "Fitness & Health",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 35C20 35 5 25 5 15C5 10 10 5 15 5C18 5 20 8 20 8C20 8 22 5 25 5C30 5 35 10 35 15C35 25 20 35 20 35Z" fill="#FCE4EC" stroke="#F06292" strokeWidth="2" />
        <rect x="12" y="18" width="16" height="4" rx="2" fill="#333" />
        <rect x="10" y="17" width="2" height="6" rx="1" fill="#333" />
        <rect x="28" y="17" width="2" height="6" rx="1" fill="#333" />
      </svg>
    ),
  },
  {
    name: "Smart Watch",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="12" y="12" width="16" height="16" rx="4" fill="#333" />
        <rect x="16" y="5" width="8" height="7" fill="#555" />
        <rect x="16" y="28" width="8" height="7" fill="#555" />
        <circle cx="20" cy="20" r="4" fill="#1E88E5" />
      </svg>
    ),
  },
  {
    name: "Religious",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 35H30V20C30 15 25 10 20 10C15 10 10 15 10 20V35Z" fill="#FFF9C4" stroke="#FBC02D" strokeWidth="2" />
        <path d="M20 5V10" stroke="#FBC02D" strokeWidth="2" />
        <circle cx="20" cy="5" r="1" fill="#FBC02D" />
        <rect x="18" y="25" width="4" height="10" fill="#FBC02D" />
      </svg>
    ),
  },
  {
    name: "Peripherals",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="12" y="10" width="16" height="20" rx="8" fill="#E3F2FD" stroke="#1E88E5" strokeWidth="2" />
        <line x1="20" y1="10" x2="20" y2="18" stroke="#1E88E5" strokeWidth="2" />
        <rect x="10" y="32" width="20" height="4" rx="2" fill="#333" />
      </svg>
    ),
  },
  {
    name: "Smart Furniture",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 10H30V15H10V10Z" fill="#FFF3E0" stroke="#FF9800" strokeWidth="2" />
        <rect x="15" y="15" width="10" height="20" fill="#FF9800" />
        <rect x="12" y="30" width="16" height="5" fill="#333" />
      </svg>
    ),
  },
  {
    name: "Books",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="28" width="20" height="5" fill="#4CAF50" stroke="#388E3C" strokeWidth="1" />
        <rect x="10" y="22" width="20" height="5" fill="#FFC107" stroke="#FFA000" strokeWidth="1" />
        <rect x="10" y="16" width="20" height="5" fill="#F44336" stroke="#D32F2F" strokeWidth="1" />
        <path d="M10 16V33" stroke="#333" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: "Others",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="8" height="8" rx="1" fill="#1E88E5" />
        <rect x="24" y="8" width="8" height="8" rx="1" fill="#1E88E5" />
        <rect x="8" y="24" width="8" height="8" rx="1" fill="#1E88E5" />
        <rect x="24" y="24" width="8" height="8" rx="4" fill="#1E88E5" />
      </svg>
    ),
  },
];

export default function FeaturedCategories() {
  return (
    <section className="container-custom mb-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Featured Categories</h2>
        <Link
          href="/categories"
          className="text-gray-500 text-sm font-medium hover:text-primary flex items-center gap-1"
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

      <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-8 gap-4">
        {categories.map((category, index) => (
          <Link
            key={index}
            href="/"
            className="group flex flex-col items-center justify-center bg-white p-4 rounded-xl border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all duration-300 aspect-square"
          >
            <div className="mb-3 transition-transform duration-300 group-hover:scale-110">
              {category.icon}
            </div>
            <span className="text-xs font-medium text-gray-700 text-center line-clamp-2 leading-tight">
              {category.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
