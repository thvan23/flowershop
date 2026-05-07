"use client"

import { useEffect, useState } from "react"
import api from "../../../lib/api"

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
        </div>
    )
}