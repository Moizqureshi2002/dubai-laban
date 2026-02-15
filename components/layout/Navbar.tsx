"use client"
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import DLlogo from "../../public/duabi-laban-logo-bgremove.png";
import Image from "next/image"

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "#hero" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Our Story", href: "#story" },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 max-w-[100%] mx-auto ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5 text-white"
      }`}
    >
      <div className="max-w-[90%] mx-auto">
      <div className="section-padding flex items-center justify-between">
        <a href="#hero" className="flex items-center">
          <Image src={DLlogo} alt="Dubai Laban" className="h-12 md:h-14 w-auto" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link: NavLink) => (
            <a
              key={link.label}
              href={link.href}
              className={`font-body text-sm tracking-widest uppercase transition-colors duration-300 ${
                scrolled
                  ? "text-foreground hover:text-primary"
                  : "text-primary-foreground/90 hover:text-primary-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#menu"
            className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-medium bg-blue-800 text-white hover:bg-blue-700 tracking-wide uppercase transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-105"
          >
            Order Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
          type="button"
        >
          {[0, 1, 2].map((i: number) => (
            <span
              key={i}
              className={`block w-6 h-0.5 transition-all duration-300 ${
                scrolled ? "bg-foreground" : "bg-primary-foreground"
              } ${
                mobileOpen
                  ? i === 0
                    ? "rotate-45 translate-y-2"
                    : i === 1
                    ? "opacity-0"
                    : "-rotate-45 -translate-y-2"
                  : ""
              }`}
            />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background/98 backdrop-blur-lg border-t border-border"
        >
          <div className="section-padding py-6 flex flex-col gap-4">
            {navLinks.map((link: NavLink) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-foreground font-body text-lg py-2 border-b border-border/50"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#menu"
              onClick={() => setMobileOpen(false)}
              className="bg-primary text-primary-foreground px-6 py-3 rounded-full text-center font-medium mt-2"
            >
              Order Now
            </a>
          </div>
        </motion.div>
      )}
      </div>

    </motion.nav>
  );
};

export default Navbar;
