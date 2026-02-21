import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Calendar, FileText, ArrowRight, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { Link } from "react-router-dom";

const schema = z.object({
  nomeEncarregado: z.string().trim().min(2, "Nome é obrigatório").max(100),
  contacto: z.string().trim().min(8, "Contacto inválido").max(20),
  whatsapp: z.string().trim().min(8, "WhatsApp inválido").max(20),
  nomeCrianca: z.string().trim().min(2, "Nome da criança é obrigatório").max(100),
  idadeCrianca: z.string().trim().min(1, "Idade é obrigatória"),
  turno: z.string().min(1, "Selecione um turno"),
  observacoes: z.string().max(500).optional(),
  necessidades: z.string().max(500).optional(),
});

const requisitos = [
  "Atestado médico",
  "Fotocópia do BI/Cédula da criança",
  "Fotocópia do BI dos encarregados",
  "Fotos tipo passe da criança",
  "Fotocópia da carta de saúde da criança",
  "Aquisição do uniforme escolar",
];

const Inscricoes = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    nomeEncarregado: "", contacto: "", whatsapp: "", nomeCrianca: "", idadeCrianca: "", turno: "", observacoes: "", necessidades: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setSubmitted(true);
    toast({ title: "Pré-inscrição enviada!", description: "Entraremos em contacto em breve." });
  };

  if (submitted) {
    return (
      <Layout>
        <section className="py-32 text-center">
          <div className="container max-w-md">
            <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-3xl font-heading font-extrabold text-foreground mb-4">Pré-inscrição Enviada!</h1>
            <p className="text-muted-foreground mb-8">Obrigado pelo interesse na Rindzela. A nossa equipa entrará em contacto consigo brevemente para confirmar os próximos passos.</p>
            <Button variant="cta" asChild><Link to="/">Voltar ao Início</Link></Button>
          </div>
        </section>
      </Layout>
    );
  }

  const inputClass = "w-full px-4 py-3 rounded-xl bg-card border border-border focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all text-sm font-body text-foreground";

  return (
    <Layout>
      <section className="bg-gradient-hero py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full"><path d="M0,80 C360,120 720,40 1440,80 L1440,120 L0,120 Z" fill="hsl(270 25% 98%)" /></svg>
        </div>
        <div className="container relative z-10 text-center text-primary-foreground">
          <h1 className="text-4xl lg:text-5xl font-heading font-extrabold mb-4">Inscrições</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">Preencha o formulário de pré-inscrição e garanta a vaga do seu educando.</p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container max-w-4xl">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-heading font-extrabold text-foreground mb-6">Formulário de Pré-inscrição</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-heading font-semibold text-foreground mb-1 block">Nome do Encarregado *</label>
                  <input name="nomeEncarregado" value={form.nomeEncarregado} onChange={handleChange} className={inputClass} placeholder="Nome completo" />
                  {errors.nomeEncarregado && <p className="text-xs text-destructive mt-1">{errors.nomeEncarregado}</p>}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-heading font-semibold text-foreground mb-1 block">Contacto *</label>
                    <input name="contacto" value={form.contacto} onChange={handleChange} className={inputClass} placeholder="84XXXXXXX" />
                    {errors.contacto && <p className="text-xs text-destructive mt-1">{errors.contacto}</p>}
                  </div>
                  <div>
                    <label className="text-sm font-heading font-semibold text-foreground mb-1 block">WhatsApp *</label>
                    <input name="whatsapp" value={form.whatsapp} onChange={handleChange} className={inputClass} placeholder="87XXXXXXX" />
                    {errors.whatsapp && <p className="text-xs text-destructive mt-1">{errors.whatsapp}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-heading font-semibold text-foreground mb-1 block">Nome da Criança *</label>
                    <input name="nomeCrianca" value={form.nomeCrianca} onChange={handleChange} className={inputClass} placeholder="Nome da criança" />
                    {errors.nomeCrianca && <p className="text-xs text-destructive mt-1">{errors.nomeCrianca}</p>}
                  </div>
                  <div>
                    <label className="text-sm font-heading font-semibold text-foreground mb-1 block">Idade *</label>
                    <input name="idadeCrianca" value={form.idadeCrianca} onChange={handleChange} className={inputClass} placeholder="Ex: 3 anos" />
                    {errors.idadeCrianca && <p className="text-xs text-destructive mt-1">{errors.idadeCrianca}</p>}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-heading font-semibold text-foreground mb-1 block">Turno Preferido *</label>
                  <select name="turno" value={form.turno} onChange={handleChange} className={inputClass}>
                    <option value="">Selecione...</option>
                    <option value="manha">Manhã</option>
                    <option value="tarde">Tarde</option>
                    <option value="integral">Integral</option>
                  </select>
                  {errors.turno && <p className="text-xs text-destructive mt-1">{errors.turno}</p>}
                </div>
                <div>
                  <label className="text-sm font-heading font-semibold text-foreground mb-1 block">Observações</label>
                  <textarea name="observacoes" value={form.observacoes} onChange={handleChange} className={inputClass} rows={3} placeholder="Alguma informação adicional..." />
                </div>
                <div>
                  <label className="text-sm font-heading font-semibold text-foreground mb-1 block">Necessidades Especiais (opcional)</label>
                  <textarea name="necessidades" value={form.necessidades} onChange={handleChange} className={inputClass} rows={2} placeholder="Descreva se a criança tem necessidades especiais..." />
                </div>
                <Button type="submit" variant="cta" size="lg" className="w-full">
                  Enviar Pré-inscrição <ArrowRight className="w-4 h-4" />
                </Button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <div className="p-6 rounded-2xl bg-card shadow-soft">
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="w-5 h-5 text-primary" />
                  <h3 className="font-heading font-bold text-foreground">Documentos Necessários</h3>
                </div>
                <ul className="space-y-3">
                  {requisitos.map((r) => (
                    <li key={r} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-pastel-purple/50 border border-pastel-purple">
                <Calendar className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-heading font-bold text-foreground mb-2">Agende uma Visita</h3>
                <p className="text-sm text-muted-foreground mb-4">Venha conhecer as nossas instalações pessoalmente. Agende pelo WhatsApp ou telefone.</p>
                <Button variant="whatsapp" size="sm" className="w-full" asChild>
                  <a href="https://wa.me/258873100999?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20visita%20%C3%A0%20Rindzela." target="_blank" rel="noopener noreferrer">
                    Agendar pelo WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Inscricoes;
