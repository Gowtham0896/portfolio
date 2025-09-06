import { About } from "@/components/portfolio/about"
import SpeakButton from "@/components/interactive/speak-button"

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-pretty text-3xl font-semibold">About</h1>
        <SpeakButton
          label="Introduce"
          text="About the cybersecurity engineer. Experienced in cloud security, detection engineering, and incident response."
        />
      </div>
      <About />
    </main>
  )
}
