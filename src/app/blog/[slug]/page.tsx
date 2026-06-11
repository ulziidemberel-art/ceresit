import { getClient } from "@/lib/apollo-client";
import { GET_POSTS, GET_POST_BY_SLUG } from "@/lib/graphql/queries/cms";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  const result = await getClient().query({
    query: GET_POSTS,
    variables: { language: "mn", status: "published" },
    context: { revalidate: 60 },
  });

  const data = result.data as { cpPosts?: Array<{ slug: string }> } | undefined;
  return data?.cpPosts?.map((post) => ({
    slug: post.slug,
  })) || [];
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const result = await getClient().query({
    query: GET_POSTS,
    variables: { language: "mn", status: "published" },
    context: { revalidate: 60 },
  });

  const data = result.data as { cpPosts?: Array<{ slug: string; title: string; content: string }> } | undefined;
  const post = data?.cpPosts?.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0C0A09] text-[#FAFAF9]">
      <Header />
      <div className="max-w-[1440px] mx-auto px-10 py-16">
        <Link href="/blog" className="text-[#A8A29E] hover:text-[#E3000F] mb-8 inline-block">
          ← Буцах
        </Link>
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div 
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
      <Footer />
    </div>
  );
}
