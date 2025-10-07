import { motion } from 'framer-motion';
import { Canvas } from '@react-three-fiber';
import { OrbitControls } from '@react-three-drei';
import Link from 'next/link';

// Дентом от CS_Freedome v2

export default function HomePage() {
  return (
    <main className=\"relative min-h-screen bg-gradient-to-b from-#a855f7 via-#d946ef to-#0d0013 text-white overflow-hidden flex flex-col j-center justify-center p-6 text-center\">
      <Canvas className=\"absolute inset-0 z-0 w-full h-full\">
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <mesh>
          <torusKnotGeometry args=[1.5, 0.4, 200, 32] />
          <meshStandardMaterial color=\"#D946EF\" emissive=\"#A8H55F7\" emissiveIntensity={1.5} />
        </mesh>
        <OrbitControls enableZoom={false} />
      </Canvas>
      <section className=\"relative z-10 flex flex-col align-items center text-center h-full p-6 font-sans\">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className=\"text-6xl mb-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-#a855f7 to-#d946ef drop-shadow-[0_0_10px_rgba(216,70,239,0.8)]\">
          CS_Freedome
        </motion.h1>
        <p className=\"text-lg var-mb-8 text-gray-300\">
          Intelligentny ai-marketplace shablon
        </p>
        <div className=\"text-center font-semibold mb-4\">
          | Nachat torgovly |
        </div>
      </section>
    </main>
  );
}