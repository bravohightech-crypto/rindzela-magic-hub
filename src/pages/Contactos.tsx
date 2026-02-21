import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone, MessageCircle, Clock, Facebook, Instagram } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  nome: z.string().trim().min(2, "Nome é obrigatório").max(100),
  email: z.string().trim().email("Email inválido").max(255),
  assunto: z.string().trim().min(2, "Assunto é obrigatório").max(200),
  mensagem: z.string().trim().min(10, "Mensagem muito curta").max(1000),
});

const Contactos = () => {
  const { toast } = useToast();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({ nome: "", email: "", assunto: "", mensagem: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => { if (err.path[0]) fieldErrors[err.path[0] as string] = err.message; });
      setErrors(fieldErrors);
      return;
    }
    toast({ title: "Mensagem enviada!", description: "Responderemos o mais breve possível." });
    setForm({ nome: "", email: "", assunto: "", mensagem: "" });
  };

  const inputClass = "w-full px-4 py-3 rounded-xl bg-card border border-border focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all text-sm font-body text-foreground";

  return (
    <Layout>
      <section className="bg-gradient-hero py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full"><path d="M0,80 C360,120 720,40 1440,80 L1440,120 L0,120 Z" fill="hsl(270 25% 98%)" /></svg>
        </div>
        <div className="container relative z-10 text-center text-primary-foreground">
          <h1 className="text-4xl lg:text-5xl font-heading font-extrabold mb-4">Contactos</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">Estamos sempre disponíveis para si. Entre em contacto connosco.</p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Contact info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-heading font-extrabold text-foreground">Fale <span className="text-gradient">Connosco</span></h2>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-card shadow-soft">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-sm text-foreground">Endereço</p>
                    <p className="text-sm text-muted-foreground">Matola-Rio – Maputo, Moçambique</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-card shadow-soft">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-sm text-foreground">Telefones</p>
                    <p className="text-sm text-muted-foreground">823 100 999 · 846 884 637</p>
                    <p className="text-xs text-muted-foreground">WhatsApp: 873 100 999</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-card shadow-soft">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-sm text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">rindzela3125@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-card shadow-soft">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-sm text-foreground">Horário</p>
                    <p className="text-sm text-muted-foreground">Seg–Sex: 6h00–18h00</p>
                    <p className="text-sm text-muted-foreground">Sáb: 8h00–14h00</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <a href="https://facebook.com/rindzela" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Facebook className="w-5 h-5 text-primary" />
                </a>
                <a href="https://instagram.com/rindzela" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Instagram className="w-5 h-5 text-primary" />
                </a>
                <a href="https://wa.me/258873100999" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-whatsapp/10 flex items-center justify-center hover:bg-whatsapp/20 transition-colors">
                  <MessageCircle className="w-5 h-5 text-whatsapp" />
                </a>
              </div>

              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden shadow-soft h-48 bg-muted flex items-center justify-center">
                <iframe
                  title="Localização Rindzela"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114587.16752!2d32.4!3d-25.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDU4JzEyLjAiUyAzMsKwMjQnMDAuMCJF!5e0!3m2!1spt-BR!2smz!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Contact form */}
            <div>
              <h2 className="text-2xl font-heading font-extrabold text-foreground mb-6">Envie uma <span className="text-gradient">Mensagem</span></h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-heading font-semibold text-foreground mb-1 block">Nome *</label>
                  <input name="nome" value={form.nome} onChange={handleChange} className={inputClass} placeholder="Seu nome" />
                  {errors.nome && <p className="text-xs text-destructive mt-1">{errors.nome}</p>}
                </div>
                <div>
                  <label className="text-sm font-heading font-semibold text-foreground mb-1 block">Email *</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} className={inputClass} placeholder="seu@email.com" />
                  {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="text-sm font-heading font-semibold text-foreground mb-1 block">Assunto *</label>
                  <input name="assunto" value={form.assunto} onChange={handleChange} className={inputClass} placeholder="Assunto da mensagem" />
                  {errors.assunto && <p className="text-xs text-destructive mt-1">{errors.assunto}</p>}
                </div>
                <div>
                  <label className="text-sm font-heading font-semibold text-foreground mb-1 block">Mensagem *</label>
                  <textarea name="mensagem" value={form.mensagem} onChange={handleChange} className={inputClass} rows={5} placeholder="Escreva a sua mensagem..." />
                  {errors.mensagem && <p className="text-xs text-destructive mt-1">{errors.mensagem}</p>}
                </div>
                <Button type="submit" variant="cta" size="lg" className="w-full">Enviar Mensagem</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contactos;
