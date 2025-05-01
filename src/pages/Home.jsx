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
          backgroundImage: `url('/src/assets/couple-photos/photo1.jpg')`,
        }}
      />

      {/* Overlay con el SVG decorativo */}
      <div
        className="absolute inset-0 z-10 opacity-90"
        style={{
          backgroundColor: "#C9B298",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400'%3E%3Cdefs%3E%3CradialGradient id='a' cx='396' cy='281' r='514' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23ECE3CF'/%3E%3Cstop offset='1' stop-color='%23C9B298'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='400' y1='148' x2='400' y2='333'%3E%3Cstop offset='0' stop-color='%23FFF5E0' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23FFF5E0' stop-opacity='0.5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='800' height='400'/%3E%3Cg fill-opacity='0.45'%3E%3Ccircle fill='url(%23b)' cx='267.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='532.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='400' cy='30' r='300'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      />

      {/* Contenido principal en capa superior */}
      <div className="relative z-20">
        <motion.h1
          className="text-8xl font-handwriting text-primary-500 mb-4 font-black"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Marcial & Nicole
        </motion.h1>

        {/* <motion.p
          className="text-lg font-semibold mb-8 text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          28 de febrero 2026 ·{" "}
          <a
            href="https://maps.app.goo.gl/3HBi392EBWGnGrFc6"
            title="¿Cómo llegar?"
          >
            Mi Casita Tica, Puntarenas
          </a>
        </motion.p> */}

        <motion.div
          className="flex space-x-4 mb-8 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          {timeLeft.days !== undefined ? (
            Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="flex flex-col items-center">
                <span className="text-4xl font-bold text-secondary">
                  {value}
                </span>
                <span className="text-md uppercase tracking-wide text-gray-600">
                  {units[unit]}
                </span>
              </div>
            ))
          ) : (
            <p className="text-2xl font-normal text-primary-500 mb-8">
              ¡Hoy es el gran día!
              <br />
              ¡Nos casamos! Les esperamos a todos en la fiesta.
            </p>
          )}
        </motion.div>

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
    </div>
  );
}
