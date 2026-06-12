import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, Package } from "lucide-react";

const products = [
  {
    slug: "cm16",
    name: "Ceresit CM 16",
    shortDesc: "Плитан цавуу, 25 кг",
    fullDesc: "Ceresit CM 16 нь флексибель буюу уян хатан плитан цавуу юм. Бетон, хөнгөн блок, гипсэн хавтан зэрэг гадаргуу дээр бүх төрлийн керамик плита, керамогранит, керамик чулууг наахад тохиромжтой.",
    features: ["Уян хатан", "Ус тусгаарлагч", "Дотор болон гадна хэрэглээнд", "25 кг"],
    usage: "Плитаны наалт, өрөөнүүдийн шал, дотор хананы чимэглэл",
  },
  {
    slug: "cn69",
    name: "Ceresit CN 69",
    shortDesc: "Шал тэгшлэгч 3-15 мм",
    fullDesc: "Ceresit CN 69 нь цементэн суурьтай, өөрөө тархдаг шал тэгшлэгч бүтээгдэхүүн юм. 3-15 мм зузаанд хэрэглэх боломжтой.",
    features: ["Өөрөө тархдаг", "Багажгүй хэрэглээ", "Бат бөх", "3-15 мм"],
    usage: "Шал тэгшлэх, засвар үйлчилгээ, шинэ шал өрөх өмнөх бэлтгэл",
  },
  {
    slug: "ce33",
    name: "Ceresit CE 33",
    shortDesc: "Плитан чигжээс 2кг",
    fullDesc: "Ceresit CE 33 нь өнгөт плитан чигжээс бөгөөд керамик плитаны хоорондын завсрыг чимэглэн, ус нэвтрүүлэхгүй хамгаална.",
    features: ["Өнгөт", "Ус нэвтрүүлэхгүй", "Бохирдолдоо тэсвэртэй", "2 кг"],
    usage: "Плитаны завсар чигжих, ванн, банны өрөө",
  },
  {
    slug: "cr65",
    name: "Ceresit CR 65",
    shortDesc: "Ус тусгаарлагч 25кг",
    fullDesc: "Ceresit CR 65 нь цементэн суурьтай, 1 бүрэлдэхүүнт ус тусгаарлагч бүрээс юм. Дотор болон гадна ашиглах боломжтой.",
    features: ["1 бүрэлдэхүүнт", "Ус тусгаарлагч", "Дотор/гадна", "25 кг"],
    usage: "Унтлагын өрөө, гал тогоо, ванн, балкон, гадаа хана",
  },
  {
    slug: "cx15",
    name: "Ceresit CX15",
    shortDesc: "Бетон засварын бүтээгдэхүүн",
    fullDesc: "Ceresit CX15 нь бетон гадаргуу дээрх хонгил, цууралт, гэмтэл засах зориулалттай бат бөх бүтээгдэхүүн юм.",
    features: ["Бат бөх", "Түргэн хатуурдаг", "Бетонтой сайн наалддаг", "Багажгүй хэрэглээ"],
    usage: "Бетон засвар, шалны гэмтэл засах, ханын цууралт нөхөх",
  },
  {
    slug: "cs25",
    name: "Ceresit CS25",
    shortDesc: "Плитаны уян чигжээс",
    fullDesc: "Ceresit CS25 нь силикон суурьтай, уян чигжээс бөгөөд плитаны завсрыг уян хатан, ус нэвтрүүлэхгүйгээр битүүмжилнэ.",
    features: ["Силикон суурьтай", "Уян хатан", "Хөгцөрөхөд тэсвэртэй", "Өнгөт"],
    usage: "Ванн, банны өрөө, гал тогоо, плитаны завсар",
  },
  {
    slug: "cr166",
    name: "Ceresit CR166",
    shortDesc: "2 бүрэлдэхүүнт ус тусгаарлагч",
    fullDesc: "Ceresit CR166 нь 2 бүрэлдэхүүнт, өндөр чанарын ус тусгаарлагч бүрээс юм. Илүү их усны даралт, өндөр чийгшилтэй орчинд тохиромжтой.",
    features: ["2 бүрэлдэхүүнт", "Өндөр тэсвэртэй", "Уян хатан", "Гүн ус тусгаарлалт"],
    usage: "Усан сан, ванн, банны өрөө, подвал, дээврийн ус тусгаарлалт",
  },
  {
    slug: "cl152",
    name: "Ceresit CL152",
    shortDesc: "Ус тусгаарлагч тууз 50м",
    fullDesc: "Ceresit CL152 нь ус тусгаарлагч системийн бүрэн бүтэн байдлыг хангах зориулалттай уян хатан тууз юм. Хаалт, булан, заагч хэсэгт хэрэглэнэ.",
    features: ["Уян хатан", "Ус тусгаарлагч", "50 метр", "Хаалт, буланд тохиромжтой"],
    usage: "Ус тусгаарлагч бүрээсийн хаалт, булан, заагч хэсэг",
  },
];

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#0C0A09]">
        <Header />
        <main className="py-24 px-10">
          <div className="max-w-[1440px] mx-auto text-center">
            <h1 className="text-3xl font-bold text-white mb-4">Бүтээгдэхүүн олдсонгүй</h1>
            <Link href="/portfolio" className="text-[#E3000F] hover:underline">
              Бүтээгдэхүүн рүү буцах
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0C0A09]">
      <Header />

      <main>
        <section className="py-24 px-10 bg-[#1C1917]">
          <div className="max-w-[1440px] mx-auto">
            <Link
              href="/portfolio"
              className="inline-flex items-center text-[#A8A29E] hover:text-[#E3000F] mb-6 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Бүтээгдэхүүн рүү буцах
            </Link>
            <h1 className="text-5xl font-bold text-white mb-4">{product.name}</h1>
            <p className="text-xl text-[#A8A29E]">{product.shortDesc}</p>
          </div>
        </section>

        <section className="py-20 px-10">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-[#1C1917] border border-[#44403C] rounded-2xl p-12 flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                  <Package className="h-32 w-32 text-[#E3000F] mx-auto mb-6" />
                  <div className="text-3xl font-bold text-white">{product.name}</div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Тайлбар</h2>
                  <p className="text-[#A8A29E] leading-relaxed">{product.fullDesc}</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Онцлог</h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {product.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-[#A8A29E]"
                      >
                        <span className="h-2 w-2 bg-[#E3000F] rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Хэрэглээ</h2>
                  <p className="text-[#A8A29E]">{product.usage}</p>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-[#E3000F] text-white font-bold rounded-xl hover:bg-[#FF3344] transition-colors"
                >
                  Захиалах
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
