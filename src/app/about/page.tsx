import Header from "@/components/Header";
import Footer from "@/components/Footer";

const timeline = [
  { year: "1905", title: "Германд үндэс тавигдсан", desc: "Ceresit брэнд анх Гермад үүсч, барилгын химийн бүтээгдэхүүний зах зээлд хүч түрэн орж ирсэн." },
  { year: "1910", title: "Брюсселийн үзэсгэлэнд танилдав", desc: "Олон улсын анхны томоохон үзэсгэлэнгээр танилцуулж, Европын зах зээлд нэрээ гаргав." },
  { year: "1986", title: "Henkel групп худалдан авсан", desc: "Дэлхийн химийн концерн Henkel-ийн бүрэлдэхүүнд орж, олон улсын хэмжээнд өргөжив." },
  { year: "2005", title: "Анх удаа тоосгүй плита наах цавуу", desc: "Инноваци шийдэл нь мэргэжлийн барилгад шинэ стандартыг тогтоов." },
  { year: "2022", title: "Ceresit · 120 жил", desc: "Хөргөгчийн CE 60 чийгээс бүтээгдэхүүн нь шагнал хүртэж, брэнд 120 жилийн ойгоо тэмдэглэв." },
  { year: "2024", title: "AERO технологиор +25% бүтээгдэхүүн", desc: "Шинэ AERO технологи нь бүтээгдэхүүний тоог 25%-иар нэмж, илүү олон шийдэл санал болгов." },
];

export default function AboutPage() {
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
                backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1440")',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0C0A09]/95 via-[#0C0A09]/60 to-transparent" />
          </div>

          <div className="relative max-w-[1440px] mx-auto px-10 w-full py-32">
            <div className="max-w-3xl">
              <p className="text-[#E3000F] font-bold tracking-widest uppercase mb-4">Брэндийн танилцуулга</p>
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">БИДНИЙ ТУХАЙ</h1>
              <p className="text-xl text-[#A8A29E]">Барилгын чанарын 120 жилийн түүх, итгэл.</p>
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

        {/* Brand Story */}
        <section className="py-20 px-10">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Ceresit гэж хэн бэ?</h2>
                <p className="text-lg text-[#A8A29E] leading-relaxed mb-6">
                  Ceresit бол 1905 онд Германд үндэс тавигдсан, өнөөдөр дэлхийн хамгийн том химийн концерн болох Henkel группын мэдлэд бүх барилгын химийн нэр төрлийн брэнд юм.
                </p>
                <p className="text-lg text-[#A8A29E] leading-relaxed">
                  Зуу гаруй жилийн туршид Ceresit нь плита наалт, ус тусгаарлалт, дулаалга, шал, фасад болон битумжилтийн чиглэлээр мэргэшсэн, дэлхий нийтээр хүлээн зөвшөөрөгдсөн тэргүүлэгч брэнд хэвээр байна.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { title: "120 жилийн туршлага", desc: "1905 оноос хойш хуримтлуулсан мэдлэг, технологи нь бүтээгдэхүүн бүрд шингэсэн." },
                  { title: "Германы чанар", desc: "Henkel группын инженерийн, чанарын хатуу стандартаар баталгаажсан." },
                  { title: "Дэлхийд танигдсан", desc: "Олон улсын зах зээлд тэргүүлэгч, мэргэжлийн барилгадын сонголт." },
                  { title: "Байгальд ээлтэй", desc: "Blue Angel эко-шошго, LEED-д нийцсэн бүтээгдэхүүнүүд." },
                ].map((item, i) => (
                  <div key={i} className="bg-[#1C1917] border border-[#44403C] rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-[#A8A29E]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 px-10 bg-[#1C1917]">
          <div className="max-w-[1440px] mx-auto">
            <p className="text-[#E3000F] font-bold tracking-widest uppercase mb-4">02 Түүхэн замнал</p>
            <h2 className="text-3xl font-bold text-white mb-12">120 жилийн аялал</h2>

            <div className="relative">
              <div className="absolute top-3 left-0 right-0 h-1 bg-[#44403C] hidden lg:block" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {timeline.map((item, i) => (
                  <div key={i} className="relative bg-[#0C0A09] border border-[#44403C] rounded-2xl p-6">
                    <div className="text-[#E3000F] text-3xl font-bold mb-3">{item.year}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-[#A8A29E]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Grid */}
        <section className="py-20 px-10">
          <div className="max-w-[1440px] mx-auto">
            <p className="text-[#E3000F] font-bold tracking-widest uppercase mb-4">03 Үнэт зүйлс</p>
            <h2 className="text-3xl font-bold text-white mb-12">Бид юун дээр төвлөрдөг вэ?</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Чанар", desc: "Германы инженерийн стандартаар баталгаажсан, удаан эдэлгээтэй бүтээгдэхүүн." },
                { title: "Инноваци", desc: "AERO, Flextec, тоосгүй технологи зэрэг шинэ шийдлүүдийг тасралтгүй нэвтрүүлдэг." },
                { title: "Тогтвортой хөгжил", desc: "Байгальд ээлтэй бүрэлдэхүүн, битүүмжлэл, эрчим хүч хэмнэх дулаалгын систем." },
              ].map((item, i) => (
                <div key={i} className="bg-[#1C1917] border border-[#44403C] rounded-2xl p-8 hover:border-[#E3000F] transition-colors">
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-[#A8A29E]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
