import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isHome
          ? "bg-transparent text-white absolute"
          : "bg-white text-black shadow-md relative"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between p-3">
        <Link
          to="/"
          className={`text-4xl font-bold font-handwriting ${
            isHome ? "text-white" : "text-primary-500"
          }`}
        >
          Marcial & Nicole
        </Link>

        {/* Botón hamburguesa visible solo en móvil */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          ☰
        </button>

        {/* Menú normal en pantallas grandes */}
        <div className="hidden md:flex space-x-4">
          <Link to="/event-info" className="hover:underline">
            Info
          </Link>
          <Link to="/story" className="hover:underline">
            Historia
          </Link>
          <Link to="/gifts" className="hover:underline">
            Regalos
          </Link>
          <Link to="/gallery" className="hover:underline">
            Galería
          </Link>
          <Link to="/rsvp" className="hover:underline">
            Confirmar
          </Link>
          <Link to="/faqs" className="hover:underline">
            Preguntas Frecuentes
          </Link>
        </div>
      </div>

      {/* Menú desplegable en mobile */}
      {isOpen && (
        <div className="md:hidden bg-white text-black px-4 pb-4 space-y-2">
          <Link
            to="/event-info"
            className="block"
            onClick={() => setIsOpen(false)}
          >
            Info
          </Link>
          <Link to="/story" className="block" onClick={() => setIsOpen(false)}>
            Historia
          </Link>
          <Link to="/gifts" className="block" onClick={() => setIsOpen(false)}>
            Regalos
          </Link>
          <Link
            to="/gallery"
            className="block"
            onClick={() => setIsOpen(false)}
          >
            Galería
          </Link>
          <Link to="/rsvp" className="block" onClick={() => setIsOpen(false)}>
            Confirmar
          </Link>
          <Link to="/faqs" className="block" onClick={() => setIsOpen(false)}>
            Preguntas Frecuentes
          </Link>
        </div>
      )}
    </nav>
  );
}
