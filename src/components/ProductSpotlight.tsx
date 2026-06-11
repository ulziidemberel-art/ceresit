"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const products = [
  {
    name: "CT 17",
    description: "Универсал грунт - Плитаны наалдамж сайжруулагч",
    tag: "ШИНЭ",
  },
  {
    name: "Fibre Force",
    description: "Шалны бэхжүүлэгч - Арматуртай систем",
    tag: "ИННОВАЦИ",
  },
  {
    name: "CE 60",
    description: "Цементэн суурь - Өндөр бат бэх чанар",
    tag: "ТОП БОРЛУУЛАЛТ",
  },
];

export default function ProductSpotlight() {
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
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Онцлох бүтээгдэхүүн
          </h2>
          <p className="mt-4 text-lg text-[#A8A29E]">
            Хамгийн өргөн хэрэглэгддэг, өндөр чанартай бүтээгдэхүүнүүд
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-[#44403C] bg-[#1C1917] p-6 transition-all hover:border-[#E3000F]"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center rounded-full bg-[#E3000F]/10 px-3 py-1 text-xs font-medium text-[#E3000F]">
                  {product.tag}
                </span>
                <ArrowRight className="h-5 w-5 text-[#A8A29E] transition-transform group-hover:translate-x-1 group-hover:text-white" />
              </div>
              <h3 className="mt-4 text-2xl font-bold text-white">{product.name}</h3>
              <p className="mt-2 text-[#A8A29E]">{product.description}</p>
              <div className="mt-6 h-32 rounded-xl bg-[#292524] flex items-center justify-center">
                <div className="text-4xl font-bold text-[#44403C]">{product.name}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
