import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-12 pb-10 md:pt-16 md:pb-14">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
        <div className="flex flex-col items-start gap-6 flex-1">
          <h1 className="text-balance text-3xl font-semibold leading-tight md:text-5xl">Gowtham Chennavaram</h1>
          <h2 className="text-balance text-xl font-medium text-muted-foreground md:text-2xl">
            SOC Analyst & SIEM Specialist | Threat Detection & Incident Response
          </h2>
          <p className="max-w-2xl text-pretty text-muted-foreground md:text-lg">
            Dedicated SOC Analyst with 3+ years of experience in security operations, threat detection, and incident
            response. Proven ability to reduce response times by 40% through automation and playbook development.
          </p>
          <div className="flex items-center gap-3">
            <Button className="bg-secondary text-secondary-foreground hover:opacity-90" asChild>
              <a href="#projects">Explore Projects</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>

        <div className="flex-shrink-0 order-first md:order-last">
          <div className="relative">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
              <img
                src="/professional-headshot-of-cybersecurity-analyst-in-.jpg"
                alt="Gowtham Chennavaram - SOC Analyst"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
