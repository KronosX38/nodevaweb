"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { LuArrowRight, LuChevronLeft, LuChevronRight } from "react-icons/lu";

type CTA = { label: string; href: string; variant?: "primary" | "ghost" };
type Slide = {
  id: number;
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  ctas?: CTA[];
  image: string;            // puede ser "public/hero1.jpg", "/public/hero1.jpg" o "/hero1.jpg"
  objectPosition?: string;  // encuadre fino
};

/** Normaliza rutas que empiezan con "public/" a lo que Next espera */
function resolvePublicSrc(p: string) {
  let s = (p || "").trim();
  if (!s) return s;
  if (!s.startsWith("/")) s = "/" + s;
  s = s.replace(/^\/public(\/|%2F)/i, "/");
  return s;
}

const SLIDES: Slide[] = [
  {
    id: 1,
    badge: "Consultoría ● Desarrollo ● Diseño",
    title: "Somos tu aliado tecnológico\npara llevar tus ideas a resultado.",
    highlight: "aliado tecnológico",
    subtitle: "Sitios web, apps, SaaS e integraciones con enfoque en ROI",
    ctas: [
      { label: "Cotiza tu proyecto", href: "/contacto", variant: "primary" },
      { label: "Conoce Nodeva", href: "/nosotros", variant: "ghost" },
    ],
    image: "public/hero1.jpg",
    objectPosition: "68% 30%",
  },
  {
    id: 2,
    badge: "Recursos Humanos ● Talento ● Outsourcing",
    title: "Recursos humanos\norientados a la productividad.",
    highlight: "productividad",
    subtitle:
      "Reclutamiento, onboarding, nómina y evaluaciones con procesos digitales claros.",
    ctas: [
      { label: "Conócenos", href: "/nosotros", variant: "ghost" },
      { label: "Agenda una cita", href: "/contacto", variant: "primary" },
    ],
    image: "public/hero2.jpg",
    objectPosition: "60% 40%",
  },
  {
    id: 3,
    badge: "Contabilidad ● Finanzas",
    title: "Tu contabilidad,\nsin sorpresas.",
    highlight: "sin sorpresas",
    subtitle:
      "Auditorías, conciliaciones, impuestos y flujo de caja con reportes claros.",
    ctas: [
      { label: "Ver servicios de Finanzas", href: "/servicios", variant: "ghost" },
      { label: "Cotizar ahora", href: "/contacto", variant: "primary" },
    ],
    image: "public/hero3.jpg",
    objectPosition: "55% 35%",
  },
];

export default function Hero() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<number | null>(null);
  const [width, setWidth] = useState(0);
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const prefersReduced = useReducedMotion();

  // medir ancho visible para animar el track en píxeles
  useEffect(() => {
    const update = () =>
      setWidth(viewportRef.current?.clientWidth ?? window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const goTo = (idx: number) => setI((idx + SLIDES.length) % SLIDES.length);
  const next = () => goTo(i + 1);
  const prev = () => goTo(i - 1);

  // Navegación con teclas ← →
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [i]);

  // Autoplay 6s con pausa en hover/touch/hidden tab
  const AUTO_MS = 6000;
  useEffect(() => {
    const clear = () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };

    if (!prefersReduced && !paused) {
      clear();
      timerRef.current = window.setTimeout(next, AUTO_MS);
    }

    return clear;
  }, [i, paused, prefersReduced]);

  useEffect(() => {
    const onVis = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  const transition = prefersReduced
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 120, damping: 20 };

  const w = Math.max(1, width);

  return (
    <section
      className="relative h-[100svh] w-full overflow-hidden bg-[#1E1F26] text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      <div ref={viewportRef} className="relative h-full w-full overflow-hidden">
        {/* TRACK horizontal */}
        <motion.div
          className="flex h-full"
          animate={{ x: -i * w }}
          transition={transition}
          style={{ width: w * SLIDES.length }}
        >
          {SLIDES.map((s, idx) => (
            <div key={s.id} className="relative grid h-full" style={{ width: w }}>
              <div className="relative z-10 mx-auto grid h-full w-full max-w-7xl grid-cols-1 gap-6 px-6 md:grid-cols-[minmax(0,1fr)_minmax(520px,48%)] md:px-8">
                {/* TEXTO IZQUIERDA */}
                <div className="order-2 md:order-1 flex items-start md:items-center">
                  <div className="max-w-2xl">
                    {!!s.badge && (
                      <span className="inline-block rounded-3xl border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-neutral-200">
                        {s.badge}
                      </span>
                    )}

                    <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                      {s.title.split("\n").map((line, j) => (
                        <span key={j} className="block">
                          {s.highlight
                            ? line.split(s.highlight).map((chunk, k, arr) => (
                              <span key={k}>
                                {chunk}
                                {k < arr.length - 1 && (
                                  <span className="text-[#D4AF37]">
                                    {s.highlight}
                                  </span>
                                )}
                              </span>
                            ))
                            : line}
                        </span>
                      ))}
                    </h1>

                    {!!s.subtitle && (
                      <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-300">
                        {s.subtitle}
                      </p>
                    )}

                    {!!s.ctas?.length && (
                      <div className="mt-8 flex flex-wrap gap-3">
                        {s.ctas.map((c) => (
                          <a
                            key={c.href}
                            href={c.href}
                            className={[
                              "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition",
                              c.variant === "primary"
                                ? "bg-[#D4AF37] text-[#242424] hover:opacity-90"
                                : "border border-white/15 bg-white/5 text-white hover:bg-white/10",
                            ].join(" ")}
                          >
                            {c.label}
                            {c.variant === "primary" && (
                              <LuArrowRight className="ml-2 h-4 w-4" />
                            )}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* IMAGEN DERECHA — visible también en mobile */}
                <div className="order-1 md:order-2 relative flex items-start">
                  <div
                    className="
                     relative md:ml-auto h-[42vh] w-full overflow-hidden rounded-[10px] z-[1]
                    sm:h-[48vh] md:h-[78%] md:min-w-[520px]"
                  >
                    <Image
                      src={resolvePublicSrc(s.image)}
                      alt=""
                      fill
                      priority={idx === 0}
                      className="object-cover"
                      sizes="(min-width:1280px) 48vw, 100vw"
                      style={{
                        objectPosition: s.objectPosition ?? "50% 50%",
                        // polígono con “mordida” lateral
                        clipPath:
                          "polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%)",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* CONTROLES + contador de 6s */}
        <div className="pointer-events-none absolute inset-x-0 bottom-6 z-20 mx-auto hidden max-w-7xl items-center justify-end gap-4 px-6 sm:flex">
          {/* barra de progreso */}
          <div className="pointer-events-none hidden h-1 w-40 overflow-hidden rounded-full bg-white/10 sm:block">
            {/* animación reinicia al cambiar de slide */}
            <motion.div
              key={i + (paused ? "-p" : "-r")}
              className="h-full bg-[#D4AF37]"
              initial={{ width: "0%" }}
              animate={{ width: paused || prefersReduced ? "0%" : "100%" }}
              transition={{ duration: 6, ease: "linear" }}
            />
          </div>

          {/* flechas */}
          <div className="pointer-events-auto flex gap-2">
            <button
              onClick={prev}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 backdrop-blur transition hover:bg-white/10"
              aria-label="Anterior"
            >
              <LuChevronLeft />
            </button>
            <button
              onClick={next}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 backdrop-blur transition hover:bg-white/10"
              aria-label="Siguiente"
            >
              <LuChevronRight />
            </button>
          </div>
        </div>
      </div>

      {/* Separador inferior */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-b from-transparent to-[#242424]" />
    </section>
  );
}
