'use client';

import { useConversation } from '@elevenlabs/react';
import { useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Mic, MicOff, Volume2, Loader2, Radio } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Conversation() {
  const conversation = useConversation({
    onConnect: () => console.log('Connected'),
    onDisconnect: () => console.log('Disconnected'),
    onMessage: (message) => console.log('Message:', message),
    onError: (error) => console.error('Error:', error),
  });

  const getSignedUrl = async (): Promise<string> => {
    const response = await fetch("/api/get-signed-url");
    if (!response.ok) {
      throw new Error(`Failed to get signed url: ${response.statusText}`);
    }
    const { signedUrl } = await response.json();
    return signedUrl;
  };

  const startConversation = useCallback(async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      const signedUrl = await getSignedUrl();
      await conversation.startSession({
        signedUrl,
      });
    } catch (error) {
      console.error('Failed to start conversation:', error);
    }
  }, [conversation]);

  const stopConversation = useCallback(async () => {
    await conversation.endSession();
  }, [conversation]);

  const isConnected = conversation.status === 'connected';
  const isConnecting = conversation.status === 'connecting';

  return (
    <div className="flex flex-col items-center gap-6 mb-12 p-8 rounded-[2rem] bg-primary/5 border-2 border-dashed border-primary/20 relative overflow-hidden">
      {/* Decorative background pulse when active */}
      {isConnected && (
        <div className="absolute inset-0 bg-primary/5 animate-pulse pointer-events-none" />
      )}

      <div className="flex flex-col items-center text-center relative z-10">
        <div className={cn(
          "w-20 h-20 rounded-full flex items-center justify-center mb-4 transition-all duration-500 shadow-lg",
          isConnected ? "bg-secondary text-white scale-110 shadow-secondary/20" : "bg-primary/10 text-primary"
        )}>
          {isConnected ? (
            <div className="relative">
              <Volume2 size={40} className={cn(conversation.isSpeaking && "animate-bounce")} />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse" />
            </div>
          ) : isConnecting ? (
            <Loader2 size={40} className="animate-spin" />
          ) : (
            <Mic size={40} />
          )}
        </div>
        
        <h3 className="font-headline text-xl text-primary mb-1">
          {isConnected ? "Live Voice Chat" : isConnecting ? "Connecting..." : "Voice Assistant"}
        </h3>
        <p className="text-sm text-foreground/60 font-medium h-5">
          {isConnected 
            ? (conversation.isSpeaking ? "Agent is speaking..." : "Listening to you...") 
            : "Click start to talk with us!"}
        </p>
      </div>

      <div className="flex gap-3 relative z-10">
        {!isConnected ? (
          <Button
            onClick={startConversation}
            disabled={isConnecting}
            className="rounded-full bg-primary hover:bg-primary/90 text-white font-bold px-8 py-6 h-auto shadow-md transition-all hover:scale-105"
          >
            {isConnecting ? (
              <Loader2 className="mr-2 animate-spin" size={18} />
            ) : (
              <Mic className="mr-2" size={18} />
            )}
            Start Conversation
          </Button>
        ) : (
          <Button
            onClick={stopConversation}
            variant="destructive"
            className="rounded-full font-bold px-8 py-6 h-auto shadow-md transition-all hover:scale-105"
          >
            <MicOff className="mr-2" size={18} />
            Stop Conversation
          </Button>
        )}
      </div>

      {/* Visual Status Indicator */}
      <div className="flex items-center gap-2 mt-2 relative z-10">
        <div className={cn(
          "w-2 h-2 rounded-full",
          isConnected ? "bg-secondary animate-pulse" : "bg-foreground/20"
        )} />
        <span className="text-[10px] uppercase tracking-widest font-bold text-foreground/40">
          Status: {conversation.status}
        </span>
      </div>
    </div>
  );
}
