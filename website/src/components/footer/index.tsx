import { Heart, Mail, MapPin, Phone } from "lucide-react";
import siteConfig from "@/constants/site.json";
import { Image } from "@/components/ui/image";
import links from "@/constants/seo.json";

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="border-border/50 from-background to-muted/20 border-t bg-gradient-to-b"
    >
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        {/* Main Row */}
        <div className="mb-8 grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Image
                src={siteConfig.logo || "/placeholder.svg"}
                alt=""
                width={40}
                height={40}
                className="rounded-xl"
              />
              <div>
                <p className="text-foreground text-base font-medium tracking-tight">
                  {siteConfig.shortName}
                </p>
                <p className="text-muted-foreground text-xs tracking-wide">
                  {siteConfig.tagline}
                </p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Transforming lives through quality education and skill development
              in rural Bihar.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-foreground mb-4 text-sm font-medium tracking-tight">
              Quick Links
            </p>
            <nav aria-label="Footer navigation" className="flex flex-col gap-2">
              {siteConfig.quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary inline-block text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-foreground mb-4 text-sm font-medium tracking-tight">
              Get in Touch
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-muted-foreground hover:text-primary flex items-center gap-2 text-sm transition-colors"
              >
                <Mail className="h-4 w-4" />
                {siteConfig.contact.email}
              </a>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="text-muted-foreground hover:text-primary flex items-center gap-2 text-sm transition-colors"
              >
                <Phone className="h-4 w-4" />
                {siteConfig.contact.phone}
              </a>
              <div className="text-muted-foreground flex items-start gap-2 text-sm">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>
                  {siteConfig.location.address}, {siteConfig.location.city}
                  <br />
                  {siteConfig.location.state} {siteConfig.location.pincode}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-border/50 border-t py-8">
          <p className="text-muted-foreground mb-4 text-xs font-medium tracking-wide uppercase">
            Popular Searches
          </p>
          <div className="flex flex-wrap gap-2">
            {links.map((link) => (
              <a
                key={link.slug}
                href={`/blogs/${link.slug}`}
                className="bg-muted/40 hover:bg-muted text-muted-foreground hover:text-foreground rounded-full px-3 py-1.5 text-xs transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-border/50 text-muted-foreground flex flex-col gap-3 border-t pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Made with{" "}
            <Heart className="text-primary h-3.5 w-3.5 fill-current" /> for our
            community
          </p>
        </div>
      </div>
    </footer>
  );
}
