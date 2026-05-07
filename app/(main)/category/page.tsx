"use client"
import React from 'react';
import { Card, Col, Row, Typography, Tag } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import Link from 'next/link';

const { Title, Text } = Typography;

// Định nghĩa kiểu dữ liệu cho danh mục
interface FlowerCategory {
  id: string;
  title: string;
  description: string;
  count: number;
  color: string;
  path: string;
}

const categories: FlowerCategory[] = [
  { id: '1', title: 'Hoa Cưới', description: 'Những mẫu hoa cầm tay sang trọng cho ngày trọng đại.', count: 12, color: 'pink', path: '/hoacuoi' },
  { id: '2', title: 'Hoa Sinh Nhật', description: 'Quà tặng ý nghĩa gửi trao yêu thương tuổi mới.', count: 25, color: 'orange', path: '/hoasinhnhat' },
  { id: '3', title: 'Hoa Khai Trương', description: 'Lời chúc hồng phát và may mắn cho sự nghiệp.', count: 18, color: 'red', path: '/hoakhaitruong' },
  { id: '4', title: 'Hoa Chia Buồn', description: 'Gửi gắm sự an ủi và đồng cảm chân thành.', count: 8, color: 'blue', path: '/hoachiabuon' },
];

const CategoryPage: React.FC = () => {
  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <Title level={2}>Tất Cả Danh Mục Hoa</Title>
        <Text type="secondary">Khám phá các bộ sưu tập hoa tươi theo chủ đề</Text>
      </div>

      <Row gutter={[24, 24]}>
        {categories.map((item) => (
          <Col xs={24} sm={12} md={8} key={item.id}>
            <Link href={item.path}>
              <Card
                hoverable
                style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #f0f0f0' }}
                actions={[
                  <div key="view" style={{ textAlign: 'right', paddingRight: '20px' }}>
                    Xem chi tiết <ArrowRightOutlined />
                  </div>
                ]}
              >
                <Tag color={item.color} style={{ marginBottom: '10px' }}>{item.count} mẫu hoa</Tag>
                <Card.Meta
                  title={<span style={{ fontSize: '18px', fontWeight: 'bold' }}>{item.title}</span>}
                  description={item.description}
                />
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CategoryPage;