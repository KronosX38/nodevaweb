"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";


export default function HeroShowcase() {
    return (
        <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 overflow-hidden isolate">
            {/* Glow dorado al fondo (no interfiere con clicks) */}
            <div className="pointer-events-none absolute -top-10 right-[-12%] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/10 blur-3xl overflow-hidden" />

            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16 lg:gap-24 xl:gap-28">
                {/* ===== VISUAL (ROMBO) — móvil primero / desktop a la derecha ===== */}
                <motion.div
                    // Elegante: aparece con fade-in, sube un poco y pierde blur
                    initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.35 }} // se activa cuando ~35% del bloque entra
                    className="order-1 md:order-2 relative flex items-center justify-center md:pl-4 lg:pl-8"
                >
                    {/* Rombo principal */}
                    <div className="relative w-[84%] max-w-[520px] aspect-square">
                        {/* borde exterior (oscuro) */}
                        <motion.div
                            initial={{ opacity: 0, y: 22 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.05, duration: 0.7, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.35 }}
                            className="absolute overflow-hidden inset-0 rotate-45 rounded-[2.2rem] border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
                        />
                        {/* borde interior (dorado) */}
                        <motion.div
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.12, duration: 0.65, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.35 }}
                            className="absolute overflow-hidden inset-3 rotate-45 rounded-[2rem] border border-[#D4AF37]/90"
                        />

                        {/* Contenedor de imagen recortada (rombo) */}
                        <motion.div
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.35 }}
                            className="absolute inset-6 rotate-45 rounded-[1.6rem] overflow-hidden "
                        >
                            <Image
                                src="/hero-shot.jpg"
                                alt="Nodeva en acción"
                                width={800}        // ✅ pon un ancho base (ajústalo según tu imagen real)
                                height={800}       // ✅ pon un alto base
                                className="-rotate-45 h-full w-full object-none"
                            />
                        </motion.div>
                    </div>

                    {/* Rombo fino decorativo (frente) */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.28, duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.35 }}
                        className="pointer-events-none absolute -bottom-10 -left-2 md:-left-6 lg:-left-10 w-[70%] max-w-[440px] aspect-[5/3]"
                    >
                        <div className="absolute inset-0 rotate-45 rounded-[1.8rem] border border-[#D4AF37]/60" />
                    </motion.div>

                    {/* Rombo fino decorativo (fondo) */}
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.34, duration: 0.65, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.35 }}
                        className="pointer-events-none absolute -top-8 -right-4 md:-right-10 w-[55%] max-w-[360px] aspect-square"
                    >
                        <div className="absolute inset-0 rotate-45 rounded-[1.2rem] border border-white/10" />
                    </motion.div>
                </motion.div>

                {/* ===== TEXTO — móvil segundo / desktop a la izquierda ===== */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="order-2 md:order-1 max-w-[38rem] md:pr-6 lg:pr-10"
                >
                    <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-200">
                        Consultoría • Desarrollo • Diseño
                    </span>

                    <h1 className="text-3xl md:text-[2.0rem] lg:text-[2.50rem] font-bold">
                        Desarrollo de software y
                        <span className="text-[#D4AF37]"> aplicaciones móviles</span>
                        <br className="hidden sm:block" /> hechos a tu medida.
                    </h1>

                    {/* Justificado solo en móvil; izquierda desde md: */}
                    <div className="mt-6 md:mt-8 lg:mt-10 max-w-2xl border-l-4 border-[#D4AF37] pl-4">
                        <p className="text-base sm:text-lg leading-relaxed text-neutral-300 text-justify tracking-normal md:text-left md:tracking-wide">
                            En <span className="font-semibold text-white">Nodeva</span> somos una consultoría
                            empresarial enfocada en transformar ideas en resultados a través de soluciones
                            tecnológicas a la medida. Creamos experiencias digitales que impulsan la innovación
                            y permiten a las empresas adaptarse a los retos de la era digital, mediante el
                            desarrollo de software personalizado, aplicaciones móviles y plataformas web de alto impacto.
                        </p>
                        <p className="mt-4 text-base sm:text-lg leading-relaxed text-neutral-300 text-justify tracking-normal md:text-left md:tracking-wide">
                            Nuestro equipo combina experiencia en <span className="font-medium text-white">tecnología</span>,
                            <span className="font-medium text-white"> diseño</span> y
                            <span className="font-medium text-white"> consultoría empresarial</span>, para ofrecer
                            soluciones que optimizan procesos, mejoran la productividad y fortalecen la
                            competitividad de cada cliente.
                        </p>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <a
                            href="#contacto"
                            className="rounded-xl border border-[#D4AF37] bg-[#D4AF37] px-5 py-3 text-sm font-medium text-[#242424] hover:opacity-90"
                        >
                            Cotiza tu proyecto →
                        </a>
                        <a
                            href="#servicios"
                            className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-neutral-200 hover:bg-white/10"
                        >
                            Ver servicios
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}