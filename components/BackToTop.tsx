"use client";

import { useEffect, useState } from "react";
import { LuArrowUp } from "react-icons/lu";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 280); // aparece tras 280px
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      type="button"
      onClick={goTop}
      aria-label="Volver arriba"
      className={[
        "fixed bottom-6 right-6 z-[60] rounded-xl",
        "border border-[#D4AF37]/60 bg-[#1f1f1f]/90 text-[#D4AF37]",
        "shadow-[0_8px_24px_rgba(212,175,55,.20)] backdrop-blur",
        "transition-all duration-300",
        visible ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-3",
        "hover:bg-[#D4AF37] hover:text-[#242424]"
      ].join(" ")}
    >
      <span className="flex h-11 w-11 items-center justify-center">
        <LuArrowUp className="h-5 w-5" />
      </span>
    </button>
  );
}
