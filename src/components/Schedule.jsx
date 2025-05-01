export default function Schedule({ events, className }) {
  return (
    <section
      className={`bg-white shadow-md p-6 rounded-xl space-y-4 ${className}`}
    >
      <h2 className="text-2xl font-bold text-primary-500 font-sans text-center">
        Cronograma
      </h2>
      <ul className="space-y-2">
        {events.map((item, index) => (
          <li
            key={index}
            className="flex flex-col md:flex-row md:justify-between border-b border-gray-700 pb-2 text-gray-700"
          >
            <span className="font-semibold">{item.time}</span>
            <span>{item.activity}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
