import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0C0A09]">
      <Header />

      <main>
        {/* Hero */}
        <section className="relative h-[400px] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1440")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1C1917] to-transparent" />
          </div>
          
          <div className="relative max-w-[1440px] mx-auto px-10 w-full">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold text-white mb-4">БИДНИЙ ТУХАЙ</h1>
              <p className="text-xl text-[#A8A29E]">
                Ceresit нь дэлхийн барилгын химийн бүтээгдэхүүний зах зээлд тэргүүлэгч компани юм.
              </p>
            </div>
            
            <div className="absolute bottom-8 right-10">
              <div className="text-white">
                <div className="text-4xl font-bold tracking-tight">Ceresit</div>
                <div className="flex items-end gap-2 mt-1">
                  <div className="bg-white text-black px-2 py-1">
                    <span className="text-2xl font-bold">120</span>
                  </div>
                  <div className="text-base leading-tight">
                    <div>years</div>
                    <div>together</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 px-10">
          <div className="max-w-[1440px] mx-auto">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-bold text-white mb-8">Манай түүх</h2>
              <p className="text-lg text-[#A8A29E] mb-8 leading-relaxed">
                Ceresit брэнд нь олон арван жилийн туршид барилгын салбарт шилдэг шийдлүүдийг нийлүүлж, 
                мянга мянган төслийг амжилттай хэрэгжүүлсээр ирсэн. Бидний зорилго бол чанар, 
                тэсвэртэй байдал, мөн инновацийг нэгтгэсэн бүтээгдэхүүнүүдийг санал болгох явдал юм.
              </p>

              <h2 className="text-4xl font-bold text-white mb-8">Манай чадварын талбар</h2>
              <p className="text-lg text-[#A8A29E] leading-relaxed">
                Плита наах, фасад бүрээс, ус тусгаарлах, дотор засал, шал, зуурмаг гэх мэт бүхий л 
                чиглэлээр мэргэшсэн баг хамт олон ажилладаг.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
