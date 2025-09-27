"use client";
import { Layers, Boxes, ServerCog, ShieldCheck } from "lucide-react";
import ServicePage from "@/components/ServicePage";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <ServicePage
        eyebrow="Desarrollo de Software"
        title="Web apps, móviles e integraciones a la medida"
        subtitle="Diseñamos y desarrollamos productos digitales que generan valor: del discovery al release, con arquitectura sólida, integraciones y QA automatizado."
        highlights={[
          {
            icon: <Layers />,
            title: "Discovery & UX",
            desc: "Historias de usuario, prototipo y alcance claro.",
          },
          {
            icon: <Boxes />,
            title: "Arquitectura",
            desc: "Stack moderno, seguridad y escalabilidad.",
          },
          {
            icon: <ServerCog />,
            title: "Integraciones",
            desc: "APIs, pagos, auth, ERPs y servicios en la nube.",
          },
          {
            icon: <ShieldCheck />,
            title: "Calidad y soporte",
            desc: "Pruebas, CI/CD y monitoreo post-release.",
          },
        ]}
        features={[
          "Arquitectura y backlog priorizado",
          "Desarrollo por sprints (ágil)",
          "APIs REST/GraphQL, pagos, auth, notificaciones",
          "Infra en la nube y CI/CD",
          "QA manual/automatizado y soporte",
        ]}
        process={[
          { step: "1. Discovery", desc: "Alcance, UX y releases." },
          { step: "2. Build", desc: "Sprints, demos y feedback." },
          { step: "3. Integración", desc: "Servicios, pagos y auth." },
          { step: "4. Release", desc: "QA, CI/CD y soporte." },
        ]}
        faqs={[
          {
            q: "¿Trabajan con mi equipo interno?",
            a: "Sí, podemos integrarnos a tu squad o trabajar end-to-end.",
          },
          {
            q: "¿Pueden tomar un proyecto ya iniciado?",
            a: "Sí. Hacemos auditoría técnica y plan de estabilización.",
          },
        ]}
      />
      <CTABanner
        title="Software y aplicaciones hechas a tu medida"
        subtitle="Del discovery al release: MVPs, integraciones y CI/CD para entregar valor desde el primer sprint."
        whatsappText="Hola, necesito más información sobre Desarrollo de Software."
        primaryHref="/contacto?servicio=software"
        bullets={["Discovery & prototipo", "Sprints con demos", "QA y despliegue"]}
      />
      <Footer />
    </>
  );
}
