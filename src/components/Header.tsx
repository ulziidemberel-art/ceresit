"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "БҮТЭЭГДЭХҮҮН", href: "/portfolio" },
  { label: "СИСТЕМ", href: "/services" },
  { label: "ШИНЭЧЛЭЛТ", href: "/blog" },
  { label: "ТЕХНИК", href: "/services" },
  { label: "МЭРГЭЖИЛТЭН", href: "/team" },
  { label: "ТОГТВОРТОЙ ХӨГЖИЛ", href: "/about" },
  { label: "БИДНИЙ ТУХАЙ", href: "/about" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#0C0A09] border-b border-[#44403C]">
      <div className="max-w-[1440px] mx-auto px-10">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-white text-2xl font-bold tracking-tight">
            CERESIT
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href + item.label}
                href={item.href}
                className="text-sm font-bold text-[#FAFAF9] hover:text-[#E3000F] transition-colors duration-150"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-[#44403C]">
            {navItems.map((item) => (
              <Link
                key={item.href + item.label}
                href={item.href}
                className="block py-2 text-sm font-bold text-[#FAFAF9] hover:text-[#E3000F] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
