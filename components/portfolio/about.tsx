export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-10 md:py-16">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold">About</h2>
          <p className="mt-3 text-muted-foreground">
            Dedicated SOC Analyst with 3+ years of experience in security operations, threat detection, and incident
            response. Currently pursuing Masters in Cybersecurity at University of Delaware. Skilled in cloud security,
            threat hunting, and forensic investigations with strong communication and collaboration abilities.
          </p>
        </div>
        <ul className="grid gap-2 rounded-lg border bg-card p-4 text-sm" data-no-colorize="true">
          <li>
            <strong className="text-blue-700 font-semibold">Focus:</strong>{" "}
            <span className="text-green-700">SOC Operations, SIEM Analysis, Threat Detection</span>
          </li>
          <li>
            <strong className="text-purple-700 font-semibold">Frameworks:</strong>{" "}
            <span className="text-red-700">MITRE ATT&CK, NIST CSF, ISO 27001</span>
          </li>
          <li>
            <strong className="text-blue-700 font-semibold">Current Role:</strong>{" "}
            <span className="text-green-700">SOC Analyst L1 at Citigroup</span>
          </li>
          <li>
            <strong className="text-purple-700 font-semibold">Education:</strong>{" "}
            <span className="text-red-700">MS Cybersecurity (2025), BTech Computer Science</span>
          </li>
        </ul>
      </div>
    </section>
  )
}
