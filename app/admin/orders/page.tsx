"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function AdminOrders() {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching orders:', error);
      // Fallback static data
      setOrders([
        { id: "ORD-9821", customer_name: "Hasan Mahmud", phone: "01712345678", total: 1520, status: "Delivered", created_at: "2026-05-16T10:00:00Z" },
        { id: "ORD-9820", customer_name: "Farhana Akter", phone: "01812345678", total: 2990, status: "Processing", created_at: "2026-05-16T09:30:00Z" },
        { id: "ORD-9819", customer_name: "Rakibul Islam", phone: "01912345678", total: 980, status: "Shipped", created_at: "2026-05-15T15:45:00Z" },
      ]);
    } else if (data) {
      setOrders(data);
    }
    setLoading(false);
  };

  const updateStatus = async (id: any, newStatus: string) => {
    const { error } = await supabase.from('orders').update({ status: newStatus }).eq('id', id);
    if (error) {
      alert("Error updating status");
    } else {
      fetchOrders();
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Order Management</h1>
        <p className="text-gray-500 text-sm mt-1 font-medium">Track and manage customer orders, payments, and shipments.</p>
      </div>

      {/* Order List */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <input 
              type="text" 
              placeholder="Search orders by ID or customer..." 
              className="w-full bg-gray-50 border-none rounded-xl py-2.5 px-4 pl-12 text-sm outline-none focus:ring-2 focus:ring-blue-100 transition-all"
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
          </div>
          <div className="flex items-center gap-3">
             <button className="bg-gray-50 border-none rounded-xl py-2.5 px-4 text-sm font-bold text-gray-600 hover:bg-gray-100 transition-all">
               Filter by Status
             </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50">
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Order Details</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Customer Info</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Total Amount</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Status</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {loading ? (
                <tr>
                  <td colSpan={5} className="px-6 py-10 text-center text-gray-400 font-medium italic">Loading orders...</td>
                </tr>
              ) : orders.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-10 text-center text-gray-400 font-medium italic">No orders found.</td>
                </tr>
              ) : orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50/30 transition-colors">
                  <td className="px-6 py-4">
                    <p className="text-sm font-bold text-gray-800">{order.id}</p>
                    <p className="text-[10px] text-gray-400 font-medium uppercase">
                      {new Date(order.created_at).toLocaleDateString()} at {new Date(order.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-bold text-gray-800">{order.customer_name}</p>
                    <p className="text-[11px] text-gray-500 font-medium">{order.phone}</p>
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-gray-800">৳ {order.total}</td>
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
                  <td className="px-6 py-4">
                    <select 
                      value={order.status}
                      onChange={(e) => updateStatus(order.id, e.target.value)}
                      className="bg-gray-50 border border-gray-100 rounded-lg py-1.5 px-3 text-[11px] font-bold text-gray-600 outline-none focus:ring-2 focus:ring-blue-100 transition-all cursor-pointer"
                    >
                      <option value="Pending">Pending</option>
                      <option value="Processing">Processing</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
