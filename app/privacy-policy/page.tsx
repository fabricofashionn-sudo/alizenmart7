"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8fafc]">
      <Header />
      
      <main className="flex-grow py-12 md:py-16">
        <div className="container-custom max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-[#1a80c2] to-[#156a9e] px-6 py-10 md:px-10 md:py-12 text-white">
              <h1 className="text-2xl md:text-3xl font-extrabold mb-2">Privacy Policy</h1>
              <p className="text-slate-100 text-sm md:text-base font-medium">
                Last updated: June 28, 2026. Learn how we handle and protect your personal information.
              </p>
            </div>
            
            {/* Content Body */}
            <div className="p-6 md:p-10 space-y-8 text-slate-700 leading-relaxed text-sm md:text-base">
              
              <section className="space-y-3">
                <h2 className="text-lg md:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  1. Information We Collect
                </h2>
                <p>
                  We collect personal information that you provide to us when you register, make a purchase, participate in promotions, or contact support. This information may include:
                </p>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li>Your name, email address, phone number, and physical billing/shipping address.</li>
                  <li>Payment details (such as wallet numbers or transaction IDs for bKash/Nagad/Rocket). We do not store full credit card details.</li>
                  <li>Device information, browser type, IP address, and platform details collected automatically via cookies.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg md:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  2. How We Use Your Information
                </h2>
                <p>
                  The information we collect is used primarily to fulfill your orders, provide a seamless customer experience, and keep you informed. Specifically:
                </p>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li>To process, pack, ship, and track your orders.</li>
                  <li>To verify transactions and prevent payment fraud.</li>
                  <li>To communicate order status updates and customer support responses.</li>
                  <li>To improve our website layout, search functionality, and product suggestions.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg md:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  3. Information Sharing and Disclosure
                </h2>
                <p>
                  We respect your privacy and do not sell, trade, or rent your personal information to third parties. We may share limited data with trusted partners to operate our service:
                </p>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li>Courier services and delivery agents to ship and deliver your physical items.</li>
                  <li>Payment processors and gateways to verify payments.</li>
                  <li>Legal entities or law enforcement if required to comply with statutory laws or judicial processes.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg md:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  4. Data Security
                </h2>
                <p>
                  We employ industry-standard encryption, SSL protocols, and security measures to safeguard your personal data against unauthorized access, loss, or alteration. However, please note that no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg md:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  5. Cookies Policy
                </h2>
                <p>
                  We use cookies and similar tracking technologies to enhance your browsing experience, remember cart items, and understand platform traffic patterns. You can manage or disable cookies through your browser settings.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg md:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  6. Contact Us
                </h2>
                <p>
                  If you have any questions or concerns regarding our privacy practices, please contact us at:
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
