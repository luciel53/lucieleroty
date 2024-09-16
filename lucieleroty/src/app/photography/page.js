import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PhotographyCarousel from "../components/PhotographyCarousel/PhotographyCarousel";
import ServiceCard from "../components/ServiceCard";

const card = {
  title: "Photographie",
  paragraph:
    "Je propose aux professionnels et aux particuliers des séances photos pour tous leurs projets. Aux professionnels: des clichés pour illustrer leur site web ainsi que leurs supports de communication. Aux particuliers: je vous accompagne dans les différents moments de vie. Grossesse, photos de familles, naissances, mariages, cérémonies, photos d'animaux et paysages...",
  img: "/images/CarouselHome/chenonceau.jpg",
};

const portraitPhotos = [
  {
    img: "/images/CarouselPhotos/test/familleheureuse.jpg",
    title: "Une famille heureuse, dans les bois",
    quote: "Une famille heureuse, dans les bois",
  },
  {
    img: "/images/CarouselPhotos/test/mariage.jpg",
    title: "Mariage",
    quote: "Mariage",
  },
  {
    img: "/images/CarouselPhotos/test/enfant-dune-du-pilat.jpg",
    title: "Dune du pilat",
    quote: "Dune du pilat",
  },
  {
    img: "/images/CarouselPhotos/test/balinais.jpg",
    title: "Balinais",
    quote: "Balinais",
  },
  {
    img: "/images/CarouselPhotos/test/pied-nourrisson.jpg",
    title: "Naissance",
    quote: "Naissance",
  },
];

const animalsPhotos = [
  {
    img: "/images/CarouselPhotos/test/ecureuil-roux.jpg",
    title: "Ecureil roux en Mayenne",
    quote: "Ecureil roux en Mayenne",
  },
  {
    img: "/images/CarouselPhotos/puydufou.jpg",
    title: "Puy-Du-Fou",
    quote: "Puy-Du-Fou",
  },
  {
    img: "/images/CarouselPhotos/test/gorille.jpg",
    title: "Gorille au zoo de Beauval",
    quote: "Gorille au zoo de Beauval",
  },
  {
    img: "/images/CarouselPhotos/test/chatbengal.jpg",
    title: "Chat de race Bengal",
    quote: "Chat Bengal blue sepia",
  },
  {
    img: "/images/CarouselPhotos/test/chevalnoir.jpg",
    title: "Cheval selle français noir",
    quote: "Cheval selle français noir",
  },
];

const landscapePhotos = [
  {
    img: "/images/CarouselPhotos/test/site-de-coupeau.jpg",
    title: "Site de Coupeau à Saint-Berthevin en Mayenne",
    quote: "Site de Coupeau, Saint-Berthevin, Mayenne",
  },
  {
    img: "/images/CarouselPhotos/test/perth.jpg",
    title: "Perth, en Australie",
    quote: "Perth, en Australie",
  },
  {
    img: "/images/CarouselPhotos/test/laval.jpg",
    title: "Laval en Mayenne",
    quote: "Laval en Mayenne",
  },
  {
    img: "/images/CarouselPhotos/test/etnabrumeneige.jpg",
    title: "Etna sous la brume et la neige",
    quote: "Etna sous la brume et la neige",
  },
  {
    img: "/images/CarouselPhotos/test/phare-australie.jpg",
    title: "Phare à Exmouth en Australie",
    quote: "Phare à Exmouth en Australie",
  },
];

const Photography = () => {
  return (
    <>
      <Header />
      <main className="flex-grow">
        {/* title */}
        <div className="flex flex-col z-0 font-specialelite mt-1 lg:mt-3 mb-2 animate-flip-down">
          <h1 className="mx-auto drop-shadow-left text-[0.6rem] md:text-lg lg:text-xl">
            Photographie
          </h1>
        </div>
        {/* Bubble */}
        <div className="lg:w-80 lg:h-80 bg-lightgreen z-0 absolute drop-shadow-lg rounded-full animate-fade animate-duration-1000 animate-delay-[400ms] animate-ease-in"></div>
        <ServiceCard {...card} />
        <div className="mb-10">
          <h2 className="text-center font-specialelite mt-12 mb-3 text-[50%] md:text-sm">
            Portraits, Photos de grossesse, naissances, mariage...
          </h2>
          <PhotographyCarousel photos={portraitPhotos} />
        </div>
        <div>
          <h2 className="text-center font-specialelite mt-12 mb-3 text-[50%] md:text-sm">
            Paysages, architecture, immobilier...
          </h2>
          <PhotographyCarousel photos={landscapePhotos} />
        </div>
        <div>
          <h2 className="text-center font-specialelite mt-12 mb-3 text-[50%] md:text-sm">
            Photos animalières, chats, chiens, chevaux...
          </h2>
          <PhotographyCarousel photos={animalsPhotos} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Photography;
