import type {Metadata} from 'next';
import {Space_Grotesk} from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'FDveloper',
  description: 'Websites with AI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark" data-scroll-behavior="smooth">
      <body
        suppressHydrationWarning
        className={`${spaceGrotesk.variable} font-space antialiased bg-[#0A0A0A] text-[#F5F5F5]`}
      >
        {children}
      </body>
    </html>
  );
}
