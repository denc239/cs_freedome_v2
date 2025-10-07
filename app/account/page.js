"use client";

import { motion } from "framer-motion";
import user from "@/data/user.json";

export default function AccountPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#a855f7] via-[#d946ef] to-[#d00013] text-white overflow-hidden flex flex-col gap-12 p-6 justify-center font-sans">
      <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#d946ef] drop-shadow-[0_0_10px_rgba(216,70,239,0.8)] text-center">
        Аккаунт пользователя
      </h1>

      <div className="text-lg mt-8 text-gray-200 text-center">
        <p>Имя: {user.name}</p>
        <p>Баланс: {user.balance}$</p>
        <h3 className="mt-6 mb-2 text-xl text-pink-300">История сделок:</h3>
        <ul className="space-y-2 text-gray-300">
          {user.history.map((item) => (
            <li key={item.id}>
              {item.item}: {item.amount}$
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
