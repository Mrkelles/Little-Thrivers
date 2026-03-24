
"use client"

import Image from 'next/image'
import { PlaceHolderImages } from '@/lib/placeholder-images'
import { SwirlDoodle } from './DoodleDecor'

export function GallerySection() {
  const galleryImages = [
    { id: 'gallery-outdoor', shape: 'rounded-[60%_40%_30%_70%/60%_30%_70%_40%]', color: 'bg-teal' },
    { id: 'gallery-art', shape: 'rounded-[30%_70%_70%_30%/50%_60%_40%_50%]', color: 'bg-yellow' },
    { id: 'gallery-lunch', shape: 'rounded-[50%_50%_20%_80%/50%_20%_80%_50%]', color: 'bg-accent' },
    { id: 'environment-room', shape: 'rounded-[80%_20%_50%_50%/50%_50%_20%_80%]', color: 'bg-secondary' }
  ]

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-4xl text-teal mb-4">Our Happy Moments</h2>
          <p className="text-foreground/70 max-w-xl mx-auto">
            Take a peek into the daily adventures and safe environment we provide for our little thrivers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {galleryImages.map((item, idx) => {
            const img = PlaceHolderImages.find(p => p.id === item.id)
            if (!img) return null
            return (
              <div key={idx} className="relative group">
                <div className={`absolute -inset-2 ${item.color} opacity-20 blur-xl group-hover:opacity-40 transition-opacity`}></div>
                <div className={`relative aspect-square w-full overflow-hidden shadow-lg transform transition-transform duration-500 group-hover:scale-105 ${item.shape}`}>
                  <Image 
                    src={img.imageUrl}
                    alt={img.description}
                    fill
                    className="object-cover"
                    data-ai-hint={img.imageHint}
                  />
                </div>
              </div>
            )
          })}
        </div>
        
        <SwirlDoodle color="#5BC8C0" size={100} className="mx-auto mt-12 opacity-30" />
      </div>
    </section>
  )
}
