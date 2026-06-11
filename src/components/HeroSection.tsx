"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0C0A09]">
      <div className="relative mx-auto flex min-h-[600px] max-w-7xl flex-col items-center justify-center px-4 py-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0C0A09]/60 to-[#0C0A09]" />
          <svg
            className="absolute inset-0 h-full w-full opacity-20"
            viewBox="0 0 1200 600"
            preserveAspectRatio="xMidYMid slice"
          >
            <g fill="none" stroke="#44403C" strokeWidth="1">
              {Array.from({ length: 20 }).map((_, i) => (
                <rect
                  key={i}
                  x={50 + i * 55}
                  y={600 - (80 + Math.random() * 300)}
                  width="40"
                  height={80 + Math.random() * 300}
                  opacity="0.3"
                />
              ))}
              {Array.from({ length: 15 }).map((_, i) => (
                <rect
                  key={`tall-${i}`}
                  x={80 + i * 75}
                  y={600 - (150 + Math.random() * 400)}
                  width="50"
                  height={150 + Math.random() * 400}
                  opacity="0.25"
                />
              ))}
            </g>
          </svg>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            ИРЭЭДҮЙН ҮЕИЙН ТӨЛӨӨ
            <br />
            <span className="text-[#E3000F]">БАРИЛГЫН ШИЙДЭЛ</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[#A8A29E]">
            120 жилийн туршлагатай, дэлхийд тэргүүлэгч барилгын химийн бүтээгдэхүүний шийдлүүд
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/services"
              className="inline-flex items-center justify-center rounded-full bg-[#E3000F] px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-[#cc000d]"
            >
              Бүтээгдэхүүн харах
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-[#44403C] bg-transparent px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1C1917]"
            >
              Холбоо барих
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 right-8 z-10 hidden md:block"
        >
          <div className="rounded-2xl bg-[#1C1917] border border-[#44403C] px-6 py-4">
            <p className="text-xs text-[#A8A29E]">Ceresit</p>
            <p className="text-lg font-bold text-white">120 жил</p>
            <p className="text-xs text-[#A8A29E]">Хамтдаа</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
