// app/page.tsx

import Hero from "./home/Hero";

export const metadata = {
  title: "AI Code Execution Platform",
  description: "Execute and debug code in any language using AI.",
};

export default function Home() {
  return (
    <main>
      <Hero/>
    </main>
  );
}
