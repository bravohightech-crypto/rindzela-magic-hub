import { motion } from "framer-motion";
import {
  Shield, Utensils, Puzzle, Heart, Clock, Accessibility,
  BookOpen, Users, Sparkles
} from "lucide-react";

const highlights = [
  { icon: Shield, label: "Recinto bem equipado", color: "bg-pastel-purple" },
  { icon: Puzzle, label: "Aprendizagem com brincadeiras", color: "bg-pastel-blue" },
  { icon: Utensils, label: "Inclui refeições", color: "bg-pastel-yellow" },
  { icon: Accessibility, label: "Crianças com necessidades especiais", color: "bg-pastel-green" },
  { icon: Clock, label: "Atividades aos sábados (8h–14h)", color: "bg-pastel-orange" },
  { icon: Heart, label: "Cuidado e carinho", color: "bg-pastel-pink" },
];

const whyReasons = [
  {
    icon: Heart,
    title: "Carinho e Segurança",
    desc: "A nossa equipa acolhe cada criança com amor, criando um ambiente familiar onde se sentem protegidas e valorizadas.",
  },
  {
    icon: BookOpen,
    title: "Desenvolvimento Integral",
    desc: "Estimulamos o crescimento cognitivo, emocional, social e motor de forma equilibrada, respeitando o ritmo de cada criança.",
  },
  {
    icon: Users,
    title: "Socialização Positiva",
    desc: "As crianças aprendem a conviver, partilhar e construir amizades num espaço de respeito mútuo e inclusão.",
  },
  {
    icon: Sparkles,
    title: "Acompanhamento Próximo",
    desc: "Comunicação regular com os encarregados, relatórios de progresso e uma porta sempre aberta para os pais.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const FeaturesSection = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        {/* Quick highlights */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20"
        >
          {highlights.map((h) => (
            <motion.div
              key={h.label}
              variants={item}
              className="flex flex-col items-center text-center p-4 rounded-2xl bg-card shadow-soft hover:shadow-card transition-shadow"
            >
              <div className={`w-12 h-12 rounded-xl ${h.color} flex items-center justify-center mb-3`}>
                <h.icon className="w-5 h-5 text-foreground/70" />
              </div>
              <p className="text-xs font-heading font-semibold text-foreground leading-tight">{h.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Rindzela */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-extrabold text-foreground mb-4">
            Porquê a <span className="text-gradient">Rindzela</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Mais do que uma escola, somos uma família. Na Rindzela, cada dia é uma aventura de descobertas, 
            onde a disciplina se encontra com o carinho e a rotina ganha cor e alegria.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {whyReasons.map((r) => (
            <motion.div
              key={r.title}
              variants={item}
              className="p-6 rounded-2xl bg-card shadow-soft hover:shadow-card transition-all hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <r.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
