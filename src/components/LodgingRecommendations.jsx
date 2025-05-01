export default function LodgingRecommendations({ data }) {
  return (
    <section className="space-y-10">
      {data.map((section, idx) => (
        <div key={idx} className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-2 font-sans text-center">
            {section.section}
          </h2>
          {section.description && (
            <p className="text-gray-600 mb-4 text-center">
              {section.description}
            </p>
          )}
          <ul className="space-y-8">
            {section.places.map((place, index) => (
              <li key={index} className="border-l-4 border-primary-500 pl-4">
                <p className="font-bold">{place.name}</p>
                <p className="text-gray-700">{place.address}</p>
                {place.price && <p className="text-gray-700">{place.price}</p>}
                {place.link && (
                  <a
                    href={place.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 underline"
                  >
                    Ver más
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
