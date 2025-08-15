"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu, Mountain } from "lucide-react";
import * as React from "react";
import { ModeToggle } from "./mode-toggle";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const mainNav = [
  { href: "/#services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/startups", label: "For Startups" },
  { href: "/blog", label: "Blog" },
  { href: "/calculator", label: "Calculator" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-border bg-background/80 backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <Mountain className="h-6 w-6 text-primary" />
          <span className="text-lg">ApexTek</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {mainNav.map((item) => {
            const isActive = item.href.startsWith("/#")
              ? pathname === "/"
              : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-sm font-medium transition-colors",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
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
                  <Mountain className="h-6 w-6 text-primary" />
                  <span className="text-lg">ApexTek</span>
                </Link>
                <div className="flex flex-col gap-4">
                  {mainNav.map((item) => (
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
