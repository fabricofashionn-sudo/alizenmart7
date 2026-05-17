"use client";

import React, { useState, useEffect } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { 
  Dollar01Icon, 
  PackageIcon, 
  UserGroupIcon, 
  DeliveryTruck01Icon,
  AlertCircleIcon
} from "@hugeicons/core-free-icons";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminOverview() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState([
    { label: "Total Sales", value: "৳ 0", icon: Dollar01Icon, color: "text-green-600", bg: "bg-green-50" },
    { label: "Total Orders", value: "0", icon: PackageIcon, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "New Customers", value: "0", icon: UserGroupIcon, color: "text-purple-600", bg: "bg-purple-50" },
    { label: "Pending Shipments", value: "0", icon: DeliveryTruck01Icon, color: "text-orange-600", bg: "bg-orange-50" },
  ]);
  const [recentOrders, setRecentOrders] = useState<any[]>([]);
  const [stockAlerts, setStockAlerts] = useState<any[]>([]);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    setLoading(true);
    try {
      // 1. Fetch Orders
      const { data: ordersData, error: ordersError } = await supabase
        .from("orders")
        .select("*")
        .order("created_at", { ascending: false });

      // 2. Fetch Products for Stock Alerts
      const { data: productsData, error: productsError } = await supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending: false });

      if (ordersError) console.error("Error fetching orders:", ordersError);
      if (productsError) console.error("Error fetching products:", productsError);

      const orders = ordersData || [];
      const products = productsData || [];

      // Calculate Stats
      const totalSales = orders
        .filter(o => o.status !== "Cancelled")
        .reduce((sum, o) => sum + (Number(o.total) || 0), 0);

      const uniqueCustomers = new Set(orders.map(o => o.phone || o.customer_name)).size;
      const pendingShipments = orders.filter(o => o.status === "Pending" || o.status === "Processing").length;

      setStats([
        { 
          label: "Total Sales", 
          value: `৳ ${totalSales.toLocaleString()}`, 
          icon: Dollar01Icon, 
          color: "text-green-600", 
          bg: "bg-green-50" 
        },
        { 
          label: "Total Orders", 
          value: `${orders.length}`, 
          icon: PackageIcon, 
          color: "text-blue-600", 
          bg: "bg-blue-50" 
        },
        { 
          label: "New Customers", 
          value: `${uniqueCustomers}`, 
          icon: UserGroupIcon, 
          color: "text-purple-600", 
          bg: "bg-purple-50" 
        },
        { 
          label: "Pending Shipments", 
          value: `${pendingShipments}`, 
          icon: DeliveryTruck01Icon, 
          color: "text-orange-600", 
          bg: "bg-orange-50" 
        },
      ]);

      // Recent Orders (last 5)
      setRecentOrders(orders.slice(0, 5));

      // Stock Alerts (products where stock <= 5)
      const lowStock = products.filter(p => p.stock !== undefined && p.stock !== null && p.stock <= 5);
      setStockAlerts(lowStock.slice(0, 4));

    } catch (err) {
      console.error("Failed to load dashboard statistics:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
          <p className="text-gray-500 text-sm mt-1 font-medium">Welcome back, here's what's happening with your store today.</p>
        </div>
        <button 
          onClick={fetchDashboardData}
          className="text-xs font-bold text-[#1a80c2] bg-blue-50 hover:bg-blue-100 transition-colors px-3 py-1.5 rounded-lg"
        >
          🔄 Refresh
        </button>
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
              <p className="text-xl font-bold text-gray-800 mt-0.5">
                {loading ? (
                  <span className="inline-block w-16 h-5 bg-gray-100 animate-pulse rounded" />
                ) : (
                  stat.value
                )}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Orders */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-50 flex items-center justify-between">
            <h2 className="font-bold text-gray-800">Recent Orders</h2>
            <Link href="/admin/orders" className="text-[#1a80c2] text-sm font-bold hover:underline">
              View All
            </Link>
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
                {loading ? (
                  [...Array(3)].map((_, i) => (
                    <tr key={i} className="animate-pulse">
                      <td className="px-6 py-4"><div className="w-20 h-4 bg-gray-100 rounded" /></td>
                      <td className="px-6 py-4">
                        <div className="w-32 h-4 bg-gray-100 rounded mb-1" />
                        <div className="w-24 h-3 bg-gray-50 rounded" />
                      </td>
                      <td className="px-6 py-4"><div className="w-16 h-4 bg-gray-100 rounded" /></td>
                      <td className="px-6 py-4"><div className="w-16 h-5 bg-gray-100 rounded-full" /></td>
                    </tr>
                  ))
                ) : recentOrders.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-6 py-8 text-center text-gray-400 font-medium italic text-sm">
                      No orders placed yet.
                    </td>
                  </tr>
                ) : (
                  recentOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50/30 transition-colors">
                      <td className="px-6 py-4 text-sm font-bold text-gray-700">{order.id}</td>
                      <td className="px-6 py-4">
                        <p className="text-sm font-bold text-gray-800">{order.customer_name || "Guest User"}</p>
                        <p className="text-[10px] text-gray-400 font-medium">
                          {new Date(order.created_at).toLocaleDateString()}
                        </p>
                      </td>
                      <td className="px-6 py-4 text-sm font-bold text-gray-800">৳ {order.total}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                          order.status === "Delivered" ? "bg-green-100 text-green-700" :
                          order.status === "Processing" ? "bg-blue-100 text-blue-700" :
                          order.status === "Shipped" ? "bg-purple-100 text-purple-700" :
                          order.status === "Cancelled" ? "bg-red-100 text-red-700" :
                          "bg-orange-100 text-orange-700"
                        }`}>
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions / Activity */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col justify-between">
          <div>
            <h2 className="font-bold text-gray-800 mb-6">Quick Actions</h2>
            <div className="space-y-4">
              <button 
                onClick={() => router.push("/admin/products/new")}
                className="w-full bg-[#1a80c2] text-white py-3 rounded-xl font-bold text-sm shadow-lg shadow-blue-100 hover:bg-[#166ca5] transition-all"
              >
                Add New Product
              </button>
              <button 
                onClick={() => router.push("/admin/products")}
                className="w-full border border-gray-200 text-gray-700 py-3 rounded-xl font-bold text-sm hover:bg-gray-50 transition-all"
              >
                Manage Products
              </button>
              <button 
                onClick={() => router.push("/admin/orders")}
                className="w-full border border-gray-200 text-gray-700 py-3 rounded-xl font-bold text-sm hover:bg-gray-50 transition-all"
              >
                Manage Orders
              </button>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Stock Alerts</h3>
            <div className="space-y-3">
              {loading ? (
                [...Array(2)].map((_, i) => (
                  <div key={i} className="h-12 bg-gray-50 animate-pulse rounded-xl" />
                ))
              ) : stockAlerts.length > 0 ? (
                stockAlerts.map((product) => (
                  <div key={product.id} className="flex items-center gap-3 p-3 bg-red-50 rounded-xl border border-red-100">
                    <HugeiconsIcon icon={AlertCircleIcon} size={20} className="text-red-500" />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-gray-800 truncate">{product.title}</p>
                      <p className="text-[10px] text-red-600 font-bold">Only {product.stock || 0} items left</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-4 bg-green-50 text-green-700 rounded-xl border border-green-100 text-xs font-semibold text-center">
                  ✅ All products are well stocked!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
