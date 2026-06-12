import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const products = [
  { slug: "cm16", name: "Ceresit CM 16", desc: "Плитан цавуу, 25 кг" },
  { slug: "cn69", name: "Ceresit CN 69", desc: "Шал тэгшлэгч 3-15 мм" },
  { slug: "ce33", name: "Ceresit CE 33", desc: "Плитан чигжээс 2кг" },
  { slug: "cr65", name: "Ceresit CR 65", desc: "Ус тусгаарлагч 25кг" },
  { slug: "cx15", name: "Ceresit CX15", desc: "Бетон засварын бүтээгдэхүүн" },
  { slug: "cs25", name: "Ceresit CS25", desc: "Плитаны уян чигжээс" },
  { slug: "cr166", name: "Ceresit CR166", desc: "2 бүрэлдэхүүнт ус тусгаарлагч" },
  { slug: "cl152", name: "Ceresit CL152", desc: "Ус тусгаарлагч тууз 50м" },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#0C0A09]">
      <Header />

      <main>
        {/* Hero — Pencil дизайнаар */}
        <section className="relative min-h-[500px] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1440")',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0C0A09]/95 via-[#0C0A09]/60 to-transparent" />
          </div>

          <div className="relative max-w-[1440px] mx-auto px-10 w-full py-32">
            <div className="max-w-3xl">
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">БҮТЭЭГДЭХҮҮНИЙ КАТАЛОГ</h1>
              <p className="text-xl text-[#A8A29E]">Бүх төрлийн барилгын химийн бүтээгдэхүүн.</p>
            </div>
          </div>
        </section>

        {/* Portfolio Grid — Pencil дизайнаар */}
        <section className="py-20 px-10">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {products.map((product) => (
                <Link
                  key={product.slug}
                  href={`/portfolio/${product.slug}`}
                  className="bg-[#0C0A09] border border-[#44403C] rounded-2xl overflow-hidden hover:border-[#E3000F] transition-all block"
                >
                  <div className="h-40 bg-[#292524] flex items-center justify-center">
                    <span className="text-xl font-bold text-[#44403C]">{product.name}</span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-white">{product.name}</h3>
                    <p className="text-sm text-[#78716C]">{product.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
