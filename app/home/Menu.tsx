"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image, { StaticImageData } from "next/image";

import flavorChocolate from "../../public/Menu-Chocolate.webp";
import flavorPistachio from "../../public/Menu-pistachio.webp";
import flavorBiscoff from "../../public/Menu-biscoff.webp";
import flavorMango from "../../public/Menu-mango.webp";
import flavorLotus  from "../../public/Menu-lotus-caramel.webp";
import flavorStrawberry from "../../public/Menu-strawberry.webp";
import flavorOreo from "../../public/Menu-oreo.webp";
import flavorCaramel from "../../public/Menu-caramel.webp";
import flavorSaffron from "../../public/Menu-saffron.webp";
import flavorHazelnut from "../../public/Menu-hazelnut.webp";
import flavorKitkat from "../../public/Menu-kitkat.webp";

interface Flavor {
  name: string;
  description: string;
  image: StaticImageData;
  tag?: string;
}

const flavors: Flavor[] = [
  { name: "Belgian Chocolate", description: "Rich dark chocolate drizzle on velvety laban", image: flavorChocolate, tag: "Bestseller" },
  { name: "Royal Pistachio", description: "Crushed Antep pistachios on creamy laban", image: flavorPistachio, tag: "Signature" },
  { name: "Biscoff Crunch", description: "Caramelized Biscoff crumble with lotus spread", image: flavorBiscoff },
  { name: "Tropical Mango", description: "Fresh Alphonso mango with mango purée", image: flavorMango },
  { name: "Strawberry Bliss", description: "Garden strawberries with berry coulis", image: flavorStrawberry },
  { name: "Oreo Dream", description: "Crushed Oreo cookies in cookies & cream swirl", image: flavorOreo },
  { name: "Salted Caramel", description: "Golden caramel with fleur de sel", image: flavorCaramel, tag: "New" },
  { name: "Persian Saffron", description: "Premium saffron threads with cardamom hint", image: flavorSaffron, tag: "Premium" },
  { name: "Hazelnut Praline", description: "Roasted hazelnuts with Nutella ribbon", image: flavorHazelnut },
  { name: "KitKat Crunch", description: "Crispy KitKat wafers with chocolate drizzle", image: flavorKitkat },
  { name: "Lotus Caramel", description: "Speculoos cookie butter with biscuit pieces", image: flavorLotus },
];

interface FlavorCardProps {
  flavor: Flavor;
  index: number;
}

const FlavorCard: React.FC<FlavorCardProps> = ({ flavor, index }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-2xl bg-secondary mb-4 aspect-square">
        <Image
          src={flavor.image}
          alt={flavor.name}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />

        {flavor.tag && (
          <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-body font-medium tracking-wider uppercase px-3 py-1.5 rounded-full">
            {flavor.tag}
          </span>
        )}
      </div>

      <h3 className="font-display text-xl mb-1 group-hover:text-primary transition-colors duration-300">
        {flavor.name}
      </h3>

      <p className="text-muted-foreground font-body text-sm leading-relaxed">
        {flavor.description}
      </p>
    </motion.div>
  );
};

const MenuSection: React.FC = () => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="menu" className="section-spacing bg-background w-[90%] mx-auto">
      <div className="section-padding">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Our Collection
          </p>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
            Signature Flavors
          </h2>

          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto leading-relaxed">
            Each flavor is a carefully crafted experience — premium ingredients
            meet the timeless tradition of Laban.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {flavors.map((flavor, index) => (
            <FlavorCard key={flavor.name} flavor={flavor} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
