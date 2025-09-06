"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BackButton } from "@/components/interactive/back-button"

const links = [
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/certifications", label: "Certifications" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <BackButton label="Back" />
          <Link href="/" className="font-semibold tracking-tight text-primary">
            Cybersecurity Portfolio
          </Link>
        </div>
        <div className="hidden items-center gap-4 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://github.com/Gowtham0896/Gowtham0896"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/gowtham-chennavaram/"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <Button asChild className="bg-secondary text-secondary-foreground hover:opacity-90">
            <Link href="/projects">View Projects</Link>
          </Button>
        </div>
        <div className="md:hidden">
          <Button asChild size="sm" className="bg-secondary text-secondary-foreground">
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </nav>
    </header>
  )
}
