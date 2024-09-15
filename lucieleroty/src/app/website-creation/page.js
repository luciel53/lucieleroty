import Footer from "../components/Footer";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";

const card = {
  title: "Création de sites web sur mesure",
  paragraph:
    "Créer un site web sur mesure est une étape cruciale pour toute entreprise, qu'il s'agisse d'une PME, d'un artisan, d'une association... Un site vitrine, un site one page ou une landing page bien conçus peuvent considérablement améliorer votre visibilité en ligne et vous aider à attirer de nouveaux clients. Un site web professionnel à votre image reflète non seulement votre identité mais aussi votre sérieux et votre engagement envers vos clients. En optant pour une solution personnalisée, vous vous assurez que votre site répond parfaitement à vos besoins spécifiques et qu'il est optimisé pour offrir une expérience utilisateur optimisée. En fin de compte, un site web professionnel est un investissement essentiel pour faire grandir votre entreprise et se démarquer dans un marché compétitif.",
  img: "/images/CarouselHome/creation.png",
};

const WebsiteCreation = () => {
  return (
    <>
      <Header />
      <main className="flex-grow">
        {/* title */}
        <div className="flex flex-col z-0 font-specialelite mt-1 lg:mt-3 mb-2 animate-flip-down">
          <h1 className="mx-auto drop-shadow-left text-[0.6rem] md:text-lg lg:text-xl">
            Création de sites web sur mesures
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
