export default function GeneralInfo({
  location,
  mapEmbed,
  time,
  dressCode,
  className,
}) {
  return (
    <section className={`space-y-8 ${className}`}>
      {/* Card 1: Lugar y Mapa */}
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-xl overflow-hidden">
        {/* Left - Info */}
        <div className="md:w-1/2 p-6 text-center md:text-left flex flex-col justify-center">
          <div className="text-4xl text-primary-500 mb-2 flex justify-center md:justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="#81C5C4"
              class="bi bi-pin"
              viewBox="0 0 16 16"
            >
              <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A6 6 0 0 1 5 6.708V2.277a3 3 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354m1.58 1.408-.002-.001zm-.002-.001.002.001A.5.5 0 0 1 6 2v5a.5.5 0 0 1-.276.447h-.002l-.012.007-.054.03a5 5 0 0 0-.827.58c-.318.278-.585.596-.725.936h7.792c-.14-.34-.407-.658-.725-.936a5 5 0 0 0-.881-.61l-.012-.006h-.002A.5.5 0 0 1 10 7V2a.5.5 0 0 1 .295-.458 1.8 1.8 0 0 0 .351-.271c.08-.08.155-.17.214-.271H5.14q.091.15.214.271a1.8 1.8 0 0 0 .37.282" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-2 font-sans">El Lugar</h3>
          <p className="text-gray-700 mb-1">
            <strong>Dirección:</strong> {location}
          </p>
          <p className="text-gray-700">
            <strong>Hora:</strong> {time}
          </p>
        </div>
        {/* Right - Mapa */}
        <div className="md:w-1/2 h-64 md:h-auto">
          <iframe
            src={mapEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa del evento"
          ></iframe>
        </div>
      </div>

      {/* Card 2: Código de vestimenta + Pinterest */}
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-xl overflow-hidden">
        {/* Left - Dress code */}
        <div className="md:w-1/2 p-6 text-center md:text-left flex flex-col justify-center">
          <div className="text-4xl mb-2 flex justify-center md:justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="#81C5C4"
              class="bi bi-handbag"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2m3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-2 font-sans">
            Código de Vestimenta
          </h3>
          <p className="text-gray-700">{dressCode}</p>
        </div>
        {/* Right - Pinterest Embed */}
        <div className="md:w-1/2 p-4 flex justify-center items-center">
          <a
            data-pin-do="embedBoard"
            data-pin-board-width="400"
            data-pin-scale-height="240"
            data-pin-scale-width="80"
            href="https://www.pinterest.com/ter0ga/c%C3%B3digo-de-vestimenta-formal-tropical/"
          ></a>
        </div>
      </div>
    </section>
  );
}
