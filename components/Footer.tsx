"use client";

const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Proceso", href: "#proceso" },
  { label: "Precios", href: "#precios" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#222222] bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Logo + copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#" className="text-xl font-bold font-space">
              <span className="bg-gradient-to-r from-[#6C47FF] to-[#00D4FF] bg-clip-text text-transparent">
                FD
              </span>
              <span className="text-[#F5F5F5]">veloper</span>
            </a>
            <p className="text-xs text-[#888888]">
              © 2025 FDveloper · Desarrollo web con IA · Argentina
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#888888] hover:text-[#F5F5F5] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/fdveloper/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#888888] hover:text-[#F5F5F5] transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/5491159568286"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#888888] hover:text-[#F5F5F5] transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <p className="text-center text-xs text-[#888888] mt-8">
          Hecho con Next.js y demasiado café ☕
        </p>
      </div>
    </footer>
  );
}
