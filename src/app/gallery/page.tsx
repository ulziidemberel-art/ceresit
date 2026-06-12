import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

const designs = [
  { src: "/images/designs/gPpzk.jpeg", label: "Нүүр хуудас" },
  { src: "/images/designs/SmnnL.jpeg", label: "Бидний тухай" },
  { src: "/images/designs/Pn4II.jpeg", label: "Үйлчилгээ" },
  { src: "/images/designs/buOg3.jpeg", label: "Мэдээ" },
  { src: "/images/designs/E0DcZa.jpeg", label: "Холбоо барих" },
  { src: "/images/designs/B9jWbI.jpeg", label: "Галерей" },
  { src: "/images/designs/N5B54.jpeg", label: "Баг" },
  { src: "/images/designs/ORfzy.jpeg", label: "Бүтээгдэхүүн" },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#0C0A09]">
      <Header />

      <main>
        <section className="py-24 px-10 bg-[#1C1917]">
          <div className="max-w-[1440px] mx-auto">
            <h1 className="text-5xl font-bold text-white mb-4">ГАЛЕРЕЙ</h1>
            <p className="text-xl text-[#A8A29E]">Pencil-д зурсан бүх дизайн зургууд.</p>
          </div>
        </section>

        <section className="py-20 px-10">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {designs.map((design, i) => (
                <a
                  key={i}
                  href={design.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-[#292524] border border-[#44403C] rounded-2xl overflow-hidden hover:border-[#E3000F] transition-colors"
                >
                  <div className="relative aspect-[4/3] bg-[#1C1917]">
                    <Image
                      src={design.src}
                      alt={design.label}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-5 border-t border-[#44403C]">
                    <h3 className="text-lg font-bold text-white group-hover:text-[#E3000F] transition-colors">
                      {design.label}
                    </h3>
                    <p className="text-sm text-[#A8A29E] mt-1">Бүрэн хэмжээнд үзэх</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
