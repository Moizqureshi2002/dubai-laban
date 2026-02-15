"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden w-full"
    >
      <div className="w-[90%] mx-auto">
        {/* Background with Ken Burns */}
        <div className="absolute inset-0">
          <Image
            src="/HeroImg.webp"
            alt="Premium Laban dessert cups"
            fill
            priority
            className="object-cover animate-ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-500/30 via-transparent to-blue-200/10" />
        </div>

        {/* Content */}
        <div className="relative z-10 section-padding w-full pt-32 px-6">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-white/70 text-sm tracking-[0.3em] uppercase mb-6"
            >
              Premium Laban Desserts
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-[1.1] mb-8 font-extrabold"
            >
              Indulge in
              <br />
              <span className="italic">Pure Luxury</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-white/80 text-lg md:text-xl max-w-lg mb-10 leading-relaxed"
            >
              Handcrafted Laban desserts elevated with the world's finest
              flavors — from saffron-kissed cream to Belgian chocolate indulgence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#menu"
                className="bg-blue-800 text-white px-10 py-4 rounded-full font-medium tracking-wide uppercase text-sm transition-all duration-300 hover:shadow-2xl hover:shadow-blue-800/30 hover:scale-105 text-center"
              >
                Explore Our Menu
              </a>
              <a
                href="#story"
                className="border border-white/30 text-white px-10 py-4 rounded-full font-medium tracking-wide uppercase text-sm transition-all duration-300 hover:bg-white/10 text-center"
              >
                Our Story
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/50 text-xs tracking-[0.2em] uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
