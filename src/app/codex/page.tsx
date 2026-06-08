"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { DriftItem } from "@/components/floating/DriftItem";

const RULES = [
  { 
    id: "r1", 
    text: "BUILD STRONG FUNDAMENTALS FIRST.", 
    detail: "Discipline, problem solving and long-term leverage matter more than short bursts of motivation." 
  },
  { 
    id: "r2", 
    text: "I DON'T WAIT FOR PERFECT CONDITIONS. I SHIP ANYWAY.", 
    detail: "Small projects, real experiments, learning in public." 
  },
  { 
    id: "r3", 
    text: "THE DUAL MISSION.", 
    detail: "Crack JEE 2027 with a strong rank while simultaneously building real skills and projects on the side. Both are important. One is not waiting for the other." 
  },
];

export default function CodexPage() {
  const [highlightedRule, setHighlightedRule] = useState<string | null>(null);

  return (
    <div className="relative min-h-[100svh] w-full pt-32 pb-48 px-6 lg:px-24 flex flex-col items-center">
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl lg:text-6xl font-bold tracking-tight text-white mb-32 text-center"
      >
        The <span className="text-accent">Codex</span>
      </motion.h1>

      <div className="w-full max-w-4xl flex flex-col gap-32">
        
        {/* Section: Identity */}
        <motion.section 
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-center"
        >
          <DriftItem duration={8} yDrift={[0, -10, 0]}>
            <p className="text-2xl md:text-4xl font-serif italic text-white/90 leading-relaxed">
              &quot;This is not just about clearing an exam. This is about becoming dangerous with my skills, my discipline and my vision.&quot;
            </p>
          </DriftItem>
        </motion.section>

        {/* Section: Unbreakable Rules */}
        <section className="relative">
          <h2 className="text-xl font-mono text-accent tracking-widest uppercase mb-12 text-center">Unbreakable Rules</h2>
          
          <div className="flex flex-col gap-12">
            {RULES.map((rule, i) => (
              <DriftItem key={rule.id} delay={i * 0.4} duration={6 + i} yDrift={[0, 8, 0]}>
                <motion.div 
                  className={`text-center transition-all duration-700 ${
                    highlightedRule === rule.id ? "scale-110" : highlightedRule ? "opacity-30 blur-sm" : "opacity-100"
                  }`}
                >
                  <button 
                    onClick={() => setHighlightedRule(highlightedRule === rule.id ? null : rule.id)}
                    className={`text-xl md:text-3xl font-bold transition-colors duration-500 block w-full text-center ${
                      highlightedRule === rule.id ? "text-accent drop-shadow-[0_0_25px_rgba(250,204,21,0.8)]" : "text-white/70 hover:text-white"
                    }`}
                  >
                    {rule.text}
                  </button>
                  {highlightedRule === rule.id && (
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-6 text-white/80 font-light text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
                    >
                      {rule.detail}
                    </motion.p>
                  )}
                </motion.div>
              </DriftItem>
            ))}
          </div>
        </section>

        {/* Section: Vision */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center bg-[#0a0a0f]/40 backdrop-blur-md p-12 rounded-3xl border border-white/5"
        >
          <h2 className="text-xl font-mono text-white/50 tracking-widest uppercase mb-8">Long-Term Vision</h2>
          <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed">
            Long term I want financial independence and the ability to create real impact. I’m playing the long game. Building myself into someone who can actually move things in this world.
          </p>
        </motion.section>

      </div>
    </div>
  );
}
