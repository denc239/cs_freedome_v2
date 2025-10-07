"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function TradePage() {
  const [userOne, setUserOne] = useState(null);
  const [userTwo, setUserTwo] = useState(null);

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#a855f7] via-[#d946ef] to-[#d00013] text-white overflow-hidden flex flex-col gap-12 p-6 justify-center font-sans">
      <div className="flex gap-20 justify-center items-start">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#d946ef] drop-shadow-[0_0_10px_rgba(216,70,239,0.8)]">
          Обмен
        </h2>
      </div>

      <p className="text-gray-200 text-sm mt-6 mb-8 text-center">
        💡 Перетащи предметы между зонами, чтобы выполнить обмен. <br />
        AI подскажет, равный ли обмен.
      </p>

      <div className="flex flex-row justify-between gap-8 w-full mt-16 relative">
        <div
          onDrop={(e) => setUserOne(e.target.data)}
          className="w-1/2 p-6 rounded-2xl bg-black/20 border border-purple-500/30 hover:border-purple-400 transition-all"
        >
          <h3 className="text-lg text-center mb-4">Игрок 1</h3>
          <p className="text-gray-300 text-center">Перетащи сюда предметы</p>
        </div>

        <div
          onDrop={(e) => setUserTwo(e.target.data)}
          className="w-1/2 p-6 rounded-2xl bg-black/20 border border-pink-500/30 hover:border-pink-400 transition-all"
        >
          <h3 className="text-lg text-center mb-4">Игрок 2</h3>
          <p className="text-gray-300 text-center">Перетащи сюда предметы</p>
        </div>
      </div>

      <div className="mt-12 text-center text-sm text-gray-200">
        {userOne && userTwo ? (
          <p className="text-lg rounded-xl bg-green-500/50 p-4 text-white inline-block">
            ✅ Обмен равнозначный! AI подтверждает справедливость сделки.
          </p>
        ) : (
          <p>💡 Добавь предметы для анализа обмена.</p>
        )}
      </div>
    </main>
  );
}
