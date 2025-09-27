"use client";
import Link from "next/link";
import Image from "next/image";

// components/Footer.tsx
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] py-12 text-neutral-300">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-4">
        {/* Logo + claim */}
        <div>
          <Link href="/" className="flex items-center gap-3">
            {/* Desktop / tablet */}
            <Image
              src="/nodeva_bco.svg"
              alt="Nodeva"
              width={120}
              height={40}
              priority
              className="hidden sm:block h-auto w-[120px]"
            />
            {/* Móvil */}
            <Image
              src="/nodeva_mov.svg"
              alt="Nodeva"
              width={96}
              height={32}
              priority
              className="block sm:hidden h-auto w-[96px]"
            />
          </Link>
          <p className="text-sm text-neutral-400">
            Conectamos ideas. Creamos resultados.
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h4 className="mb-4 font-semibold text-neutral-100">Navegación</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/nosotros" className="hover:text-[#D4AF37]">
                Nosotros
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="hover:text-[#D4AF37]">
                Contáctanos
              </Link>
            </li>
            <li>
              <Link href="/aviso-privacidad" className="hover:text-[#D4AF37]">
                Aviso de privacidad
              </Link>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="mb-4 font-semibold text-neutral-100">
            Líneas de atención
          </h4>
          <ul className="space-y-2 text-sm">
            <li>WhatsApp: +52 999 453 2800</li>
            <li>info@nodeva.com</li>
            <li>
              Calle 60 Col. Centro, edificio Paseo 60 piso, Mérida, Yucatán.
            </li>
          </ul>
        </div>

        {/* Redes + horarios */}
        <div>
          <h4 className="mb-4 font-semibold text-neutral-100">Atención</h4>
          <p className="text-sm">Lunes a Viernes de 9:00 a 18:00 hrs</p>
          <p className="text-sm">Sábados de 9:00 a 14:00 hrs</p>

          <div className="mt-4 flex items-center gap-4 text-xl text-[#D4AF37]">
            <a href="#" aria-label="Facebook" className="hover:opacity-80">
              <FaFacebook />
            </a>
            <a href="#" aria-label="Instagram" className="hover:opacity-80">
              <FaInstagram />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:opacity-80">
              <FaLinkedin />
            </a>
            {/* TikTok (deshabilitado por ahora) */}
            <span
              aria-label="TikTok (próximamente)"
              className="cursor-not-allowed opacity-40"
            >
              <FaTiktok />
            </span>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-6 pt-6 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Nodeva. Todos los derechos reservados.
      </div>
    </footer>
  );
}
