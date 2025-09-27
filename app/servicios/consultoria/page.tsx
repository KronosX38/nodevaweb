"use client";
import { Briefcase, LineChart, Users2, ClipboardCheck } from "lucide-react";
import ServicePage from "@/components/ServicePage";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <ServicePage
        eyebrow="Consultoría Empresarial"
        title="Procesos, estrategia y finanzas con foco en resultados"
        subtitle="Te ayudamos a priorizar, diseñar procesos y tomar decisiones con datos. Desde estrategia y operación, hasta finanzas y gobierno, ejecutamos contigo para que el negocio avance."
        highlights={[
          {
            icon: <Briefcase />,
            title: "Estrategia & OKRs",
            desc: "Aterrizamos objetivos y un roadmap accionable por trimestres.",
          },
          {
            icon: <LineChart />,
            title: "Procesos & métricas",
            desc: "Diseño de procesos clave, dashboards simples y KPIs que importan.",
          },
          {
            icon: <Users2 />,
            title: "Equipos y roles",
            desc: "Definimos responsabilidades, perfiles y flujos de colaboración.",
          },
          {
            icon: <ClipboardCheck />,
            title: "Ejecutivo y hands-on",
            desc: "No solo asesoramos: acompañamos la ejecución por sprints.",
          },
        ]}
        features={[
          "Diagnóstico express y priorización",
          "Mapa de procesos y RACI",
          "Finanzas operativas (flujo, costos, pricing)",
          "Tablero ejecutivo y rituales de seguimiento",
          "Acompañamiento semanal por sprints",
        ]}
        process={[
          { step: "1. Diagnóstico", desc: "Entrevistas, datos clave y mapa actual." },
          { step: "2. Prioridad", desc: "Backlog de iniciativas y quick wins." },
          { step: "3. Diseño", desc: "Procesos, tableros y rituales." },
          { step: "4. Ejecución", desc: "Sprints, métricas y evolución continua." },
        ]}
        faqs={[
          {
            q: "¿Pueden apoyar solo en finanzas?",
            a: "Sí, hacemos módulos específicos: flujo, costos, pricing, forecast y tableros.",
          },
          {
            q: "¿Trabajan remoto o presencial?",
            a: "Principalmente remoto. Podemos programar sesiones presenciales clave.",
          },
        ]}
      />
      <CTABanner
        title="Toma mejores decisiones con expertos a tu lado"
        subtitle="Estrategia, procesos y finanzas con foco en resultados. Alineamos prioridades y ejecutamos contigo."
        whatsappText="Hola, quiero agendar una asesoría de Consultoría Empresarial."
        primaryHref="/contacto?servicio=consultoria"
        bullets={["Diagnóstico 360°", "Roadmap trimestral", "KPIs y seguimiento"]}
      />
      <Footer />
    </>
  );
}
