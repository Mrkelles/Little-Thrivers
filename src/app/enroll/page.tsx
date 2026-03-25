"use client"

import { useState } from 'react'
import { Navigation } from '@/components/Navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Heart, ArrowLeft, Star, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { useToast } from '@/hooks/use-toast'
import { submitEnrollmentAction } from '@/app/actions/enroll'

export default function EnrollPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [preferredContact, setPreferredContact] = useState('')
  const [careType, setCareType] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    // Add select values manually since Radix Select doesn't use native name attribute easily
    formData.append('preferredContact', preferredContact)
    formData.append('careType', careType)

    const result = await submitEnrollmentAction(formData)

    setIsSubmitting(false)

    if (result.success) {
      toast({
        title: "Inquiry Sent!",
        description: "We've received your enrollment request. We'll be in touch soon!",
      })
      // Optional: Reset form or redirect
      e.currentTarget.reset()
    } else {
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: result.error || "There was a problem sending your inquiry. Please try again.",
      })
    }
  }

  return (
    <main className="min-h-screen bg-background selection:bg-primary/30">
      <Navigation />
      
      <div className="pt-40 pb-24 container mx-auto px-4">
        <Link href="/" className="inline-flex items-center text-primary font-bold mb-8 hover:underline group">
          <ArrowLeft size={20} className="mr-2 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mx-auto mb-4 animate-float">
              <Star size={32} className="fill-secondary" />
            </div>
            <h1 className="font-display text-4xl md:text-6xl text-primary mb-4">Join Our Family</h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Fill out the form below to start the enrollment process for your little thriver. 
              We can't wait to meet you!
            </p>
          </div>

          <Card className="border-2 border-primary/20 shadow-2xl rounded-[3rem] overflow-hidden bg-white/80 backdrop-blur-sm relative">
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow/10 rounded-full blur-3xl pointer-events-none" />
             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-teal/10 rounded-full blur-3xl pointer-events-none" />

             <CardHeader className="bg-primary/5 p-8 md:p-12 text-center border-b border-primary/10">
                <CardTitle className="font-headline text-3xl text-primary">Enrollment Inquiry</CardTitle>
                <CardDescription className="text-lg">Please provide some details about your child and your childcare needs.</CardDescription>
             </CardHeader>

             <CardContent className="p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Parent Information */}
                  <div className="space-y-6">
                    <h3 className="font-headline text-xl text-secondary flex items-center gap-2">
                      <Heart size={20} className="fill-secondary" />
                      Parent Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="parentName" className="font-bold ml-1">Full Name</Label>
                        <Input name="parentName" id="parentName" required placeholder="John or Jane Doe" className="rounded-2xl h-12 border-primary/10 focus-visible:ring-primary" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="font-bold ml-1">Email Address</Label>
                        <Input name="email" id="email" type="email" required placeholder="email@example.com" className="rounded-2xl h-12 border-primary/10 focus-visible:ring-primary" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="font-bold ml-1">Phone Number</Label>
                        <Input name="phone" id="phone" type="tel" required placeholder="(403) 555-0123" className="rounded-2xl h-12 border-primary/10 focus-visible:ring-primary" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="preferredContact" className="font-bold ml-1">Preferred Contact Method</Label>
                        <Select onValueChange={setPreferredContact}>
                          <SelectTrigger id="preferredContact" className="rounded-2xl h-12 border-primary/10">
                            <SelectValue placeholder="Select one" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="email">Email</SelectItem>
                            <SelectItem value="phone">Phone Call</SelectItem>
                            <SelectItem value="text">Text Message</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Child Information */}
                  <div className="space-y-6 pt-4">
                    <h3 className="font-headline text-xl text-yellow flex items-center gap-2">
                      <Sparkles size={20} className="fill-yellow" />
                      Child Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="childName" className="font-bold ml-1">Child's Name</Label>
                        <Input name="childName" id="childName" required placeholder="Child's full name" className="rounded-2xl h-12 border-primary/10 focus-visible:ring-primary" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="childAge" className="font-bold ml-1">Child's Age / DOB</Label>
                        <Input name="childAge" id="childAge" required placeholder="e.g. 18 months or Jan 15, 2023" className="rounded-2xl h-12 border-primary/10 focus-visible:ring-primary" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="startDate" className="font-bold ml-1">Desired Start Date</Label>
                        <Input name="startDate" id="startDate" type="date" required className="rounded-2xl h-12 border-primary/10 focus-visible:ring-primary" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="careType" className="font-bold ml-1">Type of Care Needed</Label>
                        <Select onValueChange={setCareType}>
                          <SelectTrigger id="careType" className="rounded-2xl h-12 border-primary/10">
                            <SelectValue placeholder="Select frequency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="fulltime">Full-Time (Mon-Fri)</SelectItem>
                            <SelectItem value="parttime">Part-Time (3 Days/Week)</SelectItem>
                            <SelectItem value="casual">Casual / Drop-in</SelectItem>
                            <SelectItem value="other">Other (Please specify below)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="space-y-4 pt-4">
                    <Label htmlFor="message" className="font-bold ml-1">Additional Information or Questions</Label>
                    <Textarea 
                      name="message"
                      id="message" 
                      placeholder="Tell us about your child's personality, routines, allergies, or any specific questions you have." 
                      className="rounded-3xl min-h-[150px] border-primary/10 focus-visible:ring-primary" 
                    />
                  </div>

                  <div className="flex items-start gap-3 pt-2">
                    <Checkbox id="consent" required className="mt-1" />
                    <Label htmlFor="consent" className="text-sm text-foreground/60 leading-tight cursor-pointer">
                      I understand that submitting this inquiry does not guarantee enrollment. A provider will contact me to discuss availability and next steps.
                    </Label>
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full h-16 rounded-full bg-primary hover:bg-primary/90 text-white font-bold text-xl shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    {isSubmitting ? "Sending Inquiry..." : "Submit Enrollment Inquiry"}
                  </Button>
                </form>
             </CardContent>
          </Card>
        </div>
      </div>

      <footer className="py-12 bg-white text-center border-t border-primary/5">
        <div className="container mx-auto px-4">
          <p className="font-display text-2xl text-primary mb-4">Little Thrivers Dayhome</p>
          <div className="flex items-center justify-center gap-2 text-foreground/50 text-sm mb-4">
            <span>Made with</span>
            <Heart className="text-accent fill-accent" size={14} />
            <span>in Calgary, Alberta</span>
          </div>
          <div className="text-foreground/30 text-xs">
            © 2025 Calgary DayHome Connect. All Rights Reserved.
          </div>
        </div>
      </footer>
    </main>
  )
}