import { motion } from "framer-motion";

export default function Schedule({ events, className }) {
  return (
    <motion.section
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 180, damping: 20 }}
      className={`p-8 space-y-6 bg-white shadow-2xl rounded-2xl ${className}`}
    >
      <h2 className="text-2xl font-extrabold text-primary-500 font-sans text-center mb-6">
        Cronograma
      </h2>
      <ul className="space-y-4">
        {events.map((item, index) => (
          <li
            key={index}
            className="flex flex-col md:flex-row md:justify-between items-center border-b border-secondary-500 pb-3 last:border-0"
          >
            <span className="font-semibold text-primary-500 text-lg md:text-xl w-32 text-center md:text-left">
              {item.time}
            </span>
            <span className="text-gray-700 text-base md:text-lg text-center md:text-left">
              {item.activity}
            </span>
          </li>
        ))}
      </ul>
    </motion.section>
  );
}
