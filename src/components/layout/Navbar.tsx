"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Proyectos", href: "#projects" },
  { name: "Habilidades", href: "#skills" },
  { name: "Sobre mi", href: "#about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-background-primary/80 backdrop-blur-md shadow-[0_1px_0_0_rgba(255,255,255,0.05),0_4px_20px_0_rgba(0,0,0,0.5)] py-4 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-linear-to-r after:from-transparent after:via-accent-primary/50 after:to-transparent"
        : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center group">
          <Image
            src="/assets/logo/Logotipo.svg"
            alt="Cosmic Ocean Logo"
            width={40}
            height={40}
            className="w-10 h-10 group-hover:opacity-80 transition-opacity"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-text-muted hover:text-accent-primary transition-colors uppercase tracking-widest"
            >
              {link.name}
            </Link>
          ))}
          <Button variant="primary" size="sm" onClick={() => window.location.href = "mailto:dianasaico2024@gmail.com"}>
            Contacto
          </Button>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-text-primary p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 bg-background-secondary/80 backdrop-blur-2xl border-b border-white/10 p-6 flex flex-col gap-4 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] md:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-text-muted hover:text-accent-primary transition-colors py-2 "
            >
              {link.name}
            </Link>
          ))}
          <Button
            variant="primary"
            className="mt-4 w-full"
            onClick={() => window.location.href = "mailto:dianasaico2024@gmail.com"}
          >
            Contacto
          </Button>
        </motion.div>
      )}
    </motion.header>
  );
}