"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8fafc]">
      <Header />
      
      <main className="flex-grow py-12 md:py-16">
        <div className="container-custom max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-[#1a80c2] to-[#156a9e] px-6 py-10 md:px-10 md:py-12 text-white">
              <h1 className="text-2xl md:text-3xl font-extrabold mb-2">About Us</h1>
              <p className="text-slate-100 text-sm md:text-base font-medium">
                Welcome to 1stopDokan, your premier online shopping destination in Bangladesh.
              </p>
            </div>
            
            {/* Content Body */}
            <div className="p-6 md:p-10 space-y-8 text-slate-700 leading-relaxed text-sm md:text-base">
              
              <section className="space-y-3">
                <h2 className="text-lg md:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  Our Story
                </h2>
                <p>
                  Established with a vision to redefine online shopping, 1stopDokan brings together high-quality products, unmatched convenience, and reliable customer service. We cater to the diverse lifestyle needs of modern shoppers in Bangladesh, offering everything from fashion apparel to cutting-edge gadgets and daily essentials.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg md:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  Our Mission
                </h2>
                <p>
                  Our mission is simple: to make online shopping safe, transparent, and satisfying. We achieve this by:
                </p>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li>Sourcing items directly from reliable suppliers to ensure quality control.</li>
                  <li>Offering flexible payment methods, including Cash on Delivery and popular mobile wallets.</li>
                  <li>Providing ultra-fast delivery options inside and outside Dhaka.</li>
                  <li>Ensuring friendly, dedicated customer support is always within reach.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg md:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  Why Choose Us?
                </h2>
                <p>
                  We put our customers first. Whether you are looking for premium Panjabis, stylish T-shirts, smart accessories, or lifestyle goods, 1stopDokan is committed to offering competitive prices, secure transactions, and a hassle-free exchange policy.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg md:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  Our Headquarters
                </h2>
                <p>
                  We operate locally out of Dhaka, serving customers all across the country. 
                </p>
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4 font-semibold text-xs md:text-sm">
                  <div>
                    <p className="text-slate-500 font-bold uppercase tracking-wider text-[10px]">Location</p>
                    <p className="text-slate-800">Gulshan, Dhaka, Bangladesh</p>
                  </div>
                  <div>
                    <p className="text-slate-500 font-bold uppercase tracking-wider text-[10px]">Support Hotline</p>
                    <p className="text-[#1a80c2]">01518-486910</p>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
