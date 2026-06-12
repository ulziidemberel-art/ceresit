import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

const projects = [
  { src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800", alt: "Орон сууцны төсөл", category: "Орон сууц" },
  { src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800", alt: "Барилгын төсөл", category: "Оффис" },
  { src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800", alt: "Барилгын төсөл", category: "Үйлдвэр" },
  { src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800", alt: "Барилгын төсөл", category: "Орон сууц" },
  { src: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=800", alt: "Барилгын төсөл", category: "Оффис" },
  { src: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?w=800", alt: "Барилгын төсөл", category: "Худалдаа" },
  { src: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800", alt: "Барилгын төсөл", category: "Орон сууц" },
  { src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800", alt: "Барилгын төсөл", category: "Үйлдвэр" },
];

const certifications = [
  { name: "Henkel группын баталгаа", color: "bg-[#E3000F]" },
  { name: "Цэнхэр сахиусан тэнгэр (эко-шошго)", color: "bg-emerald-600" },
  { name: "LEED сертификаттай сонголтууд", color: "bg-blue-600" },
];

export default function GalleryPage() {
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
                backgroundImage: 'url("https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1440")',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0C0A09]/95 via-[#0C0A09]/60 to-transparent" />
          </div>

          <div className="relative max-w-[1440px] mx-auto px-10 w-full py-32">
            <div className="max-w-3xl">
              <p className="text-[#E3000F] font-bold tracking-widest uppercase mb-4">Төслүүд</p>
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">ГАЛЕРЕЙ</h1>
              <p className="text-xl text-[#A8A29E]">Бидний хэрэгжүүлсэн төслүүдээс.</p>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20 px-10">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {projects.map((project, i) => (
                <div
                  key={i}
                  className="group relative aspect-square bg-[#1C1917] border border-[#44403C] rounded-2xl overflow-hidden hover:border-[#E3000F] transition-colors"
                >
                  <Image
                    src={project.src}
                    alt={project.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-[#E3000F] text-white text-xs font-bold px-2 py-1 rounded">{project.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 px-10 bg-[#1C1917]">
          <div className="max-w-[1440px] mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Баталгаа, шошго</h2>

            <div className="flex flex-wrap gap-4">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className={`${cert.color} text-white px-6 py-3 rounded-full font-bold flex items-center gap-2`}
                >
                  <span className="w-2 h-2 bg-white rounded-full" />
                  {cert.name}
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
