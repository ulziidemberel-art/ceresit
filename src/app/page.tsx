import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const categories = [
  { code: "CM", name: "Плита наах цавуу", desc: "Керамик, гранит, том өрөгийн плита наах уян хатан цементэн суурийт цавуу." },
  { code: "CE", name: "Плитан чигжээс", desc: "Өнгөт, ус тулхэц, толбонд тэсвэртэй зэвдэс чийгнээс холын ба эпокси чигжээс." },
  { code: "CR", name: "Ус тусгаарлагч", desc: "Угаалгын өрөө, подвал, тааз, дээвэр, усан сангийн чийг тусгаарлалт." },
  { code: "CT", name: "Шаварлага · Грунт · Фасад", desc: "Декоратив 'Короед' шаварлага, өнгөлгөө, грунт болон фасадны дулаалгын систем." },
  { code: "CN", name: "Шал тэгшлэгээ", desc: "Өөрөө ташрагч болон цутгамал шалны суурь тэгшлэгээний хольцууд." },
  { code: "CD-CX", name: "Бетон засвар · нөхөөс", desc: "Бетон бүтэц сэргээх, шүрхэх ба бэхжүүлэх засварын тусгай зуурмагууд." },
];

const timeline = [
  { year: "1905", title: "Германд үндэс тавигдсан" },
  { year: "1910", title: "Брюсселийн үзэсгэлэнд CERESIT танилдав" },
  { year: "1986", title: "Henkel групп худалдан авсан" },
  { year: "2005", title: "Анх удаа тоосгүй плита наах цавуу" },
  { year: "2022", title: "Хөргөгчийн CE 60 чийгээс Ceresit · 120 жил" },
  { year: "2024", title: "AERO технологиор +25% бүтээгдэхүүн" },
];

const products = [
  { slug: "cm16", name: "Ceresit CM 16", type: "Плита наах цавуу", size: "25 кг", price: "79,500 ₮" },
  { slug: "cn69", name: "Ceresit CN 69", type: "Шал тэгшлэгээ", size: "25 кг", price: "84,900 ₮" },
  { slug: "ce33", name: "Ceresit CE 33", type: "Плитан чигжээс", size: "2 кг", price: "18,200 ₮" },
  { slug: "cr65", name: "Ceresit CR 65", type: "Ус тусгаарлагч", size: "25 кг", price: "99,500 ₮" },
  { slug: "cx15", name: "Ceresit CX 15", type: "Бетон засвар", size: "25 кг", price: "99,800 ₮" },
  { slug: "cs25", name: "Ceresit CS 25", type: "Силикон шаварлага", size: "25 кг", price: "125,000 ₮" },
  { slug: "cr166", name: "Ceresit CR166", type: "Ус тусгаарлагч", size: "24 кг", price: "189,000 ₮" },
  { slug: "cl152", name: "Ceresit CL152", type: "Ус тусгаарлагч тууз", size: "50 м", price: "45,000 ₮" },
];

const values = [
  { title: "120 жилийн туршлага", desc: "1905 оноос хойш хуримтлуулсан мэдлэг, технологи нь бүтээгдэхүүн бүрд шингэсэн." },
  { title: "Германы чанар", desc: "Henkel группын инженерийн, чанарын хатуу стандартаар баталгаажсан." },
  { title: "Дэлхийд танигдсан", desc: "Олон улсын зах зээлд тэргүүлэгч, мэргэжлийн барилгадын сонголт." },
  { title: "Системийн 6 рэн шийдэл", desc: "Гуратас плита, чигжээс, ус тусгаарлалт, фасад хүртэл нэг системд нийцнэ." },
  { title: "Тасралтгүй инноваци", desc: "Тоосгүй цавуу, AERO, уян хатан (Flextec) зэрэг шинэ технологиуд." },
  { title: "Байгальд ээлтэй", desc: "'Цэнхэр сахиусан тэнгэр' (Blue Angel) эко-шошго, LEED-д нийцсэн бүтээгдэхүүнүүд." },
];

