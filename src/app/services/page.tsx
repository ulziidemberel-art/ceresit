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
        <section className="py-24 px-10 bg-[#1C1917]">
          <div className="max-w-[1440px] mx-auto">
            <h1 className="text-5xl font-bold text-white mb-4">БИДНИЙ ҮЙЛЧИЛГЭЭ</h1>
            <p className="text-xl text-[#A8A29E]">Барилгын бүх шатанд мэргэжлийн шийдэл.</p>
          </div>
        </section>

        <section className="py-20 px-10">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service) => (
                <div
                  key={service.name}
                  className="bg-[#0C0A09] border border-[#44403C] rounded-2xl p-10 hover:border-[#E3000F] hover:shadow-[0_0_20px_rgba(227,0,15,0.2)] transition-all"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
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
