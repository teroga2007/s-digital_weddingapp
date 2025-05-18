import { useEffect, useState } from "react";
import PageWrapper from "../components/PageWrapper";
import { motion, AnimatePresence } from "framer-motion";
import foto1 from "../assets/elements/foto1.png";
import foto2 from "../assets/elements/foto2.jpg";
import foto4 from "../assets/elements/foto4.jpg";

const photos = [
  { src: foto1, alt: "Momento especial 1" },
  { src: foto2, alt: "Momento especial 2" },
  { src: foto4, alt: "Momento especial 3" },
];

export default function Gifts() {
  const [current, setCurrent] = useState(0);

  // Auto-play cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % photos.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextPhoto = () => {
    setCurrent((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrent((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const goToPhoto = (index) => {
    setCurrent(index);
  };

  return (
    <PageWrapper title="Regalos">
      <div className="max-w-4xl mx-auto p-6 md:p-10 space-y-10">
        {/* 📝 Personal Message */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="bg-white shadow-2xl rounded-2xl p-8 space-y-4"
        >
          <h2 className="text-3xl font-extrabold text-primary-500">
            🎁 Con Cariño
          </h2>
          <p className="text-lg text-gray-700">
            Tu presencia en nuestra boda es nuestro mayor regalo. Sin embargo,
            si deseas sorprendernos con un detalle adicional, aquí tienes
            algunas ideas que nos ayudarán a comenzar esta nueva etapa juntos.
            ¡Gracias por tu cariño y apoyo!
          </p>
        </motion.div>

        {/* 🛒 Amazon Gift Registry */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="bg-white shadow-2xl rounded-2xl p-8 space-y-4"
        >
          <h2 className="text-3xl font-extrabold text-primary-500">
            📋 Lista de Regalos
          </h2>
          <p className="text-lg text-gray-700">
            Si prefieres elegir un regalo físico, hemos creado una lista de
            regalos en Amazon con algunas ideas que nos encantarían. Puedes
            explorarla aquí:
          </p>
          <a
            href="https://www.amazon.com/registry"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-primary-500 text-white font-bold text-center py-3 rounded-full hover:bg-primary-600 transition-all"
          >
            Ver Lista de Regalos en Amazon
          </a>
        </motion.div>

        {/* 💵 Bank and Mobile Transfers */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="bg-white shadow-2xl rounded-2xl p-8 space-y-4"
        >
          <h2 className="text-3xl font-extrabold text-primary-500">
            💌 Aportes Monetarios
          </h2>
          <p className="text-lg text-gray-700">
            Si prefieres hacer un aporte monetario, puedes utilizar las
            siguientes cuentas:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>
              <strong>🟢 Banco Nacional:</strong> <br />
              IBAN: CR00 0000 0000 0000 0000 00 <br />
              Titular: Nombre Completo
            </li>
            <li>
              <strong>🔵 Banco de Costa Rica:</strong> <br />
              IBAN: CR00 0000 0000 0000 0000 00 <br />
              Titular: Nombre Completo
            </li>
            <li>
              <strong>📱 SINPE Móvil:</strong> <br />
              Número: +506 0000 0000
            </li>
          </ul>
        </motion.div>

        {/* 📸 Personal Photos Carousel */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="bg-white shadow-2xl rounded-2xl p-8 space-y-6 flex flex-col items-center"
        >
          <h2 className="text-3xl font-extrabold text-primary-500">
            📸 Nuestros Momentos
          </h2>

          <div className="relative w-72 h-72 overflow-hidden rounded-xl shadow-lg">
            <AnimatePresence mode="wait">
              <motion.img
                key={photos[current].src}
                src={photos[current].src}
                alt={photos[current].alt}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-cover absolute top-0 left-0"
              />
            </AnimatePresence>
          </div>

          {/* Botones Prev/Next */}
          <div className="flex gap-6 mt-4">
            <button
              onClick={prevPhoto}
              className="bg-primary-500 text-white rounded-full p-3 hover:bg-primary-600 transition"
              aria-label="Foto anterior"
            >
              ◀
            </button>
            <button
              onClick={nextPhoto}
              className="bg-primary-500 text-white rounded-full p-3 hover:bg-primary-600 transition"
              aria-label="Foto siguiente"
            >
              ▶
            </button>
          </div>

          {/* Dots indicadores */}
          <div className="flex gap-3 mt-4">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToPhoto(index)}
                className={`w-4 h-4 rounded-full transition-colors ${
                  current === index ? "bg-primary-500" : "bg-gray-300"
                }`}
                aria-label={`Ir a foto ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
