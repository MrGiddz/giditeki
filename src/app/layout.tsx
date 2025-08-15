import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import { ChatWidget } from '@/components/chatbot/ChatWidget';
import { ThemeProvider } from '@/components/layout/theme-provider';

export const metadata: Metadata = {
  title: {
    default: 'Apex Digital | IT Consulting & Software Development',
    template: '%s | Apex Digital',
  },
  description: 'Apex Digital is a leading IT consulting and software development company specializing in custom web and mobile applications, cloud solutions, AI integration, and digital marketing. We help businesses and startups scale with modern technology.',
  keywords: ['IT consulting', 'software development', 'web development', 'mobile apps', 'AI solutions', 'cloud services', 'startup tech partner'],
  openGraph: {
    title: 'Apex Digital | IT Consulting & Software Development',
    description: 'Modern IT solutions for ambitious businesses.',
    url: 'https://apexdigital.com', // Replace with your actual domain
    siteName: 'Apex Digital',
    images: [
      {
        url: 'https://placehold.co/1200x630.png', // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: 'Apex Digital Logo and Tagline',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apex Digital | IT Consulting & Software Development',
    description: 'Modern IT solutions for ambitious businesses.',
    // images: ['https://placehold.co/1200x630.png'], // Replace with your actual Twitter image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <ChatWidget />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
