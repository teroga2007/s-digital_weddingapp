import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const weddingDate = new Date("2026-02-28T00:00:00");
  const [timeLeft, setTimeLeft] = useState({});
  const units = {
    days: "Días",
    hours: "Horas",
    minutes: "Minutos",
    seconds: "Segundos",
  };

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
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 overflow-hidden relative w-full h-screen">
      {/* Fondo con imagen de la pareja */}
      <div
        className="absolute inset-0 bg-center bg-cover z-0"
        style={{
          backgroundImage: `url('src/assets/elements/beach.jpg')`,
        }}
      />

      {/* Overlay con efecto degradado */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-primary-500/40 to-primary-500/70 backdrop-blur-md" />

      {/* Contenido principal */}
      <div className="relative z-20 flex flex-col gap-10">
        <motion.h1
          className="text-7xl font-handwriting text-accent-500 font-black"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Nicole & Marcial
        </motion.h1>

        <motion.div
          className="flex space-x-1 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          {timeLeft.days !== undefined ? (
            Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="flex flex-col items-center">
                <span className="text-4xl font-bold text-dark-500">
                  {value}
                </span>
                <span className="text-md uppercase tracking-wide text-dark-100 font-300">
                  {units[unit]}
                </span>
              </div>
            ))
          ) : (
            <p className="text-xl text-dark-500 font-bold mb-8">
              ¡Hoy es el gran día!
              <br />
              ¡Nos casamos! Les esperamos a todos en la fiesta.
            </p>
          )}
        </motion.div>

        <motion.a
          href="/invitacion"
          className="bg-dark-500 hover:bg-accent-100 text-white py-3 px-6 rounded-full font-bold shadow-lg transition-all"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          Ver Invitación
        </motion.a>
      </div>
    </div>
  );
}
