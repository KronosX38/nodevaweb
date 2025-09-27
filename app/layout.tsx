import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Nodeva — Consultoría Empresarial",
  description: "Conectamos ideas. Creamos resultados.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${poppins.variable} overflow-x-hidden`}>
      <body className="overflow-x-hidden bg-[#242424] text-white antialiased font-sans">
        <Navbar />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}