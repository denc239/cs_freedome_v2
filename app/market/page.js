"use client";

import data from "@/data/skins.json";
import { motion } from "framer-motion";

export default function MarketPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#a855f7] via-[#d946ef] to-[#d00013] text-white flex flex-col items-center p-10">
      <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#d946ef] drop-shadow-[0_0_10px_rgba(216,70,239,0.8)] mb-10">
        Marketplace
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full max-w-6xl">
        {data.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.05 }}
            className="bg-black/20 backdrop-blur-lg rounded-2xl p-5 border border-purple-500/30 hover:border-pink-400 transition-all"
          >
            <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
            <p className="text-gray-300">Price: ${item.price}</p>
            <p className="text-sm text-gray-400">Rarity: {item.rarity}</p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
