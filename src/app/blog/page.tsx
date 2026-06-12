import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { getClient } from "@/lib/apollo-client";
import { GET_POSTS } from "@/lib/graphql/queries/cms";

export default async function BlogPage() {
  const result = await getClient().query({
    query: GET_POSTS,
    variables: { language: "mn", status: "published" },
    context: { revalidate: 60 },
  });

  const data = result.data as { cpPosts?: Array<{ _id: string; slug: string; title: string; excerpt: string }> } | undefined;
  const posts = data?.cpPosts || [];

  return (
    <div className="min-h-screen bg-[#0C0A09]">
      <Header />

      <main>
        {/* Hero — Pencil дизайнаар */}
        <section className="relative min-h-[500px] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?w=1440")',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0C0A09]/95 via-[#0C0A09]/60 to-transparent" />
          </div>

          <div className="relative max-w-[1440px] mx-auto px-10 w-full py-32">
            <div className="max-w-3xl">
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">МЭДЭЭ МЭДЭЭЛЭЛ</h1>
              <p className="text-xl text-[#A8A29E]">Шинэ бүтээгдэхүүн, технологи, төслийн талаарх мэдээлэл.</p>
            </div>
          </div>
        </section>

        {/* Blog Grid — Pencil дизайнаар */}
        <section className="py-20 px-10">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {posts.map((post: any) => (
                <Link
                  key={post._id}
                  href={`/blog/${post.slug}`}
                  className="bg-[#0C0A09] border border-[#44403C] rounded-2xl overflow-hidden hover:border-[#E3000F] transition-all block"
                >
                  <div className="h-56 bg-[#292524]" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
                    <p className="text-[#A8A29E]">{post.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
