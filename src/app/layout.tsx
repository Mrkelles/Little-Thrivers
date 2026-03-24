
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Calgary DayHome Connect | Little Thrivers Dayhome',
  description: 'Warm, play-based learning and childcare in Calgary, Alberta.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bubblegum+Sans&family=Fredoka+One&family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background">
        {children}
        <Toaster />
        
        {/* SVG Masks for organic clip-paths */}
        <svg width="0" height="0" className="absolute pointer-events-none">
          <defs>
            <clipPath id="organic-blob-1" clipPathUnits="objectBoundingBox">
              <path d="M0.2,0.1 C0.4,-0.1 0.7,0 0.9,0.2 C1.1,0.4 1,0.7 0.8,0.9 C0.6,1.1 0.3,1 0.1,0.8 C-0.1,0.6 0,0.3 0.2,0.1" />
            </clipPath>
            <clipPath id="organic-blob-2" clipPathUnits="objectBoundingBox">
              <path d="M0.844,0.155c0.129,0.13,0.138,0.34,0.02,0.472c-0.117,0.132-0.341,0.174-0.493,0.113 c-0.152-0.061-0.233-0.211-0.214-0.359c0.019-0.148,0.138-0.294,0.31-0.354C0.638,0.067,0.715,0.025,0.844,0.155z" />
            </clipPath>
            <clipPath id="organic-blob-3" clipPathUnits="objectBoundingBox">
              <path d="M0.5,0 C0.8,0 1,0.2 1,0.5 C1,0.8 0.8,1 0.5,1 C0.2,1 0,0.8 0,0.5 C0,0.2 0.2,0 0.5,0 M0.2,0.2 C0.1,0.3 0.1,0.7 0.2,0.8 C0.3,0.9 0.7,0.9 0.8,0.8 C0.9,0.7 0.9,0.3 0.8,0.2 C0.7,0.1 0.3,0.1 0.2,0.2" />
            </clipPath>
          </defs>
        </svg>
      </body>
    </html>
  );
}
