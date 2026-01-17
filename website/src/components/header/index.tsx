"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart } from "lucide-react";
import siteConfig from "@/constants/site.json";
import { Image } from "@/components/ui/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("/");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 border-border/50 border-b backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <nav
          role="navigation"
          aria-label="Main navigation"
          className="mx-auto max-w-7xl px-6 lg:px-8"
        >
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <a
              href="/"
              className="group focus-visible:ring-primary flex items-center gap-3 rounded-xl transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:outline-none"
              aria-label={`${siteConfig.name} - Home`}
            >
              <Image
                src={siteConfig.logo || "/placeholder.svg"}
                alt={siteConfig.name}
                width={48}
                height={48}
                className="rounded-xl"
              />
              <div className="hidden sm:block">
                <span className="text-foreground block text-base leading-tight font-medium tracking-tight">
                  {siteConfig.shortName}
                </span>
                <span className="text-muted-foreground mt-0.5 block text-xs leading-tight tracking-wide">
                  {siteConfig.location.city}, Bihar
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-1 lg:flex">
              {siteConfig.navigation.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`rounded-lg px-4 py-2 text-sm font-medium tracking-wide transition-colors ${
                    currentPath === link.href
                      ? "text-foreground bg-muted"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                  aria-current={currentPath === link.href ? "page" : undefined}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button asChild size="lg" className="gap-2 rounded-full">
                <a href="/donate">
                  <Heart className="h-4 w-4" />
                  Support Us
                </a>
              </Button>
            </div>

            {/* Mobile Toggle */}
            <button
              type="button"
              className="hover:bg-muted/50 rounded-xl p-2 transition-colors lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-background fixed inset-0 top-20 z-40 lg:hidden"
          >
            <div className="flex h-full flex-col px-6 py-8">
              <nav className="flex flex-col gap-2">
                {siteConfig.navigation.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <a
                      href={link.href}
                      className={`block rounded-xl px-4 py-4 text-base transition-colors ${
                        currentPath === link.href
                          ? "text-foreground bg-muted font-semibold"
                          : "text-muted-foreground hover:bg-muted/50"
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </a>
                  </motion.div>
                ))}
              </nav>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-auto pt-6"
              >
                <Button asChild size="lg" className="w-full gap-2 rounded-full">
                  <a href="/donate" onClick={() => setMobileOpen(false)}>
                    <Heart className="h-4 w-4" />
                    Support Our Mission
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
