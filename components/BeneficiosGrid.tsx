"use client";

import { LuSearch, LuUsers, LuTrendingUp, LuShieldCheck } from "react-icons/lu";
import clsx from "clsx";

type Benefit = {
  title: string;
  text: string;
  icon: React.ReactNode;
};

const BENEFITS: Benefit[] = [
  {
    title: "Exploramos opciones, no suposiciones",
    text:
      "Investigamos y comparamos caminos para resolver tus necesidades antes de construir.",
    icon: <LuSearch size={22} />,
  },
  {
    title: "Tomas mejores decisiones",
    text:
      "Te acompañamos con la asesoría adecuada para decidir con claridad y menor riesgo.",
    icon: <LuUsers size={22} />,
  },
  {
    title: "Planeación que evita retrabajos",
    text:
      "Arquitectura y estrategia para ejecutar con foco, reducir errores y acelerar resultados.",
    icon: <LuTrendingUp size={22} />,
  },
  {
    title: "Código y producto tuyos",
    text:
      "Entregamos código fuente y procesos, con mantenimiento y evolución medible.",
    icon: <LuShieldCheck size={22} />,
  },
];

export default function BeneficiosGrid() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      {/* decor: rombo + glow */}
      <div className="pointer-events-none absolute inset-0 overflow-visible">
        {/* rombo arriba-izq */}
        <div className="absolute -left-6 -top-6 hidden md:block">
          <div className="h-40 w-40 rotate-45 rounded-2xl border border-white/10" />
        </div>
        {/* rombo abajo-der */}
        <div className="absolute -right-10 bottom-10 hidden md:block">
          <div className="h-56 w-56 rotate-45 rounded-3xl border border-[#D4AF37]/25" />
        </div>
        {/* glow sutil a la derecha */}
        <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-[#D4AF37]/5 blur-[70px]" />
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.05fr,1.95fr] items-start">
        {/* Columna izquierda: título + texto */}
        <div className="relative">
          <div className="text-xs tracking-[0.25em] text-neutral-400 mb-3">
            BENEFICIOS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Beneficios de trabajar con <span className="text-[#D4AF37]">Nodeva</span>
          </h2>
          <p className="mt-4 text-neutral-300/90 max-w-prose">
            Somos una consultora y estudio de software que combina{" "}
            <span className="text-white">tecnología</span>,{" "}
            <span className="text-white">diseño</span> y{" "}
            <span className="text-white">consultoría</span> para llevar tus ideas a
            resultados medibles. Decidimos contigo, planificamos con intención y
            ejecutamos con calidad.
          </p>
        </div>

        {/* Columna derecha: cards 2×2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BENEFITS.map((b, i) => (
            <Card key={i} {...b} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ title, text, icon }: Benefit) {
return (
    <article
      className={clsx(
        "group relative overflow-hidden rounded-2xl border border-white/10 bg-[#242424] p-6",
        "transition-all duration-500 ease-out motion-reduce:transition-none",
        "hover:border-transparent hover:shadow-[0_12px_50px_-10px_rgba(212,175,55,0.45)] motion-safe:hover:-translate-y-0.5"
      )}
    >
      {/* Capa dorada que se *activa* en hover */}
      <span
        aria-hidden
        className={clsx(
          "pointer-events-none absolute inset-0 -z-10 opacity-0",
          "bg-gradient-to-br from-[#E2C157] via-[#D4AF37] to-[#B68E1F]",
          "transition-opacity duration-500 ease-out group-hover:opacity-100"
        )}
      />

      {/* Icono */}
      <div
        className={clsx(
          "mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl",
          "border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#D4AF37]",
          "transition-all duration-500 ease-out",
          // En hover: icono oscuro sobre fondo dorado
          "group-hover:bg-white/30 group-hover:text-[#242424] group-hover:border-white/30"
        )}
      >
        {icon}
      </div>

      {/* Título */}
      <h3
        className={clsx(
          "text-lg font-semibold tracking-tight",
          "text-neutral-100 transition-colors duration-300 ease-out",
          "group-hover:text-[#242424]"
        )}
      >
        {title}
      </h3>

      {/* Texto */}
      <p
        className={clsx(
          "mt-2 text-[15px] leading-relaxed",
          "text-neutral-300 transition-colors duration-300 ease-out",
          "group-hover:text-[#1f1f1f]"
        )}
      >
        {text}
      </p>

    </article>
  );
}
