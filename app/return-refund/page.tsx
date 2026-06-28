"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ReturnRefundPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8fafc]">
      <Header />
      
      <main className="flex-grow py-12 md:py-16">
        <div className="container-custom max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-[#1a80c2] to-[#156a9e] px-6 py-10 md:px-10 md:py-12 text-white">
              <h1 className="text-2xl md:text-3xl font-extrabold mb-2">Return & Refund Policy</h1>
              <p className="text-slate-100 text-sm md:text-base font-medium">
                Last updated: June 28, 2026. Learn about our terms for returns, exchanges, and refunds.
              </p>
            </div>
            
            {/* Content Body */}
            <div className="p-6 md:p-10 space-y-8 text-slate-700 leading-relaxed text-sm md:text-base">
              
              <section className="space-y-3">
                <h2 className="text-lg md:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  1. Return and Exchange Conditions
                </h2>
                <p>
                  At 1stopDokan, we strive to ensure our customers are fully satisfied with their purchases. If you are not completely happy with your item, you may request a return or exchange under the following conditions:
                </p>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li>The product must be returned within 7 days from the delivery date.</li>
                  <li>The item must be unused, unwashed, and in the same condition as when you received it.</li>
                  <li>All original packaging, tags, labels, and accessories must be intact and attached.</li>
                  <li>Proof of purchase (invoice or order confirmation email) is required.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg md:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  2. Items Not Eligible for Return
                </h2>
                <p>
                  Certain products are exempt from being returned or exchanged for hygienic and safety reasons:
                </p>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li>Innerwear, socks, and personal care items.</li>
                  <li>Items purchased during clearance sales or under special promotional offers.</li>
                  <li>Products showing visible wear, damage, or alterations.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg md:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  3. Refund Process
                </h2>
                <p>
                  Once we receive and inspect your returned item, we will notify you of the approval or rejection of your refund. 
                </p>
                <p>
                  If approved, your refund will be processed, and a credit will automatically be applied to your original method of payment (such as bKash, Nagad, Rocket, or Bank Transfer) within 5 to 7 business days.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg md:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  4. Shipping Costs
                </h2>
                <p>
                  If the return is due to a product defect, incorrect shipment, or error on our part, we will cover the return shipping costs. Otherwise, you will be responsible for paying your own shipping costs for returning the item. Shipping costs are non-refundable.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg md:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  5. Need Help?
                </h2>
                <p>
                  For any questions related to returns, exchanges, or refunds, please reach out to our dedicated support team:
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
