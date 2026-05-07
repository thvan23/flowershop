"use client"

import { useEffect, useState } from "react"
import api from "../../../lib/api"
// 1. Import Modal từ antd
import { Modal } from "antd"

interface Flower {
    id: string
    name: string
    category: string
    price?: number
    description?: string
    image?: string
}

export default function Hoasinhnhat() {
    const [data, setData] = useState<Flower[]>([])
    
    // 2. Thêm state quản lý Modal và sản phẩm đang chọn
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedFlower, setSelectedFlower] = useState<Flower | null>(null)

    useEffect(() => {
        api.get("/flowers")
            .then((res: { data: Flower[] }) => {
                const result = res.data.filter((i: Flower) =>
                    i.category?.toLowerCase().trim() === "birthday"
                )
                setData(result)
            })
            .catch(err => console.log(err))
    }, [])

    // 3. Hàm xử lý mở Modal
    const showDetail = (flower: Flower) => {
        setSelectedFlower(flower)
        setIsModalOpen(true)
    }

    return (
        <div
            style={{
                minHeight: "100vh",
                padding: "40px",
                background: "linear-gradient(135deg, #ffe4ec, #ffd6e0, #ffc1d6)"
            }}
        >
            <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
                🎂 Hoa sinh nhật
            </h1>

            {data.length === 0 ? (
                <p style={{ textAlign: "center" }}>Không có dữ liệu</p>
            ) : (
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                        gap: "20px"
                    }}
                >
                    {data.map(i => (
                        <div
                            key={i.id}
                            // 4. Sự kiện click để hiện chi tiết
                            onClick={() => showDetail(i)}
                            style={{
                                background: "white",
                                borderRadius: "16px",
                                padding: "15px",
                                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                                textAlign: "center",
                                transition: "0.3s",
                                cursor: "pointer"
                            }}
                            // Hiệu ứng phóng to nhẹ khi di chuột vào
                            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.02)"}
                            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                        >
                            {i.image && (
                                <img
                                    src={i.image}
                                    alt={i.name}style={{
                                        width: "100%",
                                        height: "160px",
                                        objectFit: "cover",
                                        borderRadius: "12px"
                                    }}
                                />
                            )}

                            <h3 style={{ marginTop: "10px" }}>{i.name}</h3>

                            <p style={{ color: "#ff4d6d", fontWeight: "bold" }}>
                                {i.price}$
                            </p>

                            <p style={{ fontSize: "12px", color: "#666" }}>
                                {i.description}
                            </p>
                        </div>
                    ))}
                </div>
            )}

            {/* 5. Modal hiển thị thông tin chi tiết */}
            <Modal
                title="Chi tiết hoa sinh nhật"
                open={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
                footer={null}
                centered
            >
                {selectedFlower && (
                    <div style={{ textAlign: "center" }}>
                        <img 
                            src={selectedFlower.image} 
                            alt={selectedFlower.name} 
                            style={{ 
                                width: "100%", 
                                maxHeight: "350px", 
                                objectFit: "cover", 
                                borderRadius: "12px", 
                                marginBottom: "20px" 
                            }} 
                        />
                        <h2 style={{ color: "#d43059" }}>{selectedFlower.name}</h2>
                        <div style={{ 
                            fontSize: "20px", 
                            color: "#ff4d6d", 
                            fontWeight: "bold",
                            margin: "10px 0"
                        }}>
                            Giá: {selectedFlower.price}$
                        </div>
                        <div style={{ 
                            textAlign: "left", 
                            padding: "15px", 
                            backgroundColor: "#fffafa", 
                            borderRadius: "10px",
                            border: "1px dashed #ffd6e0"
                        }}>
                            <p><strong>Mô tả:</strong> {selectedFlower.description || "Món quà sinh nhật ý nghĩa thay lời chúc tốt đẹp nhất."}</p>
                            <p style={{ marginBottom: 0 }}><strong>Danh mục:</strong> Hoa sinh nhật (Birthday)</p>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    )
}