
"use client"

import Image from 'next/image'
import { PlaceHolderImages } from '@/lib/placeholder-images'
import { DotCluster } from './DoodleDecor'
import { Check } from 'lucide-react'

export function AboutSection() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-provider')

  return (
    <section id="about" className="py-24 relative bg-white/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute -inset-4 bg-purple/10 rounded-3xl rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-xl">
                {aboutImage && (
                  <Image 
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={aboutImage.imageHint}
                  />
                )}
              </div>
              <DotCluster color="#7B5EA7" className="absolute -bottom-8 -left-8" />
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <h2 className="font-headline text-3xl md:text-4xl text-purple mb-6">About Our Dayhome</h2>
            <p className="text-xl text-foreground/90 font-bold mb-6 font-display">
              Nurturing small minds in a big-hearted home environment.
            </p>
            <div className="space-y-6 text-foreground/80 leading-relaxed">
              <p>
                At Calgary DayHome Connect, we believe that children thrive when they feel safe, loved, and heard. Our philosophy centers on child-led, play-based learning that fosters social, emotional, and cognitive growth.
              </p>
              <p>
                Founded by an Early Childhood Educator (ECE) with over 10 years of experience, we provide a structured yet flexible environment that prepares children for school and for life.
              </p>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                {[
                  "ECE Certified Provider",
                  "First Aid & CPR Certified",
                  "Nutritious Home-Cooked Meals",
                  "Daily Outdoor Exploration",
                  "Small Group Sizes",
                  "Clear Parent Communication"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple/10 flex items-center justify-center text-purple">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span className="font-semibold text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
