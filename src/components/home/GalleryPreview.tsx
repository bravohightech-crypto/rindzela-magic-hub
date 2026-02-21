import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-children.jpg";
import facilitiesImg from "@/assets/facilities.jpg";
import graduationImg from "@/assets/graduation.jpg";
import activitiesImg from "@/assets/activities.jpg";

const images = [
  { src: heroImage, alt: "Crianças aprendendo na sala de aula", category: "Atividades" },
  { src: facilitiesImg, alt: "Instalações da Rindzela", category: "Instalações" },
  { src: graduationImg, alt: "Cerimónia de graduação", category: "Eventos" },
  { src: activitiesImg, alt: "Atividades extracurriculares", category: "Brincadeiras" },
];

const GalleryPreview = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-extrabold text-foreground mb-4">
            Momentos <span className="text-gradient">Especiais</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Cada dia na Rindzela é repleto de sorrisos, aprendizagens e memórias inesquecíveis.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-shadow aspect-square"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-background text-sm font-heading font-semibold">{img.category}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/galeria">
              Ver Galeria Completa
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
