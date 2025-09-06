export type Project = {
  slug: string
  title: string
  summary: string
  bullets: string[]
}

export const projects: Project[] = [
  {
    slug: "soc-home-lab",
    title: "SOC Home Lab",
    summary:
      "Designed and deployed a hands-on SOC home lab integrating SIEMs, EDR, and IDS tools to simulate attacks, build detections, and strengthen threat hunting and log analysis skills.",
    bullets: [
      "Built and deployed a SOC home lab integrating Splunk, Elastic SIEM, Sysmon, and Security Onion to monitor and analyze Windows/Linux endpoints.",
      "Simulated real-world attacks with Kali Linux and Metasploit, creating custom SIEM detection rules and dashboards to enhance threat visibility.",
      "Implemented Suricata-based intrusion detection for comprehensive network traffic analysis, improving threat hunting and incident response skills",
    ],
  },
  {
    slug: "phishing-website-detection",
    title: "Phishing Website Detection",
    summary:
      "Built a high-accuracy phishing website detection system using ML and NLP, automating URL analysis and reducing manual review by 70%",
    bullets: [
      "Developed a machine learning model to detect phishing URIs with 98.5% accuracy using SVM and Random Forest",
      "Automated feature extraction and deployed NLP techniques to improve detection of zero-day phishing sites",
      "Tool processes 1,000+ URLs/hour, reducing manual review time by 70%",
    ],
  },
  {
    slug: "project-trishul-vuin-scan",
    title: "Project Trishul & Vuin Scan",
    summary:
      "Developed automated reconnaissance and vulnerability scanning tools using Python, Bash, and Nmap to streamline penetration testing and reduce manual effort by 50%.",
    bullets: [
      "Automated penetration testing workflows by building reconnaissance & vulnerability scanners",
      "Assessed 80+ endpoints for misconfigurations, CVEs, and open ports",
      "Integrated Nmap, Nikto, and custom scripts, cutting manual effort by 50%",
    ],
  },
  {
    slug: "tryhackme-hackerone",
    title: "TryHackMe & HackerOne",
    summary:
      "Gained hands-on cybersecurity expertise through top-ranked TryHackMe challenges and successful vulnerability reporting on HackerOne.",
    bullets: [
      "Completed 50+ cybersecurity rooms on TryHackMe with top 5% ranking",
      "Reported 3 valid security vulnerabilities through HackerOne bug bounty program",
      "Developed practical skills in web application security, network penetration testing, and digital forensics",
    ],
  },
]
