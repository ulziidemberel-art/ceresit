"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="w-full bg-[#0C0A09] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-2xl border border-[#44403C] bg-[#1C1917]"
        >
          <div className="grid lg:grid-cols-2">
            <div className="p-8 sm:p-12">
              <h2 className="text-3xl font-bold text-white">Холбоо барих</h2>
              <p className="mt-4 text-[#A8A29E]">
                Бүтээгдэхүүн, үйлчилгээний талаар мэдээлэл авахыг хүсвэл бидэнтэй холбогдоно уу.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E3000F]/10 text-[#E3000F]">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-[#A8A29E]">Утас</p>
                    <p className="font-medium text-white">+976 11 32 1234</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E3000F]/10 text-[#E3000F]">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-[#A8A29E]">Имэйл</p>
                    <p className="font-medium text-white">info@ceresit.mn</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E3000F]/10 text-[#E3000F]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-[#A8A29E]">Хаяг</p>
                    <p className="font-medium text-white">Улаанбаатар, Монгол</p>
                  </div>
                </div>
              </div>

              <a
                href="/contact"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-[#E3000F] px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-[#cc000d]"
              >
                Бүх мэдээлэл
              </a>
            </div>

            <div className="hidden lg:flex items-center justify-center bg-[#292524] p-12">
              <div className="text-center">
                <div className="text-6xl font-bold text-[#44403C]">CERESIT</div>
                <p className="mt-4 text-[#A8A29E]">120 жилийн итгэл</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
