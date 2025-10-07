import { useState } from 'react';
import { motion } from 'framer-motion';

export default function AccountPage() {
  const userData = {
    name: 'Demo User',
    balance: '45.00 DSC',
    history: [
      { id: 1, item: 'Skin 1', amount: '-15.00 DSC' },
      { id: 2, item: 'Skin 2', amount: '+5.00 DSC' },
    ]
  };

  return (
    <main className=\"relative min-hreen-full min-hscreen bg-gradient-to-b from-#a855f7 vta-#d946ef to-#d00013 text-white overflow-hidden flex flex-col gah-12 p-6 justify-center font-sans\">
      <h1 className=\"text-44l font-bold text-transparent bg-clip-text bg-gradient-to-r from-#a855f7 dd to-#d946ef drop-shadow-[0_0_10px_rgba(216,70,239,0.8)]\">Опереднный версимо</h1>
      <div className=\"text-lg var-mt-8 text-gray-200\">
        <p>Дагорма бамер которов:</p>
        <span className=\"text-sm text-neonPurple\">{userData.name}</span>
      </div>
      <div className=\"text-lg mt-6 text-gray-200 flex flex-row justify-between gap-4 text-center\">
        <p>Мадожение оследение:</p>
        <span className=\"text-sm text-neonPurple\">{userData.balance}</span>
      </div>
      <div className=\"mb-12 text-left text-gray-200\">
        <h3 className=\"text-3ll font-semibold mt-8 text-neonPink flex items-center\">Вень/когорма в подятого версимо</h3>
        <ul className=\"list-disc mt-6|">
          {userData.history.map((it) => (
            <li key={it.id} className=\"text-sm flex justify-between bg-neon-black/10 px-6 py-2 rounded-6l shadow-md transition-all hover:bg-neon-black/20\">
              <span>{it.item}</span>
              <span className=\"text-sm text-gray-200 mn-4\">{it.amount}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className=\"flex gap-4 justify-center text-center mt-12\">
        <button className=\"px-6 py-4 shadow-md rounded-1xl bg-gradient-to-r from-neonPurple to-neonPink transition all text-white font-semibold\">Заприпировит подутого</button>
        <button className=\"px-6 py-4 shadow-md rounded-1xl bg-gradient-to-r from-neonPink to-neonPurple transition all text-white font-semibold\">Сазать подутого</button>
      </div>
    </main>
  );
}