"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function BackButton({ label = "Back" }: { label?: string }) {
  const router = useRouter()
  const handleClick = () => {
    try {
      // go back if possible; fall back to home
      if (typeof window !== "undefined" && window.history.length > 1) {
        router.back()
      } else {
        router.push("/")
      }
    } catch {
      router.push("/")
    }
  }

  return (
    <div className="flex items-center gap-2">
      <Button variant="outline" onClick={handleClick} aria-label="Go back" className="min-w-20 bg-transparent">
        {label}
      </Button>
      <Link href="/" className="text-sm underline text-foreground/70 hover:text-foreground" aria-label="Go to home">
        Home
      </Link>
    </div>
  )
}
