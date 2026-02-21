import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Music, Waves, Dumbbell, Piano, Sparkles, ArrowRight } from "lucide-react";
import activitiesImg from "@/assets/activities.jpg";

const programs = [
  { title: "Creche", age: "0–2 anos", desc: "Cuidado especializado para bebés e crianças pequenas, com rotinas de conforto e estimulação sensorial.", color: "bg-pastel-pink" },
  { title: "Pré-escolar", age: "3–5 anos", desc: "Preparação pedagógica, literacia inicial, matemática e artes num ambiente lúdico e acolhedor.", color: "bg-pastel-blue" },
  { title: "Externato", age: "6+ anos", desc: "Acompanhamento escolar, reforço pedagógico e atividades complementares para consolidar a aprendizagem.", color: "bg-pastel-green" },
];

const activities = [
  { icon: Sparkles, name: "Dança Ballet", color: "bg-pastel-pink" },
  { icon: Dumbbell, name: "Capoeira", color: "bg-pastel-yellow" },
  { icon: Waves, name: "Natação", color: "bg-pastel-blue" },
  { icon: Piano, name: "Música (Piano)", color: "bg-pastel-purple" },
  { icon: Music, name: "Taekwondo", color: "bg-pastel-orange" },
];

const ServicesSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="container">
        {/* Programs */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-extrabold text-foreground mb-4">
            Nossos <span className="text-gradient">Programas</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Cada fase do crescimento merece atenção especial. Descubra o programa ideal para o seu filho.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {programs.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="p-6 rounded-2xl bg-card shadow-soft hover:shadow-card transition-all hover:-translate-y-1"
            >
              <div className={`inline-block px-3 py-1 rounded-full ${p.color} text-xs font-heading font-bold text-foreground/70 mb-4`}>
                {p.age}
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Activities */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-heading font-extrabold text-foreground mb-4">
              Atividades <span className="text-gradient">Extras</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Desenvolvemos o talento de cada criança com atividades especializadas que promovem 
              disciplina, criatividade e saúde. Aulas 2x por semana, 1h30 cada.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
              {activities.map((a) => (
                <div
                  key={a.name}
                  className={`flex items-center gap-2 p-3 rounded-xl ${a.color} transition-transform hover:scale-105`}
                >
                  <a.icon className="w-4 h-4 text-foreground/60" />
                  <span className="text-sm font-heading font-semibold text-foreground/80">{a.name}</span>
                </div>
              ))}
            </div>

            <Button variant="cta" asChild>
              <Link to="/programas">
                Ver Programas
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-card"
          >
            <img
              src={activitiesImg}
              alt="Crianças em atividades extracurriculares na Rindzela"
              className="w-full object-cover aspect-square"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
