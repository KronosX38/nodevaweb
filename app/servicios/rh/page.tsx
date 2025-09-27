"use client";
import { Users, GraduationCap, Handshake, Target } from "lucide-react";
import ServicePage from "@/components/ServicePage";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
    <ServicePage
      eyebrow="Recursos Humanos"
      title="Atracción, capacitación y nómina sin fricción"
      subtitle="Construimos equipos de alto desempeño: reclutamos mejor, activamos onboarding, diseñamos planes de capacitación y operamos nómina con claridad."
      highlights={[
        {
          icon: <Users />,
          title: "Reclutamiento efectivo",
          desc: "Perfiles claros, pipeline y entrevistas por competencias.",
        },
        {
          icon: <GraduationCap />,
          title: "Capacitación",
          desc: "Rutas de aprendizaje y talleres prácticos según rol.",
        },
        {
          icon: <Handshake />,
          title: "Onboarding",
          desc: "Primeros 90 días con metas, mentoría y check-ins.",
        },
        {
          icon: <Target />,
          title: "KPIs de talento",
          desc: "Tiempo de cobertura, NPS interno y rotación saludable.",
        },
      ]}
      features={[
        "Job description y scorecards de evaluación",
        "Base de candidatos y entrevistas estructuradas",
        "Plan de capacitación por rol y seniority",
        "Onboarding con metas de 30-60-90 días",
        "Soporte de nómina y cumplimiento",
      ]}
      process={[
        { step: "1. Perfil", desc: "Definición del rol y scorecard." },
        { step: "2. Atracción", desc: "Fuentes, entrevistas, shortlist." },
        { step: "3. Onboarding", desc: "Plan 30-60-90 y mentoría." },
        { step: "4. Seguimiento", desc: "KPIs de talento y mejora." },
      ]}
      faqs={[
        {
          q: "¿Manejan perfiles tech y no-tech?",
          a: "Sí. Cubrimos roles de negocio, diseño y tecnología.",
        },
        {
          q: "¿Pueden operar la nómina completa?",
          a: "Sí, podemos gestionar nómina y cumplimiento en conjunto con tu área.",
        },
      ]}
    />
      <CTABanner
    title="Impulsa el talento que mueve tu empresa"
    subtitle="Reclutamiento, onboarding y capacitación con indicadores claros de desempeño y retención."
    whatsappText="Hola, me interesa el servicio de Recursos Humanos."
    primaryHref="/contacto?servicio=rh"
    bullets={["Scorecards y entrevistas", "Onboarding 30-60-90", "KPIs de talento"]}
  />
  <Footer />
    </>
  );
}
