"use client";

import { useMemo, useState } from "react";
import Footer from "@/components/Footer";

// Cambia este número por el que usarán para atender WhatsApp
const WHATSAPP_NUMBER = "529994532800"; // 52 + número (sin +, ni espacios)

export default function ContactPage() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    servicio: "",
    presupuesto: "",
    mensaje: "",
    // honeypot anti-bot (debe quedar vacío)
    website: "",
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [copied, setCopied] = useState(false);

  const errors = useMemo(() => {
    const e: Record<string, string> = {};
    if (!form.nombre.trim()) e.nombre = "Tu nombre es obligatorio.";
    if (!form.mensaje.trim()) e.mensaje = "Cuéntanos brevemente tu necesidad.";
    // Email no obligatorio, pero si lo escriben, validamos
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Ingresa un correo válido.";
    // Tel opcional pero validamos números básicos si lo escriben
    if (form.telefono && !/^[0-9+\-\s()]{6,}$/.test(form.telefono))
      e.telefono = "Revisa tu teléfono.";
    return e;
  }, [form]);

  const baseMensaje = useMemo(() => {
    const line = (label: string, val?: string) =>
      val && val.trim() ? `• ${label}: ${val.trim()}\n` : "";

    return (
      `Hola Nodeva, me gustaría más información:\n\n` +
      line("Nombre", form.nombre) +
      line("Email", form.email) +
      line("Teléfono", form.telefono) +
      line("Servicio", form.servicio) +
      line("Presupuesto", form.presupuesto) +
      `• Mensaje:\n${form.mensaje.trim()}\n\n` +
      `— Enviado desde nodeva.mx`
    );
  }, [form]);

  const whatsappURL = useMemo(() => {
    const text = encodeURIComponent(baseMensaje);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  }, [baseMensaje]);

  const mailtoURL = useMemo(() => {
    const subject = encodeURIComponent("Solicitud de información – Nodeva");
    const body = encodeURIComponent(baseMensaje);
    // usa el correo genérico que prefieras
    return `mailto:hola@nodeva.mx?subject=${subject}&body=${body}`;
  }, [baseMensaje]);

  const isValid = Object.keys(errors).length === 0 && form.website === "";

  const onSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({
      nombre: true,
      mensaje: true,
      email: touched.email || !!form.email,
      telefono: touched.telefono || !!form.telefono,
    });
    if (!isValid) return;
    window.open(whatsappURL, "_blank");
  };

  const handleChange =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((f) => ({ ...f, [field]: e.target.value }));
    };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(baseMensaje);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {}
  };

  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
      <header className="mb-10">
        <p className="mt-10 text-xs tracking-widest text-[#D4AF37]">CONTACTO</p>
        <h1 className="mt-2 text-3xl font-bold text-neutral-100 sm:text-4xl">
          Hablemos de tu proyecto
        </h1>
        <p className="mt-3 max-w-2xl text-neutral-300">
          Completa el formulario y te contactamos. También puedes enviarnos todo por WhatsApp con un clic.
        </p>
      </header>

      <section className="grid gap-8 lg:grid-cols-2 mb-10">
        {/* Formulario */}
        <form
          onSubmit={onSubmitWhatsApp}
          className="rounded-2xl border border-white/10 bg-[#242424] p-6 shadow-xl"
        >
          {/* honeypot (oculto) */}
          <input
            type="text"
            name="website"
            autoComplete="off"
            className="hidden"
            value={form.website}
            onChange={handleChange("website")}
            tabIndex={-1}
          />

          <div className="grid gap-4">
            <div>
              <label className="mb-1 block text-sm text-neutral-300">
                Nombre <span className="text-[#D4AF37]">*</span>
              </label>
              <input
                type="text"
                value={form.nombre}
                onChange={handleChange("nombre")}
                onBlur={() => setTouched((t) => ({ ...t, nombre: true }))}
                className="w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-neutral-100 outline-none focus:border-[#D4AF37]/50"
                placeholder="¿Cómo te llamas?"
              />
              {touched.nombre && errors.nombre && (
                <p className="mt-1 text-xs text-red-400">{errors.nombre}</p>
              )}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm text-neutral-300">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={handleChange("email")}
                  onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                  className="w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-neutral-100 outline-none focus:border-[#D4AF37]/50"
                  placeholder="tucorreo@dominio.com"
                />
                {touched.email && errors.email && (
                  <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                )}
              </div>
              <div>
                <label className="mb-1 block text-sm text-neutral-300">Teléfono</label>
                <input
                  type="tel"
                  value={form.telefono}
                  onChange={handleChange("telefono")}
                  onBlur={() => setTouched((t) => ({ ...t, telefono: true }))}
                  className="w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-neutral-100 outline-none focus:border-[#D4AF37]/50"
                  placeholder="+52 999 123 4567"
                />
                {touched.telefono && errors.telefono && (
                  <p className="mt-1 text-xs text-red-400">{errors.telefono}</p>
                )}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm text-neutral-300">Servicio</label>
                <select
                  value={form.servicio}
                  onChange={handleChange("servicio")}
                  className="w-full appearance-none rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-neutral-100 outline-none focus:border-[#D4AF37]/50"
                >
                  <option value="">Selecciona una opción…</option>
                  <option>Web & Digital</option>
                  <option>Desarrollo de Software</option>
                  <option>Diseño & Branding</option>
                  <option>Recursos Humanos</option>
                  <option>Consultoría Empresarial</option>
                  <option>Soporte & Nube</option>
                </select>
              </div>
              <div>
                <label className="mb-1 block text-sm text-neutral-300">Presupuesto</label>
                <select
                  value={form.presupuesto}
                  onChange={handleChange("presupuesto")}
                  className="w-full appearance-none rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-neutral-100 outline-none focus:border-[#D4AF37]/50"
                >
                  <option value="">Aún no lo defino</option>
                  <option>$20k – $50k MXN</option>
                  <option>$50k – $120k MXN</option>
                  <option>+$120k MXN</option>
                </select>
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm text-neutral-300">
                Mensaje <span className="text-[#D4AF37]">*</span>
              </label>
              <textarea
                rows={5}
                value={form.mensaje}
                onChange={handleChange("mensaje")}
                onBlur={() => setTouched((t) => ({ ...t, mensaje: true }))}
                className="w-full resize-y rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-neutral-100 outline-none focus:border-[#D4AF37]/50"
                placeholder="Cuéntanos brevemente tu idea o necesidad…"
              />
              {touched.mensaje && errors.mensaje && (
                <p className="mt-1 text-xs text-red-400">{errors.mensaje}</p>
              )}
            </div>

            <div className="mt-2 flex flex-wrap items-center gap-3">
              <button
                type="submit"
                disabled={!isValid}
                className="rounded-xl border border-[#D4AF37] bg-[#D4AF37] px-5 py-2 text-sm font-medium text-[#242424] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
                title={!isValid ? "Completa los campos obligatorios" : "Enviar por WhatsApp"}
              >
                Enviar por WhatsApp
              </button>

              <a
                href={mailtoURL}
                className="rounded-xl border border-white/15 px-5 py-2 text-sm font-medium text-neutral-200 transition hover:bg-white/5"
              >
                Enviar por correo
              </a>

              <button
                type="button"
                onClick={copyToClipboard}
                className="rounded-xl border border-white/15 px-4 py-2 text-xs text-neutral-300 transition hover:bg-white/5"
              >
                {copied ? "¡Copiado!" : "Copiar mensaje"}
              </button>
            </div>

            <p className="mt-3 text-xs text-neutral-400">
              Al enviar aceptas nuestro manejo responsable de datos. No compartimos tu información.
            </p>
          </div>
        </form>

        {/* Info lateral */}
        <aside className="rounded-2xl border border-white/10 bg-[#242424] p-6">
          <h3 className="text-xl font-semibold text-neutral-100">También puedes escribirnos</h3>
          <ul className="mt-4 space-y-2 text-neutral-300">
            <li>
              WhatsApp:{" "}
              <a
                className="text-[#D4AF37] underline decoration-[#D4AF37]/40 underline-offset-4 hover:opacity-90"
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
              >
                +52 999 453 2800
              </a>
            </li>
            <li>
              Email:{" "}
              <a
                className="text-[#D4AF37] underline decoration-[#D4AF37]/40 underline-offset-4 hover:opacity-90"
                href="mailto:hola@nodeva.mx"
              >
                hola@nodeva.mx
              </a>
            </li>
            <li>Horario: L–V 9:00–18:00, Sáb 9:00–14:00</li>
            <li>Dirección: Calle 60, Col. Centro, Paseo 60, Mérida, Yucatán.</li>
          </ul>

          <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-4 text-sm text-neutral-300">
            <p className="font-medium text-neutral-200">¿Cómo funciona?</p>
            <ol className="mt-2 list-decimal pl-5">
              <li>Completa tu información.</li>
              <li>Presiona “Enviar por WhatsApp”.</li>
              <li>Se abrirá la conversación con tu mensaje prellenado.</li>
            </ol>
          </div>
        </aside>
      </section>
      <Footer />
    </main>
  );
}
