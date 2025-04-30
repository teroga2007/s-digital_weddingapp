import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-4xl font-bold text-primary-500 font-handwriting">Marcial & Nicole</Link>
        <div className="space-x-4">
          <Link to="/rsvp" className="hover:underline">Confirmar</Link>
          <Link to="/event-info" className="hover:underline">Info</Link>
          <Link to="/gifts" className="hover:underline">Regalos</Link>
          <Link to="/gallery" className="hover:underline">Galería</Link>
          <Link to="/faqs" className="hover:underline">Preguntas Frecuentes</Link>
        </div>
      </div>
    </nav>
  );
}
