"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#a855f7] via-[#d946ef] to-[#d00013] text-white flex flex-col justify-center items-center gap-8 p-6 font-sans overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#d946ef] drop-shadow-[0_0_25px_rgba(216,70,239,0.6)]"
      >
        CS_Freedome
      </motion.h1>

      <p className="text-gray-200 text-lg text-center">
        AI-powered Marketplace Template
      </p>

      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <Link
          href="/market"
          className="px-8 py-4 bg-gradient-to-r from-[#a855f7] to-[#d946ef] rounded-2xl shadow-lg text-white font-semibold hover:shadow-[0_0_25px_rgba(216,70,239,0.6)] transition-all"
        >
          Start Trading
        </Link>
      </motion.div>
    </main>
  );
}
