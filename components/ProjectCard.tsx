"use client";

import { Card, Button } from "antd";
import { useCart } from "@/context/CartContext";

interface Props {
  title: string;
  description: string;
  price: string;
  imagePath: string;
}

export default function ProjectCard({
  title,
  description,
  price,
  imagePath,
}: Props) {
  const { addToCart } = useCart();

  return (
    <Card
      hoverable
      cover={
        <img
          alt={title}
          src={imagePath}
          style={{ height: 250, objectFit: "cover" }}
        />
      }
    >
      <h2>{title}</h2>

      <p>{description}</p>

      <h3 style={{ color: "red" }}>{price}</h3>

      <Button
        type="primary"
        onClick={() =>
          addToCart({
            id: title,
            name: title,
            price: parseFloat(price),
            quantity: 1,
            image: imagePath,
          })
        }
      >
        Thêm vào giỏ hàng
      </Button>
    </Card>
  );
}