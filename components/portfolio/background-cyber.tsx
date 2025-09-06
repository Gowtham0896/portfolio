"use client"

import { useEffect, useRef } from "react"

// Enhanced cybersecurity-themed animated background
// Matrix rain, security nodes, packet trails, and glitch effects
export default function BackgroundCyber() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const onResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
      initMatrix()
    }
    window.addEventListener("resize", onResize)

    const matrixChars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン"
    const fontSize = 14
    const columns = Math.floor(width / fontSize)
    let drops: number[] = []

    const initMatrix = () => {
      drops = []
      for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * height
      }
    }
    initMatrix()

    const nodeCount = prefersReduced ? 25 : 60
    const securityNodes: {
      x: number
      y: number
      vx: number
      vy: number
      type: "shield" | "lock" | "eye" | "warning"
      pulse: number
      pulseSpeed: number
    }[] = []

    for (let i = 0; i < nodeCount; i++) {
      securityNodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (prefersReduced ? 0.3 : 0.8),
        vy: (Math.random() - 0.5) * (prefersReduced ? 0.3 : 0.8),
        type: ["shield", "lock", "eye", "warning"][Math.floor(Math.random() * 4)] as any,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.03,
      })
    }

    const packets: {
      x: number
      y: number
      targetX: number
      targetY: number
      progress: number
      color: string
    }[] = []

    const createPacket = () => {
      if (packets.length < (prefersReduced ? 3 : 8)) {
        const startNode = securityNodes[Math.floor(Math.random() * securityNodes.length)]
        const endNode = securityNodes[Math.floor(Math.random() * securityNodes.length)]
        if (startNode && endNode && startNode !== endNode) {
          packets.push({
            x: startNode.x,
            y: startNode.y,
            targetX: endNode.x,
            targetY: endNode.y,
            progress: 0,
            color: ["rgba(34, 197, 94, 0.8)", "rgba(37, 99, 235, 0.8)", "rgba(239, 68, 68, 0.6)"][
              Math.floor(Math.random() * 3)
            ],
          })
        }
      }
    }

    let glitchTime = 0
    let nextGlitch = Math.random() * 300 + 200

    const drawSecurityIcon = (x: number, y: number, type: string, size: number, alpha: number) => {
      ctx.save()
      ctx.globalAlpha = alpha
      ctx.strokeStyle = type === "warning" ? "rgba(239, 68, 68, 0.8)" : "rgba(34, 197, 94, 0.8)"
      ctx.fillStyle = type === "warning" ? "rgba(239, 68, 68, 0.3)" : "rgba(34, 197, 94, 0.3)"
      ctx.lineWidth = 1.5

      switch (type) {
        case "shield":
          ctx.beginPath()
          ctx.moveTo(x, y - size)
          ctx.lineTo(x - size * 0.7, y - size * 0.3)
          ctx.lineTo(x - size * 0.7, y + size * 0.3)
          ctx.lineTo(x, y + size)
          ctx.lineTo(x + size * 0.7, y + size * 0.3)
          ctx.lineTo(x + size * 0.7, y - size * 0.3)
          ctx.closePath()
          ctx.fill()
          ctx.stroke()
          break
        case "lock":
          ctx.strokeRect(x - size * 0.5, y - size * 0.2, size, size * 0.8)
          ctx.beginPath()
          ctx.arc(x, y - size * 0.2, size * 0.3, Math.PI, 0, false)
          ctx.stroke()
          break
        case "eye":
          ctx.beginPath()
          ctx.ellipse(x, y, size * 0.8, size * 0.4, 0, 0, Math.PI * 2)
          ctx.stroke()
          ctx.beginPath()
          ctx.arc(x, y, size * 0.3, 0, Math.PI * 2)
          ctx.fill()
          break
        case "warning":
          ctx.beginPath()
          ctx.moveTo(x, y - size)
          ctx.lineTo(x - size * 0.8, y + size * 0.6)
          ctx.lineTo(x + size * 0.8, y + size * 0.6)
          ctx.closePath()
          ctx.fill()
          ctx.stroke()
          // Exclamation mark
          ctx.fillStyle = "rgba(255, 255, 255, 0.9)"
          ctx.fillRect(x - 1, y - size * 0.4, 2, size * 0.6)
          ctx.beginPath()
          ctx.arc(x, y + size * 0.4, 1.5, 0, Math.PI * 2)
          ctx.fill()
          break
      }
      ctx.restore()
    }

    const draw = () => {
      const gradient = ctx.createLinearGradient(0, 0, 0, height)
      gradient.addColorStop(0, "rgba(2, 6, 23, 1)")
      gradient.addColorStop(0.5, "rgba(15, 23, 42, 1)")
      gradient.addColorStop(1, "rgba(2, 6, 23, 1)")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)

      if (!prefersReduced) {
        ctx.fillStyle = "rgba(34, 197, 94, 0.8)" // green-500
        ctx.font = `${fontSize}px monospace`

        for (let i = 0; i < drops.length; i++) {
          const char = matrixChars[Math.floor(Math.random() * matrixChars.length)]
          const x = i * fontSize
          const y = drops[i] * fontSize

          ctx.fillStyle = "rgba(34, 197, 94, 0.8)"
          ctx.fillText(char, x, y)

          // Fade trail
          ctx.fillStyle = "rgba(34, 197, 94, 0.3)"
          ctx.fillText(matrixChars[Math.floor(Math.random() * matrixChars.length)], x, y - fontSize)

          if (y > height && Math.random() > 0.975) {
            drops[i] = 0
          }
          drops[i] += 0.5
        }
      }

      ctx.strokeStyle = "rgba(148, 163, 184, 0.08)"
      ctx.lineWidth = 1
      const gridSize = 60

      // Add glow effect to some grid lines
      if (!prefersReduced && Math.random() > 0.98) {
        ctx.shadowColor = "rgba(37, 99, 235, 0.5)"
        ctx.shadowBlur = 3
      }

      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
        ctx.stroke()
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
        ctx.stroke()
      }
      ctx.shadowBlur = 0

      for (let i = 0; i < securityNodes.length; i++) {
        const node = securityNodes[i]

        if (!prefersReduced) {
          node.x += node.vx
          node.y += node.vy
          node.pulse += node.pulseSpeed
        }

        if (node.x <= 0 || node.x >= width) node.vx *= -1
        if (node.y <= 0 || node.y >= height) node.vy *= -1

        const pulseAlpha = 0.4 + Math.sin(node.pulse) * 0.3
        const size = 8 + Math.sin(node.pulse) * 2

        drawSecurityIcon(node.x, node.y, node.type, size, pulseAlpha)

        for (let j = i + 1; j < securityNodes.length; j++) {
          const other = securityNodes[j]
          const dx = node.x - other.x
          const dy = node.y - other.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 150) {
            const alpha = (1 - dist / 150) * 0.2
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(other.x, other.y)

            // Different colors based on node types
            if (node.type === "warning" || other.type === "warning") {
              ctx.strokeStyle = `rgba(239, 68, 68, ${alpha})`
            } else {
              ctx.strokeStyle = `rgba(37, 99, 235, ${alpha})`
            }
            ctx.stroke()
          }
        }
      }

      if (!prefersReduced) {
        for (let i = packets.length - 1; i >= 0; i--) {
          const packet = packets[i]
          packet.progress += 0.02

          const currentX = packet.x + (packet.targetX - packet.x) * packet.progress
          const currentY = packet.y + (packet.targetY - packet.y) * packet.progress

          // Draw packet trail
          ctx.beginPath()
          ctx.arc(currentX, currentY, 3, 0, Math.PI * 2)
          ctx.fillStyle = packet.color
          ctx.fill()

          // Draw trail
          const trailLength = 5
          for (let t = 1; t <= trailLength; t++) {
            const trailProgress = Math.max(0, packet.progress - t * 0.02)
            const trailX = packet.x + (packet.targetX - packet.x) * trailProgress
            const trailY = packet.y + (packet.targetY - packet.y) * trailProgress
            const trailAlpha = ((trailLength - t) / trailLength) * 0.5

            ctx.beginPath()
            ctx.arc(trailX, trailY, 2 - t * 0.2, 0, Math.PI * 2)
            ctx.fillStyle = packet.color.replace(/[\d.]+\)/, `${trailAlpha})`)
            ctx.fill()
          }

          if (packet.progress >= 1) {
            packets.splice(i, 1)
          }
        }

        // Create new packets occasionally
        if (Math.random() > 0.97) {
          createPacket()
        }
      }

      if (!prefersReduced) {
        glitchTime++
        if (glitchTime > nextGlitch) {
          // Random glitch lines
          for (let i = 0; i < 3; i++) {
            const y = Math.random() * height
            const glitchHeight = 2 + Math.random() * 4
            ctx.fillStyle = Math.random() > 0.5 ? "rgba(239, 68, 68, 0.3)" : "rgba(34, 197, 94, 0.3)"
            ctx.fillRect(0, y, width, glitchHeight)
          }
          glitchTime = 0
          nextGlitch = Math.random() * 400 + 300
        }
      }
    }

    const loop = () => {
      draw()
      if (!prefersReduced) {
        rafRef.current = requestAnimationFrame(loop)
      }
    }

    draw()
    if (!prefersReduced) rafRef.current = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener("resize", onResize)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none fixed inset-0 z-[-1] h-full w-full" />
  )
}
