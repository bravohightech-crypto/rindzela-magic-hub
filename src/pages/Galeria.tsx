import Layout from "@/components/Layout";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import heroImage from "@/assets/hero-children.jpg";
import facilitiesImg from "@/assets/facilities.jpg";
import graduationImg from "@/assets/graduation.jpg";
import activitiesImg from "@/assets/activities.jpg";

const categories = ["Todas", "Instalações", "Atividades", "Eventos", "Brincadeiras", "Graduação"];

const galleryItems = [
  { src: facilitiesImg, alt: "Instalações da Rindzela", category: "Instalações" },
  { src: heroImage, alt: "Crianças na sala de aula", category: "Atividades" },
  { src: graduationImg, alt: "Cerimónia de graduação", category: "Graduação" },
  { src: activitiesImg, alt: "Atividades extracurriculares", category: "Brincadeiras" },
  { src: heroImage, alt: "Aprendizagem em grupo", category: "Atividades" },
  { src: graduationImg, alt: "Formatura dos alunos", category: "Eventos" },
  { src: facilitiesImg, alt: "Parque infantil", category: "Instalações" },
  { src: activitiesImg, alt: "Música e dança", category: "Brincadeiras" },
];

const Galeria = () => {
  const [filter, setFilter] = useState("Todas");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "Todas" ? galleryItems : galleryItems.filter((g) => g.category === filter);

  return (
    <Layout>
      <section className="bg-gradient-hero py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full"><path d="M0,80 C360,120 720,40 1440,80 L1440,120 L0,120 Z" fill="hsl(270 25% 98%)" /></svg>
        </div>
        <div className="container relative z-10 text-center text-primary-foreground">
          <h1 className="text-4xl lg:text-5xl font-heading font-extrabold mb-4">Galeria</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">Momentos especiais capturados na Rindzela.</p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-heading font-semibold transition-all ${
                  filter === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <motion.div
                  key={`${filter}-${i}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative rounded-2xl overflow-hidden shadow-soft cursor-pointer aspect-square"
                  onClick={() => setLightbox(i)}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                    <span className="text-background text-xs font-heading font-semibold">{item.category}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Lightbox */}
          <AnimatePresence>
            {lightbox !== null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] bg-foreground/90 flex items-center justify-center p-4"
                onClick={() => setLightbox(null)}
              >
                <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/20 flex items-center justify-center text-background hover:bg-background/30 transition-colors" onClick={() => setLightbox(null)}>
                  <X className="w-5 h-5" />
                </button>
                <motion.img
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.8 }}
                  src={filtered[lightbox]?.src}
                  alt={filtered[lightbox]?.alt}
                  className="max-w-full max-h-[85vh] rounded-xl object-contain"
                  onClick={(e) => e.stopPropagation()}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </Layout>
  );
};

export default Galeria;
