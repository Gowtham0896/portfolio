export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-10 md:py-16">
      <h2 className="text-2xl font-semibold">Technical Skills</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <SkillCard
          title="SIEM Platforms"
          items={["Splunk", "Microsoft Sentinel", "Elastic Stack", "IBM QRadar", "Sumo Logic"]}
        />
        <SkillCard
          title="EDR/XDR Tools"
          items={["CrowdStrike Falcon", "SentinelOne", "Microsoft Defender", "FireEye HX"]}
        />
        <SkillCard title="Cloud Security" items={["AWS GuardDuty", "CSPM (Prisma, Wiz)", "AWS IAM", "S3 Security"]} />
        <SkillCard title="Programming/Scripting" items={["Python", "PowerShell", "Bash", "YARA", "JavaScript"]} />
        <SkillCard
          title="IDS/IPS & Forensics"
          items={["Snort", "Suricata", "Zeek", "Volatility", "Autopsy", "Ghidra"]}
        />
        <SkillCard title="SOAR & Frameworks" items={["Splunk SOAR", "IBM Resilient", "MITRE ATT&CK", "NIST CSF"]} />
      </div>
    </section>
  )
}

function SkillCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-lg border bg-card p-4">
      <h3 className="font-medium">{title}</h3>
      <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  )
}
