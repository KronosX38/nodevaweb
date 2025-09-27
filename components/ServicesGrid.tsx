"use client";
import { motion } from "framer-motion";
import {
  LuPaintbrush,
  LuGlobe,
  LuChartLine,
  LuLaptop,
  LuUsers,
  LuCloud,
} from "react-icons/lu";

/** Igual que el tuyo — sólo lo moví arriba para mantenerlo claro **/
const SERVICES = [
  { title: "Diseño & Branding", desc: "Identidad visual, logotipo y piezas gráficas.", href: "/servicios/branding", icon: LuPaintbrush },
  { title: "Web & Digital", desc: "Sitios web, e-commerce y optimización/SEO.", href: "/servicios/web", icon: LuGlobe },
  { title: "Desarrollo de Software", desc: "Web Apps / SaaS, Apps móviles e integraciones.", href: "/servicios/software", icon: LuLaptop },
  { title: "Consultoría Empresarial", desc: "Procesos, estrategia, finanzas y emprendedores.", href: "/servicios/consultoria", icon: LuChartLine },
  { title: "Recursos Humanos", desc: "Reclutamiento, capacitación y nómina.", href: "/servicios/rh", icon: LuUsers },
  { title: "Soporte & Nube", desc: "Hosting, SSL, backups, seguridad y mantenimiento.", href: "/servicios/nube", icon: LuCloud },
];

export default function ServicesGrid() {
  return (
    <section
      className="
        relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-18"
    >
      {/* --- Fondos sutiles (no bloquean clicks) --- */}
      {/* Glow dorado esquina superior derecha */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-10%] h-[380px] w-[380px] rounded-full
                   bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.18),rgba(212,175,55,0)_60%)] blur-2xl"
      />
      {/* Glow dorado esquina inferior izquierda */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full
                   bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.12),rgba(212,175,55,0)_60%)] blur-2xl"
      />

      {/* Malla de puntitos muy tenue */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
      >
        <defs>
          <pattern id="dots" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>


      {/* Rombos decorativos en rotación */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        {/* Rombo grande – lento, reversa */}
        <div className=" absolute right-[4%] top-[18%]
      h-[360px] w-[360px] rounded-2xl
      border border-[#D4AF37]/30 bg-transparent
      rotate-45 spin-slow reverse pause-on-hover
      opacity-60
      md:h-[420px] md:w-[420px]
      lg:h-[480px] lg:w-[480px]
    "
        />

        {/* Rombo medio – más lento */}
        <div
          className="
      absolute left-[6%] bottom-[8%]
      h-[300px] w-[300px] rounded-2xl
      border border-[#D4AF37]/20 bg-transparent
      rotate-45 spin-slower pause-on-hover
      opacity-50
      md:h-[340px] md:w-[340px]
      lg:h-[400px] lg:w-[400px]
    "
        />

        {/* Rombito pequeño de acento – sin relleno, más sutil */}
        <div
          className="
      absolute left-[14%] top-[8%]
      h-[120px] w-[120px] rounded-2xl
      border border-[#D4AF37]/25 bg-transparent
      rotate-45 spin-slower reverse pause-on-hover
      opacity-60
      md:h-[140px] md:w-[140px]
    "
        />
      </div>


      {/* Encabezado */}
      <div className="relative">
        <p className="text-xs tracking-[0.18em] text-white/50 uppercase">Servicios</p>
        <h2 className="mt-2 text-2xl md:text-3xl lg:text-4xl font-bold text-white">
          Soluciones que convierten ideas en resultados
        </h2>
      </div>

      {/* Grid con stagger animado */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        className="relative mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {SERVICES.map(({ title, desc, href, icon: Icon }) => (
          <motion.a
            key={title}
            href={href}
            aria-label={title}
            variants={{
              hidden: { opacity: 0, y: 18 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
            }}
            className="
              group relative overflow-hidden isolate rounded-2xl border border-white/10 bg-[#242424]
              p-5 md:p-6 transition duration-300 hover:border-[#D4AF37]/60
            "
          >
            {/* Borde/halo reactivo */}
            <div
              aria-hidden
              className="
                pointer-events-none absolute inset-0 rounded-2xl
                bg-gradient-to-br from-white/0 via-[#D4AF37]/0 to-[#D4AF37]/[0.06]
                opacity-0 transition-opacity duration-300 group-hover:opacity-100
              "
            />

            {/* Línea diagonal suave (detalle) */}
            <div
              aria-hidden
              className="
                pointer-events-none absolute -right-1/2 top-1/2 h-px w-[200%] -rotate-12
                bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0
                transition-opacity duration-300 group-hover:opacity-100
              "
            />

            <div className="relative flex items-start gap-4">
              <div className="rounded-xl border border-[#D4AF37]/30 bg-white/5 p-3">
                <Icon className="h-6 w-6 text-[#D4AF37]" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold text-white">
                  {title}
                </h3>
                <p className="mt-1 text-sm text-neutral-300">
                  {desc}
                </p>
              </div>
            </div>

            <div className="relative mt-4 flex items-center gap-2 text-sm text-[#D4AF37] opacity-90">
              <span>Ver más</span>
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Glow de foco suave al hover */}
            <div
              aria-hidden
              className="
                absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300
                shadow-[0_0_30px_-10px_rgba(212,175,55,0.35)]
              "
            />
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
