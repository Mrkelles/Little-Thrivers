
"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'AI Assistant', href: '#ai-tool' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-display text-2xl md:text-3xl text-primary font-bold tracking-tight">
          Little Thrivers
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-sm font-semibold hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Button className="rounded-full bg-primary hover:bg-primary/90 text-white font-bold px-6">
            Enroll Now
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-primary/10 p-4 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {navLinks.map(link => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-lg font-bold text-foreground/80 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button className="w-full rounded-full bg-primary hover:bg-primary/90 text-white font-bold">
            Enroll Now
          </Button>
        </div>
      )}
    </nav>
  )
}
