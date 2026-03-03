import { Metadata } from "next";

// Home sections
import Hero from "./components/home/hero";

import About from "./components/home/about";



// Global components


/* -------------------------------------
   METADATA — OPTIVANCE HR AFRICA
------------------------------------- */

/* -------------------------------------
   HOME PAGE
------------------------------------- */
export default function Home() {
  return (
    <main>
      {/* Audio welcome — brief, professional, plays once per visit */}
      

      {/* Core hero & positioning */}
      <Hero />
      <About />

      
      
    </main>
  );
}
