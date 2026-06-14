export default function AdminLoading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[450px] space-y-4">
      <div className="w-12 h-12 border-4 border-blue-100 border-t-[#1a80c2] rounded-full animate-spin" />
      <p className="text-gray-500 font-medium text-sm">Loading admin dashboard...</p>
    </div>
  );
}
