"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  LuPalette,
  LuGlobe,
  LuLaptop,
  LuArmchair,
  LuUsers,
  LuCloud,
  LuCalculator, // NEW: icono para Finanzas
} from "react-icons/lu";

// ---- Configuración de servicios (categoría -> landing; opcionalmente 1–2 “deep links”) ----
const SERVICES: Array<{
  title: string;
  href: string;
  desc?: string;
  icon: React.ReactNode;
  items?: { label: string; href: string }[];
}> = [
  {
    title: "Diseño & Branding",
    href: "/servicios/branding",
    desc: "Identidad, logotipo y piezas gráficas.",
    icon: <LuPalette className="h-4 w-4 text-[#D4AF37]" />,
    items: [
      { label: "Logotipo", href: "/servicios/branding#logotipo" },
      { label: "Manual de marca", href: "/servicios/branding#manual" },
    ],
  },
  {
    title: "Web & Digital",
    href: "/servicios/web",
    desc: "Sitios, e-commerce y SEO.",
    icon: <LuGlobe className="h-4 w-4 text-[#D4AF37]" />,
    items: [
      { label: "Sitios Web", href: "/servicios/web#sitios" },
      { label: "SEO", href: "/servicios/web#seo" },
    ],
  },
  {
    title: "Desarrollo de Software",
    href: "/servicios/software",
    desc: "Web apps, móviles e integraciones.",
    icon: <LuLaptop className="h-4 w-4 text-[#D4AF37]" />,
  },
  {
    title: "Consultoría Empresarial",
    href: "/servicios/consultoria",
    desc: "Procesos, estrategia y finanzas.",
    icon: <LuArmchair className="h-4 w-4 text-[#D4AF37]" />,
  },
  // NEW: bloque propio para Finanzas
  {
    title: "Finanzas & Contabilidad",
    href: "/servicios/finanzas",
    desc: "Contabilidad, nómina, fiscal y BI financiero.",
    icon: <LuCalculator className="h-4 w-4 text-[#D4AF37]" />,
    items: [
      { label: "Contabilidad", href: "/servicios/finanzas#contabilidad" },
      { label: "Nómina", href: "/servicios/finanzas#nomina" },
    ],
  },
  {
    title: "Recursos Humanos",
    href: "/servicios/rh",
    desc: "Reclutamiento, capacitación y nómina.",
    icon: <LuUsers className="h-4 w-4 text-[#D4AF37]" />,
  },
  {
    title: "Soporte & Nube",
    href: "/servicios/nube",
    desc: "Hosting, seguridad y mantenimiento.",
    icon: <LuCloud className="h-4 w-4 text-[#D4AF37]" />,
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);
  const hoverTimer = useRef<NodeJS.Timeout | null>(null);

  const openServices = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    setServicesOpen(true);
  };
  const closeServicesDelayed = (ms = 220) => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setServicesOpen(false), ms);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        megaRef.current &&
        !megaRef.current.contains(e.target as Node) &&
        (e.target as Element)?.closest("#services-trigger") === null
      ) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled
          ? "bg-[#242424]/85 backdrop-blur border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/nodeva_bco.svg"
              alt="Nodeva"
              className="hidden h-10 w-auto sm:block"
            />
            <img
              src="/nodeva_mov.svg"
              alt="Nodeva"
              className="h-8 w-auto sm:hidden"
            />
          </Link>

          {/* Nav desktop */}
          <nav className="hidden items-center gap-7 md:flex">
            <Link href="/" className="text-sm text-neutral-200 hover:text-[#D4AF37]">
              Inicio
            </Link>

            {/* Servicios con mega-menú */}
            <div
              className="relative"
              onMouseEnter={openServices}
              onMouseLeave={() => closeServicesDelayed()}
            >
              <button
                id="services-trigger"
                className="text-sm text-neutral-200 hover:text-[#D4AF37]"
                onFocus={openServices}
                aria-haspopup="true"
                aria-expanded={servicesOpen}
              >
                Servicios
              </button>

              {servicesOpen && (
                <div
                  ref={megaRef}
                  className="absolute left-1/2 z-50 mt-2 -translate-x-1/2 w-[94vw] max-w-[1000px]"
                  onMouseEnter={openServices}
                  onMouseLeave={() => closeServicesDelayed()}
                >
                  <div className="absolute -top-2 left-0 right-0 h-3" />
                  <div className="grid grid-cols-1 gap-6 rounded-2xl border border-white/10 bg-[#242424] p-6 shadow-2xl sm:grid-cols-2 lg:grid-cols-3">
                    {SERVICES.map((col) => (
                      <div key={col.title}>
                        {/* Título + ícono → link a landing */}
                        <Link
                          href={col.href}
                          className="group flex items-center gap-2 text-[13px] sm:text-sm font-semibold leading-5 text-neutral-100 hover:text-[#D4AF37]"
                          onClick={() => setServicesOpen(false)}
                        >
                          <span className="shrink-0">{col.icon}</span>
                          <span>{col.title}</span>
                        </Link>

                        {/* Descripción */}
                        {col.desc && (
                          <p className="mt-1 text-xs text-neutral-400">
                            {col.desc}
                          </p>
                        )}

                        {/* Deep-links (chips) */}
                        {!!col.items?.length && (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {col.items.slice(0, 2).map((it) => (
                              <Link
                                key={it.label}
                                href={it.href}
                                className="rounded-lg border border-white/10 px-2 py-1 text-xs text-neutral-300 hover:border-[#D4AF37]/50 hover:text-[#D4AF37]"
                                onClick={() => setServicesOpen(false)}
                              >
                                {it.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/nosotros" className="text-sm text-neutral-200 hover:text-[#D4AF37]">
              Nosotros
            </Link>
           
            <Link href="/contacto" className="text-sm text-neutral-200 hover:text-[#D4AF37]">
              Contáctanos
            </Link>
          </nav>

          {/* CTA WhatsApp (externo) */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/529994532800"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-[#D4AF37] px-4 py-2 text-sm font-medium text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-[#242424]"
            >
              WhatsApp
            </a>
          </div>

          {/* Hamburguesa */}
          <button
            className="inline-flex items-center justify-center rounded-lg p-2 text-neutral-200 md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Abrir menú"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {mobileOpen && (
        <div className="md:hidden">
          <div className="mx-3 mb-3 rounded-2xl border border-white/10 bg-[#242424] p-3">
            <Link
              href="/"
              className="block rounded-lg px-3 py-2 text-sm text-neutral-200 hover:bg:white/5 hover:bg-white/5"
              onClick={() => setMobileOpen(false)}
            >
              Inicio
            </Link>

            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between rounded-lg px-3 py-2 text-sm text-neutral-200 hover:bg-white/5">
                <span>Servicios</span>
                <svg className="transition group-open:rotate-180" width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>

              {/* Categorías + deep-links (chips) */}
              <div className="mt-1 space-y-2 rounded-lg bg-white/5 p-2">
                {SERVICES.map((col) => (
                  <div key={col.title} className="px-1">
                    <Link
                      href={col.href}
                      className="flex items-center gap-2 rounded-md px-3 py-1.5 text-sm text-neutral-200 hover:bg-white/10"
                      onClick={() => setMobileOpen(false)}
                    >
                      <span className="shrink-0 text-[#D4AF37]">{col.icon}</span>
                      <span>{col.title}</span>
                    </Link>

                    {!!col.items?.length && (
                      <div className="mt-1 flex flex-wrap gap-2 px-3 pb-1">
                        {col.items.slice(0, 2).map((it) => (
                          <Link
                            key={it.label}
                            href={it.href}
                            className="rounded border border-white/10 px-2 py-0.5 text-xs text-neutral-300 hover:bg-white/10"
                            onClick={() => setMobileOpen(false)}
                          >
                            {it.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </details>

            <Link
              href="/nosotros"
              className="mt-1 block rounded-lg px-3 py-2 text-sm text-neutral-200 hover:bg-white/5"
              onClick={() => setMobileOpen(false)}
            >
              Nosotros
            </Link>
            {/* REEMPLAZA Blog → Finanzas */}
            <Link
              href="/servicios/finanzas"
              className="block rounded-lg px-3 py-2 text-sm text-neutral-200 hover:bg-white/5"
              onClick={() => setMobileOpen(false)}
            >
              Finanzas
            </Link>
            <Link
              href="/contacto"
              className="block rounded-lg px-3 py-2 text-sm text-neutral-200 hover:bg-white/5"
              onClick={() => setMobileOpen(false)}
            >
              Contáctanos
            </Link>

            <a
              href="https://wa.me/529994532800"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block rounded-xl border border-[#D4AF37] px-4 py-2 text-center text-sm font-medium text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#242424]"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
