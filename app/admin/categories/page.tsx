"use client";

import React, { useState, useEffect } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { 
  Folder01Icon, 
  Search01Icon, 
  Add01Icon, 
  PackageIcon,
  FilterIcon,
  StarIcon,
  ArrowRight01Icon
} from "@hugeicons/core-free-icons";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

export default function AdminCategories() {
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [categories, setCategories] = useState<any[]>([]);
  const [totalProductsCount, setTotalProductsCount] = useState(0);

  // Modal State
  const [showAddModal, setShowAddModal] = useState(false);
  const [newCatName, setNewCatName] = useState("");
  const [newCatSlug, setNewCatSlug] = useState("");

  const staticCategories = [
    { name: "Gadgets", slug: "gadgets", bg: "bg-blue-50", text: "text-blue-600" },
    { name: "Smart Electronics", slug: "smart-electronics", bg: "bg-indigo-50", text: "text-indigo-600" },
    { name: "Home & Lifestyle", slug: "home-lifestyle", bg: "bg-purple-50", text: "text-purple-600" },
    { name: "Beauty & Personal", slug: "beauty-personal", bg: "bg-pink-50", text: "text-pink-600" },
    { name: "Healthy Food", slug: "healthy-food", bg: "bg-emerald-50", text: "text-emerald-600" },
    { name: "Fashion", slug: "fashion", bg: "bg-amber-50", text: "text-amber-600" },
    { name: "Mom & Baby", slug: "mom-baby", bg: "bg-teal-50", text: "text-teal-600" },
    { name: "Home & Kitchen", slug: "home-kitchen", bg: "bg-cyan-50", text: "text-cyan-600" },
    { name: "Appliances", slug: "appliances", bg: "bg-rose-50", text: "text-rose-600" },
    { name: "Fitness & Health", slug: "fitness-health", bg: "bg-green-50", text: "text-green-600" },
    { name: "Smart Watch", slug: "smart-watch", bg: "bg-orange-50", text: "text-orange-600" },
    { name: "Religious", slug: "religious", bg: "bg-yellow-50", text: "text-yellow-600" },
    { name: "Peripherals", slug: "peripherals", bg: "bg-violet-50", text: "text-violet-600" },
    { name: "Smart Furniture", slug: "smart-furniture", bg: "bg-sky-50", text: "text-sky-600" },
    { name: "Books", slug: "books", bg: "bg-lime-50", text: "text-lime-600" },
    { name: "Others", slug: "others", bg: "bg-gray-50", text: "text-gray-600" },
  ];

  useEffect(() => {
    fetchProductStats();
  }, []);

  const fetchProductStats = async () => {
    setLoading(true);
    try {
      const { data: products, error } = await supabase
        .from("products")
        .select("category");

      if (error) {
        console.error("Error fetching product categories:", error);
      }

      const items = products || [];
      setTotalProductsCount(items.length);

      // Create mapping of category counts
      const counts: Record<string, number> = {};
      items.forEach((p) => {
        const cat = String(p.category || "").trim().toLowerCase();
        counts[cat] = (counts[cat] || 0) + 1;
      });

      // Map dynamic product count onto categories
      const enriched = staticCategories.map((c) => {
        const matches = counts[c.name.toLowerCase()] || counts[c.slug.toLowerCase()] || 0;
        return {
          ...c,
          count: matches,
        };
      });

      setCategories(enriched);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCatName.trim() || !newCatSlug.trim()) {
      alert("Please fill in both name and slug!");
      return;
    }

    const newCat = {
      name: newCatName.trim(),
      slug: newCatSlug.trim().toLowerCase().replace(/\s+/g, "-"),
      bg: "bg-slate-50",
      text: "text-slate-600",
      count: 0
    };

    setCategories(prev => [newCat, ...prev]);
    setNewCatName("");
    setNewCatSlug("");
    setShowAddModal(false);
  };

  const filteredCategories = categories.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.slug.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Find most popular category
  const popularCategory = categories.reduce((max, c) => (c.count > (max?.count || 0) ? c : max), categories[0] || null);

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Category Management</h1>
          <p className="text-gray-500 text-sm mt-1 font-medium">Organize and monitor all shopping catalog categories and catalogs.</p>
        </div>
        <button 
          onClick={() => setShowAddModal(true)}
          className="bg-[#1a80c2] text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-blue-100 hover:bg-[#166ca5] transition-all flex items-center justify-center gap-2"
        >
          <HugeiconsIcon icon={Add01Icon} size={16} /> Add New Category
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-5">
          <div className="bg-blue-50 text-blue-600 w-14 h-14 rounded-xl flex items-center justify-center">
            <HugeiconsIcon icon={Folder01Icon} size={28} />
          </div>
          <div>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">Total Categories</p>
            <p className="text-xl font-bold text-gray-800 mt-0.5">
              {loading ? "..." : categories.length}
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-5">
          <div className="bg-emerald-50 text-emerald-600 w-14 h-14 rounded-xl flex items-center justify-center">
            <HugeiconsIcon icon={PackageIcon} size={28} />
          </div>
          <div>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">Catalog Products</p>
            <p className="text-xl font-bold text-gray-800 mt-0.5">
              {loading ? "..." : totalProductsCount} Items
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-5">
          <div className="bg-purple-50 text-purple-600 w-14 h-14 rounded-xl flex items-center justify-center">
            <HugeiconsIcon icon={StarIcon} size={28} />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">Top Category</p>
            <p className="text-sm font-bold text-gray-800 mt-0.5 truncate">
              {loading ? "..." : popularCategory ? `${popularCategory.name} (${popularCategory.count})` : "N/A"}
            </p>
          </div>
        </div>
      </div>

      {/* Category List */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search category by name or slug..." 
              className="w-full bg-gray-50 border-none rounded-xl py-2.5 px-4 pl-12 text-sm outline-none focus:ring-2 focus:ring-blue-100 transition-all text-gray-800"
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <HugeiconsIcon icon={Search01Icon} size={18} />
            </span>
          </div>
          <button 
            onClick={fetchProductStats}
            className="text-xs font-bold text-[#1a80c2] bg-blue-50 hover:bg-blue-100 transition-colors px-3 py-1.5 rounded-lg flex items-center gap-1.5 self-end md:self-auto"
          >
            🔄 Refresh Counts
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50">
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Category Name</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Slug Path</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Product count</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Status</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {loading ? (
                [...Array(4)].map((_, i) => (
                  <tr key={i} className="animate-pulse">
                    <td className="px-6 py-4"><div className="w-32 h-4 bg-gray-100 rounded" /></td>
                    <td className="px-6 py-4"><div className="w-24 h-4 bg-gray-100 rounded" /></td>
                    <td className="px-6 py-4"><div className="w-16 h-4 bg-gray-100 rounded" /></td>
                    <td className="px-6 py-4"><div className="w-12 h-5 bg-gray-100 rounded-full" /></td>
                    <td className="px-6 py-4"><div className="w-20 h-4 bg-gray-100 rounded" /></td>
                  </tr>
                ))
              ) : filteredCategories.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-10 text-center text-gray-400 font-medium italic">
                    No categories found.
                  </td>
                </tr>
              ) : (
                filteredCategories.map((cat, index) => (
                  <tr key={index} className="hover:bg-gray-50/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${cat.bg || "bg-gray-50"} ${cat.text || "text-gray-600"}`}>
                          {cat.name.substring(0, 2).toUpperCase()}
                        </div>
                        <span className="text-sm font-bold text-gray-800">{cat.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-xs font-mono text-gray-500">
                      /category/{cat.slug}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-gray-800">{cat.count || 0}</span>
                        <span className="text-[10px] text-gray-400 font-semibold">products</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-green-50 text-green-700 border border-green-200">
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <Link 
                        href={`/admin/products?category=${encodeURIComponent(cat.name)}`}
                        className="text-[#1a80c2] text-xs font-bold hover:underline flex items-center gap-1 group"
                      >
                        <span>View Products</span>
                        <HugeiconsIcon icon={ArrowRight01Icon} size={14} className="group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Category Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 md:p-8 max-w-md w-full shadow-2xl border border-gray-100 transform scale-100 transition-all duration-300">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Create New Category</h3>
            <p className="text-xs text-gray-500 mb-6">Enter details below to create a dynamic catalog category entry.</p>

            <form onSubmit={handleAddCategory} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Category Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Leather Bags" 
                  value={newCatName}
                  onChange={(e) => {
                    setNewCatName(e.target.value);
                    // Autofill slug
                    setNewCatSlug(e.target.value.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, ""));
                  }}
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 px-4 text-sm outline-none focus:ring-2 focus:ring-blue-100 transition-all text-gray-800 font-medium" 
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Slug Path</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. leather-bags" 
                  value={newCatSlug}
                  onChange={(e) => setNewCatSlug(e.target.value.toLowerCase().replace(/\s+/g, "-"))}
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 px-4 text-sm font-mono outline-none focus:ring-2 focus:ring-blue-100 transition-all text-gray-800 font-medium" 
                />
              </div>

              <div className="flex items-center gap-3 pt-4">
                <button 
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 border border-gray-200 text-gray-600 py-3 rounded-xl font-bold text-sm hover:bg-gray-50 transition-all"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="flex-1 bg-[#1a80c2] text-white py-3 rounded-xl font-bold text-sm hover:bg-[#166ca5] transition-all shadow-lg shadow-blue-100"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
