import Header from "@/components/Header";
import Footer from "@/components/Footer";

const services = [
  { code: "CM", title: "Плита наах цавуу", desc: "Керамик, гранит, том өрөгийн плита наах уян хатан цементэн суурийт цавуу. Бүтээгдэхүүн: CM 16, CM 17, CM 19." },
  { code: "CE", title: "Плитан чигжээс", desc: "Өнгөт, ус тулхэц, толбонд тэсвэртэй зэвдэс чийгнээс холын ба эпокси чигжээс. Бүтээгдэхүүн: CE 33, CE 40, CE 60." },
  { code: "CR", title: "Ус тусгаарлагч", desc: "Угаалгын өрөө, подвал, тааз, дээвэр, усан сангийн чийг тусгаарлалт. Бүтээгдэхүүн: CR 65, CR 166." },
  { code: "CT", title: "Шаварлага · Грунт · Фасад", desc: "Декоратив 'Короед' шаварлага, өнгөлгөө, грунт болон фасадны дулаалгын систем. Бүтээгдэхүүн: CT 16, CT 35, CT 190." },
  { code: "CN", title: "Шал тэгшлэгээ", desc: "Өөрөө ташрагч болон цутгамал шалны суурь тэгшлэгээний хольцууд. Бүтээгдэхүүн: CN 69, CN 76." },
  { code: "CD-CX", title: "Бетон засвар · нөхөөс", desc: "Бетон бүтэц сэргээх, шүрхэх ба бэхжүүлэх засварын тусгай зуурмагууд. Бүтээгдэхүүн: CD 22, CD 24, CX 15." },
];

export default function ServicesPage() {
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
                backgroundImage: 'url("https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1440")',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0C0A09]/95 via-[#0C0A09]/60 to-transparent" />
          </div>

          <div className="relative max-w-[1440px] mx-auto px-10 w-full py-32">
            <div className="max-w-3xl">
              <p className="text-[#E3000F] font-bold tracking-widest uppercase mb-4">Бүтээгдэхүүний ангилал</p>
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">БИДНИЙ ҮЙЛЧИЛГЭЭ</h1>
              <p className="text-xl text-[#A8A29E]">Барилгын бүх шатанд мэргэжлийн шийдэл.</p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-10">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service) => (
                <div
                  key={service.code}
                  className="bg-[#0C0A09] border border-[#44403C] rounded-2xl p-8 hover:border-[#E3000F] hover:shadow-[0_0_20px_rgba(227,0,15,0.2)] transition-all"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-[#E3000F] text-white font-bold px-3 py-1 rounded-lg">{service.code}</span>
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  </div>
                  <p className="text-[#A8A29E]">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 px-10 bg-[#1C1917]">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Мэргэжлийн дэмжлэг</h2>
                <p className="text-lg text-[#A8A29E] leading-relaxed mb-6">
                  Бид зөвхөн бүтээгдэхүүн нийлүүлэхээс гадна таны төсөлд тохирсон зөв шийдэл, техникийн зөвлөгөө, угсралтын дэмжлэг үзүүлдэг.
                </p>
                <ul className="space-y-4 text-[#A8A29E]">
                  <li className="flex items-start gap-3">
                    <span className="text-[#E3000F] font-bold">✓</span>
                    <span>Барилгын бүх шатанд тохирсон системийн шийдэл</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E3000F] font-bold">✓</span>
                    <span>Мэргэжлийн инженерийн зөвлөгөө, тооцоо</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E3000F] font-bold">✓</span>
                    <span>Объект дээрх сургалт, дэмжлэг</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E3000F] font-bold">✓</span>
                    <span>Германы стандартад нийцсэн чанарын баталгаа</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#E3000F] rounded-2xl p-10">
                <h3 className="text-3xl font-bold text-white mb-4">Хамтран ажиллая</h3>
                <p className="text-[#FECACA] text-lg mb-6">
                  Төслийнхөө талаар манай мэргэжлийн багтай ярилцана уу. Бид танд тохирсон шийдэл санал болгоно.
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-white text-[#E3000F] px-8 py-4 rounded-xl font-bold hover:bg-[#FECACA] transition-colors"
                >
                  Холбогдох
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
