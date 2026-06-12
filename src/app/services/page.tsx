import Header from "@/components/Header";
import Footer from "@/components/Footer";

const services = [
  { name: "Плита наах", desc: "Мэргэжлийн плита наах шийдэл." },
  { name: "Фасад бүрээс", desc: "Мэргэжлийн фасад бүрээс шийдэл." },
  { name: "Ус тусгаарлах", desc: "Мэргэжлийн ус тусгаарлах шийдэл." },
  { name: "Дотор засал", desc: "Мэргэжлийн дотор засал шийдэл." },
  { name: "Шалны шийдэл", desc: "Мэргэжлийн шалны шийдэл." },
  { name: "Ус нэвтрүүлэхгүй", desc: "Мэргэжлийн ус нэвтрүүлэхгүй шийдэл." },
  { name: "Зуурмаг", desc: "Мэргэжлийн зуурмаг шийдэл." },
  { name: "Барилгын систем", desc: "Мэргэжлийн барилгын систем шийдэл." },
];

export default function ServicesPage() {
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
                backgroundImage: 'url("https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1440")',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0C0A09]/95 via-[#0C0A09]/60 to-transparent" />
          </div>

          <div className="relative max-w-[1440px] mx-auto px-10 w-full py-32">
            <div className="max-w-3xl">
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">БИДНИЙ ҮЙЛЧИЛГЭЭ</h1>
              <p className="text-xl text-[#A8A29E]">Барилгын бүх шатанд мэргэжлийн шийдэл.</p>
            </div>
          </div>
        </section>

        {/* Services Grid — Pencil дизайнаар 2 багана */}
        <section className="py-20 px-10">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service) => (
                <div
                  key={service.name}
                  className="bg-[#0C0A09] border border-[#44403C] rounded-2xl p-8 hover:border-[#E3000F] hover:shadow-[0_0_20px_rgba(227,0,15,0.2)] transition-all"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                  <p className="text-[#A8A29E]">{service.desc}</p>
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
