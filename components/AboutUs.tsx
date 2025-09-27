"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { LuTarget, LuMountain, LuShieldCheck, LuSparkles } from "react-icons/lu";

export default function AboutUs() {
    return (
        <section id="nosotros" className="relative overflow-hidden py-20">
            {/* deco de fondo */}
            <div
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-16 h-[420px] w-[420px] rounded-[2.2rem] border border-[#D4AF37]/25 rotate-45 animate-[spin_45s_linear_infinite] opacity-30"
            />
            <div
                aria-hidden
                className="pointer-events-none absolute -left-28 bottom-0 h-[520px] w-[520px] rounded-[2.4rem] border border-white/10 rotate-45 animate-[spin_60s_linear_infinite] opacity-20"
            />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Título + Filosofía + Rombo con imagen */}
                <div className="grid items-center gap-10 md:grid-cols-2">
                    <div>
                        <p className="text-xs tracking-[0.2em] text-neutral-400">NOSOTROS</p>
                        <h2 className="mt-2 text-3xl font-bold leading-tight text-neutral-50 md:text-4xl">
                            Filosofía
                        </h2>

                        <p className="mt-4 max-w-prose text-neutral-300">
                            En <span className="font-semibold text-[#D4AF37]">Nodeva</span> creemos que la unión de
                            creatividad, personas y tecnología genera resultados extraordinarios. Integramos
                            <span className="text-[#D4AF37] font-medium"> diseño</span>,
                            <span className="text-[#D4AF37] font-medium"> marketing</span>,
                            <span className="text-[#D4AF37] font-medium"> recursos humanos</span> y
                            <span className="text-[#D4AF37] font-medium"> finanzas</span> en cada proyecto,
                            transformando ideas en soluciones medibles y sostenibles.
                        </p>

                        <p className="mt-3 max-w-prose text-neutral-300">
                            Planificamos con intención, ejecutamos con calidad y medimos impacto. Nuestro propósito:
                            acompañarte como socio estratégico para que tu negocio sea más ágil, competitivo y humano.
                        </p>
                    </div>

                    {/* Rombo con imagen */}
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.35 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative mx-auto aspect-square w-[92%] max-w-[440px]"
                    >
                        <div className="absolute inset-0 rotate-45 rounded-[2rem] border border-[#D4AF37]/30" />
                        <div className="absolute inset-3 rotate-45 rounded-[2rem] border border-white/10" />
                        <div className="absolute inset-6 rotate-45 rounded-[2rem] overflow-hidden">
                            <Image
                                src="/about-hero.jpg" // pon tu imagen en /public/about-hero.jpg (o cambia el nombre)
                                alt="Equipo de Nodeva trabajando"
                                fill
                                priority
                                className="-rotate-45 object-cover"
                                sizes="(max-width: 768px) 90vw, 440px"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Tarjetas: Misión / Visión / Valores */}
                <div className="mt-14 grid gap-6 md:grid-cols-3">
                    <Card
                        icon={<LuTarget className="h-5 w-5" />}
                        title="Misión"
                        text="Generar soluciones integrales en tecnología, diseño y gestión empresarial que impulsen resultados medibles con calidad, cercanía y visión humana.”"
                    />

                    <Card
                        icon={<LuMountain className="h-5 w-5" />}
                        title="Visión"
                        text="Ser un socio estratégico de referencia en LATAM, reconocido por transformar ideas en proyectos digitales y empresariales de alto impacto y crecimiento sostenible."
                    />

                    <Card
                        icon={<LuShieldCheck className="h-5 w-5" />}
                        title="Valores"
                        text={
                            <ul className="space-y-1">
                                <li>• Integridad y claridad</li>
                                <li>• Colaboración y cercanía</li>
                                <li>• Excelencia y responsabilidad</li>
                                <li>• Innovación con propósito</li>
                            </ul>
                        }
                    />
                </div>
            </div>
        </section>
    );
}

type CardProps = {
    icon: React.ReactNode;
    title: string;
    text: React.ReactNode;
};

function Card({ icon, title, text }: CardProps) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="group relative isolate rounded-2xl border border-white/10 bg-[#242424] p-6 transition-colors duration-300 hover:border-[#D4AF37]/50"
        >
            {/* glow suave al hover (debajo del contenido) */}
            <span
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    background:
                        "radial-gradient(600px 200px at 0% 0%, rgba(212,175,55,0.06), transparent 60%)",
                }}
            />

            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#D4AF37]">
                {icon}
            </div>

            <h3 className="text-lg font-semibold text-neutral-100">{title}</h3>
            <div className="mt-2 text-sm leading-relaxed text-neutral-300">{text}</div>

            <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#D4AF37]">
                <LuSparkles className="h-4 w-4" /> <span>Compromiso real</span>
            </div>
        </motion.article>
    );
}
