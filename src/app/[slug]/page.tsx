import { getClient } from "@/lib/apollo-client";
import { GET_PAGES, GET_PAGE_BY_SLUG } from "@/lib/graphql/queries/cms";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const result = await getClient().query({
    query: GET_PAGES,
    variables: { language: "mn" },
    context: { revalidate: 60 },
  });

  const data = result.data as { cpPages?: Array<{ slug: string }> } | undefined;
  const pages = data?.cpPages || [];
  
  // Filter out 'home' since it has its own route at /
  return pages
    .filter((page) => page.slug !== "home")
    .map((page) => ({
      slug: page.slug,
    }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const result = await getClient().query({
    query: GET_PAGES,
    variables: { language: "mn" },
    context: { revalidate: 60 },
  });

  const data = result.data as { cpPages?: Array<{ slug: string; name: string; content: string }> } | undefined;
  const page = data?.cpPages?.find((p) => p.slug === params.slug);

  if (!page) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0C0A09] text-[#FAFAF9]">
      <div className="max-w-[1440px] mx-auto px-10 py-16">
        <h1 className="text-4xl font-bold mb-8">{page.name}</h1>
        <div 
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: page.content }}
        />
      </div>
    </div>
  );
}
