"use client"
import { Card, Typography } from "antd"

const { Title, Paragraph, Link } = Typography

export default function Contact() {
  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <Card>
        <Title level={2}>Liên hệ</Title>

        <Paragraph>
          <b>Tên shop:</b> Flower Shop
        </Paragraph>

        <Paragraph>
          <b>Số điện thoại:</b> 0358235041
        </Paragraph>

        <Paragraph>
          <b>Email:</b> nttv41942020@gmail.com
        </Paragraph>

        <Paragraph>
          <b>Địa chỉ:</b> Biên Hòa, Đồng Nai
        </Paragraph>

        <Paragraph>
          <b>Zalo:</b>{" "}
          <Link
            href="https://zalo.me/0358235041"
            target="_blank"
          >
            Chat Zalo
          </Link>
        </Paragraph>

      </Card>
    </div>
  )
}