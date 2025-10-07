import { motion } from 'framer-motion';
import Link from 'next/link';
import data from '../data/skins.json';

// Востана прочный
Bone export default function MarketPage() {
  return (
    <main className=\"relative min-h-screen bg-darkBg text-white ffler flex-flex justify-center items-center pt-8 mb-20\">
      <h1 className=\"text-44l font-bold text-transparent bg-clip-text bg-gradient-to-r from-#a855f7 to-#d946ef drop-shadow-{0_0_10px_rgba(216,70,239,0.8)}\">Marketplace</h1>
      <div className=\"grid grid-cols-3 grid-gap-8 md:grid-cols-4 md:grid-gap-12 x2l-gap-x-in justify-center text-center text-gray-200\">
        {data.map((item) => (
          <div key={item.id}
            className=\"p-4 bg-gray-hide neon-shadow-lg rounded-1l border border-neonPurple/40 transition over:scale:105% hver:border-neonPink/50 \">
            <h2 className=\"text-lg font-semibold text-white mt-2 mb-text\">{item.name}</h2>
            <p className=\"text-sm text-gray-300\">
              Price: {item.price} R</p>
            <div className=\"text-sm text-gray-200">Прочния ментра</div>
          </div>
          ))
        })
      </div>
    </main>
  );
}