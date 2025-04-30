import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -50 }
};

export default function PageWrapper({ title, children }) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-accent flex flex-col">
      <main className="flex-grow container mx-auto p-6">
        {title && (
          <h1 className="text-3xl font-bold text-primary mb-6 text-center font-handwriting">
            {title}
          </h1>
        )}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          {children}
        </div>
      </main>
    </motion.div>
  );
}
