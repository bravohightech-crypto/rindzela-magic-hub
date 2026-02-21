import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Phone, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Programas", href: "/programas" },
  { label: "Propinas", href: "/propinas" },
  { label: "Galeria", href: "/galeria" },
  { label: "Inscrições", href: "/inscricoes" },
  { label: "Contactos", href: "/contactos" },
  { label: "FAQ", href: "/faq" },
];

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-soft">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-hero flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-lg leading-tight text-foreground">Rindzela</span>
            <span className="text-[10px] text-muted-foreground leading-tight hidden sm:block">Centro Infantil e Externato</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors font-heading ${
                location.pathname === link.href
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-2">
          <Button variant="cta" size="sm" asChild>
            <Link to="/inscricoes">Inscrever</Link>
          </Button>
        </div>

        {/* Mobile */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 bg-card p-0">
            <div className="flex flex-col h-full">
              <div className="p-6 border-b border-border">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-hero flex items-center justify-center">
                    <GraduationCap className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="font-heading font-bold text-foreground">Rindzela</span>
                </div>
              </div>
              <nav className="flex flex-col p-4 gap-1 flex-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setOpen(false)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors font-heading ${
                      location.pathname === link.href
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="p-4 border-t border-border space-y-2">
                <Button variant="cta" className="w-full" asChild onClick={() => setOpen(false)}>
                  <Link to="/inscricoes">Inscrever Agora</Link>
                </Button>
                <Button variant="whatsapp" className="w-full" asChild>
                  <a href="https://wa.me/258873100999?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20inscri%C3%A7%C3%B5es%20na%20Rindzela." target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Mobile sticky bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-t border-border px-2 py-2 flex gap-2">
        <Button variant="default" size="sm" className="flex-1 text-xs" asChild>
          <a href="tel:+258823100999">
            <Phone className="w-3 h-3" />
            Ligar
          </a>
        </Button>
        <Button variant="whatsapp" size="sm" className="flex-1 text-xs" asChild>
          <a href="https://wa.me/258873100999?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20inscri%C3%A7%C3%B5es%20na%20Rindzela." target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </Button>
        <Button variant="cta" size="sm" className="flex-1 text-xs" asChild>
          <Link to="/inscricoes">Inscrever</Link>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
