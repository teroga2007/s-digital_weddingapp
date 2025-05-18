import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-sm transition-colors duration-500 ${
        isHome
          ? "bg-transparent text-white absolute"
          : "bg-dark-500 text-black shadow-lg relative"
      }`}
    >
      <div className="container mx-auto flex align-middle items-center justify-between p-4">
        <Link
          to="/"
          className={`text-3xl font-bold font-handwriting transition-colors duration-500 hover:text-primary-500 ${
            isHome ? "text-white" : "text-white"
          }`}
        >
          Nicole & Marcial
        </Link>

        {/* Botón hamburguesa visible solo en móvil */}
        <button
          className={`md:hidden text-white text-3xl focus:outline-none transition-transform duration-500 transform ${
            isOpen ? "rotate-90" : "rotate-0"
          }`}
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          ☰
        </button>

        {/* Menú normal en pantallas grandes */}
        <div className="hidden md:flex space-x-8 text-lg font-medium">
          <Link
            to="/event-info"
            className="hover:text-primary-500 text-white transition-colors duration-300"
          >
            Info
          </Link>
          <Link
            to="/story"
            className="hover:text-primary-500 text-white transition-colors duration-300"
          >
            Historia
          </Link>
          <Link
            to="/gifts"
            className="hover:text-primary-500 text-white transition-colors duration-300"
          >
            Regalos
          </Link>
          <Link
            to="/gallery"
            className="hover:text-primary-500 text-white transition-colors duration-300"
          >
            Galería
          </Link>
          <Link
            to="/rsvp"
            className="hover:text-primary-500 text-white transition-colors duration-300"
          >
            Confirmar
          </Link>
          <Link
            to="/faqs"
            className="hover:text-primary-500 text-white transition-colors duration-300"
          >
            Preguntas Frecuentes
          </Link>
        </div>
      </div>

      {/* Menú desplegable en mobile */}
      <div
        className={`md:hidden bg-dark-500 text-white overflow-hidden transition-all duration-700 ease-in-out shadow-lg ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 space-y-4">
          <Link
            to="/event-info"
            onClick={() => setIsOpen(false)}
            className="block text-lg font-medium transition-colors duration-300 hover:text-primary-500"
          >
            Info
          </Link>
          <Link
            to="/story"
            onClick={() => setIsOpen(false)}
            className="block text-lg font-medium transition-colors duration-300 hover:text-primary-500"
          >
            Historia
          </Link>
          <Link
            to="/gifts"
            onClick={() => setIsOpen(false)}
            className="block text-lg font-medium transition-colors duration-300 hover:text-primary-500"
          >
            Regalos
          </Link>
          <Link
            to="/gallery"
            onClick={() => setIsOpen(false)}
            className="block text-lg font-medium transition-colors duration-300 hover:text-primary-500"
          >
            Galería
          </Link>
          <Link
            to="/rsvp"
            onClick={() => setIsOpen(false)}
            className="block text-lg font-medium transition-colors duration-300 hover:text-primary-500"
          >
            Confirmar
          </Link>
          <Link
            to="/faqs"
            onClick={() => setIsOpen(false)}
            className="block text-lg font-medium transition-colors duration-300 hover:text-primary-500"
          >
            Preguntas Frecuentes
          </Link>
        </div>
      </div>
    </nav>
  );
}
