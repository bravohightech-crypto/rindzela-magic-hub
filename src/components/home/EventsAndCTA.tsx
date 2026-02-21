import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MessageCircle, PartyPopper } from "lucide-react";
import graduationImg from "@/assets/graduation.jpg";

const EventsAndCTA = () => {
  return (
    <>
      {/* Events */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-card"
            >
              <img
                src={graduationImg}
                alt="Cerimónia de graduação na Rindzela"
                className="w-full object-cover aspect-[4/3]"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <PartyPopper className="w-5 h-5 text-primary" />
                <span className="text-sm font-heading font-semibold text-primary uppercase tracking-wider">Eventos & Momentos</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-heading font-extrabold text-foreground mb-4">
                Cerimónias de <span className="text-gradient">Graduação</span> e Festas
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Na Rindzela, celebramos cada conquista dos nossos pequenos. A cerimónia de graduação é um dos 
                momentos mais emocionantes do ano, onde pais e familiares são convidados a assistir ao progresso 
                dos seus filhos.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Além disso, organizamos festas temáticas, atividades do Dia da Criança, espetáculos de dança 
                e muito mais para fortalecer os laços entre família e escola.
              </p>
              <Button variant="outline" asChild>
                <Link to="/galeria">
                  Ver Galeria de Eventos
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-1/4 w-40 h-40 rounded-full bg-background animate-float" />
          <div className="absolute bottom-10 right-1/4 w-24 h-24 rounded-full bg-background animate-float" style={{ animationDelay: '1.5s' }} />
        </div>

        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-heading font-extrabold text-primary-foreground mb-4">
              Inscreva já o seu educando na Rindzela
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Vagas limitadas para 2026. Garanta o futuro do seu filho num ambiente seguro, 
              acolhedor e cheio de aprendizagens.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
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
        </div>
      </section>
    </>
  );
};

export default EventsAndCTA;
