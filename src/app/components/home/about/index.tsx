"use client";

import { motion } from "framer-motion";

export default function Proposal() {
  return (
    <section
      id="details"
      className="relative bg-[#0E1424] py-32 px-6 overflow-hidden"
    >
      {/* Ambient Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-[-200px] h-[500px] w-[500px] rounded-full bg-amber-400/10 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        
        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-[0.3em] text-amber-300/70"
        >
          The Proposal
        </motion.p>

        {/* Main Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-6 text-4xl md:text-5xl font-light text-white"
        >
          A Proper Amendment
        </motion.h2>

        {/* Structured Blocks */}
        <div className="mt-16 space-y-12 text-left max-w-3xl mx-auto">

          {/* Offense */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-amber-300 text-lg tracking-wide uppercase">
              The Offense
            </h3>
            <p className="mt-4 text-slate-300 leading-relaxed">
              A most unfortunate typographical error involving a remarkable name.
              An oversight unworthy of the elegance it belongs to.
            </p>
          </motion.div>

          {/* Plea */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-amber-300 text-lg tracking-wide uppercase">
              The Plea
            </h3>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Guilty — with no defense sufficient enough to justify it.
            </p>
          </motion.div>

          {/* Sentence */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-amber-300 text-lg tracking-wide uppercase">
              The Proposed Sentence
            </h3>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Dinner. Properly addressed.  
              An evening of exceptional cuisine in IKOKO Restaurant, Ikeja, Lagos.  
              Sunday at 6:00 PM.  
              A table reserved for two.
            </p>
          </motion.div>
        </div>

        {/* Closing Line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-lg text-slate-400 max-w-2xl mx-auto"
        >
          Should this proposal meet your approval,
          kindly grant your consent,
          and I shall finalize the reservation accordingly.
        </motion.p>

        {/* CTA Buttons */}
        {/* CTA Buttons */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="mt-10 flex justify-center gap-6"
>
  <a
    href={`mailto:adediranstephen2000@gmail.com?subject=Proposal Accepted&body=Dear Stephen,%0D%0A%0D%0AI accept your dinner proposal for Sunday at 7:00 PM.%0D%0A%0D%0ARegards,%0D%0AKenethe`}
    className="rounded-full bg-amber-400 px-8 py-3 text-black font-medium hover:scale-105 transition"
  >
    I Accept
  </a>

  <a
    href={`mailto:adediranstephen2000@gmail.com?subject=Proposal Response&body=Dear Stephen,%0D%0A%0D%0AI require further persuasion regarding your proposal.%0D%0A%0D%0ARegards,%0D%0AKenethe`}
    className="rounded-full border border-amber-400/40 px-8 py-3 text-amber-300 hover:bg-amber-400/10 transition"
  >
    Hmmm....I Accept, But Let's Reschedule
  </a>
</motion.div>
      </div>
    </section>
  );
}