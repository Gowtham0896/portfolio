import { Contact } from "@/components/portfolio/contact"
import SpeakButton from "@/components/interactive/speak-button"

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-pretty text-3xl font-semibold">Contact</h1>
        <SpeakButton label="Contact details" text="Contact options include email, LinkedIn, and GitHub." />
      </div>
      <Contact />
    </main>
  )
}
