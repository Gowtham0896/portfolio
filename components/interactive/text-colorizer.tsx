"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

type Props = {
  selector?: string
  color?: string
}

/**
 * TextColorizer
 * - Wraps each word in spans with a single professional color.
 * - Skips nav/code/interactive elements to avoid breaking UX.
 * - Defaults to colorizing only inside <main>.
 */
export default function TextColorizer({ selector = "main", color = "text-blue-700" }: Props) {
  const pathname = usePathname()

  useEffect(() => {
    const COLORED_CLASS = "v0-colored-word"
    const container =
      (document.querySelector(selector) as HTMLElement | null) || (document.querySelector("main") as HTMLElement | null)
    if (!container) return

    const existingSpans = container.querySelectorAll(`.${COLORED_CLASS}`)
    existingSpans.forEach((span) => {
      const parent = span.parentNode
      if (parent) {
        parent.replaceChild(document.createTextNode(span.textContent || ""), span)
        parent.normalize()
      }
    })

    const oldColorSpans = container.querySelectorAll(
      'span[class*="text-cyan"], span[class*="text-green"], span[class*="text-yellow"], span[class*="text-pink"], span[class*="text-blue"], span[class*="text-slate"], span[class*="text-gray"], span[class*="text-purple"]',
    )
    oldColorSpans.forEach((span) => {
      const parent = span.parentNode
      if (parent) {
        parent.replaceChild(document.createTextNode(span.textContent || ""), span)
        parent.normalize()
      }
    })

    const SKIP_TAGS = new Set([
      "A",
      "BUTTON",
      "INPUT",
      "TEXTAREA",
      "SELECT",
      "CODE",
      "PRE",
      "KBD",
      "SAMP",
      "SVG",
      "SCRIPT",
      "STYLE",
      "CANVAS",
      "NAV",
      "FOOTER",
    ])

    const MAX_NODES = 2000
    let processed = 0

    const shouldSkipElement = (el: Element | null) => {
      if (!el) return true
      if (SKIP_TAGS.has(el.tagName)) return true
      if (el.closest('.no-colorize,[data-no-colorize="true"]')) return true
      return false
    }

    const createWordSpan = (word: string) => {
      const span = document.createElement("span")
      span.className = `${COLORED_CLASS} ${color} font-medium`
      span.style.cssText = `text-shadow: 0 1px 2px rgba(0,0,0,0.1) !important; font-weight: 500 !important;`
      span.textContent = word
      return span
    }

    const splitTextNode = (textNode: Text) => {
      const parent = textNode.parentElement
      if (!parent || shouldSkipElement(parent)) return
      const raw = textNode.nodeValue ?? ""
      if (!raw.trim()) return

      const tokens = raw.split(/(\s+)/)
      const frag = document.createDocumentFragment()
      for (const token of tokens) {
        if (!token) continue
        if (/^\s+$/.test(token)) {
          frag.appendChild(document.createTextNode(token))
        } else {
          frag.appendChild(createWordSpan(token))
        }
      }
      parent.replaceChild(frag, textNode)
    }

    const walker = document.createTreeWalker(
      container,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode(node) {
          if (processed >= MAX_NODES) return NodeFilter.FILTER_REJECT
          const parent = (node as Text).parentElement
          if (!parent || shouldSkipElement(parent)) return NodeFilter.FILTER_REJECT
          const style = parent.ownerDocument?.defaultView?.getComputedStyle(parent)
          if (!style || style.visibility === "hidden" || style.display === "none") {
            return NodeFilter.FILTER_REJECT
          }
          const v = (node.nodeValue ?? "").trim()
          if (v.length < 2) return NodeFilter.FILTER_REJECT
          return NodeFilter.FILTER_ACCEPT
        },
      } as any,
      false,
    )

    const nodes: Text[] = []
    let current = walker.nextNode()
    while (current && processed < MAX_NODES) {
      if (current.nodeType === Node.TEXT_NODE) {
        nodes.push(current as Text)
        processed++
      }
      current = walker.nextNode()
    }

    for (const n of nodes) splitTextNode(n)
  }, [selector, color, pathname])

  return null
}
