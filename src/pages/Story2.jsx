import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import timeline from "../data/timeline";

const bgColors = [
  "bg-primary-pattern",
  "bg-accent-pattern",
  "bg-green-pattern",
];
const textColorByBg = {
  "bg-primary-pattern": "text-white",
  "bg-accent-pattern": "text-dark-500",
  "bg-green-pattern": "text-white",
};

const Story2 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sectionHeight = window.innerHeight;
      const scrollPosition = window.scrollY + sectionHeight / 2;
      const newIndex = Math.min(
        Math.floor(scrollPosition / sectionHeight),
        timeline.length - 1
      );
      setActiveIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (index) => {
    const y = window.innerHeight * index;
    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  const openLightbox = (imgIndex) => setLightboxImageIndex(imgIndex);
  const closeLightbox = () => setLightboxImageIndex(null);

  const prevImage = useCallback(() => {
    if (lightboxImageIndex === null) return;
    const imagesCount = timeline[activeIndex].image.length;
    setLightboxImageIndex((lightboxImageIndex - 1 + imagesCount) % imagesCount);
  }, [activeIndex, lightboxImageIndex]);

  const nextImage = useCallback(() => {
    if (lightboxImageIndex === null) return;
    const imagesCount = timeline[activeIndex].image.length;
    setLightboxImageIndex((lightboxImageIndex + 1) % imagesCount);
  }, [activeIndex, lightboxImageIndex]);

  const handleBackgroundClick = (e) => {
    if (e.target.id === "lightbox-bg") closeLightbox();
  };

  useEffect(() => {
    if (lightboxImageIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowLeft") prevImage();
      else if (e.key === "ArrowRight") nextImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxImageIndex, prevImage, nextImage]);

  return (
    <>
      {/* Navegación lateral para desktop y mobile */}
      <nav
        className={`fixed z-50 flex gap-3 bg-dark-100/90 rounded-lg p-3
    ${
      window.innerWidth < 768
        ? "bottom-4 left-1/2 transform -translate-x-1/2 flex-row bg-dark-500 mb-10"
        : "top-1/2 right-4 transform -translate-y-1/2 flex-col"
    }`}
      >
        {timeline.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={index}
              onClick={() => scrollToSection(index)}
              aria-label={`Ir a sección ${item.title}`}
              className={`w-4 h-4 rounded-full transition-all duration-300
          ${isActive ? "bg-yellow-400" : "bg-gray-400 hover:bg-yellow-300"}
        `}
            />
          );
        })}
      </nav>

      {/* Contenedor principal con padding bottom para que no tape el nav móvil */}
      <div className="relative w-full h-full overflow-x-hidden">
        {timeline.map((item, index) => {
          const bgColor = bgColors[index % bgColors.length];
          const textColor = textColorByBg[bgColor];

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0.1, scale: 1.05 }}
              animate={{
                opacity: index === activeIndex ? 1 : 0.1,
                scale: index === activeIndex ? 1 : 1.05,
                pointerEvents: index === activeIndex ? "auto" : "none",
              }}
              transition={{ duration: 1.8, ease: [0.43, 0.13, 0.23, 0.96] }}
              className={`${bgColor} relative w-full h-screen flex flex-col items-center justify-center p-8`}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: index === activeIndex ? 1 : 0,
                  y: index === activeIndex ? 0 : 50,
                }}
                transition={{
                  duration: 1.2,
                  delay: 0.5,
                  ease: [0.42, 0, 0.58, 1],
                }}
                className={`z-10 text-center max-w-3xl ${textColor}`}
              >
                <h2 className="text-4xl md:text-6xl font-bold mb-4">
                  {item.date}
                </h2>
                <h3 className="text-2xl md:text-4xl mb-4">{item.title}</h3>
                <p className="text-lg md:text-2xl">{item.description}</p>
              </motion.div>

              <div className="mt-8 flex flex-wrap justify-center gap-4 max-w-5xl z-10">
                {item.image.map((img, imgIndex) => (
                  <div
                    key={imgIndex}
                    onClick={() => openLightbox(imgIndex)}
                    className="w-32 h-20 md:w-40 md:h-24 cursor-pointer rounded-lg overflow-hidden shadow-lg border-4 border-white hover:border-yellow-400 transition"
                  >
                    <img
                      src={img}
                      alt={`thumbnail-${imgIndex}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}

        <AnimatePresence>
          {lightboxImageIndex !== null && (
            <motion.div
              id="lightbox-bg"
              onClick={handleBackgroundClick}
              className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 text-white text-4xl font-bold hover:text-yellow-400 z-50"
                aria-label="Cerrar imagen"
              >
                &times;
              </button>

              {timeline[activeIndex].image.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-5xl font-bold hover:text-yellow-400 z-50 select-none"
                  aria-label="Imagen anterior"
                >
                  &#8592;
                </button>
              )}

              <motion.img
                key={timeline[activeIndex].image[lightboxImageIndex]}
                src={timeline[activeIndex].image[lightboxImageIndex]}
                alt="imagen ampliada"
                className="max-w-full max-h-full rounded-lg shadow-2xl"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              />

              {timeline[activeIndex].image.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-5xl font-bold hover:text-yellow-400 z-50 select-none"
                  aria-label="Imagen siguiente"
                >
                  &#8594;
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Story2;
