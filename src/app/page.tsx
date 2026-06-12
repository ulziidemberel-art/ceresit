import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const categories = [
  "Плита", "Фасад", "Ус тусгаарлах", "Дотор засал",
  "Шал", "Ус нэвтрүүлэхгүй", "Зуурмаг", "Систем"
];

const spotlightProducts = [
  { name: "CT 17", desc: "Төгс гүний нэвтрэх чадвартай грунт" },
  { name: "Fibre Force", desc: "Уян хатан бүтэцтэй плитан цавуу" },
  { name: "CE 60", desc: "Мэдрэмжтэй уян чигжээс" },
];

export default async function Home() {
  return (
    <div className="min-h-screen bg-[#0C0A09]">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative h-[500px] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C1917] to-[#0C0A09]">
            <div className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1440")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </div>
          <div className="relative max-w-[1440px] mx-auto px-10 w-full">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                ИРЭЭДҮЙН ҮЕИЙН ТӨЛӨӨ
                <br />
                БАРИЛГЫН ШИЙДЭЛ
              </h1>
              <p className="text-xl text-[#A8A29E] mb-4">
                Манай шилдэг бүтээгдэхүүнүүдтэй танилц.
              </p>
              <p className="text-lg text-[#A8A29E] mb-8">
                Together, We Build For Future Generations
              </p>
            </div>
            
            {/* Ceresit 120 Logo */}
            <div className="absolute bottom-8 right-10">
              <div className="text-white">
                <div className="text-5xl font-bold tracking-tight">Ceresit</div>
                <div className="flex items-end gap-2 mt-1">
                  <div className="bg-white text-black px-2 py-1">
                    <span className="text-3xl font-bold">120</span>
                  </div>
                  <div className="text-lg leading-tight">
                    <div>years</div>
                    <div>together</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Spotlight */}
        <section className="py-20 px-10">
          <div className="max-w-[1440px] mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12">БҮТЭЭГДЭХҮҮН ТАНИЛЦУУЛГА</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {spotlightProducts.map((product) => (
                <Link
                  key={product.name}
                  href="/portfolio"
                  className="bg-[#1C1917] border border-[#44403C] rounded-2xl p-6 hover:border-[#E3000F] transition-colors block"
                >
                  <div className="h-48 bg-[#292524] rounded-xl mb-4">
                    <div className="w-full h-full flex items-center justify-center text-[#78716C]">
                      {product.name}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white">{product.name}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20 px-10 bg-[#1C1917]">
          <div className="max-w-[1440px] mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12">БИ ХАЙЖ БАЙНА ...</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.map((category) => (
                <Link
                  key={category}
                  href="/portfolio"
                  className="bg-[#0C0A09] border border-[#44403C] rounded-2xl p-6 hover:border-[#E3000F] hover:shadow-[0_0_20px_rgba(227,0,15,0.15)] transition-all"
                >
                  <span className="text-base font-bold text-white">{category}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Innovation */}
        <section className="py-20 px-10">
          <div className="max-w-[1440px] mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12">МАНАЙ ШИНЭЧЛЭЛТҮҮДИЙГ НЭЭ</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#0C0A09] border-2 border-[#E3000F] rounded-2xl p-8 shadow-[0_0_20px_rgba(227,0,15,0.3)]">
                <h3 className="text-2xl font-bold text-white mb-4">CT 17</h3>
                <p className="text-[#A8A29E]">Харагдахгүй чадал, харагдах үр дүн.</p>
              </div>
              <div className="bg-[#0C0A09] border-2 border-[#E3000F] rounded-2xl p-8 shadow-[0_0_20px_rgba(227,0,15,0.3)]">
                <h3 className="text-2xl font-bold text-white mb-4">Fibre Force</h3>
                <p className="text-[#A8A29E]">Ультра тэсвэртэй бүрээс.</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Banner */}
        <section className="py-24 px-10 bg-[#E3000F]">
          <div className="max-w-[1440px] mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ХАМТДАА ИРЭЭДҮЙН ҮЕИЙН ТӨЛӨӨ БАРЬЯ
            </h2>
            <p className="text-xl text-[#FECACA] max-w-3xl">
              Бид ирээдүйн үеийнхний төлөө барилга барихад шаардлагатай шилдэг бүтээгдэхүүнүүдийг бүтээж байна.
            </p>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 px-10">
          <div className="max-w-[1440px] mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">АСУУЛТ БАЙНА УУ?</h2>
            <p className="text-lg text-[#A8A29E] mb-8">
              Бид таны асуултад хариулахдаа баяртай байх болно.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#E3000F] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#FF3344] transition-colors"
            >
              Холбогдох
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
