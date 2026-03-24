
"use client"

import React from 'react'

export function DoodleDecor({ color = "currentColor", size = 40, className = "" }: { color?: string, size?: number, className?: string }) {
  return (
    <div className={`pointer-events-none ${className}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 50C20 33.4315 33.4315 20 50 20C66.5685 20 80 33.4315 80 50C80 66.5685 66.5685 80 50 80C33.4315 80 20 66.5685 20 50ZM28 50C28 62.1503 37.8497 72 50 72C62.1503 72 72 62.1503 72 50C72 37.8497 62.1503 28 50 28C37.8497 28 28 37.8497 28 50Z" 
              stroke={color} strokeWidth="4" strokeLinecap="round" strokeDasharray="10 15" />
        <path d="M50 40C50 45.5228 45.5228 50 40 50C34.4772 50 30 45.5228 30 40" stroke={color} strokeWidth="4" strokeLinecap="round" />
        <circle cx="70" cy="30" r="5" fill={color} />
      </svg>
    </div>
  )
}

export function DotCluster({ color = "currentColor", className = "" }: { color?: string, className?: string }) {
  return (
    <div className={`flex gap-1 pointer-events-none ${className}`}>
      {[1, 2, 3, 4].map(i => (
        <div key={i} className="rounded-full" style={{ width: i * 2 + 4, height: i * 2 + 4, backgroundColor: color }} />
      ))}
    </div>
  )
}

export function SwirlDoodle({ color = "currentColor", size = 40, className = "" }: { color?: string, size?: number, className?: string }) {
  return (
    <div className={`pointer-events-none animate-float ${className}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 80C40 60 60 100 80 80" stroke={color} strokeWidth="6" strokeLinecap="round" />
        <path d="M30 30C50 10 70 50 90 30" stroke={color} strokeWidth="6" strokeLinecap="round" />
      </svg>
    </div>
  )
}
