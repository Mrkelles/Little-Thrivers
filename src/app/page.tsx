
import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { AboutSection } from '@/components/AboutSection'
import { ServicesSection } from '@/components/ServicesSection'
import { GallerySection } from '@/components/GallerySection'
import { AIAssistant } from '@/components/AIAssistant'
import { ContactSection } from '@/components/ContactSection'
import { Heart } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-primary/30 overflow-x-hidden">
      <Navigation />
      
      <div className="space-y-0">
        <Hero />
        <AboutSection />
        <ServicesSection />
        <GallerySection />
        <AIAssistant />
        <ContactSection />
      </div>

      <footer className="py-12 bg-white text-center">
        <div className="container mx-auto px-4">
          <p className="font-display text-2xl text-primary mb-4">Little Thrivers Dayhome</p>
          <div className="flex items-center justify-center gap-2 text-foreground/50 text-sm mb-4">
            <span>Made with</span>
            <Heart className="text-accent fill-accent" size={14} />
            <span>in Calgary, Alberta</span>
          </div>
          <div className="text-foreground/30 text-xs">
            © 2026 Calgary DayHome Connect. All Rights Reserved.
          </div>
        </div>
      </footer>
    </main>
  )
}
