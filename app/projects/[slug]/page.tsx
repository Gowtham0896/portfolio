import { notFound } from "next/navigation"
import SpeakButton from "@/components/interactive/speak-button"
import { projects } from "@/components/portfolio/data/projects"

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const normalizeSlug = (slug: string) => {
    return decodeURIComponent(slug).toLowerCase().replace(/\s+/g, "-")
  }

  const project = projects.find(
    (p) =>
      p.slug === params.slug ||
      p.slug === normalizeSlug(params.slug) ||
      normalizeSlug(p.title) === normalizeSlug(params.slug),
  )

  if (!project) return notFound()

  const speakText = `${project.title}. ${project.summary}. Key results: ${project.bullets.join("; ")}`

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-pretty text-3xl font-semibold">{project.title}</h1>
        <SpeakButton label="Narrate" text={speakText} />
      </div>
      <p className="mb-6 text-muted-foreground">{project.summary}</p>
      <h2 className="mb-2 text-xl font-semibold">Highlights</h2>
      <ul className="mb-10 list-disc space-y-2 pl-5">
        {project.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
      <div className="rounded-lg border bg-background/70 p-4">
        <p className="text-sm text-muted-foreground">
          Want this as a deep-dive case study? I can expand this page with methodology, tools, visuals, and links.
        </p>
      </div>
    </main>
  )
}
