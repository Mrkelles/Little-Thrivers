
"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { aiParentInformationTool } from '@/ai/flows/ai-parent-information-tool'
import { Sparkles, MessageCircle, Send, Loader2, Mic } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Conversation } from './Conversation'

export function AIAssistant() {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!question.trim()) return
    
    setLoading(true)
    try {
      const res = await aiParentInformationTool({ question })
      setAnswer(res.answer)
    } catch (error) {
      setAnswer("Sorry, I'm having trouble connecting right now. Please try again or contact us directly!")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="ai-tool" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="border-2 border-primary/20 shadow-xl rounded-[2.5rem] overflow-hidden bg-white/80 backdrop-blur-sm">
            <CardHeader className="bg-primary/5 pb-8 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white mx-auto mb-4 animate-float">
                <Sparkles size={32} />
              </div>
              <CardTitle className="font-headline text-3xl text-primary">Little Thrivers AI Assistant</CardTitle>
              <CardDescription className="text-lg">
                Ask me anything about our policies, fees, or daily routines!
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">

              <div className="flex justify-center mb-8">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="rounded-full border-2 border-primary text-primary hover:bg-primary/10 font-bold px-8 py-6 h-auto transition-all hover:scale-105">
                      <Mic className="mr-2" size={20} />
                      Try Voice Conversation
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[500px] border-none bg-transparent shadow-none p-0">
                    <div className="bg-white rounded-[3rem] p-8 shadow-2xl overflow-hidden border-4 border-primary/20 relative">
                      <div className="absolute -top-12 -right-12 w-24 h-24 bg-yellow/20 rounded-full blur-2xl" />
                      <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-teal/10 rounded-full blur-2xl" />
                      
                      <DialogHeader className="mb-6 relative z-10">
                        <DialogTitle className="font-headline text-3xl text-primary text-center">AI Receptionist</DialogTitle>
                        <p className="text-center text-sm text-foreground/60 font-medium">Ask us anything about enrollment, programs, or hours!</p>
                      </DialogHeader>
                      
                      <div className="relative z-10">
                        <Conversation />
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-primary/10"></span>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-foreground/40 font-bold tracking-widest">Or Type Your Question</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="relative">
                  <Input 
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Example: What are your hours? / Tell me about your fees."
                    className="pr-12 h-14 rounded-full border-2 border-primary/20 focus-visible:ring-primary bg-white"
                  />
                  <Button 
                    type="submit" 
                    disabled={loading}
                    size="icon"
                    className="absolute right-2 top-2 rounded-full h-10 w-10 bg-primary hover:bg-primary/90"
                  >
                    {loading ? <Loader2 className="animate-spin" /> : <Send size={20} />}
                  </Button>
                </div>
              </form>

              {(answer || loading) && (
                <div className="mt-8 p-6 rounded-3xl bg-secondary/5 border-2 border-secondary/10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white">
                      <MessageCircle size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-secondary mb-2">Our AI Assistant Says:</p>
                      {loading ? (
                        <div className="flex gap-2">
                          <div className="w-2 h-2 bg-secondary/40 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-secondary/40 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                          <div className="w-2 h-2 bg-secondary/40 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                        </div>
                      ) : (
                        <p className="text-foreground/80 leading-relaxed whitespace-pre-wrap">
                          {answer}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
