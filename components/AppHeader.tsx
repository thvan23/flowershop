import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50 shadow-md">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl md:text-2xl font-bold text-white hover:text-blue-400 transition">Flower Shop</Link>
        <div className="space-x-6 font-medium">
          <Link href="/about" className="text-gray-300 hover:text-white transition">Home</Link>
          <Link href="/hoacuoi" className="text-gray-300 hover:text-white transition">Hoa Cưới</Link>
          <Link href="/hoasinhnhat" className="text-gray-300 hover:text-white transition">Hoa Sinh Nhật</Link>
          <Link href="/hoakhaitruong" className="text-gray-300 hover:text-white transition">Hoa Khai Trương</Link>
          <Link href="/contact" className="bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition font-medium">Contact</Link>
        </div>
      </div>
    </nav>
  );
}