import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Printer Support", path: "/printer-support" },
  { label: "Wi-Fi Support", path: "/wifi-support" },
  { label: "Computer Support", path: "/computer-support" },
  { label: "Email Support", path: "/email-support" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo image + company name */}
        <Link to="/" className="flex items-center gap-1">
          <img
            src="/logo.png"
            alt="Reove Technologies"
            className="h-10 md:h-12 lg:h-14 w-auto max-w-[220px] object-contain block"
          />
          <span className="hidden sm:inline-block text-sm md:text-base font-semibold tracking-tight text-primary-foreground">
           RJTEK
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 lg:flex lg:flex-1 lg:justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? "bg-secondary text-secondary-foreground"
                  : "text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+12095404065"
            className="hidden items-center gap-2 rounded-lg bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground transition-transform hover:scale-105 md:flex"
          >
            <Phone className="h-4 w-4" />
            +1 209 540 4065
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-primary-foreground lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="border-t border-primary-foreground/10 bg-primary px-4 pb-4 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={`block rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? "bg-secondary text-secondary-foreground"
                  : "text-primary-foreground/80 hover:bg-primary-foreground/10"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+12095404065"
            className="mt-2 flex items-center gap-2 rounded-lg bg-secondary px-4 py-2.5 text-sm font-semibold text-secondary-foreground"
          >
            <Phone className="h-4 w-4" />
            +1 209 540 4065
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
