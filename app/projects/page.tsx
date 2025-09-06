import Link from "next/link"
import SpeakButton from "@/components/interactive/speak-button"
import { projects } from "@/components/portfolio/data/projects"

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-pretty text-3xl font-semibold">Projects</h1>
        <SpeakButton
          label="Summarize projects"
          text="Five security case studies including AWS hardening, detection engineering, penetration testing, incident response, and vulnerability automation."
        />
      </div>
      <ul className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <li key={p.slug} className="rounded-lg border bg-background/70 p-4">
            <h2 className="mb-1 text-lg font-semibold">{p.title}</h2>
            <p className="mb-3 text-sm text-muted-foreground">{p.summary}</p>
            <ul className="mb-4 list-disc space-y-1 pl-5 text-sm">
              {p.bullets.slice(0, 2).map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            <div className="flex items-center gap-3">
              <Link
                href={`/projects/${p.slug}`}
                className="text-sm font-medium text-primary underline underline-offset-4"
              >
                View details
              </Link>
              <SpeakButton label="Speak summary" text={`${p.title}. ${p.summary}`} />
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}
