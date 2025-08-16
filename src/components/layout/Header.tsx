'use client';

import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { ModeToggle } from '@/components/layout/mode-toggle';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const navLinks = [
  { href: '/#services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/startups', label: 'For Startups' },
  { href: '/blog', label: 'Blog' },
  { href: '/calculator', label: 'Cost Calculator' },
];

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

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'border-b border-border bg-background/80 backdrop-blur-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <KrestCoreLogo />
          <span className="text-lg">KrestCore</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((item) => {
            const isActive = item.href.startsWith('/#')
              ? pathname === '/'
              : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'relative text-sm font-medium transition-colors',
                  isActive
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-primary'
                )}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-accent"
                    layoutId="underline"
                  />
                )}
              </Link>
            );
          })}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <ModeToggle />
          <Button asChild>
            <Link href="/#contact">Contact Us</Link>
          </Button>
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs glassmorphic">
              <div className="flex h-full flex-col p-6">
                <Link
                  href="/"
                  className="mb-8 flex items-center gap-2 font-bold"
                >
                  <KrestCoreLogo />
                  <span className="text-lg">KrestCore</span>
                </Link>
                <div className="flex flex-col gap-4">
                  {navLinks.map((item) => (
                    <SheetClose key={item.href} asChild>
                      <Link
                        href={item.href}
                        className="rounded-md p-2 text-lg font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
                <div className="mt-auto">
                  <SheetClose asChild>
                    <Button asChild className="w-full">
                      <Link href="/#contact">Contact Us</Link>
                    </Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
