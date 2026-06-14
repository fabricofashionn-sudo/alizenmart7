import EditProductClient from "./EditProductClient";
import { Suspense } from "react";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function EditProductPage({ params }: Props) {
  const { id } = await params;

  return (
    <Suspense fallback={
      <div className="flex flex-col items-center justify-center min-h-[450px] space-y-4">
        <div className="w-12 h-12 border-4 border-blue-100 border-t-[#1a80c2] rounded-full animate-spin" />
        <p className="text-gray-500 font-medium text-sm">Loading product details...</p>
      </div>
    }>
      <EditProductClient id={id} />
    </Suspense>
  );
}
