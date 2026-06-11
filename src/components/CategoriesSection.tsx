"use client";

import { motion } from "framer-motion";
import { Grid3X3, Layers, Droplets, Paintbrush, Square, Shield, Box, Workflow } from "lucide-react";

const categories = [
  { name: "Плита", icon: Grid3X3, description: "Плитаны наалдамж, өнгөлгөө, хөөмөлгөө" },
  { name: "Фасад", icon: Layers, description: "Гадна фасадны дулаалга, өнгөлгөө" },
  { name: "Ус тусгаарлах", icon: Droplets, description: "Ус нэвтрүүлэхгүй бүрээс, тусгаарлагч" },
  { name: "Дотор засал", icon: Paintbrush, description: "Дотор өнгөлгөө, шавар, будаг" },
  { name: "Шал", icon: Square, description: "Шалны суурь, өнгөлгөө, бэхжүүлэгч" },
  { name: "Ус нэвтрүүлэхгүй", icon: Shield, description: "Ус нэвтрүүлэхгүй бүрээс, битүүмжлэл" },
  { name: "Зуурмаг", icon: Box, description: "Барилгын зуурмаг, бэхжүүлэгч нэмэлт" },
  { name: "Систем", icon: Workflow, description: "Бүтэн шийдэл, системийн багц" },
];

export default function CategoriesSection() {
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
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Бүтээгдэхүүний ангилал</h2>
          <p className="mt-4 text-lg text-[#A8A29E]">Барилгын бүх шатны шийдлүүд</p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group flex flex-col items-center rounded-2xl border border-[#44403C] bg-[#1C1917] p-6 text-center transition-all hover:border-[#E3000F] hover:bg-[#292524]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E3000F]/10 text-[#E3000F] transition-colors group-hover:bg-[#E3000F] group-hover:text-white">
                <cat.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{cat.name}</h3>
              <p className="mt-2 text-sm text-[#A8A29E]">{cat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
