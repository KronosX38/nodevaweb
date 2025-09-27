"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutCTA() {
  return (
    <section
      aria-labelledby="cta-about"
      className="relative mx-auto mt-16 mb-5 max-w-9xl px-4 sm:px-6 lg:px-8"
    >
      {/* Glow sutil detrás */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-3xl md:h-60 md:w-60" />
      </div>

      <motion.article
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#2a2a2a] to-[#1f1f1f] p-8 text-center shadow-[0_10px_40px_rgba(0,0,0,.35)]"
      >
        <motion.h3
          id="cta-about"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.08, duration: 0.45, ease: "easeOut" }}
          className="text-2xl md:text-3xl font-semibold text-neutral-100"
        >
          En Nodeva conectamos ideas y las convertimos en{" "}
          <span className="text-[#D4AF37]">resultados reales.</span>
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.16, duration: 0.45, ease: "easeOut" }}
          className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-neutral-300"
        >
          Nuestro equipo combina experiencia en consultoría empresarial,
          tecnología y diseño para acompañarte en cada etapa de tu proyecto.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.24, duration: 0.45, ease: "easeOut" }}
          className="mt-6 flex justify-center"
        >
          <motion.div
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 18 }}
          >
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center rounded-xl bg-[#D4AF37] px-6 py-3 text-sm font-medium text-[#242424] transition hover:shadow-[0_8px_24px_rgba(212,175,55,.35)]"
            >
              Solicita más información
            </Link>
          </motion.div>
        </motion.div>
      </motion.article>
    </section>
  );
}
