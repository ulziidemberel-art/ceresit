import Header from "@/components/Header";
import Footer from "@/components/Footer";

const posts = [
  { title: "CT 17 шинэ технологи", date: "2024.06.10", excerpt: "Шинэ грунтын технологийн талаар" },
  { title: "Fibre Force танилцуулга", date: "2024.06.08", excerpt: "Уян хатан бүтэцтэй цавуу" },
  { title: "CE 60 хэрэглээ", date: "2024.06.05", excerpt: "Шинэ чигжээсний давуу тал" },
  { title: "Тогтвортой барилга", date: "2024.06.01", excerpt: "Байгальд ээлтэй бүтээгдэхүүн" },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0C0A09]">
      <Header />

      <main>
        <section className="py-24 px-10 bg-[#1C1917]">
          <div className="max-w-[1440px] mx-auto">
            <h1 className="text-5xl font-bold text-white mb-4">МЭДЭЭ МЭДЭЭЛЭЛ</h1>
            <p className="text-xl text-[#A8A29E]">Шинэ бүтээгдэхүүн, технологи, төслийн талаарх мэдээлэл.</p>
          </div>
        </section>

        <section className="py-20 px-10">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {posts.map((post) => (
                <div
                  key={post.title}
                  className="bg-[#0C0A09] border border-[#44403C] rounded-2xl p-6 hover:border-[#E3000F] hover:shadow-[0_0_20px_rgba(227,0,15,0.2)] transition-all"
                >
                  <div className="h-48 bg-[#292524] rounded-xl mb-4" />
                  <div className="text-sm text-[#78716C] mb-2">{post.date}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
                  <p className="text-[#A8A29E]">{post.excerpt}</p>
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
