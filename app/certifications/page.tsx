import { Certifications } from "@/components/portfolio/certifications"
import SpeakButton from "@/components/interactive/speak-button"

export default function CertificationsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-pretty text-3xl font-semibold">Certifications</h1>
        <SpeakButton
          label="Read certifications"
          text="Current cybersecurity certifications and those in progress relevant to cloud security and incident response."
        />
      </div>
      <Certifications />
    </main>
  )
}
