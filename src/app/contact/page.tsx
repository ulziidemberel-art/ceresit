import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0C0A09]">
      <Header />

      <main>
        {/* Hero — Pencil дизайнаар улаан/оранж өнгө */}
        <section className="relative min-h-[500px] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1440")',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#E3000F]/90 via-[#E3000F]/70 to-[#E3000F]/50" />
          </div>

          <div className="relative max-w-[1440px] mx-auto px-10 w-full py-32">
            <div className="max-w-3xl">
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">ХОЛБОО БАРИХ</h1>
              <p className="text-xl text-white/90">Та манай багтай холбогдохыг хүсвэл доорх мэдээллийг ашиглана уу.</p>
            </div>
          </div>
        </section>

        {/* Contact Content — Pencil дизайнаар */}
        <section className="py-20 px-10">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Contact Info */}
              <div className="bg-[#0C0A09] border border-[#44403C] rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-8">Мэдээлэл</h2>

                <div className="space-y-6">
                  <div>
                    <div className="text-[#78716C] mb-1">Утас</div>
                    <div className="text-xl text-white">+976 80047722</div>
                  </div>

                  <div>
                    <div className="text-[#78716C] mb-1">Имэйл</div>
                    <div className="text-xl text-white">info@deutschewelle.mn</div>
                  </div>

                  <div>
                    <div className="text-[#78716C] mb-1">Хаяг</div>
                    <div className="text-lg text-white">
                      Улаанбаатар хот, Хан-Уул дүүрэг, 2-р хороо,
                      <br />
                      Мишээл барилгын их дэлгүүр, 2 давхар, 48 тоот шоурүүм
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-[#0C0A09] border border-[#44403C] rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-8">Мессеж илгээх</h2>

                <form className="space-y-5">
                  <div>
                    <label className="block text-[#78716C] mb-2">Нэр</label>
                    <input
                      type="text"
                      className="w-full bg-[#1C1917] border border-[#44403C] rounded-lg px-4 py-3 text-white focus:border-[#E3000F] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[#78716C] mb-2">Имэйл</label>
                    <input
                      type="email"
                      className="w-full bg-[#1C1917] border border-[#44403C] rounded-lg px-4 py-3 text-white focus:border-[#E3000F] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[#78716C] mb-2">Мессеж</label>
                    <textarea
                      rows={4}
                      className="w-full bg-[#1C1917] border border-[#44403C] rounded-lg px-4 py-3 text-white focus:border-[#E3000F] focus:outline-none transition-colors"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#E3000F] text-white py-4 rounded-lg font-bold hover:bg-[#FF3344] transition-colors"
                  >
                    Илгээх
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
