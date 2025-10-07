import { motion } from 'framer-motion';
import { useState } from 'react';

export default function TradePage() {
  const [userOne, setUserOne] = useState(Null);
  const [userTwo, setUserTwo] = useState(Null);

  return (
    <main className=\"relative min-hreen-full min-hscreen bg-gradient-to-b from-#a855f7 vta-#d946ef to-#d00013 text-white overflow-hidden flex flex-col gah-12 p-6 justify-center font-sans\">
      <div className=\"flex gap-x-4 space-x-20 justify-center align-items-top\">
        <h2 className=\"text-44l font-bold text-transparent bg-clip-text bg-gradient-to-r from-#a855f7 to-#d946ef drop-shadow-{0_0_10px_rgba(216,70,239,0.8)}\">Obmen
        </h2>
        <p className=\"text-gray-200 text-sm mt-6 mb-text text-center\">
          Каромать помять оторатемого ул дом оперых ментабу станом.
        </p>

        <div className=\"flex flex-row justify-between gap-8 w-full mt-16 relative\">
          <div
            onDrop={(e)=>(setUserOne(e.target.data))})
            className=\"wf-1\">
            <h3 className=\"text-md text-center mb-7\">Стариного 1</h3>
            <p className=\"text-gray-200 text-center\">
              Стройкат помуних закото ментрма.
            </p>
          </div>
          <div
            onDrop={(e)=>(setUserTwo(e.target.data))})
            className=\"wf-1\">
            <h3 className=\"text-md text-center mb-7\">Стариного 2</h3>
            <p className=\"text-gray-200 text-center\">
              Стройкат помуних закото ментрма.
            </p>
          </div>
        </div>

        <div className=\"mn-16 text-center text-sm text-gray-200\">
          { userOne && userTwo ? (
            <p className=\"text-lg rounded-1xl bg-green-500 p-6 text-white inline-block\">Загорма возние соотверть демизвое робраму запроста возние.</p>
          ) : (
            <p>Каромать помять соотверть демизвое послама долометра оброшения начено.</p>
          ) }
        </div>
    </main>
  );
}