export default async function Home() {
  return (
    <div className="min-h-screen bg-[#0C0A09]">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[600px] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1440")',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0C0A09]/95 via-[#0C0A09]/70 to-transparent" />
          </div>

          <div className="relative max-w-[1440px] mx-auto px-10 w-full py-32">
            <div className="max-w-3xl">
              <p className="text-[#E3000F] font-bold tracking-widest uppercase mb-4">Henkel Group · Germany</p>
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-[1.1]">
                ИРЭЭДҮЙН ҮЕИЙН ТӨЛӨӨ
                <br />
                БАРИЛГЫН ШИЙДЭЛ
              </h1>
              <p className="text-xl text-[#A8A29E] mb-4">
                Манай шилдэг бүтээгдэхүүнүүдтэй танилц.
              </p>
              <p className="text-2xl text-[#A8A29E]">
                Together, We Build For Future Generations
              </p>
            </div>

            <div className="absolute bottom-16 right-10">
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

        {/* Intro */}
        <section className="py-20 px-10">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-[#E3000F] text-8xl md:text-9xl font-bold leading-none">120</div>
                <div className="text-white text-2xl font-bold tracking-widest uppercase mt-2">Years Together · 1905-2026</div>
              </div>
              <div>
                <p className="text-[#E3000F] font-bold tracking-widest uppercase mb-4">Брэндийн танилцуулга</p>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Барилгын чанарын 120 жилийн түүх, итгэл</h2>
                <p className="text-lg text-[#A8A29E] leading-relaxed">
                  Ceresit бол 1905 онд Германд үндэс тавигдсан, өнөөдөр дэлхийн хамгийн том химийн концерн болох Henkel группын мэдлэд бүх барилгын химийн нэр төрлийн брэнд юм. 
                  Зуу гаруй жилийн туршид Ceresit нь плита наалт, ус тусгаарлалт, дулаалга, шал, фасад болон битумжилтийн чиглэлээр мэргэшсэн, дэлхий нийтээр хүлээн зөвшөөрөгдсөн тэргүүлэгч брэнд хэвээр байна.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 px-10 bg-[#1C1917]">
          <div className="max-w-[1440px] mx-auto">
            <p className="text-[#E3000F] font-bold tracking-widest uppercase mb-4">01 Яагаад Ceresit гэж?</p>
            <h2 className="text-3xl font-bold text-white mb-12">Давуу талууд</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, i) => (
                <div key={i} className="bg-[#0C0A09] border border-[#44403C] rounded-2xl p-8 hover:border-[#E3000F] transition-colors">
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-[#A8A29E]">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 px-10">
          <div className="max-w-[1440px] mx-auto">
            <p className="text-[#E3000F] font-bold tracking-widest uppercase mb-4">02 Түүхэн замнал</p>
            <h2 className="text-3xl font-bold text-white mb-12">120 жилийн аялал</h2>

            <div className="relative">
              <div className="absolute top-3 left-0 right-0 h-1 bg-[#44403C]" />
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {timeline.map((item, i) => (
                  <div key={i} className="relative pt-8">
                    <div className="absolute top-0 left-0 w-6 h-6 rounded-full bg-[#E3000F] border-4 border-[#0C0A09]" />
                    <div className="text-[#E3000F] text-2xl font-bold mb-2">{item.year}</div>
                    <div className="text-white text-sm">{item.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20 px-10 bg-[#1C1917]">
          <div className="max-w-[1440px] mx-auto">
            <p className="text-[#E3000F] font-bold tracking-widest uppercase mb-4">03 Бүтээгдэхүүний үндсэн төрөл</p>
            <h2 className="text-3xl font-bold text-white mb-12">Бүтээгдэхүүний ангилал</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((cat) => (
                <Link
                  key={cat.code}
                  href="/portfolio"
                  className="group bg-[#0C0A09] border border-[#44403C] rounded-2xl p-6 hover:border-[#E3000F] transition-all"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-[#E3000F] text-white font-bold px-3 py-1 rounded-lg">{cat.code}</span>
                    <h3 className="text-xl font-bold text-white">{cat.name}</h3>
                  </div>
                  <p className="text-[#A8A29E]">{cat.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Product Table */}
        <section className="py-20 px-10">
          <div className="max-w-[1440px] mx-auto">
            <p className="text-[#E3000F] font-bold tracking-widest uppercase mb-4">04 Монголд борлуулагдаж буй бүтээгдэхүүн</p>
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
                      className={`border-b border-[#44403C] ${i % 2 === 0 ? 'bg-[#1C1917]' : 'bg-[#0C0A09]'} hover:bg-[#292524] transition-colors`}
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

        {/* About Banner */}
        <section className="py-24 px-10 bg-[#E3000F]">
          <div className="max-w-[1440px] mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ХАМТДАА ИРЭЭДҮЙН ҮЕИЙН ТӨЛӨӨ БАРЬЯ
            </h2>
            <p className="text-2xl text-[#FECACA]">Together, We Build</p>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 px-10">
          <div className="max-w-[1440px] mx-auto">
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
