import { motion } from "framer-motion";

export default function GeneralInfo({
  location,
  mapEmbed,
  time,
  dressCode,
  className,
}) {
  return (
    <section className={`space-y-10 ${className}`}>
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 180, damping: 20 }}
        className="flex flex-col md:flex-row bg-white shadow-2xl rounded-2xl overflow-hidden"
      >
        <div className="md:w-1/2 p-8 flex flex-col justify-center text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start mb-4">
            <h3 className="text-2xl font-extrabold text-primary-500">
              ¿Dónde y cuándo?
            </h3>
          </div>
          <p className="text-gray-700 text-md mb-2">{location}</p>
          <p className="text-gray-700 text-md">28 de Febrero, 2026</p>
          <p className="text-gray-700 text-md">3:00PM</p>
        </div>

        <div className="md:w-1/2 h-72 md:h-auto">
          <iframe
            src={mapEmbed}
            width="100%"
            height="100%"
            className="rounded-r-2xl"
            style={{ filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa del evento"
          ></iframe>
        </div>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 180, damping: 20 }}
        className="flex flex-col md:flex-row bg-white shadow-2xl rounded-2xl overflow-hidden"
      >
        <div className="md:w-1/2 p-8 flex flex-col justify-center text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start mb-4">
            <h3 className="text-2xl font-extrabold text-primary-500 ml-3">
              Código de Vestimenta
            </h3>
          </div>
          <p className="text-gray-700 text-md">{dressCode}</p>
        </div>

        <div className="md:w-1/2 p-6 flex justify-center items-center bg-gradient-to-l from-primary-500/100 to-primary-500/50">
          <a
            href="https://www.pinterest.com/ter0ga/c%C3%B3digo-de-vestimenta-formal-tropical/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark-500 text-center md:normal underline font-semibold hover:underline"
          >
            Ver Inspiración Formal Tropical en Pinterest
          </a>
        </div>
      </motion.div>
    </section>
  );
}
