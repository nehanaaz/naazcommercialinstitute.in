import { Heart, Mail, MapPin, Phone } from "lucide-react"
import siteConfig from "@/constants/site.json"

export default function Footer() {
  return (
    <footer role="contentinfo" className="border-t border-border/50 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Main Row */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={siteConfig.logo || "/placeholder.svg"} alt="" width={40} height={40} className="rounded-xl" />
              <div>
                <p className="text-base font-medium text-foreground tracking-tight">{siteConfig.shortName}</p>
                <p className="text-xs text-muted-foreground tracking-wide">Empowering communities</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Transforming lives through quality education and skill development in rural Bihar.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-sm font-medium text-foreground mb-4 tracking-tight">Quick Links</p>
            <nav aria-label="Footer navigation" className="flex flex-col gap-2">
              {siteConfig.navigation.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-medium text-foreground mb-4 tracking-tight">Get in Touch</p>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                {siteConfig.contact.email}
              </a>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                {siteConfig.contact.phone}
              </a>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  {siteConfig.location.address}, {siteConfig.location.city}
                  <br />
                  {siteConfig.location.state} {siteConfig.location.pincode}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-6 border-t border-border/50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Made with <Heart className="w-3.5 h-3.5 text-primary fill-current" /> for our community
          </p>
        </div>
      </div>
    </footer>
  )
}
