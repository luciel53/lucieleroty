import Footer from "../components/Footer";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";

const card = {
  title: "Photographie",
  paragraph:
    "Je propose aux professionnels et aux particuliers des séances photos pour tous leurs projets. Aux professionnels: des clichés pour illustrer leur site web ainsi que leurs supports de communication. Aux particuliers: je vous accompagne dans les différents moments de vie. Grossesse, photos de familles, naissances, mariages, cérémonies, photos d'animaux et paysages...",
  img: "/images/CarouselHome/chenonceau.jpg",
};

const WebsiteCreation = () => {
  return (
    <>
      <Header />
      <main className="flex-grow">
        {/* title */}
        <div className="flex flex-col z-0 font-specialelite mt-1 mb-2 animate-flip-down">
          <h1 className="mx-auto drop-shadow-left text-[0.6rem] md:text-lg lg:text-xl">
            Photographie
          </h1>
        </div>
        {/* Bubble */}
        <div className="lg:w-80 lg:h-80 bg-lightgreen z-0 absolute drop-shadow-lg rounded-full animate-fade animate-duration-1000 animate-delay-[400ms] animate-ease-in"></div>
        <ServiceCard {...card} />
      </main>
      <Footer />
    </>
  );
};

export default WebsiteCreation;
