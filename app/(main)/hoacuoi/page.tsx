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

export default function Hoacuoi() {
  const [data, setData] = useState<Flower[]>([])
  
  // 2. Thêm state để quản lý việc đóng/mở Modal và lưu sản phẩm đang chọn
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedFlower, setSelectedFlower] = useState<Flower | null>(null)

  useEffect(() => {
    api.get("/flowers")
      .then((res: { data: Flower[] }) => {
        const result = res.data.filter((i: Flower) =>
          i.category?.toLowerCase().trim() === "wedding"
        )
        setData(result)
      })
      .catch((err: any) => {
        console.log("API ERROR:", err)
      })
  }, [])

  // 3. Hàm xử lý khi bấm vào Card
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
        🌸 Hoa cưới
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
              // 4. Thêm sự kiện onClick vào đây
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
            >
              {i.image && (
                <img
                  src={i.image}
                  alt={i.name}
                  style={{
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

      {/* 5. Thêm Component Modal để hiển thị chi tiết */}
      <Modal
        title="Thông tin chi tiết sản phẩm"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null} // Ẩn nút OK/Cancel mặc định
      >
        {selectedFlower && (
          <div style={{ textAlign: "center" }}>
            <img 
              src={selectedFlower.image} 
              alt={selectedFlower.name} 
              style={{ width: "100%", borderRadius: "8px", marginBottom: "15px" }} 
            />
            <h2>{selectedFlower.name}</h2>
            <h3 style={{ color: "#ff4d6d" }}>Giá: {selectedFlower.price}$</h3>
            <p style={{ textAlign: "left", marginTop: "10px" }}>
              <strong>Mô tả:</strong> {selectedFlower.description || "Đang cập nhật..."}
            </p>
            <p><strong>Danh mục:</strong> {selectedFlower.category}</p>
          </div>
        )}
      </Modal>
    </div>
  )
}