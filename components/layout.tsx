import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flower Shop",
  description: "Flower Shop - Nơi những đóa hoa kể câu chuyện của bạn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}