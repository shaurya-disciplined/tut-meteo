"use client";

import React from "react";
import { motion } from "framer-motion";
import { DriftItem } from "@/components/floating/DriftItem";
import { GlassCard } from "@/components/floating/GlassCard";

export default function EchoesPage() {
  return (
    <div className="relative min-h-[100svh] w-full pt-32 pb-32 px-6 lg:px-24 flex flex-col items-center">
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl lg:text-6xl font-bold tracking-tight text-white mb-20 text-center"
      >
        The <span className="text-accent">Echoes</span>
      </motion.h1>

      <div className="w-full max-w-5xl flex flex-col gap-16 relative z-10 mx-auto">
        
        <DriftItem yDrift={[0, -10, 0]} rotateDrift={[-1, 0, 1]}>
          <GlassCard glow className="p-8 md:p-12">
            <h2 className="text-2xl font-bold text-accent mb-6 font-mono tracking-widest uppercase">The Core</h2>
            <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed whitespace-pre-wrap">
              I’m deeply into self-improvement and consistent progress. I believe learning by doing beats motivation every single time.. Compound growth is real.
              <br/><br/>
              I like documenting my journey because it keeps me accountable and might help someone else too.
            </p>
          </GlassCard>
        </DriftItem>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <DriftItem delay={0.5} yDrift={[0, 15, 0]}>
            <GlassCard className="h-full p-8 md:p-10">
              <h2 className="text-xl font-bold text-white mb-6 font-mono tracking-widest uppercase">Library</h2>
              <p className="text-white/70 font-light leading-relaxed whitespace-pre-wrap">
                Books section coming soon.. I’ve read quite a few and I’m building a proper list with what I actually learned from each one and how I rate them.
              </p>
            </GlassCard>
          </DriftItem>

          <DriftItem delay={1} yDrift={[0, -12, 0]}>
            <GlassCard className="h-full p-8 md:p-10">
              <h2 className="text-xl font-bold text-white mb-6 font-mono tracking-widest uppercase">Fuel</h2>
              <p className="text-white/70 font-light leading-relaxed whitespace-pre-wrap">
                Music, late night thinking, dark rainy nights, fast cars, and deepp conversations about life and systems keep me going..
                <br/><br/>
                I’m open to connecting with real builders and learners who are also on their own path.
              </p>
            </GlassCard>
          </DriftItem>
        </div>

      </div>
    </div>
  );
}
