
"use client"

import Image from 'next/image'
import { PlaceHolderImages } from '@/lib/placeholder-images'
import { Button } from '@/components/ui/button'
import { DoodleDecor, SwirlDoodle } from './DoodleDecor'

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-play')

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Text */}
        <div className="relative z-10">
          <div className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary font-bold text-sm mb-6">
            ✨ Now Enrolling in Calgary!
          </div>
          <h1 className="font-display text-5xl md:text-7xl mb-6 leading-tight">
            <span className="text-primary block">Caring Hands,</span>
            <span className="text-secondary block">Happy Hearts.</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-lg leading-relaxed">
            A nurturing, play-based home daycare where every child is encouraged to thrive through exploration, discovery, and individualized attention.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white font-bold px-8 py-6 text-lg shadow-lg">
              Visit Us Today
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-2 border-secondary text-secondary hover:bg-secondary/10 font-bold px-8 py-6 text-lg">
              Our Philosophy
            </Button>
          </div>
          
          <SwirlDoodle color="#F5C518" size={60} className="absolute -left-12 bottom-0 opacity-40 rotate-12" />
        </div>

        {/* Right Side: Image with organic clip */}
        <div className="relative">
          <div className="relative w-full aspect-square max-w-xl mx-auto">
            <div className="absolute inset-0 bg-yellow rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative z-10 w-full h-full border-8 border-white rounded-[40%_60%_70%_30%/40%_50%_60%_50%] overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              {heroImage && (
                <Image 
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  fill
                  className="object-cover"
                  priority
                  data-ai-hint={heroImage.imageHint}
                />
              )}
            </div>
            {/* Floating Accents */}
            <DoodleDecor color="#5BC8C0" size={80} className="absolute -top-10 -right-10 z-20" />
            <div className="absolute -bottom-6 -left-6 bg-accent text-white p-4 rounded-2xl shadow-xl z-20 rotate-[-5deg]">
              <p className="font-display text-xl leading-none">Safe & Secure</p>
              <p className="text-xs opacity-90 mt-1 font-body">ECE Certified Care</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background blobs */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-teal/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow/10 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  )
}
