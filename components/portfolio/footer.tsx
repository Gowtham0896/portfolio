export function Footer() {
  return (
    <footer className="mt-10 border-t">
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Gowtham Chennavaram — Cybersecurity Engineer
        <span className="mx-2">•</span>
        <a
          href="https://github.com/Gowtham0896/Gowtham0896"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-foreground"
        >
          GitHub
        </a>
        <span className="mx-2">•</span>
        <a
          href="https://www.linkedin.com/in/gowtham-chennavaram/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-foreground"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  )
}
