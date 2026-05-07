import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Skills from "@/components/home/Skills";
import About from "@/components/home/About";
import ContactCTA from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <FeaturedProjects />
        <Skills />
        <About />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
