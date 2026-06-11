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
        <section className="py-24 px-10 bg-[#1C1917]">
          <div className="max-w-[1440px] mx-auto">
            <h1 className="text-5xl font-bold text-white mb-4">МЭДЭЭ МЭДЭЭЛЭЛ</h1>
            <p className="text-xl text-[#A8A29E]">Шинэ бүтээгдэхүүн, технологи, төслийн талаарх мэдээлэл.</p>
          </div>
        </section>

        <section className="py-20 px-10">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {posts.map((post: any) => (
                <Link
                  key={post._id}
                  href={`/blog/${post.slug}`}
                  className="bg-[#0C0A09] border border-[#44403C] rounded-2xl p-6 hover:border-[#E3000F] hover:shadow-[0_0_20px_rgba(227,0,15,0.2)] transition-all block"
                >
                  <div className="h-48 bg-[#292524] rounded-xl mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
                  <p className="text-[#A8A29E]">{post.excerpt}</p>
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
