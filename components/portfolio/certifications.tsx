export function Certifications() {
  const items = [
    { name: "Security+", org: "CompTIA (2023)" },
    { name: "eJPT", org: "eLearnSecurity (2024)" },
    { name: "Splunk Core Certified User", org: "Splunk (2024)" },
    { name: "CySA+", org: "CompTIA (In Progress)" },
    { name: "AWS Security Specialty", org: "AWS (In Progress)" },
  ]
  return (
    <section id="certifications" className="mx-auto max-w-6xl px-4 py-10 md:py-16">
      <h2 className="text-2xl font-semibold">Certifications</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {items.map((c) => (
          <div key={c.name} className="rounded-lg border bg-card p-4">
            <p className="font-medium">{c.name}</p>
            <p className="text-sm text-muted-foreground">{c.org}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
