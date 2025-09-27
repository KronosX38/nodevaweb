"use client";
import { PenTool, Palette, BadgeCheck, BookOpen } from "lucide-react";
import ServicePage from "@/components/ServicePage";
import CTABanner from "@/components/CTABanner"; 
import Footer from "@/components/Footer";
export default function Page() {
  return (
    <>
    <ServicePage
      eyebrow="Diseño & Branding"
      title="Identidad visual que conecta y vende"
      subtitle="Creamos marcas memorables: estrategia, identidad visual y sistema de comunicación listo para operar en todos tus canales."
      highlights={[
        {
          icon: <PenTool />,
          title: "Identidad sólida",
          desc: "Naming, propósito, tono y pilares de marca alineados al negocio.",
        },
        {
          icon: <Palette />,
          title: "Sistema visual",
          desc: "Logo, paleta, tipografías, componentes y usos correctos.",
        },
        {
          icon: <BookOpen />,
          title: "Manual de marca",
          desc: "Guías claras para impresión, digital y redes sociales.",
        },
        {
          icon: <BadgeCheck />,
          title: "Listo para crecer",
          desc: "Archivos maestros, exports y librerías listas para producción.",
        },
      ]}
      features={[
        "Brief y estrategia de marca",
        "Logo principal + variantes",
        "Paleta, tipografías y estilos",
        "Sistema de aplicaciones (RRSS, piezas, mockups)",
        "Manual de marca PDF + archivos editables",
      ]}
      process={[
        { step: "1. Descubrimiento", desc: "Entendemos negocio, audiencia y tono." },
        { step: "2. Dirección creativa", desc: "Props visuales, moodboards y líneas." },
        { step: "3. Diseño", desc: "Logotipo, sistema y aplicaciones." },
        { step: "4. Entrega", desc: "Manual, exports y librerías listas." },
      ]}
      faqs={[
        {
          q: "¿Incluye nombre de marca?",
          a: "Podemos incluir naming y registro de dominios como módulo adicional.",
        },
        {
          q: "¿Pueden adaptar mi marca actual?",
          a: "Sí, hacemos refresh de identidad y normalización de usos.",
        },
      ]}
    />
    <CTABanner
     title="Haz que tu marca hable por sí sola"
    subtitle="Creamos identidades memorables listas para operar en todos tus canales: logo, sistema visual y manual de marca."
    whatsappText="Hola, quiero información sobre Diseño & Branding para mi empresa."
    primaryHref="/contacto?servicio=branding"
    bullets={["Brief y dirección creativa", "Entrega de archivos maestros", "Manual de marca"]}
     />
    <Footer />
  </>
  );
}
