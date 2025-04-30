export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center text-sm p-4 mt-8">
      © {new Date().getFullYear()} Powered by <a className="text-cyan-900 hover:text-cyan-600 font-semibold" href="mailto:sterogam@gmail.com">S-Digital</a> | Todos los derechos reservados
    </footer>
  );
}
