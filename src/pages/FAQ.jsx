import PageWrapper from "../components/PageWrapper";

export default function FAQs() {
  return (
    <PageWrapper title="Preguntas Frecuentes">
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-primary-500 mb-2">
            ¿Código de vestimenta?
          </h2>
          <p>Formal - Elegante de día.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-primary-500 mb-2">
            ¿Hora de llegada?
          </h2>
          <p>Por favor llegar 15 minutos antes de las 4:00 PM.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-primary-500 mb-2">
            ¿Dónde es el evento?
          </h2>
          <p>Hacienda Bella Vista, Cartago, Costa Rica.</p>
        </div>
      </div>
    </PageWrapper>
  );
}
