"use client";
import { CloudCog, Shield, Database, Activity } from "lucide-react";
import ServicePage from "@/components/ServicePage";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
    <ServicePage
      eyebrow="Soporte & Nube"
      title="Hosting, seguridad y mantenimiento continuo"
      subtitle="Operamos tu plataforma con estándares de seguridad, performance y continuidad. Backups, monitoreo, parches y soporte ágil."
      highlights={[
        {
          icon: <CloudCog />,
          title: "Infra & hosting",
          desc: "Cloud moderna, SSL y escalamiento.",
        },
        {
          icon: <Shield />,
          title: "Seguridad",
          desc: "Parches, hardening y control de acceso.",
        },
        {
          icon: <Database />,
          title: "Backups",
          desc: "Respaldos y recuperación probada.",
        },
        {
          icon: <Activity />,
          title: "Monitoreo",
          desc: "Logs, alertas y SLOs visibles.",
        },
      ]}
      features={[
        "Despliegues y certificados SSL",
        "Backups programados y recuperación",
        "Parches de seguridad y hardening",
        "Monitoreo, alertas y reporte mensual",
        "Mesa de ayuda con SLA",
      ]}
      process={[
        { step: "1. Auditoría", desc: "Revisión de infraestructura y riesgos." },
        { step: "2. Plan", desc: "Backups, monitoreo y SLAs." },
        { step: "3. Implementación", desc: "Parches, automatización, alertas." },
        { step: "4. Operación", desc: "Mantenimiento y reportes." },
      ]}
      faqs={[
        {
          q: "¿Pueden tomar mi infraestructura actual?",
          a: "Sí. Hacemos auditoría, estabilizamos y operamos con SLAs.",
        },
        {
          q: "¿Trabajan con AWS/Azure/Vercel?",
          a: "Sí, trabajamos con los principales proveedores cloud.",
        },
      ]}
    />
  <CTABanner
    title="Seguridad y tecnología siempre disponibles"
    subtitle="Hosting, monitoreo, backups y parches para que tu operación no se detenga."
    whatsappText="Hola, quiero información sobre Soporte & Nube."
    primaryHref="/contacto?servicio=nube"
    bullets={["Monitoreo y alertas", "Backups verificados", "Hardening y parches"]}
  />
  <Footer />
</>
  );
}
