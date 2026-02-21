import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Santos",
    role: "Mãe do Pedro, 4 anos",
    text: "A Rindzela transformou a vida do meu filho. Ele adora ir à escola e todos os dias chega a casa contando as aventuras. As educadoras são excepcionais!",
  },
  {
    name: "João Macuácua",
    role: "Pai da Ana, 3 anos",
    text: "Procurávamos uma escola que valorizasse a inclusão e o carinho. Na Rindzela encontrámos isso e muito mais. Recomendo a todos os pais de Matola.",
  },
  {
    name: "Fátima Nhaca",
    role: "Mãe do Dinis, 5 anos",
    text: "As atividades extracurriculares são fantásticas. O meu filho faz capoeira e piano, e desenvolveu uma confiança incrível. A cerimónia de graduação foi emocionante!",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-extrabold text-foreground mb-4">
            O que dizem os <span className="text-gradient">Pais</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A confiança dos encarregados é o nosso maior orgulho.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="p-6 rounded-2xl bg-card shadow-soft relative"
            >
              <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 italic">"{t.text}"</p>
              <div>
                <p className="font-heading font-bold text-sm text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
