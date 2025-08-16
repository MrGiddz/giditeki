import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';


function KrestCoreLogo() {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-primary"
        >
            <path
                d="M12 2L2 7V17L12 22L22 17V7L12 2Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
            />
            <path
                d="M22 7L12 12M12 22V12M12 12L2 7M12 12H17L22 9.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export function Footer() {
  return (
    <footer className="z-10 border-t bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold">
              <KrestCoreLogo />
              <span className="text-lg">KrestCore Technologies</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Modern IT solutions for ambitious businesses.
            </p>
            <div className="flex gap-4">
              <Link href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
              </Link>
              <Link href="https://github.com" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
              </Link>
              <Link href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href="/#services"
                  className="text-muted-foreground hover:text-primary"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-muted-foreground hover:text-primary"
                >
                  Portfolio
                </Link>
              </li>
               <li>
                <Link
                  href="/startups"
                  className="text-muted-foreground hover:text-primary"
                >
                  For Startups
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-primary"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/calculator"
                  className="text-muted-foreground hover:text-primary"
                >
                  Cost Calculator
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Legal</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-muted-foreground hover:text-primary">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} KrestCore Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
