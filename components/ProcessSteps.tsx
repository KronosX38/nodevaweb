"use client";
import { motion } from "framer-motion";
import { LuLightbulb, LuPencilRuler, LuCode, LuRocket } from "react-icons/lu";

const STEPS = [
  {
    title: "Descubrimiento",
    desc: "Entendemos objetivos, usuarios y alcances. Definimos KPIs y prioridades del proyecto.",
    Icon: LuLightbulb,
  },
  {
    title: "Diseño",
    desc: "Arquitectura de información, UX/UI y prototipos. Validamos la experiencia con tu equipo.",
    Icon: LuPencilRuler,
  },
  {
    title: "Desarrollo",
    desc: "Implementación ágil por sprints. Integraciones, seguridad y pruebas automatizadas.",
    Icon: LuCode,
  },
  {
    title: "Despliegue & Soporte",
    desc: "Publicación, monitoreo y mejoras continuas. Mantenimiento y evolución basada en métricas.",
    Icon: LuRocket,
  },
];

export default function ProcessSteps() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      {/* Fondo sutil */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full
                   bg-[radial-gradient(closest-side,rgba(212,175,55,0.10),transparent_70%)]
                   blur-2xl -z-10"
      />

      <header className="mb-10 md:mb-14">
        <p className="text-xs uppercase tracking-[0.18em] text-white/50">Proceso</p>
        <h2 className="mt-2 text-2xl md:text-3xl lg:text-4xl font-bold text-white">
          Así llevamos tus ideas a resultados
        </h2>
      </header>

      {/* Grid de pasos */}
      <motion.ol
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {/* Línea conectora para desktop */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-0 right-0 top-12 hidden h-px lg:block
                     bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent"
        />

        {STEPS.map(({ title, desc, Icon }, i) => (
          <motion.li
            key={title}
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
            }}
            className="relative"
          >
            {/* Nodo conector (desktop) */}
            <div
              aria-hidden
              className="absolute left-1/2 top-10 hidden -translate-x-1/2 lg:block"
            >
             
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#242424] p-6 h-full">
              <div className="flex items-start gap-4">
                <div className="rounded-xl border border-[#D4AF37]/30 bg-white/5 p-3 text-[#D4AF37] shrink-0">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-lg border border-white/15 text-xs text-white/80">
                      {i + 1}
                    </span>
                    <h3 className="text-base md:text-lg font-semibold text-white whitespace-normal break-words">
                      {title}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                    {desc}
                  </p>
                </div>
              </div>
            </div>
          </motion.li>
        ))}
      </motion.ol>
    </section>
  );
}
