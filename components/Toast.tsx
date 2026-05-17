"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface ToastProps {
  message: string;
  productImage?: string;
  isVisible: boolean;
  onClose: () => void;
}

const Toast = ({ message, productImage, isVisible, onClose }: ToastProps) => {
  const [shouldRender, setShouldRender] = useState(isVisible);

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 300); // Wait for fade out animation
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!shouldRender) return null;

  return (
    <div 
      className={`fixed top-20 right-4 md:right-10 z-[100] transition-all duration-300 transform ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
      }`}
    >
      <div className="bg-white/90 backdrop-blur-md border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)] rounded-2xl p-4 flex items-center gap-4 min-w-[300px] max-w-[400px]">
        {productImage && (
          <div className="w-12 h-12 relative rounded-xl overflow-hidden bg-white border border-gray-100 flex-shrink-0">
            <Image src={productImage} alt="Product" fill className="object-contain p-1" />
          </div>
        )}
        <div className="flex-1">
          <p className="text-sm font-bold text-gray-800 leading-snug">{message}</p>
          <p className="text-[11px] text-[#1a80c2] font-semibold mt-0.5">অর্ডার সম্পন্ন করতে কার্টে যান</p>
        </div>
        <button 
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Toast;
