"use client";

import { useCart } from "@/context/CartContext";
import { Card } from "antd";

export default function CartPage() {
  const { cart } = useCart();

  return (
    <div style={{ padding: 20 }}>
      <h1>Giỏ hàng</h1>

      {cart.length === 0 ? (
        <p>Chưa có sản phẩm</p>
      ) : (
        cart.map((item: any, index: number) => (
          <Card
            key={index}
            style={{ marginBottom: 20 }}
          >
            <img
              src={item.image}
              width={120}
            />

            <h2>{item.name}</h2>

            <h3>{item.price}</h3>
          </Card>
        ))
      )}
    </div>
  );
}