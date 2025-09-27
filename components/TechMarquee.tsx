"use client";

import { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiAmazon,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiDocker,
  SiGit,
  SiVercel,
} from "react-icons/si";

type Tech = { name: string; Icon: IconType };

const TECHS: Tech[] = [
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "React", Icon: SiReact },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Tailwind", Icon: SiTailwindcss },
  { name: "AWS", Icon: SiAmazon },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "MySQL", Icon: SiMysql },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "Firebase", Icon: SiFirebase },
  { name: "Docker", Icon: SiDocker },
  { name: "Git", Icon: SiGit },
  { name: "Vercel", Icon: SiVercel },
];

function TechBadge({ name, Icon }: Tech) {
  return (
    <div
      className="
        group/badge relative inline-flex items-center gap-2 rounded-xl
        border border-white/10 bg-white/[0.035] px-4 py-2
        text-neutral-200 transition
        hover:border-[#D4AF37]/60 hover:bg-[#D4AF37]/10
      "
      title={name}
    >
      <Icon
        className="
          h-5 w-5 text-neutral-300 transition-transform
          group-hover/badge:scale-110 group-hover/badge:text-[#D4AF37]
        "
      />
      <span className="text-sm">{name}</span>
    </div>
  );
}

export default function TechMarquee() {
  // Duplicamos la lista para un loop perfecto (ancho total ≈ 200%)
  const track = [...TECHS, ...TECHS];

  return (
    <section
      aria-label="Tecnologías que dominamos"
      className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12"
    >
      {/* Fondo suave */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-3xl" />
      </div>

      <div className="mb-5 text-center">
        <p className="text-xs tracking-[0.25em] text-neutral-400">TECNOLOGÍAS</p>
        <h3 className="mt-1 text-xl md:text-2xl font-semibold text-white">
          Stack moderno para resultados reales
        </h3>
      </div>

      {/* Viewport */}
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] py-6">
        {/* Track animado: pausa al hover con arbitrary style */}
        <div
          className="
            tech-track group flex w-[200%] items-center gap-6
            animate-[marquee_28s_linear_infinite]
            hover:[animation-play-state:paused]
          "
        >
          {track.map((t, i) => (
            <TechBadge key={`${t.name}-${i}`} {...t} />
          ))}
        </div>
      </div>

      {/* Nota: en móviles la pausa por hover no aplica (no hay hover), pero el efecto sigue suave */}
    </section>
  );
}
