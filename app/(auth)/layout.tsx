import { ReactNode } from "react"
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 to-black  flex items-center justify-center p-6">
      {children}
    </div>
  );
}