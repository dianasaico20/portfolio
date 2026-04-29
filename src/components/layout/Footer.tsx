import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "@/components/icons";
import Image from 'next/image';

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Proyectos", href: "#projects" },
  { name: "Habilidades", href: "#skills" },
  { name: "Sobre mi", href: "#about" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border-muted bg-background-primary pt-16 pb-8 overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-linear-to-r from-transparent via-accent-primary to-transparent opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-24 bg-accent-primary/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="flex items-center group">
            <Image
              src="./assets/logo/Logotipo.svg"
              alt="Cosmic Ocean Logo"
              width={40}
              height={40}
              className="group-hover:opacity-80 transition-opacity"
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

        <div className="flex gap-6">
          <a href="#" className="text-text-muted hover:text-accent-primary transition-colors">
            <Github size={20} />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="#" className="text-text-muted hover:text-accent-primary transition-colors">
            <Linkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="#" className="text-text-muted hover:text-accent-primary transition-colors">
            <Twitter size={20} />
            <span className="sr-only">Twitter</span>
          </a>
          <a href="mailto:hello@example.com" className="text-text-muted hover:text-accent-primary transition-colors">
            <Mail size={20} />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-muted">
        <p>© {currentYear} Diana Saico. Todos los derechos reservados.</p>
        <div className="flex gap-4">
          <Link href="/privacy" className="hover:text-text-primary transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-text-primary transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
