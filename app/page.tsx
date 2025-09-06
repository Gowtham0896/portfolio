import { Hero } from "@/components/portfolio/hero"
import { About } from "@/components/portfolio/about"
import { Skills } from "@/components/portfolio/skills"
import { Projects } from "@/components/portfolio/projects"
import { Experience } from "@/components/portfolio/experience"
import { Certifications } from "@/components/portfolio/certifications"
import { Contact } from "@/components/portfolio/contact"
import { Footer } from "@/components/portfolio/footer"

export default function Page() {
  return (
    <main>
      <a href="#content" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      {/* Removed duplicate Navbar; keep the global one from app/layout.tsx */}
      {/* <Navbar /> */}
      <div id="content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
