import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Heart, Shield, BookOpen, Users, Eye, Accessibility } from "lucide-react";
import facilitiesImg from "@/assets/facilities.jpg";
import heroImage from "@/assets/hero-children.jpg";

const values = [
  { icon: Heart, title: "Carinho", desc: "Cada criança é recebida com amor e atenção individualizada." },
  { icon: Shield, title: "Segurança", desc: "Ambiente protegido com supervisão constante e instalações seguras." },
  { icon: BookOpen, title: "Aprendizagem", desc: "Metodologia lúdica que estimula a curiosidade e o pensamento crítico." },
  { icon: Users, title: "Responsabilidade", desc: "Compromisso com o desenvolvimento integral de cada criança." },
];

const team = [
  { name: "Directora Pedagógica", role: "Coordenação Geral", color: "bg-pastel-purple" },
  { name: "Educadora Sénior", role: "Turma Pré-escolar", color: "bg-pastel-pink" },
  { name: "Educadora", role: "Turma Creche", color: "bg-pastel-blue" },
  { name: "Auxiliar Pedagógica", role: "Apoio e Cuidados", color: "bg-pastel-green" },
  { name: "Professor de Música", role: "Piano e Canto", color: "bg-pastel-yellow" },
  { name: "Instrutora de Dança", role: "Ballet e Movimento", color: "bg-pastel-orange" },
];

const Sobre = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-hero py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full">
            <path d="M0,80 C360,120 720,40 1440,80 L1440,120 L0,120 Z" fill="hsl(270 25% 98%)" />
          </svg>
        </div>
        <div className="container relative z-10 text-center text-primary-foreground">
          <h1 className="text-4xl lg:text-5xl font-heading font-extrabold mb-4">Sobre a Rindzela</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">Conheça a nossa história, missão e a equipa que cuida dos seus filhos com dedicação.</p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 items-center mb-20">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-heading font-extrabold text-foreground mb-4">A Nossa <span className="text-gradient">Missão</span></h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A Rindzela nasceu do sonho de criar um espaço onde as crianças de Matola-Rio pudessem 
                crescer com amor, segurança e aprendizagem de qualidade. Acreditamos que cada criança 
                é única e merece um ambiente que respeite o seu ritmo e potencie os seus talentos.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A nossa missão é proporcionar uma educação integral, onde o brincar é a ferramenta 
                principal de aprendizagem, preparando crianças confiantes, criativas e felizes para 
                os desafios do futuro.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Trabalhamos de mãos dadas com as famílias, porque acreditamos que a educação é uma 
                parceria entre escola e casa. Na Rindzela, cada criança encontra o seu segundo lar.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src={heroImage} alt="Crianças na Rindzela" className="rounded-2xl shadow-card w-full object-cover aspect-[4/3]" loading="lazy" />
            </motion.div>
          </div>

          {/* Values */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center p-6 rounded-2xl bg-card shadow-soft">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Team */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-extrabold text-foreground mb-4">A Nossa <span className="text-gradient">Equipa</span></h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Profissionais dedicados e apaixonados pela educação infantil.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
            {team.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="text-center p-4 rounded-2xl bg-card shadow-soft">
                <div className={`w-16 h-16 rounded-full ${t.color} flex items-center justify-center mx-auto mb-3`}>
                  <Users className="w-6 h-6 text-foreground/40" />
                </div>
                <p className="font-heading font-bold text-sm text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </motion.div>
            ))}
          </div>

          {/* Facilities */}
          <div className="grid lg:grid-cols-2 gap-10 items-center mb-20">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src={facilitiesImg} alt="Instalações da Rindzela" className="rounded-2xl shadow-card w-full object-cover aspect-[4/3]" loading="lazy" />
            </motion.div>
            <div>
              <h2 className="text-3xl font-heading font-extrabold text-foreground mb-4">Instalações <span className="text-gradient">Modernas</span></h2>
              <ul className="space-y-3">
                {["Salas de aula amplas e ventiladas", "Pátio com parque infantil seguro", "Área coberta para atividades", "Cozinha equipada com padrões de higiene", "Casas de banho adaptadas para crianças", "Espaço de descanso confortável"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Inclusion */}
          <div className="p-8 rounded-2xl bg-pastel-green/50 border border-pastel-green">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-pastel-green flex items-center justify-center shrink-0">
                <Accessibility className="w-6 h-6 text-foreground/60" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">Inclusão e Acolhimento</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A Rindzela tem orgulho em atender crianças com necessidades especiais. A nossa equipa recebe 
                  formação contínua para garantir que todas as crianças se sintam bem-vindas, respeitadas e 
                  apoiadas no seu desenvolvimento. Trabalhamos em parceria com as famílias para criar planos 
                  individualizados que respondam às necessidades de cada criança.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sobre;
