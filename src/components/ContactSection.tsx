
"use client"

import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="font-headline text-3xl md:text-4xl text-primary mb-6">Contact Us</h2>
            <p className="text-foreground/70 mb-10 text-lg">
              We'd love to hear from you! Whether you have a question or want to schedule a tour, feel free to reach out.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Phone</h4>
                  <p className="text-foreground/80">(403) 555-0123</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Email</h4>
                  <p className="text-foreground/80">hello@calgarydayhome.com</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Location</h4>
                  <p className="text-foreground/80">SW Calgary, Alberta, T3H 2M4</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Operating Hours</h4>
                  <p className="text-foreground/80">Mon - Fri: 7:30 AM - 5:30 PM</p>
                </div>
              </div>
            </div>

            {/* Placeholder Map */}
            <div className="mt-12 rounded-3xl overflow-hidden h-64 bg-muted relative border-4 border-white shadow-xl rotate-[-1deg]">
              <div className="absolute inset-0 flex items-center justify-center bg-primary/5 text-primary/40 p-8 text-center italic">
                Interactive Map: SW Calgary Community Area
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background rounded-[3rem] p-8 md:p-12 shadow-sm border-2 border-primary/10 relative">
             <div className="absolute -top-6 -right-6 w-16 h-16 bg-yellow rounded-full z-[-1]"></div>
             <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-teal/20 rounded-full z-[-1]"></div>
             
             <h3 className="font-headline text-2xl mb-8">Send an Inquiry</h3>
             <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold pl-2">Parent Name</label>
                    <Input placeholder="Your full name" className="rounded-2xl h-12 border-primary/10 focus-visible:ring-primary" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold pl-2">Email Address</label>
                    <Input type="email" placeholder="email@example.com" className="rounded-2xl h-12 border-primary/10 focus-visible:ring-primary" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold pl-2">Child's Age</label>
                  <Input placeholder="e.g. 2 years old" className="rounded-2xl h-12 border-primary/10 focus-visible:ring-primary" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold pl-2">Desired Start Date</label>
                  <Input type="date" className="rounded-2xl h-12 border-primary/10 focus-visible:ring-primary" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold pl-2">Message</label>
                  <Textarea placeholder="Tell us about your child's needs or any questions you have..." className="rounded-2xl min-h-[120px] border-primary/10 focus-visible:ring-primary" />
                </div>
                <Button className="w-full h-14 rounded-full bg-primary hover:bg-primary/90 text-white font-bold text-lg shadow-lg">
                  Submit Inquiry
                </Button>
             </form>
          </div>
        </div>
      </div>
      
      <div className="footer-stripe absolute bottom-0 left-0"></div>
    </section>
  )
}
