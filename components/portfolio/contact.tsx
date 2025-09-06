"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus("success")
        setStatusMessage(data.message)
        setFormData({ name: "", email: "", message: "" }) // Reset form
      } else {
        setSubmitStatus("error")
        setStatusMessage(data.error || "Failed to send message")
      }
    } catch (error) {
      setSubmitStatus("error")
      setStatusMessage("Network error. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-10 md:py-16">
      <div className="rounded-xl border bg-card p-6">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-2 text-muted-foreground">
          Interested in collaborating or learning more? Send a message and I'll get back to you.
        </p>

        <form className="mt-6 grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm">
              Name
            </label>
            <Input
              id="name"
              placeholder="Your name"
              className="bg-input"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="you@proton.me"
              className="bg-input"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="md:col-span-2 grid gap-2">
            <label htmlFor="message" className="text-sm">
              Message
            </label>
            <Textarea
              id="message"
              placeholder="How can I help?"
              className="min-h-28 bg-input"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="md:col-span-2">
            <Button
              type="submit"
              className="bg-secondary text-secondary-foreground hover:opacity-90"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>

            {submitStatus === "success" && <p className="mt-2 text-sm text-green-600">{statusMessage}</p>}
            {submitStatus === "error" && <p className="mt-2 text-sm text-red-600">{statusMessage}</p>}
          </div>
        </form>

        <div className="mt-4 text-sm text-muted-foreground">
          Or email:{" "}
          <a className="text-accent underline" href="mailto:cgowtham1508@gmail.com">
            cgowtham1508@gmail.com
          </a>
          <br />
          Phone: <span className="text-foreground">(302) 444-2783</span>
          <div className="mt-2 flex items-center gap-4">
            <a
              href="https://github.com/gowtham1508"
              className="underline hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/gowtham-chennavaram/"
              className="underline hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://tryhackme.com/p/gowtham1508"
              className="underline hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              TryHackMe
            </a>
            <a
              href="https://hackerone.com/p/gowtham1508"
              className="underline hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              HackerOne
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
