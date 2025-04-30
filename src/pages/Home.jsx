import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const weddingDate = new Date("2026-02-28T00:00:00");
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = weddingDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({});
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 overflow-hidden">
      <motion.h1
        className="text-5xl font-handwriting text-primary mb-4 font-black"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Marcial & Nicole
      </motion.h1>

      {/* Animar fecha */}
      <motion.p
        className="text-lg font-semibold mb-8 text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        28 de febrero 2025 · El Roble, Puntarenas
      </motion.p>

      {/* Animar contador */}
      <motion.div
        className="flex space-x-4 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        {timeLeft.days !== undefined ? (
          Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="flex flex-col items-center">
              <span className="text-3xl font-bold text-secondary">{value}</span>
              <span className="text-sm uppercase tracking-wide text-gray-600">
                {unit}
              </span>
            </div>
          ))
        ) : (
          <p className="text-xl font-semibold text-primary mb-8">
            ¡Hoy es el gran día!
          </p>
        )}
      </motion.div>

      {/* Animar botón */}
      <motion.a
        href="/invitacion"
        className="bg-primary-500 hover:bg-secondary-500 text-white py-3 px-6 rounded-full font-bold shadow-lg transition-all"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
      >
        Ver Invitación
      </motion.a>
    </div>
  );
}
