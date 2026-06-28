"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FAQs = [
  {
    question: "How do I place an order on 1stopDokan?",
    answer: "Browse our products, select your desired variant/size, and click 'অর্ডার করুন' or 'Buy Now'. You will be redirected to the checkout page where you can enter your name, shipping address, and select a payment method. Then click 'অর্ডার সম্পন্ন করুন' to finish."
  },
  {
    question: "What are your delivery charges?",
    answer: "Our standard delivery charges are: ৳60 for deliveries inside Dhaka, and ৳130 for deliveries outside Dhaka."
  },
  {
    question: "How long does shipping take?",
    answer: "For deliveries inside Dhaka, it takes 1-2 business days. For deliveries outside Dhaka, it usually takes 3-5 business days."
  },
  {
    question: "Do you offer Cash on Delivery (COD)?",
    answer: "Yes! We offer 100% Cash on Delivery (COD) across all 64 districts in Bangladesh. You pay when you receive the product at your door."
  },
  {
    question: "What is your return & exchange policy?",
    answer: "We offer a 7-day exchange and return policy for unused, unwashed items in their original packaging. Please reach out to our customer support within 7 days of delivery to initiate the process."
  },
  {
    question: "How can I track my order status?",
    answer: "You can visit the 'Track Order' link in the navigation menu or contact our support hotline with your Order ID to get real-time tracking updates."
  }
];

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8fafc]">
      <Header />
      
      <main className="flex-grow py-12 md:py-16">
        <div className="container-custom max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-[#1a80c2] to-[#156a9e] px-6 py-10 md:px-10 md:py-12 text-white">
              <h1 className="text-2xl md:text-3xl font-extrabold mb-2">Frequently Asked Questions (FAQ)</h1>
              <p className="text-slate-100 text-sm md:text-base font-medium">
                Find answers to common questions about ordering, delivery, payments, and returns.
              </p>
            </div>
            
            {/* Content Body */}
            <div className="p-6 md:p-10 space-y-6 text-slate-700 leading-relaxed text-sm md:text-base">
              
              <div className="space-y-4">
                {FAQs.map((faq, index) => (
                  <details 
                    key={index} 
                    className="group border border-slate-150 rounded-xl p-4 bg-slate-50/50 hover:bg-slate-50 transition-all [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary className="flex items-center justify-between font-bold text-slate-900 cursor-pointer list-none outline-none">
                      <span>{faq.question}</span>
                      <span className="ml-1.5 flex-shrink-0 transition-transform duration-300 group-open:-rotate-180">
                        <svg className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </span>
                    </summary>
                    <div className="mt-3.5 text-slate-650 text-xs md:text-sm font-semibold border-t border-slate-200/60 pt-3">
                      <p>{faq.answer}</p>
                    </div>
                  </details>
                ))}
              </div>

              <section className="space-y-3 pt-6 border-t border-slate-100 mt-8">
                <h2 className="text-lg md:text-xl font-bold text-slate-900">Still have questions?</h2>
                <p className="text-slate-600">
                  If you cannot find the answer to your question here, please contact us directly. Our customer support agents are happy to assist you:
                </p>
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4 font-semibold text-xs md:text-sm">
                  <div>
                    <p className="text-slate-500 font-bold uppercase tracking-wider text-[10px]">Email</p>
                    <p className="text-slate-800">0dotstore1@gmail.com</p>
                  </div>
                  <div>
                    <p className="text-slate-500 font-bold uppercase tracking-wider text-[10px]">Hotline</p>
                    <p className="text-slate-800">01518-486910</p>
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
