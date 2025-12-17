"use client"

import { ReactNode, ElementType, ComponentPropsWithoutRef } from "react"
import "./BlobButton.css"

interface BlobButtonProps {
  children: ReactNode
  onClick?: () => void
  className?: string
  as?: ElementType
  href?: string
  [key: string]: any
}

export const BlobButton = ({ 
  children, 
  onClick, 
  className = "", 
  as: Component = "button",
  ...props 
}: BlobButtonProps) => {
  return (
    <>
      <Component className={`blob-btn ${className}`} onClick={onClick} {...props}>
        {children}
        <span className="blob-btn__inner">
          <span className="blob-btn__blobs">
            <span className="blob-btn__blob"></span>
            <span className="blob-btn__blob"></span>
            <span className="blob-btn__blob"></span>
            <span className="blob-btn__blob"></span>
          </span>
        </span>
      </Component>

      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ display: 'none' }}>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
            <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
          </filter>
        </defs>
      </svg>
    </>
  )
}
