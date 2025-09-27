import Hero from "@/components/Hero";
import HeroShowcase from "@/components/HeroShowcase";
import ServicesGrid from "@/components/ServicesGrid";
import BeneficiosGrid from "@/components/BeneficiosGrid";
import ProcessSteps from "@/components/ProcessSteps";
import TechMarquee from "@/components/TechMarquee";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      {/* Aquí después metemos “Logos de confianza”, “Servicios destacados” o “Cómo trabajamos”. */}
      <Hero />
      {/* Showcase de proyectos */}
      <HeroShowcase />
      {/* Servicios en detalle */}
      <ServicesGrid />
      {/* Beneficios de trabajar con nosotros */}
      <BeneficiosGrid />
      {/* Proceso de trabajo */}
      <ProcessSteps />
      {/* Tecnologías que dominamos */}
      <TechMarquee />
      {/* Call to action final */}
      <CtaSection />
      {/* Footer */}
      <Footer />
    </main>
  );
}
