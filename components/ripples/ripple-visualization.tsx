"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Play, Pause, RotateCcw } from "lucide-react"

export function RippleVisualization({ rippleId }: { rippleId: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [timeElapsed, setTimeElapsed] = useState(0)
  const animationRef = useRef<number>()

  // Animation parameters
  const maxRadius = 150
  const waveDuration = 5000 // ms
  const waveCount = 3
  const nodeCount = 50
  const nodes = useRef<Array<{ x: number; y: number; radius: number; color: string; wave: number }>>([])

  // Initialize nodes
  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      const rect = canvas.parentElement?.getBoundingClientRect()
      if (rect) {
        canvas.width = rect.width
        canvas.height = rect.height
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create nodes
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2

    // Create center node (you)
    nodes.current = [
      {
        x: centerX,
        y: centerY,
        radius: 15,
        color: "rgba(59, 130, 246, 1)", // blue
        wave: -1, // center node doesn't belong to a wave
      },
    ]

    // Create other nodes in concentric circles
    for (let wave = 0; wave < waveCount; wave++) {
      const nodesInWave = Math.floor(nodeCount / waveCount) + (wave === 0 ? nodeCount % waveCount : 0)
      const waveRadius = (wave + 1) * (maxRadius / waveCount)

      for (let i = 0; i < nodesInWave; i++) {
        const angle = (i / nodesInWave) * Math.PI * 2
        const jitter = Math.random() * 20 - 10 // Random offset
        const x = centerX + Math.cos(angle) * (waveRadius + jitter)
        const y = centerY + Math.sin(angle) * (waveRadius + jitter)

        // Different colors for different waves
        let color
        if (wave === 0) {
          color = "rgba(59, 130, 246, 0.8)" // blue
        } else if (wave === 1) {
          color = "rgba(168, 85, 247, 0.8)" // purple
        } else {
          color = "rgba(236, 72, 153, 0.8)" // pink
        }

        nodes.current.push({
          x,
          y,
          radius: 5 + Math.random() * 5,
          color,
          wave,
        })
      }
    }

    // Initial render
    drawVisualization(0)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [rippleId])

  // Animation loop
  useEffect(() => {
    if (!isPlaying) return

    const startTime = performance.now() - timeElapsed * waveDuration

    const animate = (timestamp: number) => {
      const elapsed = timestamp - startTime
      const currentProgress = Math.min(elapsed / (waveDuration * waveCount), 1)

      setProgress(currentProgress)
      setTimeElapsed(elapsed / waveDuration)

      drawVisualization(currentProgress)

      if (currentProgress < 1) {
        animationRef.current = requestAnimationFrame(animate)
      } else {
        setIsPlaying(false)
      }
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isPlaying, timeElapsed])

  const drawVisualization = (progress: number) => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const centerX = canvas.width / 2
    const centerY = canvas.height / 2

    // Draw ripple waves
    const currentWave = Math.min(Math.floor(progress * waveCount), waveCount)
    const waveProgress = (progress * waveCount) % 1

    for (let i = 0; i < currentWave; i++) {
      const waveRadius = maxRadius * ((i + 1) / waveCount)
      const opacity = 0.2 * (1 - (currentWave - i - 1) / waveCount)

      ctx.beginPath()
      ctx.arc(centerX, centerY, waveRadius, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(59, 130, 246, ${opacity})`
      ctx.fill()
    }

    // Draw current expanding wave
    if (currentWave < waveCount) {
      const waveRadius = maxRadius * ((currentWave + waveProgress) / waveCount)

      ctx.beginPath()
      ctx.arc(centerX, centerY, waveRadius, 0, Math.PI * 2)
      ctx.fillStyle = "rgba(59, 130, 246, 0.3)"
      ctx.fill()
    }

    // Draw connections between nodes
    ctx.strokeStyle = "rgba(148, 163, 184, 0.2)"
    ctx.lineWidth = 1

    for (let i = 0; i < nodes.current.length; i++) {
      const node = nodes.current[i]

      // Only draw connections for nodes that are "activated" by the ripple
      if (node.wave === -1 || node.wave < currentWave || (node.wave === currentWave && Math.random() < waveProgress)) {
        // Connect to center
        if (node.wave !== -1) {
          ctx.beginPath()
          ctx.moveTo(centerX, centerY)
          ctx.lineTo(node.x, node.y)
          ctx.stroke()
        }

        // Connect to other nodes in the same wave
        for (let j = i + 1; j < nodes.current.length; j++) {
          const otherNode = nodes.current[j]
          if (otherNode.wave === node.wave) {
            const dx = node.x - otherNode.x
            const dy = node.y - otherNode.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < maxRadius / 2) {
              ctx.beginPath()
              ctx.moveTo(node.x, node.y)
              ctx.lineTo(otherNode.x, otherNode.y)
              ctx.stroke()
            }
          }
        }
      }
    }

    // Draw nodes
    for (let i = 0; i < nodes.current.length; i++) {
      const node = nodes.current[i]

      // Only draw nodes that are "activated" by the ripple
      if (node.wave === -1 || node.wave < currentWave || (node.wave === currentWave && Math.random() < waveProgress)) {
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fillStyle = node.color
        ctx.fill()
      }
    }
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const resetAnimation = () => {
    setIsPlaying(false)
    setProgress(0)
    setTimeElapsed(0)
    drawVisualization(0)
  }

  const handleSliderChange = (value: number[]) => {
    const newProgress = value[0]
    setProgress(newProgress)
    setTimeElapsed(newProgress * waveCount)
    drawVisualization(newProgress)
  }

  return (
    <div className="h-full w-full flex flex-col">
      <div className="flex-1 relative">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      </div>
      <div className="mt-4 flex items-center gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={togglePlayPause}
          className="border-slate-700 text-slate-300 hover:bg-slate-700"
        >
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={resetAnimation}
          className="border-slate-700 text-slate-300 hover:bg-slate-700"
        >
          <RotateCcw className="h-4 w-4" />
        </Button>
        <div className="flex-1">
          <Slider value={[progress]} min={0} max={1} step={0.01} onValueChange={handleSliderChange} />
        </div>
        <div className="text-sm text-slate-400 w-16 text-right">{Math.round(timeElapsed * 100) / 100}s</div>
      </div>
    </div>
  )
}
