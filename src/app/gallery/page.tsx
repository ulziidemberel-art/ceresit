import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

const images = [
  { src: "/images/Screenshot 2026-06-10 124126.png", alt: "Ceresit зураг 1" },
  { src: "/images/Screenshot 2026-06-10 124158.png", alt: "Ceresit зураг 2" },
  { src: "/images/Screenshot 2026-06-10 124219.png", alt: "Ceresit зураг 3" },
  { src: "/images/Screenshot 2026-06-10 124242.png", alt: "Ceresit зураг 4" },
  { src: "/images/Screenshot 2026-06-10 124304.png", alt: "Ceresit зураг 5" },
  { src: "/images/Screenshot 2026-06-10 124317.png", alt: "Ceresit зураг 6" },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#0C0A09]">
      <Header />

      <main>
        <section className="py-24 px-10 bg-[#1C1917]">
          <div className="max-w-[1440px] mx-auto">
            <h1 className="text-5xl font-bold text-white mb-4">ГАЛЕРЕЙ</h1>
            <p className="text-xl text-[#A8A29E]">Pencil-д зурсан дизайн зургууд.</p>
          </div>
        </section>

        <section className="py-20 px-10">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image, i) => (
                <div
                  key={i}
                  className="bg-[#292524] border border-[#44403C] rounded-2xl overflow-hidden h-72 hover:border-[#E3000F] transition-colors"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
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
