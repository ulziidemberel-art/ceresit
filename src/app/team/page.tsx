import Header from "@/components/Header";
import Footer from "@/components/Footer";

const teamMembers = [
  { name: "Шинэбаяр", role: "Захиалгын менежер", phone: "80069898" },
  { name: "Тэмүүлэн", role: "Захиалгын менежер", phone: "80046441" },
  { name: "Заяа", role: "Борлуулалтын менежер", phone: "80051314" },
  { name: "Батка", role: "Борлуулалтын менежер", phone: "80058880" },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[#0C0A09]">
      <Header />

      <main>
        <section className="py-24 px-10 bg-[#1C1917]">
          <div className="max-w-[1440px] mx-auto">
            <h1 className="text-5xl font-bold text-white mb-4">МАНАЙ БАГ</h1>
            <p className="text-xl text-[#A8A29E]">Мэргэжлийн инженерүүд, зөвлөхүүд.</p>
          </div>
        </section>

        <section className="py-20 px-10">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="bg-[#0C0A09] border border-[#44403C] rounded-2xl p-8 flex items-center gap-6 hover:border-[#E3000F] hover:shadow-[0_0_20px_rgba(227,0,15,0.2)] transition-all"
                >
                  <div className="w-24 h-24 rounded-full bg-[#44403C] flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-[#78716C] mb-2">{member.role}</p>
                    <p className="text-[#E3000F] font-bold">{member.phone}</p>
                  </div>
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
