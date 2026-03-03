"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0B0F19] flex items-center">
      
      {/* ===== Soft Ambient Glow ===== */}
      <div className="absolute inset-0">
        <div className="absolute top-[-200px] left-[-200px] h-[600px] w-[600px] rounded-full bg-amber-400/10 blur-[160px]" />
        <div className="absolute bottom-[-250px] right-[-200px] h-[700px] w-[700px] rounded-full bg-rose-500/10 blur-[180px]" />
      </div>

      {/* ===== Content ===== */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        
        {/* Small Intro Line */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-sm uppercase tracking-[0.3em] text-amber-300/70"
        >
          A Formal Proposal for Redemption
        </motion.p>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="mt-6 text-4xl md:text-6xl font-light leading-tight text-white"
        >
          Dinner, Kenethe.
          <span className="block font-serif italic text-amber-300 mt-4">
            Properly addressed this time.
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-8 max-w-2xl mx-auto text-lg text-slate-300 leading-relaxed"
        >
          In light of my unacceptable typographical offense,
          I hereby submit a more thoughtful amendment.
          An evening. Exceptional cuisine. Undivided attention.
          And your name pronounced with absolute precision.
        </motion.p>

        {/* Date & Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-12 text-slate-400 text-base tracking-wide"
        >
          <p>Saturday • 7:00 PM</p>
          <p className="mt-2 text-amber-300">Victoria Island, Lagos</p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-12"
        >
          <a
            href="#details"
            className="inline-block rounded-full border border-amber-400/40 px-10 py-4 text-amber-300 transition hover:bg-amber-400 hover:text-black duration-300"
          >
            Review the Full Proposal
          </a>
        </motion.div>
      </div>
    </section>
  );
}