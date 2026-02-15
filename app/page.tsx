// app/page.tsx

import Footer from "@/components/layout/Footer";
import Hero from "./home/Hero";
import MenuSection from "./home/Menu";
import Testimonials from "./home/Testimonials";

export const metadata = {
  title: "AI Code Execution Platform",
  description: "Execute and debug code in any language using AI.",
};

export default function Home() {
  return (
    <main>
      <Hero/>
      <MenuSection/>
      <Testimonials/>
      <Footer/>
    </main>
  );
}
