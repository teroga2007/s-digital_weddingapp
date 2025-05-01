import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -50 },
};

export default function PageWrapper({ title, children }) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
      className="flex flex-col"
    >
      <main className="flex-grow container mx-auto p-6 mt-5">
        {title && (
          <div className="relative mb-6 text-center">
            <h2 className="pb-3 absolute inset-0 text-7xl font-black font-sans text-primary-500 opacity-5 pointer-events-none select-none flex items-center justify-center">
              {title}
            </h2>
            <h1 className="relative text-7xl font-bold text-primary-500 font-handwriting text-primary-500-500">
              {title}
            </h1>
          </div>
        )}

        <div className="bg-white p-2">{children}</div>
      </main>
    </motion.div>
  );
}
