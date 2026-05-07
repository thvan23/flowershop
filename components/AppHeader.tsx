"use client";

import Link from "next/link";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  // Lấy cart từ context
  const { cart } = useCart();

  return (
    <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50 shadow-md">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-xl md:text-2xl font-bold text-white hover:text-blue-400 transition"
        >
          Flower Shop
        </Link>

        {/* Menu */}
        <div className="flex items-center space-x-6 font-medium">
          <Link
            href="/about"
            className="text-gray-300 hover:text-white transition"
          >
            Home
          </Link>

          <Link
            href="/hoacuoi"
            className="text-gray-300 hover:text-white transition"
          >
            Hoa Cưới
          </Link>

          <Link
            href="/hoasinhnhat"
            className="text-gray-300 hover:text-white transition"
          >
            Hoa Sinh Nhật
          </Link>

          <Link
            href="/hoakhaitruong"
            className="text-gray-300 hover:text-white transition"
          >
            Hoa Khai Trương
          </Link>

          <Link
            href="/contact"
            className="bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition font-medium"
          >
            Contact
          </Link>

          {/* Giỏ hàng */}
          <Link
            href="/cart"
            className="relative text-white text-2xl hover:text-blue-400 transition"
          >
            <ShoppingCartOutlined />

            {/* SỬA TẠI ĐÂY: Thêm dấu ? và || 0 để tránh lỗi khi cart chưa có dữ liệu */}
            <span className="absolute -top-3 -right-4 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {cart?.length || 0}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}