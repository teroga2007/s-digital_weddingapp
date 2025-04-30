import PageWrapper from "../components/PageWrapper";

export default function Gifts() {
  return (
    <PageWrapper title="Lista de regalos">
      <p className="mb-6">Tu presencia es nuestro mejor regalo, pero si deseas obsequiarnos algo, puedes realizar un depósito en nuestras cuentas:</p>
      <ul className="space-y-2">
        <li><strong>Cuenta Bancaria (Juan):</strong> 123-456-789</li>
        <li><strong>Cuenta Bancaria (María):</strong> 987-654-321</li>
      </ul>
    </PageWrapper>
  );
}
