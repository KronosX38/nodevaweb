
import { Globe, ShoppingBag, Search, Rocket } from "lucide-react";
import ServicePage from "@/components/ServicePage";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <ServicePage
        eyebrow="Web & Digital"
        title="Sitios web, e-commerce y SEO orientados a resultados"
        subtitle="Diseñamos y desarrollamos experiencias digitales que convierten: performance, contenido y medición desde el día uno."
        highlights={[
          {
            icon: <Globe />,
            title: "Sitios de alto desempeño",
            desc: "Rápidos, seguros y con métricas reales de negocio.",
          },
          {
            icon: <ShoppingBag />,
            title: "E-commerce",
            desc: "Catálogo, pagos, envíos y automatizaciones conectadas.",
          },
          {
            icon: <Search />,
            title: "SEO & contenido",
            desc: "Arquitectura, on-page, esquema, blog y plan editorial.",
          },
          {
            icon: <Rocket />,
            title: "Lanzamiento & growth",
            desc: "Integración con analytics, CRM y experimentación.",
          },
        ]}
        features={[
          "UX/UI responsive y accesible",
          "Desarrollo optimizado (Next.js)",
          "Integraciones (pagos, CRM, email, analytics)",
          "SEO técnico + on-page + performance",
          "Capacitación de uso y handoff",
        ]}
        process={[
          { step: "1. Discovery", desc: "Objetivos, mapa de contenidos y SEO base." },
          { step: "2. Diseño", desc: "Wireframes y UI en tu sistema visual." },
          { step: "3. Build", desc: "Desarrollo, integraciones y QA." },
          { step: "4. Go-live", desc: "Deploy, medición y plan de mejora." },
        ]}
        faqs={[
          {
            q: "¿Pueden migrar mi sitio actual?",
            a: "Sí, migramos contenido, preservamos SEO y mejoramos performance.",
          },
          {
            q: "¿Trabajan con CMS?",
            a: "Sí: headless (Sanity/Contentful), WordPress o CMS a medida según el caso.",
          },
        ]}
      />
      <CTABanner
        title="Lleva tu presencia digital al siguiente nivel"
        subtitle="Sitios modernos, rápidos y listos para convertir: SEO, performance y analítica desde el día uno."
        whatsappText="Hola, estoy interesado en servicios de Web & Digital."
        primaryHref="/contacto?servicio=web"
        bullets={["UX/UI responsive", "SEO técnico y on-page", "Integraciones (pagos/CRM)"]}
      />
      <Footer />
    </>
  );
}
