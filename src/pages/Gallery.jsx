import PageWrapper from "../components/PageWrapper";

export default function Gallery() {
  return (
    <PageWrapper title="Galería de fotos">
      <p className="mb-4">¡Después del evento podrás ver y subir tus fotos aquí!</p>
      <a
        href="https://link-album-compartido.com"
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-primary hover:bg-secondary text-white font-bold py-3 px-6 rounded text-center"
      >
        Ir al Álbum
      </a>
    </PageWrapper>
  );
}
