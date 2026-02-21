import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Clock, Sun, Apple, Palette, Moon, Music, BookOpen, Users, Heart } from "lucide-react";

const routine = [
  { time: "6h00", activity: "Acolhimento", icon: Sun, desc: "Recepção calorosa, conversa com os pais" },
  { time: "7h30", activity: "Pequeno-almoço", icon: Apple, desc: "Refeição nutritiva e equilibrada" },
  { time: "8h30", activity: "Atividades pedagógicas", icon: BookOpen, desc: "Literacia, numeracia, ciências" },
  { time: "10h00", activity: "Lanche da manhã", icon: Apple, desc: "Fruta e snack saudável" },
  { time: "10h30", activity: "Brincadeira orientada", icon: Users, desc: "Jogos ao ar livre, motricidade" },
  { time: "12h00", activity: "Almoço", icon: Apple, desc: "Refeição completa e balanceada" },
  { time: "13h00", activity: "Descanso/Sesta", icon: Moon, desc: "Momento de relaxamento" },
  { time: "14h30", activity: "Artes e expressão", icon: Palette, desc: "Pintura, música, dança" },
  { time: "16h00", activity: "Lanche da tarde", icon: Apple, desc: "Lanche antes da saída" },
  { time: "16h30", activity: "Atividades livres / Saída", icon: Heart, desc: "Brincadeira livre até às 18h" },
];

const methodology = [
  { title: "Aprender Brincando", desc: "O brincar é a linguagem natural da criança. Através de jogos estruturados, desenvolvemos competências cognitivas e sociais.", icon: "🎮" },
  { title: "Desenvolvimento Socioemocional", desc: "Ensinamos as crianças a reconhecer e gerir emoções, a trabalhar em equipa e a resolver conflitos de forma positiva.", icon: "❤️" },
  { title: "Linguagem e Comunicação", desc: "Estimulamos a linguagem oral e escrita através de histórias, canções, teatro e conversas orientadas.", icon: "📖" },
  { title: "Criatividade e Expressão", desc: "Artes plásticas, música e movimento permitem às crianças explorar a sua imaginação e expressar-se livremente.", icon: "🎨" },
];

const Programas = () => {
  return (
    <Layout>
      <section className="bg-gradient-hero py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full"><path d="M0,80 C360,120 720,40 1440,80 L1440,120 L0,120 Z" fill="hsl(270 25% 98%)" /></svg>
        </div>
        <div className="container relative z-10 text-center text-primary-foreground">
          <h1 className="text-4xl lg:text-5xl font-heading font-extrabold mb-4">Programas e Rotina</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">Conheça a nossa metodologia e o dia-a-dia dos nossos pequenos exploradores.</p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container">
          {/* Daily Routine */}
          <div className="mb-20">
            <h2 className="text-3xl font-heading font-extrabold text-foreground mb-4 text-center">Rotina <span className="text-gradient">Diária</span></h2>
            <p className="text-muted-foreground text-center max-w-xl mx-auto mb-10">Um dia na Rindzela é estruturado com carinho para equilibrar aprendizagem, diversão e descanso.</p>
            
            <div className="max-w-2xl mx-auto space-y-3">
              {routine.map((r, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card shadow-soft hover:shadow-card transition-shadow"
                >
                  <div className="w-16 text-right">
                    <span className="text-sm font-heading font-bold text-primary">{r.time}</span>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <r.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-heading font-bold text-sm text-foreground">{r.activity}</p>
                    <p className="text-xs text-muted-foreground">{r.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Methodology */}
          <div className="mb-20">
            <h2 className="text-3xl font-heading font-extrabold text-foreground mb-4 text-center">Nossa <span className="text-gradient">Metodologia</span></h2>
            <p className="text-muted-foreground text-center max-w-xl mx-auto mb-10">Acreditamos no poder do brincar como ferramenta de aprendizagem.</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {methodology.map((m, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-card shadow-soft"
                >
                  <span className="text-3xl mb-3 block">{m.icon}</span>
                  <h3 className="font-heading font-bold text-foreground mb-2">{m.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Schedule */}
          <div className="p-8 rounded-2xl bg-pastel-blue/50 border border-pastel-blue text-center">
            <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-heading font-bold text-xl text-foreground mb-4">Horário de Funcionamento</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-8">
              <div>
                <p className="font-heading font-bold text-foreground">Segunda a Sexta</p>
                <p className="text-2xl font-heading font-extrabold text-primary">6h00 – 18h00</p>
              </div>
              <div>
                <p className="font-heading font-bold text-foreground">Sábado</p>
                <p className="text-2xl font-heading font-extrabold text-primary">8h00 – 14h00</p>
                <p className="text-xs text-muted-foreground">(Atividades extracurriculares)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Programas;
