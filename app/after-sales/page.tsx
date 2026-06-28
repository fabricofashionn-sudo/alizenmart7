"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AfterSalesSupportPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8fafc]">
      <Header />
      
      <main className="flex-grow py-12 md:py-16">
        <div className="container-custom max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-[#1a80c2] to-[#156a9e] px-6 py-10 md:px-10 md:py-12 text-white">
              <h1 className="text-2xl md:text-3xl font-extrabold mb-2">After Sales Support</h1>
              <p className="text-slate-100 text-sm md:text-base font-medium">
                Our support doesn't end when your package arrives. Discover how we can help you post-delivery.
              </p>
            </div>
            
            {/* Content Body */}
            <div className="p-6 md:p-10 space-y-8 text-slate-700 leading-relaxed text-sm md:text-base">
              
              <section className="space-y-4">
                <h2 className="text-lg md:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  1. Size & Fitting Exchange
                </h2>
                <p>
                  We want you to feel comfortable and confident in our clothing. If you receive your panjabi or shirt and find the size does not fit perfectly, you can request a size exchange. We will arrange a pickup or provide shipping details to send you the replacement size immediately.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg md:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  2. Product Care Guidelines
                </h2>
                <p>
                  To keep your premium apparel looking fresh and new for longer, we recommend following these general care guidelines:
                </p>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li>Wash dark colors separately. Do not bleach.</li>
                  <li>Use mild detergents. Wash in cold or lukewarm water.</li>
                  <li>Hang to dry in a shaded area out of direct sunlight.</li>
                  <li>Iron garments on low to medium heat settings.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg md:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  3. Defective or Damaged Items
                </h2>
                <p>
                  Every order undergoes strict quality checks. However, in the rare event that you receive a defective or damaged product, please contact us immediately (within 24 hours of delivery). We will ship a brand-new replacement product at no additional cost to you.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg md:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  4. Reach Our Support Channels
                </h2>
                <p>
                  Our dedicated after-sales agents are always available to resolve your concerns. You can contact us through any of the following channels:
                </p>
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4 font-semibold text-xs md:text-sm">
                  <div>
                    <p className="text-slate-500 font-bold uppercase tracking-wider text-[10px]">Email</p>
                    <p className="text-slate-800">0dotstore1@gmail.com</p>
                  </div>
                  <div>
                    <p className="text-slate-500 font-bold uppercase tracking-wider text-[10px]">Call Support</p>
                    <p className="text-slate-800">01518-486910</p>
                  </div>
                  <div>
                    <p className="text-slate-500 font-bold uppercase tracking-wider text-[10px]">WhatsApp</p>
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
