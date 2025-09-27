"use client";
import Image from "next/image";
import { LuArrowRight, LuShieldCheck, LuSparkles, LuRocket } from "react-icons/lu";

export default function Hero() {
  return (
    <section className="relative isolate">
      {/* Fondo: imagen + overlay de color */}
      <div className="absolute inset-0 -z-10">
        {/* Imagen de fondo (cover) */}
        <Image
          src="/hero.jpg"
          alt="Tecnología y desarrollo Nodeva"
          fill
          priority
          className="object-cover"
        />
        {/* Degradado oscuro para legibilidad */}
        <div className="absolute overflow-hidden inset-0 bg-[#0b0b0b]/55" />
        {/* Barrido/gradiente sutil con el dorado */}
        <div className="absolute overflow-hidden isolate inset-0 bg-gradient-to-tr from-[#0b0b0b]/40 via-transparent to-[#D4AF37]/10" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[72svh] items-center py-20 sm:py-28">
          <div className="max-w-2xl">
            {/* Supertexto */}
            <p className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-neutral-200">
              Consultoría • Desarrollo • Diseño
            </p>

            {/* Título principal */}
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Somos tu <span className="text-[#D4AF37]">aliado tecnológico</span>
              <br className="hidden sm:block" /> para llevar tus ideas a resultados.
            </h1>

            {/* Subtítulo */}
            <p className="mt-4 max-w-xl text-neutral-300 leading-relaxed">
              Soluciones digitales a la medida: sitios web, apps móviles, web apps/SaaS,
              integraciones y consultoría empresarial con enfoque en ROI.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="/contacto"
                className="inline-flex items-center gap-2 rounded-xl bg-[#D4AF37] px-5 py-3 text-sm font-semibold text-[#242424] transition hover:opacity-90"
              >
                Cotiza tu proyecto
                <LuArrowRight className="h-4 w-4" />
              </a>

              <a
                href="/nosotros"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Conoce Nodeva
              </a>
            </div>

            {/* Bullets de confianza */}
            <div className="mt-6 grid grid-cols-1 gap-3 text-sm text-neutral-200 sm:grid-cols-3">
              <div className="flex items-center gap-2">
                <LuShieldCheck className="h-4 w-4 text-[#D4AF37]" />
                <span>Contratos claros & soporte</span>
              </div>
              <div className="flex items-center gap-2">
                <LuRocket className="h-4 w-4 text-[#D4AF37]" />
                <span>Entrega por etapas (MVP)</span>
              </div>
              <div className="flex items-center gap-2">
                <LuSparkles className="h-4 w-4 text-[#D4AF37]" />
                <span>Diseño limpio y optimizado</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sombra inferior suave para separar del siguiente bloque */}
      <div className="pointer-events-none absolute overflow-hidden inset-x-0 bottom-0 h-10 bg-gradient-to-b from-transparent to-[#242424]" />
    </section>
  );
}
