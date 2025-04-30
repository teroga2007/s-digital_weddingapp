import PageWrapper from "../components/PageWrapper";

export default function EventInfo() {
  return (
    <PageWrapper title="Detalles del evento">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-primary mb-2">Cronograma</h2>
          <ul className="list-disc list-inside">
            <li>4:00 PM - Ceremonia</li>
            <li>5:00 PM - Cóctel</li>
            <li>7:00 PM - Cena y Fiesta</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-primary mb-2">Atracciones</h2>
          <p>Photobooth, música en vivo, brindis especial y más sorpresas.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-primary mb-2">Hoteles cercanos</h2>
          <p>Hotel Bella Vista, Hotel Las Flores, etc.</p>
        </div>
      </div>
    </PageWrapper>
  );
}
