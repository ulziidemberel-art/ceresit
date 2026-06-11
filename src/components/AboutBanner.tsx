"use client";

import { motion } from "framer-motion";

export default function AboutBanner() {
  return (
    <section className="w-full bg-[#E3000F] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            ХАМТДАА ИРЭЭДҮЙН ҮЕИЙН
            <br />
            ТӨЛӨӨ БАРЬЯ
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            120 жилийн турш бид барилгын салбарт хамгийн өндөр чанартай шийдлүүдийг нийлүүлж ирсэн. Таны итгэл бидний хөдөлгүүр хүч.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/about"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-medium text-[#E3000F] transition-colors hover:bg-white/90"
            >
              Бидний тухай
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-transparent px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Хамтран ажиллах
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
