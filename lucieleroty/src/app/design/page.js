import Footer from "../components/Footer";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";

const WebsiteCreation = () => {
  return (
    <>
      <Header />
      <main className="flex-grow">
        {/* title */}
        <div className="flex flex-col z-0 font-specialelite mt-1 mb-2 animate-flip-down">
          <h1 className="mx-auto drop-shadow-left text-[0.6rem] md:text-lg lg:text-xl">
            Création de designs
          </h1>
        </div>
        {/* Bubble */}
        <div className="lg:w-80 lg:h-80 bg-lightgreen z-0 absolute drop-shadow-lg rounded-full animate-fade animate-duration-1000 animate-delay-[400ms] animate-ease-in"></div>
        <ServiceCard
          title="Création de Designs"
          paragraph={
            <p>
              Création de supports de communication tels que:
            </p>
          }
          ul={
            <ul>
                <li>- Flyers</li>
                <li>- Maquettes</li>
                <li>- Cartes de visite</li>
                <li>- Affiches</li>
                <li>- Logos</li>
              </ul>
          }
          paragraph2={
            <p>Le tout en respectant votre charte graphique ou en la créant si
            elle n'est pas encore définie!</p>
          }

          img="/images/CarouselHome/design.png"
        />
      </main>
      <Footer />
    </>
  );
};

export default WebsiteCreation;
