import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#0C0A09]">
      <Header />

      <main>
        <section className="py-24 px-10 bg-[#1C1917]">
          <div className="max-w-[1440px] mx-auto">
            <h1 className="text-5xl font-bold text-white mb-4">ГАЛЕРЕЙ</h1>
            <p className="text-xl text-[#A8A29E]">Бидний хэрэгжүүлсэн төслүүдээс.</p>
          </div>
        </section>

        <section className="py-20 px-10">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                <div
                  key={i}
                  className="bg-[#292524] border border-[#44403C] rounded-2xl overflow-hidden h-72 hover:border-[#E3000F] transition-colors"
                >
                  <div className="w-full h-full flex items-center justify-center text-[#78716C]">
                    Төслийн зураг {i}
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
