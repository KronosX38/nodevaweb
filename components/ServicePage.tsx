import { ReactNode } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  MessageSquareMore,
  PhoneCall,
} from "lucide-react";

type Highlight = { icon: ReactNode; title: string; desc: string };
type Step = { step: string; desc: string };
type Faq = { q: string; a: string };

export type ServicePageProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  ctaPrimary?: { href: string; label: string };
  ctaSecondary?: { href: string; label: string };
  highlights?: Highlight[];
  features?: string[];
  process?: Step[];
  faqs?: Faq[];
};

export default function ServicePage({
  eyebrow,
  title,
  subtitle,
  ctaPrimary = { href: "https://wa.me/529994532800", label: "Solicitar información" },
  ctaSecondary = { href: "/contacto", label: "Agendar llamada" },
  highlights = [],
  features = [],
  process = [],
  faqs = [],
}: ServicePageProps) {
  return (
    <main className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* HERO */}
      <section className="mb-14">
        {eyebrow && (
          <span className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-3xl text-neutral-300">{subtitle}</p>
        )}

        <div className="mt-6 flex flex-wrap gap-3">
          {ctaPrimary && (
            <Link
              href={ctaPrimary.href}
              className="inline-flex items-center gap-2 rounded-xl border border-[#D4AF37] px-4 py-2 text-sm font-medium text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-[#242424]"
            >
              {ctaPrimary.label}
              <ArrowRight size={16} />
            </Link>
          )}
          {ctaSecondary && (
            <Link
              href={ctaSecondary.href}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-200 hover:bg-white/10"
            >
              {ctaSecondary.label}
              <PhoneCall size={16} />
            </Link>
          )}
        </div>
      </section>

      {/* HIGHLIGHTS */}
      {highlights.length > 0 && (
        <section className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((h, i) => (
            <article
              key={i}
              className="group rounded-2xl border border-white/10 bg-[#242424] p-5 transition hover:border-[#D4AF37]/50 hover:bg-white/[0.03]"
            >
              <div className="mb-3 text-[#D4AF37]">{h.icon}</div>
              <h3 className="text-base font-semibold text-white">{h.title}</h3>
              <p className="mt-1 text-sm text-neutral-300">{h.desc}</p>
            </article>
          ))}
        </section>
      )}

      {/* FEATURES */}
      {features.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-white">¿Qué incluye?</h2>
          <ul className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {features.map((f, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 flex-none text-[#D4AF37]" size={18} />
                <span className="text-neutral-300">{f}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* PROCESO */}
      {process.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-white">Proceso</h2>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <li
                key={i}
                className="rounded-2xl border border-white/10 bg-[#242424] p-5"
              >
                <div className="text-sm font-semibold text-[#D4AF37]">
                  {p.step}
                </div>
                <p className="mt-1 text-sm text-neutral-300">{p.desc}</p>
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* FAQS */}
      {faqs.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white">Preguntas frecuentes</h2>
          <div className="mt-4 divide-y divide-white/10 rounded-2xl border border-white/10">
            {faqs.map((f, i) => (
              <details
                key={i}
                className="group rounded-2xl p-4 open:bg-white/[0.03]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-left text-sm text-neutral-200">
                  <span>{f.q}</span>
                  <MessageSquareMore
                    size={16}
                    className="text-[#D4AF37] transition group-open:rotate-90"
                  />
                </summary>
                <p className="mt-2 text-sm text-neutral-300">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
