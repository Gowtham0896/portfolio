"use client"

import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"

type SpeakButtonProps = {
  text: string
  label?: string
  className?: string
}

export default function SpeakButton({ text, label = "Speak", className }: SpeakButtonProps) {
  const [speaking, setSpeaking] = useState(false)
  const canSpeak = useMemo(() => typeof window !== "undefined" && "speechSynthesis" in window, [])

  const onClick = () => {
    if (!canSpeak) return
    const synth = window.speechSynthesis

    if (speaking) {
      synth.cancel()
      setSpeaking(false)
      return
    }

    const utter = new SpeechSynthesisUtterance(text)
    const voices = synth.getVoices()
    const voice =
      voices.find((v) => /en-US/i.test(v.lang) && /Google|Microsoft|Apple/i.test(v.name)) ||
      voices.find((v) => /en/i.test(v.lang)) ||
      null
    if (voice) utter.voice = voice
    utter.rate = 1.0
    utter.pitch = 1.0
    utter.onend = () => setSpeaking(false)
    utter.onerror = () => setSpeaking(false)

    setSpeaking(true)
    synth.cancel()
    synth.speak(utter)
  }

  return (
    <Button
      type="button"
      onClick={onClick}
      aria-pressed={speaking}
      variant="secondary"
      className={`inline-flex items-center gap-2 ${className || ""}`}
    >
      {/* small equalizer bars for visual feedback */}
      <span className="flex items-end gap-[2px]" aria-hidden="true">
        <span className={`h-3 w-[3px] bg-secondary ${speaking ? "animate-[pulse_0.6s_ease-in-out_infinite]" : ""}`} />
        <span
          className={`h-4 w-[3px] bg-secondary ${speaking ? "animate-[pulse_0.7s_ease-in-out_infinite]" : ""}`}
          style={{ animationDelay: speaking ? "0.1s" : undefined }}
        />
        <span
          className={`h-2 w-[3px] bg-secondary ${speaking ? "animate-[pulse_0.5s_ease-in-out_infinite]" : ""}`}
          style={{ animationDelay: speaking ? "0.2s" : undefined }}
        />
      </span>
      <span className="text-sm">{speaking ? "Speaking…" : label}</span>
    </Button>
  )
}
