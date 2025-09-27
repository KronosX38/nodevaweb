"use client";
// components/CtaSection.tsx
import Image from "next/image";

type Props = {
  title?: string;
  text?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  imageSrc?: string; // default: /cta-team.jpg
};

export default function CtaSection({
  title = "Somos tu mejor aliado tecnológico.",
  text = "Súmate a la era digital con Nodeva. Transformamos ideas en resultados, apostando contigo por la innovación para tu empresa con impacto inmediato.",
  primaryHref = "/contacto",
  primaryLabel = "Cotiza tu proyecto",
  secondaryHref = "https://wa.me/529994532800",
  secondaryLabel = "Enviar mensaje",
  imageSrc = "/cta-team.jpg",
}: Props) {
  return (
    <section className="relative overflow-hidden bg-[#242424] py-16">
      {/* brillos suaves */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-1/4 h-64 w-64 rounded-full bg-[#D4AF37]/5 blur-3xl" />
        <div className="absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 md:flex-row md:gap-12">
        {/* Imagen */}
        <div className="w-full md:w-1/2">
          <div className="relative overflow-hidden rounded-2xl border border-white/10">
            <Image
              src={imageSrc}
              alt="Equipo Nodeva"
              width={1100}
              height={720}
              className="h-full w-full object-cover"
              priority
            />
            {/* borde dorado sutil al hacer hover */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-[#D4AF37]/0 transition duration-300 hover:ring-2 hover:ring-[#D4AF37]/40" />
          </div>
        </div>

        {/* Texto + botones */}
        <div className="w-full text-center md:w-1/2 md:text-left">
          <h2 className="text-3xl font-bold leading-tight text-neutral-100 md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 max-w-xl text-neutral-300">{text}</p>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <a
              href={primaryHref}
              className="inline-flex items-center justify-center rounded-xl bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-[#242424] transition hover:bg-[#c09b2e]"
            >
              {primaryLabel}
            </a>
            <a
              href={secondaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-[#D4AF37] px-6 py-3 text-sm font-semibold text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-[#242424]"
            >
              {secondaryLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
