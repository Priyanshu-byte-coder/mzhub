'use client'

import { useEffect } from 'react'
import { renderCanvas } from './canvas'

export default function AnimatedCanvas() {
  useEffect(() => {
    // Initialize canvas animation
    renderCanvas()
    
    // Cleanup function
    return () => {
      // Stop animation when component unmounts
      const canvas = document.getElementById('canvas') as HTMLCanvasElement
      if (canvas) {
        const ctx = canvas.getContext('2d') as any
        if (ctx) {
          ctx.running = false
        }
      }
    }
  }, [])

  return (
    <canvas
      id="canvas"
      className="absolute inset-0 w-full h-full pointer-events-none z-10"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}
