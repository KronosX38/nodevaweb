"use client";
// app/servicios/finanzas/page.tsx
import ServicePage from "@/components/ServicePage";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  LuCalculator,
  LuBuilding2,
  LuReceipt,
  LuFileCheck,
  LuFileWarning,
  LuShieldCheck,
} from "react-icons/lu";

/* ----------------------------- CTA BANNER ----------------------------- */
function CTAFinanceBanner() {
  return (
    <section id="asesoria" className="relative mx-auto my-16 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#2a2a2a] to-[#1e1e1e]">
        {/* Glow dorado suave */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#D4AF37]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 left-10 h-48 w-48 rounded-full bg-[#D4AF37]/10 blur-2xl" />

        <div className="grid items-center gap-6 p-7 md:grid-cols-[1fr_auto] md:p-10">
          <div>
            <p className="text-[11px] uppercase tracking-widest text-[#D4AF37]">
              Asesoría sin costo
            </p>
            <h3 className="mt-2 text-2xl font-bold text-neutral-50 md:text-3xl">
              ¿Tienes dudas fiscales o quieres ordenar tu contabilidad?
            </h3>
            <p className="mt-2 max-w-2xl text-sm text-neutral-300 md:text-[15px]">
              Agenda una llamada de 20 minutos. Revisamos tu situación,
              te decimos exactamente qué priorizar y te enviamos un plan
              simple para poner todo en orden —sin compromiso.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/contacto"
                className="rounded-xl bg-[#D4AF37] px-5 py-3 text-sm font-semibold text-[#242424] transition hover:opacity-95"
              >
                Solicitar información
              </Link>

              <a
                href={
                  "https://wa.me/529994532800?text=" +
                  encodeURIComponent(
                    "Hola Nodeva 👋 Me interesa una asesoría de finanzas y contabilidad. ¿Podemos agendar una llamada?"
                  )
                }
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-[#D4AF37] px-5 py-3 text-sm font-medium text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-[#242424]"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Mini-listado de valor (lado derecho en desktop) */}
          <div className="hidden justify-self-end rounded-xl border border-white/10 bg-black/10 p-4 md:block">
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>• Diagnóstico express de 20 min</li>
              <li>• Revisión de obligaciones y CFDI 4.0</li>
              <li>• Recomendaciones accionables</li>
              <li>• Sin compromiso</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------ CONTENIDO PRINCIPAL ------------------------ */
export default function Page() {
  const data = {
    eyebrow: "Finanzas & Contabilidad",
    title: "Ordena tus números y toma mejores decisiones",
    subtitle:
      "Apoyamos la contabilidad y la gestión financiera de tu negocio para que tengas claridad, cumplimiento y crecimiento. Trabajamos con procesos simples, reportes útiles y acompañamiento cercano.",
    highlights: [
      {
        icon: <LuBuilding2 className="h-5 w-5 text-[#D4AF37]" />,
        title: "Apertura y formalización",
        desc: "Te guiamos en la constitución y en la definición fiscal y contable desde el día uno.",
      },
      {
        icon: <LuReceipt className="h-5 w-5 text-[#D4AF37]" />,
        title: "Facturación 4.0",
        desc: "Implementamos y operamos tu facturación electrónica (CFDI 4.0) sin fricciones.",
      },
      {
        icon: <LuFileCheck className="h-5 w-5 text-[#D4AF37]" />,
        title: "Cumplimiento al día",
        desc: "Declaraciones mensuales y anuales en tiempo y forma, con evidencia y resguardos.",
      },
      {
        icon: <LuShieldCheck className="h-5 w-5 text-[#D4AF37]" />,
        title: "Corrección ante el SAT",
        desc: "Atención y regularización de créditos fiscales, cartas invitación y requisitos.",
      },
    ],
    features: [
      "Apertura de negocios.",
      "Asesoría fiscal y contable para tu negocio.",
      "Facturación electrónica 4.0.",
      "Declaraciones mensuales y anuales.",
      "Corrección de créditos fiscales ante el SAT.",
      "Auditoría interna.",
    ],
    process: [
      {
        step: "1) Diagnóstico express",
        desc: "Revisamos tu situación actual (contable, fiscal y operativa) y definimos prioridades.",
      },
      {
        step: "2) Plan y regularización",
        desc: "Alineamos la contabilidad, corregimos pendientes y configuramos facturación 4.0.",
      },
      {
        step: "3) Operación mensual",
        desc: "Llevamos contabilidad, nómina y declaraciones puntuales con reportes claros.",
      },
      {
        step: "4) Cierre y mejora",
        desc: "Entregamos cierres, conciliaciones y propuestas de optimización de costos/impuestos.",
      },
    ],
    faqs: [
      {
        q: "¿Pueden regularizar meses atrasados?",
        a: "Sí. Revisamos tu histórico, conciliamos y presentamos complementarias en caso necesario.",
      },
      {
        q: "¿Trabajan con personas físicas y morales?",
        a: "Sí. Atendemos PF y PM, incluyendo regímenes como RESICO, RIF y actividades empresariales.",
      },
      {
        q: "¿Incluyen nómina y timbrado?",
        a: "Podemos operarlo nosotros o trabajar con tu proveedor. Entregamos evidencia y reportes.",
      },
      {
        q: "¿Cómo entregan la información?",
        a: "Tableros y reportes mensuales (PDF/Excel), respaldo de CFDI y conciliaciones.",
      },
    ],
    anchors: [
      { id: "contabilidad", label: "Contabilidad" },
      { id: "nomina", label: "Nómina" },
    ],
    headerIcon: <LuCalculator className="h-10 w-10 text-[#D4AF37]" />,
  };

  return (
    <>
      <ServicePage {...data} />
      <CTABanner
        title="¿Tienes dudas fiscales o quieres ordenar tu contabilidad?"
        subtitle="Agenda una llamada de 20 minutos. Revisamos tu situación, priorizamos acciones y te entregamos un plan simple para poner todo en orden."
        whatsappText="Hola, me interesa una asesoría de Finanzas & Contabilidad. ¿Podemos agendar una llamada?"
        primaryHref="/contacto?servicio=finanzas"
        primaryLabel="Solicitar información"
        bullets={["Diagnóstico express", "Revisión de CFDI 4.0", "Recomendaciones concretas"]}
      />
      <Footer />
    </>
  );
}
