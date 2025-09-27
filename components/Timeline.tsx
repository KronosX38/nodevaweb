"use client";

import { motion } from "framer-motion";
import { LuRocket, LuHandshake, LuTrendingUp } from "react-icons/lu";

type Milestone = {
  id: string;
  date: string;
  title: string;
  desc: string;
  icon?: React.ReactNode;
};

const MILESTONES: Milestone[] = [
  {
    id: "2023",
    date: "2023",
    title: "Nace Nodeva",
    desc:
      "Iniciamos operaciones uniendo diseño, desarrollo y consultoría para emprendedores y empresas.",
    icon: <LuRocket className="h-4 w-4" />,
  },
  {
    id: "2024",
    date: "2024",
    title: "Primeros clientes y casos de éxito",
    desc:
      "Entregamos nuestras primeras soluciones digitales y de gestión, combinando tecnología con procesos claros y soporte cercano.",
    icon: <LuHandshake className="h-4 w-4" />,
  },
  {
    id: "2025",
    date: "2025",
    title: "Rebranding y lanzamiento del nuevo sitio",
    desc:
      "Lanzamos nuestro nuevo sitio y ampliamos la oferta: consultoría empresarial, marketing, RRHH y finanzas junto a soluciones digitales.",
    icon: <LuTrendingUp className="h-4 w-4" />,
  },
];

export default function Timeline() {
  return (
    <section id="historia" className="relative py-20 overflow-hidden">
      {/* decorativos sutiles */}
      <div
        aria-hidden
        className=" pointer-events-none absolute -left-24 top-12 h-72 w-72 rotate-45 rounded-[2rem] border border-white/10 opacity-20"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-8 h-80 w-80 rotate-45 rounded-[2rem] border border-[#D4AF37]/25 opacity-20"
      />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-xs tracking-[0.25em] text-neutral-400">HISTORIA</p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-50 md:text-4xl">
            Nuestro recorrido
          </h2>
          <p className="mt-3 max-w-prose text-neutral-300">
            Dos años construyendo soluciones con intención y resultados
            medibles. Así hemos evolucionado.
          </p>
        </div>

        {/* línea vertical */}
        <div className="relative pl-6 md:pl-0">
          <div
            aria-hidden
            className="absolute left-[14px] top-0 h-full w-[2px] bg-gradient-to-b from-[#D4AF37]/60 via-white/10 to-transparent md:left-1/2"
          />

          <div className="space-y-10 md:space-y-14">
            {MILESTONES.map((m, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative md:grid md:grid-cols-2 md:items-center"
                >
                  {/* punto */}
                  <span
                    aria-hidden
                    className="absolute left-[6px] z-10 inline-flex h-3 w-3 items-center justify-center rounded-full bg-[#D4AF37] md:left-1/2 md:-translate-x-1/2"
                  >
                    <span className="inline-block h-4 w-4 rounded-full bg-[#D4AF37]" />
                  </span>

                  {/* tarjeta */}
                  <div
                    className={[
                      "mt-4 md:mt-0",
                      "md:pr-10",
                      isLeft ? "md:col-start-1 md:justify-self-end" : "md:col-start-2 md:justify-self-start md:pl-10",
                      "w-full md:max-w-[85%]",
                    ].join(" ")}
                  >
                    <article className="group relative isolate rounded-xl border border-white/10 bg-[#242424] p-5 shadow-sm transition-colors duration-300 hover:border-[#D4AF37]/50">
                      {/* glow suave */}
                      <span
                        aria-hidden
                        className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        style={{
                          background:
                            "radial-gradient(500px 160px at 0% 0%, rgba(212,175,55,0.06), transparent 60%)",
                        }}
                      />

                      <div className="flex items-start gap-3">
                        <div className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#D4AF37]">
                          {m.icon}
                        </div>
                        <div>
                          <p className="text-xs font-medium tracking-wide text-[#D4AF37]">
                            {m.date}
                          </p>
                          <h3 className="text-base font-semibold text-neutral-100">
                            {m.title}
                          </h3>
                          <p className="mt-1 text-sm leading-relaxed text-neutral-300">
                            {m.desc}
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
