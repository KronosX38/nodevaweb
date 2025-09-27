// components/CTABanner.tsx
"use client";
import Link from "next/link";

type Props = {
  title: string;
  subtitle: string;
  whatsappText: string; // texto precargado para el botón de WhatsApp
  primaryHref?: string; // default: /contacto
  primaryLabel?: string; // default: Solicitar información
  bullets?: string[]; // opcional: mini-listado lateral (desktop)
};

export default function CTABanner({
  title,
  subtitle,
  whatsappText,
  primaryHref = "/contacto",
  primaryLabel = "Solicitar información",
  bullets = ["Asesoría inicial sin costo", "Recomendaciones accionables", "Sin compromiso"],
}: Props) {
  const waUrl =
    "https://wa.me/529994532800?text=" + encodeURIComponent(whatsappText);

  return (
    <section className="relative mx-auto my-16 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#2a2a2a] to-[#1e1e1e]">
        {/* Glow dorado sutil */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#D4AF37]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 left-10 h-48 w-48 rounded-full bg-[#D4AF37]/10 blur-2xl" />

        <div className="grid items-center gap-6 p-7 md:grid-cols-[1fr_auto] md:p-10">
          <div>
            <p className="text-[11px] uppercase tracking-widest text-[#D4AF37]">
              Asesoría sin costo
            </p>
            <h3 className="mt-2 text-2xl font-bold text-neutral-50 md:text-3xl">
              {title}
            </h3>
            <p className="mt-2 max-w-2xl text-sm text-neutral-300 md:text-[15px]">
              {subtitle}
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href={primaryHref}
                className="rounded-xl bg-[#D4AF37] px-5 py-3 text-sm font-semibold text-[#242424] transition hover:opacity-95"
              >
                {primaryLabel}
              </Link>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-[#D4AF37] px-5 py-3 text-sm font-medium text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-[#242424]"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Mini-listado de valor (desktop) */}
          {bullets?.length ? (
            <div className="hidden justify-self-end rounded-xl border border-white/10 bg-black/10 p-4 md:block">
              <ul className="space-y-2 text-sm text-neutral-300">
                {bullets.map((b, i) => (
                  <li key={i}>• {b}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
