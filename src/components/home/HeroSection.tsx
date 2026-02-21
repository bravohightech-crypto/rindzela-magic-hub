import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-children.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero min-h-[600px] lg:min-h-[700px] flex items-center">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-background animate-float" />
        <div className="absolute bottom-40 right-20 w-20 h-20 rounded-full bg-background animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-background animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container relative z-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-primary-foreground"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-background/20 text-sm font-heading font-semibold mb-6 backdrop-blur-sm">
              🦋 Inscrições Abertas 2026
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-heading font-extrabold leading-tight mb-6">
              A magia do aprender brincando torna a Rindzela um{" "}
              <span className="underline decoration-4 decoration-pastel-yellow underline-offset-4">segundo lar</span>{" "}
              para a sua criança.
            </h1>

            <p className="text-lg lg:text-xl opacity-90 mb-8 leading-relaxed max-w-lg">
              Ambiente seguro, educadores atenciosos, aprendizagem e diversão de mãos dadas. 
              Em Matola-Rio, Maputo.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button variant="hero" size="lg" asChild>
                <Link to="/inscricoes">
                  Inscrever Agora
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/contactos">
                  <Calendar className="w-4 h-4" />
                  Agendar Visita
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="https://wa.me/258873100999?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20inscri%C3%A7%C3%B5es%20na%20Rindzela." target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-background/10 rounded-3xl blur-2xl" />
              <img
                src={heroImage}
                alt="Crianças felizes aprendendo e brincando na Rindzela"
                className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path d="M0,80 C360,120 720,40 1440,80 L1440,120 L0,120 Z" fill="hsl(270 25% 98%)" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
