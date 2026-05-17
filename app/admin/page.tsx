"use client";

import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { 
  Dollar01Icon, 
  PackageIcon, 
  UserGroupIcon, 
  DeliveryTruck01Icon,
  AlertCircleIcon
} from "@hugeicons/core-free-icons";

export default function AdminOverview() {
  const stats = [
    { label: "Total Sales", value: "৳ 1,24,500", icon: Dollar01Icon, color: "text-green-600", bg: "bg-green-50" },
    { label: "Total Orders", value: "156", icon: PackageIcon, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "New Customers", value: "48", icon: UserGroupIcon, color: "text-purple-600", bg: "bg-purple-50" },
    { label: "Pending Shipments", value: "12", icon: DeliveryTruck01Icon, color: "text-orange-600", bg: "bg-orange-50" },
  ];

  const recentOrders = [
    { id: "ORD-9821", customer: "Hasan Mahmud", date: "16 May 2026", total: "৳ 1,520", status: "Delivered" },
    { id: "ORD-9820", customer: "Farhana Akter", date: "16 May 2026", total: "৳ 2,990", status: "Processing" },
    { id: "ORD-9819", customer: "Rakibul Islam", date: "15 May 2026", total: "৳ 980", status: "Shipped" },
    { id: "ORD-9818", customer: "Sumi Khan", date: "15 May 2026", total: "৳ 1,040", status: "Pending" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
        <p className="text-gray-500 text-sm mt-1 font-medium">Welcome back, here's what's happening with your store today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-5">
            <div className={`${stat.bg} ${stat.color} w-14 h-14 rounded-xl flex items-center justify-center`}>
              <HugeiconsIcon icon={stat.icon} size={28} />
            </div>
            <div>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">{stat.label}</p>
              <p className="text-xl font-bold text-gray-800 mt-0.5">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Orders */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-50 flex items-center justify-between">
            <h2 className="font-bold text-gray-800">Recent Orders</h2>
            <button className="text-[#1a80c2] text-sm font-bold hover:underline">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/50">
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Order ID</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Customer</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Total</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {recentOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50/30 transition-colors">
                    <td className="px-6 py-4 text-sm font-bold text-gray-700">{order.id}</td>
                    <td className="px-6 py-4">
                      <p className="text-sm font-bold text-gray-800">{order.customer}</p>
                      <p className="text-[10px] text-gray-400 font-medium">{order.date}</p>
                    </td>
                    <td className="px-6 py-4 text-sm font-bold text-gray-800">{order.total}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                        order.status === "Delivered" ? "bg-green-100 text-green-700" :
                        order.status === "Processing" ? "bg-blue-100 text-blue-700" :
                        order.status === "Shipped" ? "bg-purple-100 text-purple-700" :
                        "bg-orange-100 text-orange-700"
                      }`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions / Activity */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h2 className="font-bold text-gray-800 mb-6">Quick Actions</h2>
          <div className="space-y-4">
            <button className="w-full bg-[#1a80c2] text-white py-3 rounded-xl font-bold text-sm shadow-lg shadow-blue-100 hover:bg-[#166ca5] transition-all">
              Add New Product
            </button>
            <button className="w-full border border-gray-200 text-gray-700 py-3 rounded-xl font-bold text-sm hover:bg-gray-50 transition-all">
              Export Sales Report
            </button>
            <button className="w-full border border-gray-200 text-gray-700 py-3 rounded-xl font-bold text-sm hover:bg-gray-50 transition-all">
              Manage Categories
            </button>
          </div>

          <div className="mt-10">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Stock Alerts</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-red-50 rounded-xl border border-red-100">
                <HugeiconsIcon icon={AlertCircleIcon} size={20} className="text-red-500" />
                <div>
                  <p className="text-xs font-bold text-gray-800">Airpods Case</p>
                  <p className="text-[10px] text-red-600 font-bold">Only 2 items left</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
