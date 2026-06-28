"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function WhyShopOnlinePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8fafc]">
      <Header />
      
      <main className="flex-grow py-12 md:py-16">
        <div className="container-custom max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-[#1a80c2] to-[#156a9e] px-6 py-10 md:px-10 md:py-12 text-white">
              <h1 className="text-2xl md:text-3xl font-extrabold mb-2">Why Shop Online with Us</h1>
              <p className="text-slate-100 text-sm md:text-base font-medium">
                Discover the key benefits and guarantees of choosing 1stopDokan for your shopping.
              </p>
            </div>
            
            {/* Content Body */}
            <div className="p-6 md:p-10 space-y-8 text-slate-700 leading-relaxed text-sm md:text-base">
              
              <section className="space-y-4">
                <h2 className="text-lg md:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  1. Premium Quality Guarantee
                </h2>
                <p>
                  We handpick and review every single item featured on our website. From fabric choices to color fastness, stitching quality, and device specifications, we ensure everything meets premium standards so you get exactly what you see.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg md:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  2. 100% Secure Cash on Delivery (COD)
                </h2>
                <p>
                  Shop with complete peace of mind. We offer full Cash on Delivery nationwide. You only pay for your items once the courier agent delivers the package directly to your doorstep. You can inspect the package before handing over the payment.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg md:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  3. Easy 7-Day Exchange Policy
                </h2>
                <p>
                  Ordered the wrong size or changed your mind? No worries! With our customer-friendly exchange policy, you can request an exchange or return within 7 days. Our support team will assist you to quickly swap items or process refunds.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg md:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  4. Nationwide Fast Delivery
                </h2>
                <p>
                  We have partnered with the leading logistics providers in Bangladesh to ensure your packages arrive on time.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Inside Dhaka:</strong> Delivery within 1-2 business days (৳60).</li>
                  <li><strong>Outside Dhaka:</strong> Delivery within 3-5 business days (৳130).</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg md:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  5. Dedicated Support Line
                </h2>
                <p>
                  Have questions about an order or a specific product variant? Our support agents are available via Phone, Facebook Messenger, and WhatsApp to help guide you through your journey.
                </p>
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4 font-semibold text-xs md:text-sm">
                  <div>
                    <p className="text-slate-500 font-bold uppercase tracking-wider text-[10px]">Hotline</p>
                    <p className="text-slate-800">01518-486910</p>
                  </div>
                  <div>
                    <p className="text-slate-500 font-bold uppercase tracking-wider text-[10px]">WhatsApp Support</p>
                    <p className="text-[#1a80c2]">+880 1518 486910</p>
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
