import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Role = {
  company: string
  title: string
  dates: string
  bullets: string[]
}

const roles: Role[] = [
  {
    company: "Citigroup",
    title: "Security Operations Center Analyst (L1)",
    dates: "Aug 2024 — Present",
    bullets: [
      "Engineered advanced correlation rules in Splunk, reducing false positives by 30% and improving threat detection accuracy across 1,000+ monthly security alerts",
      "Orchestrated automated incident response playbooks in Splunk SOAR, slashing mean time to resolution (MTTR) by 40% for malware and phishing incidents",
      "Architected cloud security integration between AWS GuardDuty and on-premises SIEM, enhancing visibility and reducing mean time to detect (MTTD) by 30%",
      "Developed 15+ custom detection rules aligned with MITRE ATT&CK framework, significantly enhancing APT detection capabilities and threat hunting effectiveness",
    ],
  },
  {
    company: "Tata CLiQ",
    title: "Security Operations Center Analyst (L1)",
    dates: "Jan 2022 — Aug 2023",
    bullets: [
      "Automated security operations through Python and Shell scripting, reducing manual log analysis effort by 25% and improving IOC enrichment efficiency",
      "Spearheaded enterprise-wide CrowdStrike Falcon deployment across 2,000+ endpoints, achieving 95% coverage in 3 months and reducing malware incidents by 40%",
      "Developed comprehensive incident response playbooks for ransomware and phishing attacks, standardizing processes and increasing response consistency by 35%",
      "Conducted cloud security posture assessments using CSPM tools, identifying and remediating 60% of misconfigured AWS IAM policies and S3 buckets",
    ],
  },
  {
    company: "Vivma Software Inc",
    title: "Information Technology Analyst - Intern",
    dates: "Jan 2021 — Dec 2021",
    bullets: [
      "Implemented proactive infrastructure monitoring protocols, reducing system downtime by 15% through early outage detection and escalation procedures",
      "Enhanced network security by analyzing and optimizing Snort and Suricata rules, increasing IDS/IPS detection accuracy by 25% while reducing false positives",
      "Managed vulnerability management program, ensuring 100% compliance for critical patches through coordinated scanning and remediation tracking",
      "Supported ISO 27001 certification readiness by organizing evidence for security controls including access reviews, log retention, and user activity monitoring",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-10 md:py-16">
      <h2 className="text-2xl font-semibold">Experience</h2>
      <div className="mt-6 grid gap-4">
        {roles.map((r) => (
          <Card key={r.company}>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <CardTitle className="text-lg">
                  {r.title} — {r.company}
                </CardTitle>
                <span className="text-sm text-muted-foreground">{r.dates}</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 text-sm text-muted-foreground">
                {r.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
