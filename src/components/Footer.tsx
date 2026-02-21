import { Link } from "react-router-dom";
import { GraduationCap, MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background pb-20 lg:pb-0">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-hero flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="font-heading font-bold text-lg">Rindzela</p>
                <p className="text-xs opacity-70">Centro Infantil e Externato</p>
              </div>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              A magia do aprender brincando. Um segundo lar para a sua criança em Matola-Rio.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-heading font-bold text-sm mb-4 uppercase tracking-wider opacity-50">Navegação</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Sobre Nós", href: "/sobre" },
                { label: "Programas", href: "/programas" },
                { label: "Propinas", href: "/propinas" },
                { label: "Galeria", href: "/galeria" },
                { label: "FAQ", href: "/faq" },
              ].map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="opacity-70 hover:opacity-100 transition-opacity">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-sm mb-4 uppercase tracking-wider opacity-50">Contactos</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 opacity-70 shrink-0" />
                <span className="opacity-70">Matola-Rio, Maputo</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 opacity-70 shrink-0" />
                <span className="opacity-70">823 100 999 / 846 884 637</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 opacity-70 shrink-0" />
                <span className="opacity-70">rindzela3125@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-heading font-bold text-sm mb-4 uppercase tracking-wider opacity-50">Horário</h3>
            <ul className="space-y-2 text-sm opacity-70">
              <li>Seg–Sex: 6h00 – 18h00</li>
              <li>Sábado: 8h00 – 14h00</li>
              <li className="text-xs opacity-60">(Atividades extracurriculares)</li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a href="https://facebook.com/rindzela" target="_blank" rel="noopener noreferrer" className="opacity-50 hover:opacity-100 transition-opacity text-sm font-heading">Facebook</a>
              <a href="https://instagram.com/rindzela" target="_blank" rel="noopener noreferrer" className="opacity-50 hover:opacity-100 transition-opacity text-sm font-heading">Instagram</a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-background/10 text-center text-xs opacity-50">
          <p>© {new Date().getFullYear()} Rindzela – Centro Infantil e Externato. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
