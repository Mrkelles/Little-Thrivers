
"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X, Sparkles } from 'lucide-react'
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
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Banner */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-center shadow-sm relative overflow-hidden group">
        <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />
        <div className="container mx-auto flex items-center justify-center gap-2 md:gap-4">
          <div className="flex items-center gap-2">
            <Sparkles size={14} className="animate-pulse hidden xs:block" />
            <p className="text-[10px] md:text-sm font-bold tracking-tight md:tracking-wide">
              Have questions? Talk to our AI receptionist!
            </p>
          </div>
          <Link 
            href="#ai-tool" 
            className="bg-white text-primary px-3 py-1 rounded-full text-[9px] md:text-xs font-black uppercase hover:bg-secondary hover:text-white transition-all shadow-sm hover:scale-105 active:scale-95"
          >
            Speak Now
          </Link>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-background/80 backdrop-blur-md border-b border-primary/10">
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
    </header>
  )
}
