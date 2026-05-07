import "../globals.css";
import Navbar from "@/components/AppHeader";
import Footer from "@/components/AppFooter";
import { CartProvider } from "@/context/CartContext";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>
        <CartProvider>
          <div className="min-h-screen flex flex-col bg-white text-gray-900">
            <Navbar />

            <main className="flex-1 container mx-auto px-4 py-6">
              {children}
            </main>

            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}