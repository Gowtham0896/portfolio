import { Experience } from "@/components/portfolio/experience"
import SpeakButton from "@/components/interactive/speak-button"

export default function ExperiencePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-pretty text-3xl font-semibold">Experience</h1>
        <SpeakButton
          label="Summarize experience"
          text="Professional experience delivering measurable risk reduction, faster detection and response, and secure by default controls."
        />
      </div>
      <Experience />
    </main>
  )
}
