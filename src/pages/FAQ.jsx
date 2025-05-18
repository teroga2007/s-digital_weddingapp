import { useState } from "react";
import PageWrapper from "../components/PageWrapper";
import { motion, AnimatePresence } from "framer-motion";
import faqs from "../data/faqs";

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <PageWrapper title="Preguntas Frecuentes">
      <div className="max-w-4xl mx-auto p-4 md:p-8 space-y-6">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.015 }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className={`bg-white shadow-2xl rounded-2xl overflow-hidden transition-all ${
              openIndex === index ? "border-l-4 border-primary-500" : ""
            }`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-6 text-lg font-extrabold text-primary-500 focus:outline-none"
            >
              <span>{faq.question}</span>
              <motion.span
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="text-2xl"
              >
                ▼
              </motion.span>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="px-6 pb-6 text-dark-500"
                >
                  <p>{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </PageWrapper>
  );
}
