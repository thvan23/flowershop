"use client";

import { useCart } from "@/context/CartContext";

export default function Cart() {
  const { cart } = useCart();

  return (
    <div className="fixed top-24 right-5 bg-white shadow-2xl rounded-2xl p-5 w-72 z-50">
      
      <h2 className="text-2xl font-bold mb-4">
        🛒 Giỏ hàng ({cart.length})
      </h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">
          Chưa có sản phẩm
        </p>
      ) : (
        cart.map((item, index) => (
          <div
            key={index}
            className="border-b py-2"
          >
            <p className="font-semibold">
              {item.name}
            </p>

            <p className="text-red-500">
              {item.price}
            </p>
          </div>
        ))
      )}
    </div>
  );
}