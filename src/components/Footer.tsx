"use client";

import Link from "next/link";
import { useQuery } from "@apollo/client/react";
import { GET_FOOTER_MENU } from "@/lib/graphql/queries/cms";

export default function Footer() {
  const result = useQuery(GET_FOOTER_MENU, {
    variables: { language: "mn", kind: "footer" },
  });

  const data = result.data as { cpMenus?: Array<{ _id: string; url: string; label: string; order: number }> } | undefined;
  const footerLinks = (data?.cpMenus || []).slice().sort((a, b) => a.order - b.order);

  return (
    <footer className="bg-black border-t border-[#44403C]">
      <div className="max-w-[1440px] mx-auto px-10 py-10">
        <div className="flex flex-wrap gap-6 mb-8">
          {footerLinks.map((link: any) => (
            <Link
              key={link._id}
              href={link.url}
              className="text-xs text-[#78716C] hover:text-[#FAFAF9] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <p className="text-xs text-[#78716C]">
          © 2024 Ceresit. Бүх эрх хуулиар хамгаалагдсан.
        </p>
      </div>
    </footer>
  );
}
