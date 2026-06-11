"use client";

import { motion } from "framer-motion";
import { Zap, Beaker } from "lucide-react";

const innovations = [
  {
    title: "CT 17",
    subtitle: "Универсал грунт",
    description: "Барилгын ажлын өмнөх бэлтгэл, суурь болон өнгөлгөөний хоорондох холбогч. Плита, фасад, дотор заслын ажилд өргөн хэрэглэнэ.",
    icon: Beaker,
  },
  {
    title: "Fibre Force",
    subtitle: "Шалны бэхжүүлэгч систем",
    description: "Арматур шигжлэгч технологитой, өндөр бат бэх чанартай шалны бэхжүүлэгч. 3D шилэн утас технологиор бэхжүүлсэн.",
    icon: Zap,
  },
];

export default function InnovationSection() {
  return (
    <section className="w-full bg-[#0C0A09] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Инноваци</h2>
          <p className="mt-4 text-lg text-[#A8A29E]">Хамгийн сүүлийн үеийн технологи, шинэ бүтээгдэхүүнүүд</p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {innovations.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-[#44403C] bg-[#1C1917] p-8 transition-all hover:border-[#E3000F]"
            >
              <div className="flex items-start gap-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#E3000F]/10 text-[#E3000F]">
                  <item.icon className="h-7 w-7" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm font-medium text-[#E3000F]">{item.subtitle}</p>
                  <p className="mt-4 text-[#A8A29E] leading-relaxed">{item.description}</p>
                  <button className="mt-6 inline-flex items-center text-sm font-medium text-[#E3000F] transition-colors hover:text-white">
                    Дэлгэрэнгүй &rarr;
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
