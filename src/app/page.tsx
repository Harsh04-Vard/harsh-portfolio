import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import CodingProfiles from "@/components/CodingProfiles";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Achievements />
      <CodingProfiles />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}