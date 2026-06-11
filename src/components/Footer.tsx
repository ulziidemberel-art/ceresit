"use client";

import Link from "next/link";

const footerLinks = [
  { label: "Хамтран ажиллах", href: "/contact" },
  { label: "Дэлгүүр хайх", href: "/contact" },
  { label: "Хэвлэл", href: "/blog" },
  { label: "Ашиглалтын нөхцөл", href: "#" },
  { label: "Мэдээллийн хамгаалалт", href: "#" },
  { label: "Күүки", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-[#44403C]">
      <div className="max-w-[1440px] mx-auto px-10 py-10">
        <div className="flex flex-wrap gap-6 mb-8">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
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
