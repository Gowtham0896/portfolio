import { Skills } from "@/components/portfolio/skills"
import SpeakButton from "@/components/interactive/speak-button"

export default function SkillsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-pretty text-3xl font-semibold">Skills</h1>
        <SpeakButton
          label="Read skills"
          text="Key skills include cloud security, identity and access management, detection engineering, incident response, and application security."
        />
      </div>
      <Skills />
    </main>
  )
}
