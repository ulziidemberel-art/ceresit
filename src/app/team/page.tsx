import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

const teamMembers = [
  { name: "Шинэбаяр", role: "Захиалгын менежер", phone: "80069898", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400" },
  { name: "Тэмүүлэн", role: "Захиалгын менежер", phone: "80046441", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400" },
  { name: "Заяа", role: "Борлуулалтын менежер", phone: "80051314", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400" },
  { name: "Батка", role: "Борлуулалтын менежер", phone: "80058880", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400" },
];

export default function TeamPage() {
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
                backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1440")',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0C0A09]/95 via-[#0C0A09]/60 to-transparent" />
          </div>

          <div className="relative max-w-[1440px] mx-auto px-10 w-full py-32">
            <div className="max-w-3xl">
              <p className="text-[#E3000F] font-bold tracking-widest uppercase mb-4">Манай баг</p>
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">МАНАЙ БАГ</h1>
              <p className="text-xl text-[#A8A29E]">Мэргэжлийн инженерүүд, зөвлөхүүд.</p>
            </div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-20 px-10">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="bg-[#0C0A09] border border-[#44403C] rounded-2xl p-6 flex items-center gap-6 hover:border-[#E3000F] hover:shadow-[0_0_20px_rgba(227,0,15,0.2)] transition-all"
                >
                  <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0 bg-[#292524]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-[#78716C] mb-1">{member.role}</p>
                    <p className="text-[#E3000F] font-bold">{member.phone}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 px-10 bg-[#1C1917]">
          <div className="max-w-[1440px] mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Бидэнтэй холбогдох</h2>
            <p className="text-lg text-[#A8A29E] mb-8">
              Төслийнхөө талаар манай багтай ярилцана уу.
            </p>
            <a
              href="/contact"
              className="inline-block bg-[#E3000F] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#FF3344] transition-colors"
            >
              Холбогдох
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
