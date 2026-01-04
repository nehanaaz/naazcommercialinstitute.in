"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, Heart } from "lucide-react"
import siteConfig from "@/constants/site.json"
import { Image } from "@/components/ui/image"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [currentPath, setCurrentPath] = useState("/")

  useEffect(() => {
    setCurrentPath(window.location.pathname)
  }, [])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border/50" : "bg-transparent"
        }`}
      >
        <nav role="navigation" aria-label="Main navigation" className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="/"
              className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl transition-opacity hover:opacity-80"
              aria-label={`${siteConfig.name} - Home`}
            >
              <Image src={siteConfig.logo || "/placeholder.svg"} alt="" width={48} height={48} className="rounded-xl" />
              <div className="hidden sm:block">
                <span className="block text-base font-medium text-foreground tracking-tight leading-tight">
                  {siteConfig.shortName}
                </span>
                <span className="block text-xs text-muted-foreground leading-tight mt-0.5 tracking-wide">
                  {siteConfig.location.city}, Bihar
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {siteConfig.navigation.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors tracking-wide ${
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
              <Button asChild size="lg" className="rounded-full gap-2">
                <a href="/donate">
                  <Heart className="w-4 h-4" />
                  Support Us
                </a>
              </Button>
            </div>

            {/* Mobile Toggle */}
            <button
              type="button"
              className="lg:hidden p-2 rounded-xl hover:bg-muted/50 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            className="fixed inset-0 top-20 bg-background lg:hidden z-40"
          >
            <div className="flex flex-col h-full px-6 py-8">
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
                      className={`block py-4 px-4 text-base rounded-xl transition-colors ${
                        currentPath === link.href
                          ? "text-foreground font-semibold bg-muted"
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
                <Button asChild size="lg" className="w-full rounded-full gap-2">
                  <a href="/donate" onClick={() => setMobileOpen(false)}>
                    <Heart className="w-4 h-4" />
                    Support Our Mission
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
