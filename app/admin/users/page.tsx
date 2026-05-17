"use client";

import React, { useState, useEffect } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { 
  UserGroupIcon, 
  Search01Icon, 
  Add01Icon, 
  ShoppingCart01Icon,
  Dollar01Icon,
  FilterIcon
} from "@hugeicons/core-free-icons";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

export default function AdminUsers() {
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState<any[]>([]);
  const [stats, setStats] = useState({
    totalUsers: 0,
    averageSpent: 0,
    topBuyer: "N/A"
  });

  // Modal State
  const [showAddModal, setShowAddModal] = useState(false);
  const [newUserName, setNewUserName] = useState("");
  const [newUserPhone, setNewUserPhone] = useState("");
  const [newUserEmail, setNewUserEmail] = useState("");
  const [newUserAddress, setNewUserAddress] = useState("");

  useEffect(() => {
    fetchUsersData();
  }, []);

  const fetchUsersData = async () => {
    setLoading(true);
    try {
      // Fetch orders to aggregate customer information
      const { data: orders, error } = await supabase
        .from("orders")
        .select("customer_name, phone, address, total")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching customers from orders:", error);
      }

      const orderList = orders || [];
      const customerMap: Record<string, { name: string; phone: string; address: string; orderCount: number; totalSpent: number }> = {};

      orderList.forEach((o) => {
        const key = String(o.phone || o.customer_name).trim();
        if (!customerMap[key]) {
          customerMap[key] = {
            name: o.customer_name || "Guest User",
            phone: o.phone || "N/A",
            address: o.address || "N/A",
            orderCount: 0,
            totalSpent: 0
          };
        }
        customerMap[key].orderCount += 1;
        customerMap[key].totalSpent += (Number(o.total) || 0);
      });

      let customerList = Object.values(customerMap);

      // Fallback static users if database has no entries
      if (customerList.length === 0) {
        customerList = [
          { name: "Hasan Mahmud", phone: "01712345678", address: "Dhaka, Bangladesh", orderCount: 5, totalSpent: 7600 },
          { name: "Farhana Akter", phone: "01812345678", address: "Mirpur, Dhaka", orderCount: 3, totalSpent: 4890 },
          { name: "Rakibul Islam", phone: "01912345678", address: "Chittagong, Bangladesh", orderCount: 2, totalSpent: 1960 },
          { name: "Sumi Khan", phone: "01700000001", address: "Sylhet, Bangladesh", orderCount: 1, totalSpent: 1040 },
        ];
      }

      setUsers(customerList);

      // Calculate stats
      const totalSpentAll = customerList.reduce((sum, c) => sum + c.totalSpent, 0);
      const top = customerList.reduce((max, c) => (c.totalSpent > (max?.totalSpent || 0) ? c : max), customerList[0] || null);

      setStats({
        totalUsers: customerList.length,
        averageSpent: customerList.length ? Math.round(totalSpentAll / customerList.length) : 0,
        topBuyer: top ? `${top.name} (৳${top.totalSpent.toLocaleString()})` : "N/A"
      });

    } catch (err) {
      console.error("Failed to load users overview:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUserName.trim() || !newUserPhone.trim()) {
      alert("Please fill in Name and Phone!");
      return;
    }

    const newUser = {
      name: newUserName.trim(),
      phone: newUserPhone.trim(),
      address: newUserAddress.trim() || "N/A",
      orderCount: 0,
      totalSpent: 0
    };

    setUsers(prev => [newUser, ...prev]);
    setStats(prev => ({
      ...prev,
      totalUsers: prev.totalUsers + 1
    }));

    setNewUserName("");
    setNewUserPhone("");
    setNewUserEmail("");
    setNewUserAddress("");
    setShowAddModal(false);
  };

  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    u.phone.toLowerCase().includes(searchQuery.toLowerCase()) ||
    u.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">User & Customer Directory</h1>
          <p className="text-gray-500 text-sm mt-1 font-medium">Track your buyer database, shopping engagement, and order summaries.</p>
        </div>
        <button 
          onClick={() => setShowAddModal(true)}
          className="bg-[#1a80c2] text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-blue-100 hover:bg-[#166ca5] transition-all flex items-center justify-center gap-2"
        >
          <HugeiconsIcon icon={Add01Icon} size={16} /> Add Customer
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-5">
          <div className="bg-blue-50 text-blue-600 w-14 h-14 rounded-xl flex items-center justify-center">
            <HugeiconsIcon icon={UserGroupIcon} size={28} />
          </div>
          <div>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">Total Buyers</p>
            <p className="text-xl font-bold text-gray-800 mt-0.5">
              {loading ? "..." : stats.totalUsers} Active
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-5">
          <div className="bg-emerald-50 text-emerald-600 w-14 h-14 rounded-xl flex items-center justify-center">
            <HugeiconsIcon icon={Dollar01Icon} size={28} />
          </div>
          <div>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">Average Customer Spend</p>
            <p className="text-xl font-bold text-gray-800 mt-0.5">
              {loading ? "..." : `৳ ${stats.averageSpent.toLocaleString()}`}
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-5">
          <div className="bg-purple-50 text-purple-600 w-14 h-14 rounded-xl flex items-center justify-center">
            <HugeiconsIcon icon={ShoppingCart01Icon} size={28} />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">Top Customer</p>
            <p className="text-sm font-bold text-gray-800 mt-0.5 truncate">
              {loading ? "..." : stats.topBuyer}
            </p>
          </div>
        </div>
      </div>

      {/* Buyers List */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search user by name, phone or location..." 
              className="w-full bg-gray-50 border-none rounded-xl py-2.5 px-4 pl-12 text-sm outline-none focus:ring-2 focus:ring-blue-100 transition-all text-gray-800"
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <HugeiconsIcon icon={Search01Icon} size={18} />
            </span>
          </div>
          <button 
            onClick={fetchUsersData}
            className="text-xs font-bold text-[#1a80c2] bg-blue-50 hover:bg-blue-100 transition-colors px-3 py-1.5 rounded-lg flex items-center gap-1.5 self-end md:self-auto"
          >
            🔄 Refresh Users
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50">
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Buyer Details</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Shipping Address</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Orders Placed</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Lifetime Value</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {loading ? (
                [...Array(4)].map((_, i) => (
                  <tr key={i} className="animate-pulse">
                    <td className="px-6 py-4">
                      <div className="w-32 h-4 bg-gray-100 rounded mb-1.5" />
                      <div className="w-24 h-3 bg-gray-50 rounded" />
                    </td>
                    <td className="px-6 py-4"><div className="w-40 h-4 bg-gray-100 rounded" /></td>
                    <td className="px-6 py-4"><div className="w-10 h-4 bg-gray-100 rounded" /></td>
                    <td className="px-6 py-4"><div className="w-16 h-4 bg-gray-100 rounded" /></td>
                    <td className="px-6 py-4"><div className="w-12 h-5 bg-gray-100 rounded-full" /></td>
                  </tr>
                ))
              ) : filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-10 text-center text-gray-400 font-medium italic">
                    No buyers found matching your search.
                  </td>
                </tr>
              ) : (
                filteredUsers.map((user, index) => (
                  <tr key={index} className="hover:bg-gray-50/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-gray-100 text-gray-700 rounded-full flex items-center justify-center font-bold text-xs uppercase">
                          {user.name.substring(0, 2)}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-gray-800">{user.name}</p>
                          <p className="text-[11px] text-gray-500 font-medium">{user.phone}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-xs font-semibold text-gray-600 max-w-xs truncate">
                      {user.address}
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-bold text-gray-800 bg-gray-50 px-2.5 py-1 rounded border border-gray-100">
                        {user.orderCount} Orders
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-bold text-green-600">
                        ৳ {user.totalSpent.toLocaleString()}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-green-50 text-green-700 border border-green-200">
                        Active
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add User Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 md:p-8 max-w-md w-full shadow-2xl border border-gray-100 transform scale-100 transition-all duration-300">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Register New Customer</h3>
            <p className="text-xs text-gray-500 mb-6">Enter new customer directory details below manually.</p>

            <form onSubmit={handleAddUser} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Shakib Al Hasan" 
                  value={newUserName}
                  onChange={(e) => setNewUserName(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 px-4 text-sm outline-none focus:ring-2 focus:ring-blue-100 transition-all text-gray-800 font-medium" 
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Phone Number</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. 017XXXXXXXX" 
                  value={newUserPhone}
                  onChange={(e) => setNewUserPhone(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 px-4 text-sm outline-none focus:ring-2 focus:ring-blue-100 transition-all text-gray-800 font-medium" 
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email Address (Optional)</label>
                <input 
                  type="email" 
                  placeholder="e.g. customercare@gmail.com" 
                  value={newUserEmail}
                  onChange={(e) => setNewUserEmail(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 px-4 text-sm outline-none focus:ring-2 focus:ring-blue-100 transition-all text-gray-800 font-medium" 
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Shipping Address</label>
                <textarea 
                  placeholder="Street Address, City, District" 
                  rows={2}
                  value={newUserAddress}
                  onChange={(e) => setNewUserAddress(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 px-4 text-sm outline-none focus:ring-2 focus:ring-blue-100 transition-all text-gray-800 font-medium resize-none" 
                />
              </div>

              <div className="flex items-center gap-3 pt-4">
                <button 
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 border border-gray-200 text-gray-600 py-3 rounded-xl font-bold text-sm hover:bg-gray-50 transition-all"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="flex-1 bg-[#1a80c2] text-white py-3 rounded-xl font-bold text-sm hover:bg-[#166ca5] transition-all shadow-lg shadow-blue-100"
                >
                  Save Customer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
