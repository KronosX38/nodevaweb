import Footer from "@/components/Footer";

// app/aviso-privacidad/page.tsx
export const metadata = {
  title: "Aviso de Privacidad | Nodeva",
  description:
    "Consulta el aviso de privacidad de Nodeva conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.",
};

export default function AvisoPrivacidadPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 text-neutral-300">
      <h1 className="text-3xl font-bold text-[#D4AF37]">Aviso de Privacidad</h1>
      <p className="mt-4 text-sm text-neutral-400">
        Última actualización: {new Date().toLocaleDateString("es-MX")}
      </p>

      <section className="mt-8 space-y-8 text-sm leading-relaxed md:text-base">
        <p>
          En cumplimiento con lo dispuesto por la{" "}
          <span className="font-semibold text-neutral-100">
            Ley Federal de Protección de Datos Personales en Posesión de los
            Particulares (LFPDPPP)
          </span>
          , Nodeva, con domicilio en Mérida, Yucatán, México, hace de su
          conocimiento el presente Aviso de Privacidad, mediante el cual se
          regula la forma en que recabamos, utilizamos, almacenamos,
          compartimos y protegemos sus datos personales.
        </p>

        <h2 className="text-xl font-semibold text-neutral-100">1. Datos personales recabados</h2>
        <p>
          Recabamos de manera enunciativa mas no limitativa, los siguientes
          datos: nombre completo, domicilio, correo electrónico, teléfono,
          empresa, cargo, RFC, información fiscal, y cualquier otro dato
          indispensable para la prestación de nuestros servicios.
        </p>

        <h2 className="text-xl font-semibold text-neutral-100">2. Finalidades del tratamiento</h2>
        <p>
          Sus datos personales serán utilizados para las siguientes finalidades
          primarias:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Proveer los servicios y productos contratados.</li>
          <li>Elaborar contratos, facturación y documentación administrativa.</li>
          <li>Dar cumplimiento a obligaciones legales y fiscales.</li>
          <li>Atender solicitudes de información, cotizaciones y soporte.</li>
        </ul>
        <p className="mt-4">
          De manera secundaria, podremos utilizar sus datos para fines de
          mercadotecnia, publicidad y prospección comercial, siempre que
          contemos con su consentimiento expreso.
        </p>

        <h2 className="text-xl font-semibold text-neutral-100">3. Transferencia de datos</h2>
        <p>
          Sus datos personales no serán transferidos a terceros sin su
          consentimiento, salvo en los casos previstos en la Ley, como
          autoridades fiscales, regulatorias o judiciales que así lo requieran.
        </p>

        <h2 className="text-xl font-semibold text-neutral-100">4. Medidas de seguridad</h2>
        <p>
          Nodeva implementa medidas administrativas, técnicas y físicas
          necesarias para proteger sus datos personales contra daño, pérdida,
          alteración, destrucción o uso indebido, acceso o divulgación no
          autorizada.
        </p>

        <h2 className="text-xl font-semibold text-neutral-100">5. Derechos ARCO</h2>
        <p>
          Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al
          tratamiento de sus datos personales (derechos ARCO), conforme a lo
          establecido en la LFPDPPP. Para ejercer dichos derechos, deberá enviar
          una solicitud al correo electrónico:{" "}
          <a
            href="mailto:info@nodeva.com"
            className="text-[#D4AF37] hover:underline"
          >
            info@nodeva.com
          </a>
          , incluyendo nombre, medio de contacto y descripción clara de la
          solicitud.
        </p>

        <h2 className="text-xl font-semibold text-neutral-100">6. Cambios al aviso</h2>
        <p>
          Nodeva podrá modificar el presente Aviso de Privacidad en cualquier
          momento para cumplir con actualizaciones legislativas o políticas
          internas. Las modificaciones estarán disponibles en{" "}
          <a href="/" className="text-[#D4AF37] hover:underline">
            www.nodeva.com
          </a>
          .
        </p>
      </section>

      <p className="mt-10 text-sm text-neutral-400 mb-10">
        Si considera que su derecho a la protección de datos personales ha sido
        vulnerado, puede acudir al Instituto Nacional de Transparencia, Acceso a
        la Información y Protección de Datos Personales (INAI).
      </p>
      <Footer />
    </main>
  );
}
