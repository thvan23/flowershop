"use client";
import React from "react";
import { Typography, Button } from "antd";
import { useRouter } from "next/navigation";

const { Title, Text } = Typography;

export default function AppBanner() {
    const router = useRouter();

    return (
        <div
            style={{
                backgroundImage:
                    'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.4)), url("https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=1200&auto=format&fit=crop")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",

                height: "450px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "20px",
                margin: "20px 0",
                color: "#fff",
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            }}
        >
            <Title
                style={{
                    color: "#fff",
                    fontSize: "48px",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                    marginBottom: "10px",
                }}
            >
                Tiệm Hoa Xinh
            </Title>

            <Text
                style={{
                    color: "#fff",
                    fontSize: "20px",
                    fontStyle: "italic",
                    marginBottom: "25px",
                }}
            >
                "Nơi những đóa hoa kể câu chuyện của bạn"
            </Text>

            <Button
                type="primary"
                size="large"
                style={{
                    backgroundColor: "#eb2f96",
                    borderColor: "#eb2f96",
                    height: "50px",
                    padding: "0 40px",
                    borderRadius: "25px",
                    fontSize: "18px",
                    fontWeight: "bold",
                }}
                // ✅ Thêm chức năng click
                onClick={() => router.push("/category")}
            >
                Khám Phá Ngay
            </Button>
        </div>
    );
}