"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import { useState } from "react";
import Link from "next/link";

export default function TrackOrderPage() {
  const [orderId, setOrderId] = useState("");
  const [isTracked, setIsTracked] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderId.trim()) {
      setIsTracked(true);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f4f4f4]">
      <Header />
      
      <main className="flex-1 py-10 md:py-20">
        <div className="container-custom max-w-2xl">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
              <form onSubmit={handleTrack} className="relative flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="Search Order ID"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  className="w-full border border-[#FF5722] rounded-md py-2.5 px-4 pr-12 outline-none text-sm"
                />
                <button type="submit" className="absolute right-0 top-0 bottom-0 px-4 text-[#FF5722]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                </button>
              </form>
              
              <Link href="/account" className="text-[#FF5722] text-sm font-bold flex items-center gap-1 hover:underline">
                <span>View Your Orders</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3.5 h-3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
            </div>

            {isTracked ? (
              <div className="text-center py-10 border-t border-gray-100">
                <h2 className="text-xl font-bold text-gray-800 mb-1">Order Id: {orderId}</h2>
                <p className="text-[#FF5722] font-bold text-sm">In Transit</p>
                
                <div className="mt-10 flex items-center justify-center">
                  <div className="relative flex items-center justify-between w-full max-w-md">
                    {/* Progress Bar */}
                    <div className="absolute left-0 right-0 h-1 bg-gray-100 -z-10"></div>
                    <div className="absolute left-0 w-2/3 h-1 bg-[#FF5722] -z-10"></div>
                    
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-[#FF5722]"></div>
                      <span className="text-[10px] font-bold text-gray-500 uppercase">Pending</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-[#FF5722]"></div>
                      <span className="text-[10px] font-bold text-gray-500 uppercase">Confirmed</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-[#FF5722]"></div>
                      <span className="text-[10px] font-bold text-gray-500 uppercase">Picked</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-gray-200"></div>
                      <span className="text-[10px] font-bold text-gray-500 uppercase">Delivered</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-16 border-t border-gray-100">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-gray-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </div>
                <h3 className="text-gray-400 font-medium">Enter your Order ID to track your parcel</h3>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
      <BottomNav />
    </div>
  );
}
