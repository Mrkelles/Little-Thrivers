
"use client"

import { Clock, BookOpen, Utensils, Heart } from 'lucide-react'

export function ServicesSection() {
  const programs = [
    {
      title: "Play-Based Learning",
      description: "Focusing on curiosity and discovery through structured and unstructured play activities.",
      icon: BookOpen,
      color: "bg-yellow",
      textColor: "text-yellow"
    },
    {
      title: "Nutritious Meals",
      description: "Healthy, balanced breakfast, lunch, and snacks prepared fresh daily in our kitchen.",
      icon: Utensils,
      color: "bg-teal",
      textColor: "text-teal"
    },
    {
      title: "Daily Schedule",
      description: "Consistent routines including story time, circle time, naps, and outdoor play.",
      icon: Clock,
      color: "bg-secondary",
      textColor: "text-secondary"
    },
    {
      title: "Emotional Support",
      description: "Focused individual attention to help children navigate social interactions and self-regulation.",
      icon: Heart,
      color: "bg-accent",
      textColor: "text-accent"
    }
  ]

  return (
    <section id="programs" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl text-yellow mb-4">Our Programs & Care</h2>
          <p className="text-foreground/70">
            We provide comprehensive care tailored to different developmental stages, ensuring your child receives the best foundation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-b-8 group"
              style={{ borderBottomColor: `hsl(var(--${program.color.split('-')[1]}))` }}
            >
              <div className={`${program.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:rotate-6 transition-transform`}>
                <program.icon size={28} />
              </div>
              <h3 className={`font-headline text-xl mb-4 ${program.textColor}`}>{program.title}</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                {program.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 p-8 md:p-12 bg-white/40 border-2 border-dashed border-secondary/30 rounded-3xl relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-headline text-2xl text-secondary mb-6">A Typical Day</h3>
              <div className="space-y-4">
                {[
                  { time: "07:30 - 08:30", activity: "Arrival & Free Play" },
                  { time: "09:00 - 09:30", activity: "Healthy Morning Snack" },
                  { time: "10:00 - 11:30", activity: "Circle Time & Outdoor Play" },
                  { time: "11:30 - 12:30", activity: "Nutritious Lunch" },
                  { time: "12:30 - 02:30", activity: "Rest & Nap Time" },
                  { time: "03:00 - 05:30", activity: "Art, Snacks & Departure" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-secondary/10 pb-2">
                    <span className="font-bold text-secondary text-sm">{item.time}</span>
                    <span className="text-foreground/80 text-sm">{item.activity}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="w-full h-64 rounded-2xl bg-secondary/5 border-2 border-secondary/10 flex items-center justify-center p-8 text-center italic text-secondary font-display text-xl">
                "Play is the highest form of research." — Albert Einstein
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
