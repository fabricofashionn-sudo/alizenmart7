"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function PaymentMethodsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8fafc]">
      <Header />
      
      <main className="flex-grow py-12 md:py-16">
        <div className="container-custom max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-[#1a80c2] to-[#156a9e] px-6 py-10 md:px-10 md:py-12 text-white">
              <h1 className="text-2xl md:text-3xl font-extrabold mb-2">Online Payment Methods</h1>
              <p className="text-slate-100 text-sm md:text-base font-medium">
                Choose the payment option that suits you best. We support COD and all major mobile wallets.
              </p>
            </div>
            
            {/* Content Body */}
            <div className="p-6 md:p-10 space-y-8 text-slate-700 leading-relaxed text-sm md:text-base">
              
              <section className="space-y-4">
                <h2 className="text-lg md:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  1. Cash on Delivery (COD)
                </h2>
                <p>
                  We offer Cash on Delivery across all 64 districts of Bangladesh. Under this method, you can place your order online without any pre-payments and hand over the cash directly to the courier agent upon receiving your items at your doorstep.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg md:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  2. Mobile Financial Services (MFS)
                </h2>
                <p>
                  For clients who prefer digital or contactless payments, we support direct merchant/personal wallet transfers. When completing checkout, you can select any of the following wallets:
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  {/* bKash */}
                  <div className="border border-pink-100 bg-pink-50/10 rounded-xl p-4 flex flex-col items-center text-center">
                    <div className="w-14 h-8 relative mb-2">
                      <Image src="/bkash_logo.png" alt="bKash" fill className="object-contain" />
                    </div>
                    <span className="font-bold text-slate-800 text-xs">bKash Personal</span>
                    <span className="text-[#1a80c2] font-extrabold text-xs mt-1">01534694518</span>
                  </div>

                  {/* Nagad */}
                  <div className="border border-orange-100 bg-orange-50/10 rounded-xl p-4 flex flex-col items-center text-center">
                    <div className="w-14 h-8 relative mb-2">
                      <Image src="/nagad_logo.png" alt="Nagad" fill className="object-contain" />
                    </div>
                    <span className="font-bold text-slate-800 text-xs">Nagad Personal</span>
                    <span className="text-[#1a80c2] font-extrabold text-xs mt-1">01534694518</span>
                  </div>

                  {/* Rocket */}
                  <div className="border border-purple-100 bg-purple-50/10 rounded-xl p-4 flex flex-col items-center text-center">
                    <div className="w-14 h-8 relative mb-2">
                      <Image src="/rocket_logo.png" alt="Rocket" fill className="object-contain" />
                    </div>
                    <span className="font-bold text-slate-800 text-xs">Rocket Personal</span>
                    <span className="text-[#1a80c2] font-extrabold text-xs mt-1">01534694518</span>
                  </div>
                </div>

                <p className="text-xs text-slate-500 italic mt-2">
                  * Note: Please make sure to provide the Sender Mobile Number and Payment Transaction ID (TrxID) in the checkout form after sending money so we can instantly verify and approve your order.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg md:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  3. Bank Transfer
                </h2>
                <p>
                  For bulk orders, wholesale accounts, or larger transaction amounts, we support direct bank transfers. Please reach out directly to our billing support hotline to request bank coordinates and invoicing documents.
                </p>
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4 font-semibold text-xs md:text-sm">
                  <div>
                    <p className="text-slate-500 font-bold uppercase tracking-wider text-[10px]">Billing Support</p>
                    <p className="text-slate-800">0dotstore1@gmail.com</p>
                  </div>
                  <div>
                    <p className="text-slate-500 font-bold uppercase tracking-wider text-[10px]">Billing Hotline</p>
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
