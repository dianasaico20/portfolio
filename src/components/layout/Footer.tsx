import Link from "next/link";
import { Github, Linkedin, Mail } from "@/components/icons";
import Image from "next/image";

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Proyectos", href: "#projects" },
  { name: "Habilidades", href: "#skills" },
  { name: "Sobre mi", href: "#about" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-background-primary pt-16 pb-8 overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-accent-primary/80 to-transparent opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-24 bg-accent-primary/5 blur-3xl pointer-events-none" />

      <div className="w-full px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="flex items-center group">
<Image
               src="/assets/logo/Logotipo.svg"
               alt="Cosmic Ocean Logo"
               width={40}
               height={40}
               className="w-10 h-10 group-hover:opacity-80 transition-opacity"
             />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-text-muted hover:text-accent-primary transition-colors uppercase tracking-widest"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex gap-4">
          <a href="https://github.com/dianasaico20" className="w-10 h-10 rounded-full bg-background-tertiary flex items-center justify-center text-text-muted hover:text-background-primary hover:bg-accent-primary transition-all duration-300 shadow-lg group relative overflow-hidden">
            <div className="absolute inset-0 bg-white/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Github size={20} className="relative z-10" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/diana-s-a9060b264/" className="w-10 h-10 rounded-full bg-background-tertiary flex items-center justify-center text-text-muted hover:text-background-primary hover:bg-accent-primary transition-all duration-300 shadow-lg group relative overflow-hidden">
            <div className="absolute inset-0 bg-white/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Linkedin size={20} className="relative z-10" />
            <span className="sr-only">LinkedIn</span>
          </a>
        
         <a 
  href="mailto:dianasaico2024@gmail.com" 
  className="w-10 h-10 rounded-full bg-background-tertiary flex items-center justify-center text-text-muted hover:text-background-primary hover:bg-accent-primary transition-all duration-300 shadow-lg group relative overflow-hidden"
>
  <div className="absolute inset-0 bg-white/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  <Mail size={20} className="relative z-10" />
  <span className="sr-only">Email</span>
</a>
        </div>





      </div>

      <div className="relative w-full px-6 md:px-12 lg:px-24 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-muted">
        {/* Decorative gradient for the second row */}
        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-accent-primary/60 to-transparent opacity-40" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-16 bg-accent-primary/5 blur-2xl pointer-events-none" />

        <p>© {currentYear} Diana Saico. Todos los derechos reservados.</p>
        <div className="flex gap-4">
          <Link href="/privacy" className="hover:text-text-primary transition-colors">Politicas de privacidad</Link>
          <Link href="/terms" className="hover:text-text-primary transition-colors">Términos de Servicio</Link>
        </div>
      </div>
    </footer>
  );
}
