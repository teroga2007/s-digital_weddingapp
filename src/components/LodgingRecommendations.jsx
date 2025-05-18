import { motion } from "framer-motion";

export default function LodgingRecommendations({ data }) {
  return (
    <motion.section
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 180, damping: 20 }}
      className="space-y-8"
    >
      {data.map((section, idx) => (
        <div key={idx} className="bg-white p-8 rounded-3xl shadow-2xl">
          <h2 className="text-2xl font-extrabold mb-4 font-sans text-center text-primary-500">
            {section.section}
          </h2>
          {section.description && (
            <p className="text-gray-600 mb-8 text-center text-md max-w-3xl mx-auto">
              {section.description}
            </p>
          )}
          <ul className="space-y-8 max-w-4xl mx-auto">
            {section.places.map((place, index) => (
              <li
                key={index}
                className="border-l-8 border-secondary-500 pl-6 py-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <p className="font-bold text-lg text-primary-500 mb-1">
                  {place.name}
                </p>
                <p className="text-gray-700 mb-1">{place.address}</p>
                {place.price && (
                  <p className="text-gray-700 mb-2 font-semibold">
                    {place.price}
                  </p>
                )}
                {place.link && (
                  <a
                    href={place.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-secondary-500 font-semibold underline hover:text-cyan-800"
                  >
                    Ver más
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </motion.section>
  );
}
