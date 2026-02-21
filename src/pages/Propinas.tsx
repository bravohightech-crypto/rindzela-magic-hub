import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Info, MessageCircle } from "lucide-react";

const prices = [
  {
    title: "Inscrição",
    price: "2.000,00",
    period: "pagamento único",
    desc: "Taxa de matrícula para novos alunos",
    color: "bg-pastel-purple",
    features: ["Processo de matrícula", "Kit de boas-vindas", "Avaliação inicial"],
  },
  {
    title: "Mensalidade",
    price: "5.500,00",
    period: "por mês",
    desc: "Inclui educação, cuidados e refeições",
    color: "bg-pastel-blue",
    highlight: true,
    features: ["Programa pedagógico completo", "Refeições incluídas", "Supervisão integral", "Acompanhamento individual", "Relatórios de progresso"],
  },
  {
    title: "Aulas Extracurriculares",
    price: "1.200,00",
    period: "por mês",
    desc: "Ballet, Capoeira, Natação, Piano ou Taekwondo",
    color: "bg-pastel-yellow",
    features: ["1h30 por aula", "2x por semana", "Instrutores especializados"],
  },
];

const Propinas = () => {
  return (
    <Layout>
      <section className="bg-gradient-hero py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full"><path d="M0,80 C360,120 720,40 1440,80 L1440,120 L0,120 Z" fill="hsl(270 25% 98%)" /></svg>
        </div>
        <div className="container relative z-10 text-center text-primary-foreground">
          <h1 className="text-4xl lg:text-5xl font-heading font-extrabold mb-4">Propinas e Preçário</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">Investimento transparente na educação do seu filho.</p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {prices.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`p-6 rounded-2xl bg-card shadow-soft hover:shadow-card transition-all ${p.highlight ? 'ring-2 ring-primary relative' : ''}`}
              >
                {p.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-heading font-bold rounded-full">
                    Mais Popular
                  </div>
                )}
                <div className={`inline-block px-3 py-1 rounded-full ${p.color} text-xs font-heading font-bold text-foreground/70 mb-4`}>
                  {p.title}
                </div>
                <div className="mb-4">
                  <span className="text-3xl font-heading font-extrabold text-foreground">{p.price}</span>
                  <span className="text-sm text-muted-foreground ml-1">MT</span>
                  <p className="text-xs text-muted-foreground">{p.period}</p>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
                <ul className="space-y-2 mb-6">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button variant={p.highlight ? "cta" : "outline"} className="w-full" asChild>
                  <Link to="/inscricoes">Inscrever <ArrowRight className="w-4 h-4" /></Link>
                </Button>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 p-6 rounded-2xl bg-pastel-yellow/50 border border-pastel-yellow max-w-2xl mx-auto">
            <Info className="w-5 h-5 text-foreground/60 shrink-0" />
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              Valores sujeitos a atualização. Confirme os valores atualizados pelo WhatsApp ou na secretaria.
            </p>
            <Button variant="whatsapp" size="sm" className="shrink-0" asChild>
              <a href="https://wa.me/258873100999?text=Ol%C3%A1!%20Gostaria%20de%20confirmar%20os%20valores%20das%20propinas." target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" /> Confirmar
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Propinas;
