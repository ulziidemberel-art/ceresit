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
        <section className="py-24 px-10 bg-[#1C1917]">
          <div className="max-w-[1440px] mx-auto">
            <h1 className="text-5xl font-bold text-white mb-4">БҮТЭЭГДЭХҮҮНИЙ КАТАЛОГ</h1>
            <p className="text-xl text-[#A8A29E]">Бүх төрлийн барилгын химийн бүтээгдэхүүн.</p>
          </div>
        </section>

        <section className="py-20 px-10">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {products.map((product) => (
                <Link
                  key={product.slug}
                  href={`/portfolio/${product.slug}`}
                  className="bg-[#0C0A09] border border-[#44403C] rounded-2xl p-6 hover:border-[#E3000F] hover:shadow-[0_0_20px_rgba(227,0,15,0.2)] transition-all block"
                >
                  <div className="h-40 bg-[#292524] rounded-xl mb-4">
                    <div className="w-full h-full flex items-center justify-center text-[#78716C] text-sm">
                      {product.name}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white">{product.name}</h3>
                  <p className="text-sm text-[#78716C]">{product.desc}</p>
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
