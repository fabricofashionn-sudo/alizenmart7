"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsConditionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8fafc]">
      <Header />
      
      <main className="flex-grow py-12 md:py-16">
        <div className="container-custom max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-[#1a80c2] to-[#156a9e] px-6 py-10 md:px-10 md:py-12 text-white">
              <h1 className="text-2xl md:text-3xl font-extrabold mb-2">Terms and Conditions</h1>
              <p className="text-slate-100 text-sm md:text-base font-medium">
                Last updated: June 28, 2026. Please read these terms carefully before using our platform.
              </p>
            </div>
            
            {/* Content Body */}
            <div className="p-6 md:p-10 space-y-8 text-slate-700 leading-relaxed text-sm md:text-base">
              
              <section className="space-y-3">
                <h2 className="text-lg md:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  1. Agreement to Terms
                </h2>
                <p>
                  By accessing or using the 1stopDokan website, you agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg md:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  2. User Registration and Account Security
                </h2>
                <p>
                  When you create an account with us, you must provide accurate, complete, and current information. You are responsible for safeguarding the password that you use to access the service and for any activities or actions under your password.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg md:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  3. Product Accuracy and Pricing
                </h2>
                <p>
                  We strive to be as accurate as possible with product details, images, descriptions, and pricing. However:
                </p>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li>We do not warrant that product descriptions or other content are error-free.</li>
                  <li>In the event of a pricing error or incorrect inventory level, we reserve the right to cancel or modify your order and contact you for resolution.</li>
                  <li>All prices are displayed in Bangladeshi Taka (BDT) and are subject to change without prior notice.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg md:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  4. Shipping and Delivery
                </h2>
                <p>
                  Delivery dates provided are estimates and are subject to third-party courier operations, weather conditions, and accessibility of your location. We will not be liable for losses or damages caused by delivery delays.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg md:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  5. Intellectual Property
                </h2>
                <p>
                  All content included on this site, such as text, graphics, logos, button icons, images, and software, is the property of 1stopDokan or its content suppliers and is protected by local and international copyright laws.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg md:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  6. Changes to Terms
                </h2>
                <p>
                  We reserve the right, at our sole discretion, to modify or replace these terms at any time. We will indicate the date of the latest update at the top of this page. Your continued use of the platform after changes are posted constitutes acceptance of those changes.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg md:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  7. Contact Info
                </h2>
                <p>
                  For any questions regarding these Terms and Conditions, please contact us at:
                </p>
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4 font-semibold text-xs md:text-sm">
                  <div>
                    <p className="text-slate-500 font-bold uppercase tracking-wider text-[10px]">Email Support</p>
                    <p className="text-slate-800">0dotstore1@gmail.com</p>
                  </div>
                  <div>
                    <p className="text-slate-500 font-bold uppercase tracking-wider text-[10px]">Hotline</p>
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
