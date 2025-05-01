import PageWrapper from "../components/PageWrapper";
import GeneralInfo from "../components/GeneralInfo";
import Schedule from "../components/Schedule";
import { schedule } from "../data/schedule";
import { places } from "../data/places";
import LodgingRecommendations from "../components/LodgingRecommendations";

export default function EventInfo() {
  return (
    <PageWrapper title="Detalles del evento">
      <GeneralInfo
        className="mb-8"
        location="Mi Casita Tica, Puntarenas"
        time="3:00PM"
        dressCode="Formal tropical"
        mapEmbed="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.5374232785775!2d-84.74529299999999!3d9.9723898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0312bff0c4b65%3A0x1b4631f450aec21a!2sMi%20casita%20tica!5e0!3m2!1sen!2scr!4v1746066391874!5m2!1sen!2scr"
      ></GeneralInfo>
      <Schedule events={schedule} className="mb-8"></Schedule>
      <LodgingRecommendations data={places}></LodgingRecommendations>
      {/* <h2 className="text-2xl font-semibold text-primary-500 mb-2">
          Atracciones
        </h2>
        <p>Photobooth, música en vivo, brindis especial y más sorpresas.</p> */}
    </PageWrapper>
  );
}
