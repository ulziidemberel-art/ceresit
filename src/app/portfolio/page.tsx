import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const products = [
  { slug: "cm16", code: "CM", name: "Ceresit CM 16", type: "Плита наах цавуу", size: "25 кг", price: "79,500 ₮", desc: "Керамик, гранит, том өрөгийн плита наах уян хатан цементэн суурийт цавуу." },
  { slug: "cn69", code: "CN", name: "Ceresit CN 69", type: "Шал тэгшлэгээ", size: "25 кг", price: "84,900 ₮", desc: "Өөрөө ташрагч болон цутгамал шалны суурь тэгшлэгээний хольц." },
  { slug: "ce33", code: "CE", name: "Ceresit CE 33", type: "Плитан чигжээс", size: "2 кг", price: "18,200 ₮", desc: "Өнгөт, ус тулхэц, толбонд тэсвэртэй зэвдэс чийгнээс холын чигжээс." },
  { slug: "cr65", code: "CR", name: "Ceresit CR 65", type: "Ус тусгаарлагч", size: "25 кг", price: "99,500 ₮", desc: "Угаалгын өрөө, подвал, тааз, дээвэр, усан сангийн чийг тусгаарлалт." },
  { slug: "cx15", code: "CX", name: "Ceresit CX 15", type: "Бетон засвар", size: "25 кг", price: "99,800 ₮", desc: "Бетон бүтэц сэргээх, шүрхэх ба бэхжүүлэх засварын тусгай зуурмаг." },
  { slug: "cs25", code: "CT", name: "Ceresit CS 25", type: "Силикон шаварлага", size: "25 кг", price: "125,000 ₮", desc: "Фасадны ус чийгэнд тэсвэртэй силикон агуулсан өнгөлгөө." },
  { slug: "cr166", code: "CR", name: "Ceresit CR166", type: "Ус тусгаарлагч", size: "24 кг", price: "189,000 ₮", desc: "2 бүрэлдэхүүнт ус тусгаарлагч, гүнийн хамгаалалттай." },
  { slug: "cl152", code: "CR", name: "Ceresit CL152", type: "Ус тусгаарлагч тууз", size: "50 м", price: "45,000 ₮", desc: "Хөндийвч, шалгаралтын бүтээцийн шовон холбоосыг битүүмжлэх тууз." },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#0C0A09]">
      <Header />

      <main>
        {/* Hero */}
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
              <p className="text-[#E3000F] font-bold tracking-widest uppercase mb-4">04 Монголд борлуулагдаж буй бүтээгдэхүүн</p>
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">БҮТЭЭГДЭХҮҮНИЙ КАТАЛОГ</h1>
              <p className="text-xl text-[#A8A29E]">Бүх төрлийн барилгын химийн бүтээгдэхүүн.</p>
            </div>
          </div>
        </section>

        {/* Product Cards */}
        <section className="py-20 px-10">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <Link
                  key={product.slug}
                  href={`/portfolio/${product.slug}`}
                  className="bg-[#0C0A09] border border-[#44403C] rounded-2xl overflow-hidden hover:border-[#E3000F] transition-all block group"
                >
                  <div className="h-48 bg-[#292524] flex items-center justify-center relative">
                    <span className="absolute top-4 left-4 bg-[#E3000F] text-white text-xs font-bold px-2 py-1 rounded">{product.code}</span>
                    <span className="text-2xl font-bold text-[#44403C] group-hover:text-[#E3000F] transition-colors">{product.name}</span>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-[#78716C] mb-1">{product.type} · {product.size}</p>
                    <h3 className="text-lg font-bold text-white mb-2">{product.name}</h3>
                    <p className="text-sm text-[#A8A29E] mb-4">{product.desc}</p>
                    <p className="text-xl font-bold text-white">{product.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Product Table */}
        <section className="py-20 px-10 bg-[#1C1917]">
          <div className="max-w-[1440px] mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12">Бүтээгдэхүүний жагсаалт</h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#E3000F]">
                    <th className="p-4 text-white font-bold rounded-tl-2xl">БҮТЭЭГДЭХҮҮН</th>
                    <th className="p-4 text-white font-bold">ТӨРӨЛ</th>
                    <th className="p-4 text-white font-bold">ХЭМЖЭЭ</th>
                    <th className="p-4 text-white font-bold rounded-tr-2xl">ЖИШИГ ҮНЭ</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, i) => (
                    <tr
                      key={product.slug}
                      className={`border-b border-[#44403C] ${i % 2 === 0 ? 'bg-[#0C0A09]' : 'bg-[#1C1917]'} hover:bg-[#292524] transition-colors`}
                    >
                      <td className="p-4">
                        <Link href={`/portfolio/${product.slug}`} className="text-white font-bold hover:text-[#E3000F]">
                          {product.name}
                        </Link>
                      </td>
                      <td className="p-4 text-[#A8A29E]">{product.type}</td>
                      <td className="p-4 text-[#A8A29E]">{product.size}</td>
                      <td className="p-4 text-white font-bold">{product.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-[#78716C] mt-4">*Үнэ нь жишиг бөгөөд өөрчлөгдөж болно. Бүрэн нэр төрөл, шинэчлэгдсэн үнийг haus.mn-ээс харна уу.</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
