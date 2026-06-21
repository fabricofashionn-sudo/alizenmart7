"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ImageAdd01Icon } from "@hugeicons/core-free-icons";
import { supabase } from "@/lib/supabase";


export default function AddProduct() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    oldPrice: "",
    category: "",
    stock: "10",
    image: "",
    description: "",
    is_featured: false,
  });

  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const { data, error } = await supabase
        .from("categories")
        .select("name")
        .order("name", { ascending: true });

      if (data && !error && data.length > 0) {
        const catNames = data.map((c: any) => c.name);
        setCategories(catNames);
        setFormData(prev => ({ ...prev, category: catNames[0] }));
      } else {
        const fallback = [
          "Gadgets", "Smart Electronics", "Home & Lifestyle", "Beauty & Personal", 
          "Healthy Food", "Fashion", "Mom & Baby", "Home & Kitchen", "Appliances", 
          "Fitness & Health", "Smart Watch", "Religious", "Peripherals", 
          "Smart Furniture", "Books", "Others"
        ];
        setCategories(fallback);
        setFormData(prev => ({ ...prev, category: fallback[0] }));
      }
    } catch (err) {
      console.error("Failed to fetch categories:", err);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      await uploadProductImage(file);
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      await uploadProductImage(file);
    }
  };

  const uploadProductImage = async (file: File) => {
    setUploading(true);
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = `products/${fileName}`;

      const { data, error } = await supabase.storage
        .from('images')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: true
        });

      if (error) throw error;

      const { data: urlData } = supabase.storage
        .from('images')
        .getPublicUrl(filePath);

      setFormData(prev => ({ ...prev, image: urlData.publicUrl }));
    } catch (err: any) {
      alert(`Upload failed: ${err.message}. Make sure the 'images' storage bucket is created in Supabase.`);
      console.error(err);
    } finally {
      setUploading(false);
    }
  };



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const productData = {
      title: formData.title,
      price: parseFloat(formData.price),
      oldPrice: formData.oldPrice ? parseFloat(formData.oldPrice) : null,
      category: formData.category,
      stock: parseInt(formData.stock),
      image: formData.image,
      description: formData.description,
      is_featured: formData.is_featured,
      created_at: new Date().toISOString(),
    };

    const { error } = await supabase.from('products').insert([productData]);

    if (error) {
      console.error('Error adding product:', error);
      alert(`Error: ${error.message}. (Note: Ensure the 'products' table exists in Supabase)`);
      // For demo purposes, we'll redirect anyway
      setTimeout(() => router.push("/admin/products"), 2000);
    } else {
      alert("Product added successfully!");
      router.push("/admin/products");
    }
    setLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex items-center gap-4">
        <Link href="/admin/products" className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center hover:bg-gray-50 transition-all shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-gray-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Add New Product</h1>
          <p className="text-gray-500 text-sm font-medium">Fill in the details to create a new product in your store.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Main Details */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Product Title*</label>
              <input 
                required
                name="title"
                value={formData.title}
                onChange={handleChange}
                type="text" 
                placeholder="e.g. Premium Cotton Panjabi" 
                className="w-full bg-gray-50 border-none rounded-xl py-3 px-4 text-sm outline-none focus:ring-2 focus:ring-blue-100 transition-all font-medium"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Description</label>
              <textarea 
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={5}
                placeholder="Write something about the product..." 
                className="w-full bg-gray-50 border-none rounded-xl py-3 px-4 text-sm outline-none focus:ring-2 focus:ring-blue-100 transition-all font-medium resize-none"
              ></textarea>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Price (৳)*</label>
                <input 
                  required
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  type="number" 
                  placeholder="0.00" 
                  className="w-full bg-gray-50 border-none rounded-xl py-3 px-4 text-sm outline-none focus:ring-2 focus:ring-blue-100 transition-all font-bold"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Old Price (৳)</label>
                <input 
                  name="oldPrice"
                  value={formData.oldPrice}
                  onChange={handleChange}
                  type="number" 
                  placeholder="0.00" 
                  className="w-full bg-gray-50 border-none rounded-xl py-3 px-4 text-sm outline-none focus:ring-2 focus:ring-blue-100 transition-all font-bold text-gray-400"
                />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm space-y-6">
            <h2 className="font-bold text-gray-800 flex items-center gap-2">
              <HugeiconsIcon icon={ImageAdd01Icon} size={18} className="text-gray-500" />
              Media & Assets
            </h2>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Product Image*</label>
              
              <div 
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`relative aspect-[1.8/1] rounded-2xl border-2 border-dashed transition-all flex flex-col items-center justify-center p-4 overflow-hidden bg-gray-50
                  ${dragging ? 'border-[#1a80c2] bg-blue-50/30' : 'border-gray-200 hover:border-gray-300'}
                `}
              >
                {formData.image ? (
                  <>
                    <img src={formData.image} alt="Preview" className="absolute inset-0 w-full h-full object-contain p-2 bg-white" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <label className="bg-white/95 hover:bg-white text-gray-800 text-xs font-bold px-4 py-2 rounded-xl cursor-pointer shadow-md transition-all active:scale-95 select-none">
                        Change Image
                        <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                      </label>
                      <button 
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, image: "" }))}
                        className="bg-red-500 hover:bg-red-600 text-white text-xs font-bold px-4 py-2 rounded-xl shadow-md transition-all active:scale-95 select-none"
                      >
                        Remove
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="text-center space-y-2 flex flex-col items-center">
                    {uploading ? (
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-8 h-8 border-4 border-blue-100 border-t-[#1a80c2] rounded-full animate-spin" />
                        <span className="text-xs font-bold text-gray-500">Uploading image...</span>
                      </div>
                    ) : (
                      <>
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                          <HugeiconsIcon icon={ImageAdd01Icon} size={20} />
                        </div>
                        <div className="text-xs text-gray-500 font-medium">
                          <label className="text-[#1a80c2] font-bold hover:underline cursor-pointer">
                            Click to upload
                            <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                          </label>
                          {" or drag & drop"}
                        </div>
                        <p className="text-[10px] text-gray-400 font-medium">Square or vertical layout works best</p>
                      </>
                    )}
                  </div>
                )}
              </div>

              <input 
                required
                name="image"
                value={formData.image}
                onChange={handleChange}
                type="text" 
                placeholder="Or paste direct image URL here..." 
                className="w-full bg-gray-50 border-none rounded-xl py-3 px-4 text-sm outline-none focus:ring-2 focus:ring-blue-100 transition-all font-medium"
              />
            </div>
          </div>
        </div>

        {/* Right Column - Organization */}
        <div className="space-y-6">
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm space-y-6">
            <h2 className="font-bold text-gray-800">Organization</h2>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Category*</label>
              <select 
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full bg-gray-50 border-none rounded-xl py-3 px-4 text-sm outline-none focus:ring-2 focus:ring-blue-100 transition-all font-bold text-gray-700"
              >
                {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Initial Stock*</label>
              <input 
                required
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                type="number" 
                placeholder="10" 
                className="w-full bg-gray-50 border-none rounded-xl py-3 px-4 text-sm outline-none focus:ring-2 focus:ring-blue-100 transition-all font-bold"
              />
            </div>

            <div className="flex items-center gap-3 pt-2">
              <input 
                type="checkbox"
                name="is_featured"
                id="is_featured"
                checked={formData.is_featured}
                onChange={handleChange}
                className="w-4 h-4 text-[#1a80c2] border-gray-300 rounded focus:ring-[#1a80c2] cursor-pointer"
              />
              <label htmlFor="is_featured" className="text-sm font-bold text-gray-700 select-none cursor-pointer">
                Featured Product
              </label>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <button 
              disabled={loading}
              type="submit"
              className="w-full bg-[#1a80c2] text-white py-4 rounded-xl font-bold text-sm shadow-lg shadow-blue-100 hover:bg-[#166ca5] transition-all disabled:opacity-50"
            >
              {loading ? "Adding Product..." : "Publish Product"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
