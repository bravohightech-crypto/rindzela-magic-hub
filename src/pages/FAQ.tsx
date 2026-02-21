import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";

const faqs = [
  {
    q: "Qual é a idade mínima para inscrição?",
    a: "Aceitamos crianças a partir dos 3 meses de idade na nossa creche. Para o pré-escolar, a idade recomendada é a partir dos 3 anos.",
  },
  {
    q: "As refeições estão incluídas na mensalidade?",
    a: "Sim! A mensalidade de 5.500 MT inclui todas as refeições do dia: pequeno-almoço, lanche da manhã, almoço e lanche da tarde. Preparamos refeições nutritivas e adaptadas à idade das crianças.",
  },
  {
    q: "Como funciona a segurança na escola?",
    a: "A Rindzela possui um recinto vedado, supervisão constante por parte das educadoras, controlo de acesso na entrada e saída, e todas as instalações são adequadas para crianças. A segurança dos nossos alunos é prioridade absoluta.",
  },
  {
    q: "Como funciona o período de adaptação?",
    a: "O período de adaptação é gradual e personalizado. Na primeira semana, a criança pode ficar menos tempo na escola, acompanhada por um dos pais se necessário. A nossa equipa acompanha cada caso com sensibilidade e paciência.",
  },
  {
    q: "Quais são os horários de funcionamento?",
    a: "Funcionamos de segunda a sexta-feira das 6h00 às 18h00. Aos sábados das 8h00 às 14h00 temos atividades extracurriculares como ballet, capoeira, natação, piano e taekwondo.",
  },
  {
    q: "Que atividades extracurriculares estão disponíveis?",
    a: "Oferecemos Dança Ballet, Capoeira, Natação, Música (Piano) e Taekwondo. Cada atividade tem duração de 1h30, duas vezes por semana, com um custo adicional de 1.200 MT mensais.",
  },
  {
    q: "A escola atende crianças com necessidades especiais?",
    a: "Sim, a Rindzela tem orgulho em ser uma escola inclusiva. Trabalhamos com crianças com necessidades especiais, adaptando as atividades e o acompanhamento às particularidades de cada criança, sempre em parceria com as famílias.",
  },
  {
    q: "Posso visitar a escola antes de inscrever o meu filho?",
    a: "Claro! Encorajamos todos os pais a visitarem as nossas instalações. Pode agendar uma visita pelo WhatsApp (873 100 999) ou pelos telefones 823 100 999 / 846 884 637.",
  },
  {
    q: "É obrigatório usar uniforme?",
    a: "Sim, a aquisição do uniforme escolar faz parte dos requisitos de inscrição. O uniforme pode ser adquirido directamente na escola.",
  },
  {
    q: "Que documentos preciso para a inscrição?",
    a: "Precisa de: atestado médico, fotocópia do BI/Cédula da criança, fotocópia do BI dos encarregados, fotos tipo passe da criança, fotocópia da carta de saúde e adquirir o uniforme escolar.",
  },
  {
    q: "Qual é o valor da inscrição e da mensalidade?",
    a: "A inscrição tem um custo único de 2.000 MT e a mensalidade é de 5.500 MT (incluindo refeições). As aulas extracurriculares custam 1.200 MT adicionais por mês. Valores sujeitos a actualização.",
  },
  {
    q: "Como posso acompanhar o progresso do meu filho?",
    a: "Disponibilizamos relatórios periódicos de progresso e mantemos comunicação regular com os encarregados. As nossas educadoras estão sempre disponíveis para conversas sobre o desenvolvimento da criança.",
  },
];

const FAQ = () => {
  return (
    <Layout>
      <section className="bg-gradient-hero py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full"><path d="M0,80 C360,120 720,40 1440,80 L1440,120 L0,120 Z" fill="hsl(270 25% 98%)" /></svg>
        </div>
        <div className="container relative z-10 text-center text-primary-foreground">
          <h1 className="text-4xl lg:text-5xl font-heading font-extrabold mb-4">Perguntas Frequentes</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">Encontre respostas para as dúvidas mais comuns sobre a Rindzela.</p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <AccordionItem value={`faq-${i}`} className="bg-card rounded-xl shadow-soft border-none px-6">
                  <AccordionTrigger className="font-heading font-bold text-foreground text-left hover:no-underline py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>

          <div className="mt-12 text-center p-8 rounded-2xl bg-pastel-purple/50 border border-pastel-purple">
            <h3 className="font-heading font-bold text-xl text-foreground mb-2">Ainda tem dúvidas?</h3>
            <p className="text-sm text-muted-foreground mb-4">Fale connosco directamente pelo WhatsApp ou visite-nos.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button variant="whatsapp" asChild>
                <a href="https://wa.me/258873100999?text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida%20sobre%20a%20Rindzela." target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
              </Button>
              <Button variant="cta" asChild>
                <Link to="/contactos">Contactos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
