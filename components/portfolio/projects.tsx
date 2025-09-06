import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type Project = {
  title: string
  desc: string
  tech: string[]
}

const projects: Project[] = [
  {
    title: "SOC Home Lab",
    desc: "Designed and deployed a hands-on SOC home lab integrating SIEMs, EDR, and IDS tools to simulate attacks, build detections, and strengthen threat hunting and log analysis skills.",
    tech: ["Splunk", "Elastic Stack", "Sysmon", "Suricata", "Kali Linux"],
  },
  {
    title: "Phishing Website Detection",
    desc: "Developed a machine learning model to detect phishing URIs with 98.5% accuracy using SVM and Random Forest. Tool processes 1,000+ URLs/hour, reducing manual review time by 70%.",
    tech: ["Python", "TensorFlow", "Scikit-Learn", "NLP"],
  },
  {
    title: "Project Trishul & Vuin Scan",
    desc: "Automated penetration testing workflows by building reconnaissance & vulnerability scanners. Assessed 80+ endpoints for misconfigurations, CVEs, and open ports.",
    tech: ["Python", "Bash Scripting", "Nmap", "Nikto"],
  },
  {
    title: "TryHackMe & HackerOne Practice",
    desc: "Completed 50+ cybersecurity rooms on TryHackMe with top 5% ranking. Reported 3 valid security vulnerabilities through HackerOne bug bounty program.",
    tech: ["Web App Security", "Network Pentesting", "Digital Forensics"],
  },
]

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-10 md:py-16">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <Button asChild className="bg-secondary text-secondary-foreground hover:opacity-90">
          <a href="https://github.com/Gowtham0896/Gowtham0896" target="_blank" rel="noopener noreferrer">
            Request Full Case Studies
          </a>
        </Button>
      </div>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <Card key={p.title} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-lg">{p.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <p>{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <Badge key={t} variant="secondary" className="bg-muted text-foreground">
                    {t}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button variant="outline" asChild>
                <a href="https://github.com/Gowtham0896/Gowtham0896" target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
