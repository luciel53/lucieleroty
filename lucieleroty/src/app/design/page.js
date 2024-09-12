import Image from "next/image";
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
          paragraph={<p>Création de supports de communication tels que:</p>}
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
            <p>
              Le tout en respectant votre charte graphique ou en la créant si
              elle n'est pas encore définie!
            </p>
          }
          img="/images/CarouselHome/design.png"
        />
        {/* Cartes de visites */}
        <div className="flex flex-wrap-reverse lg:flex-nowrap md:flex-col h-auto p-4 mx-64 mb-10 z-10 relative justify-center items-center opacity-90 bg-verylightgray border-2 border-lightgreen rounded-lg">
          <p className="pb-4 font-specialelite text-sm drop-shadow-left">
            Exemples de carte de visite:
          </p>
          <div className="flex flex-row justify-center ">
            <div>
              <Image
                src="/images/design/llrecto.png"
                alt="Carte de visite de Lucie Leroty"
                width={400}
                height={400}
              />
            </div>
            <div>
              <Image
                src="/images/design/llverso.png"
                alt="Carte de visite de Lucie Leroty"
                width={400}
                height={400}
              />
            </div>
          </div>
          <div className="flex flex-row justify-center ">
            <div>
              <Image
                src="/images/design/jrrecto.png"
                alt="Carte de visite de Lucie Leroty"
                width={400}
                height={400}
              />
            </div>
            <div>
              <Image
                src="/images/design/jrverso.png"
                alt="Carte de visite de Lucie Leroty"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
        {/* Flyers */}
        <div className="flex flex-wrap-reverse lg:flex-nowrap md:flex-col h-auto p-4 mx-64 z-10 relative justify-center items-center opacity-90 bg-verylightgray border-2 border-lightgreen rounded-lg mb-10">
          <p className="pb-4 font-specialelite text-sm drop-shadow-left">
            Exemples de carte de visite:
          </p>
          <div className="flex flex-row justify-center ">
            <div>
              <Image
                src="/images/CarouselHome/design.png"
                alt="exemple de flyer, concert de jazz"
                width={800}
                height={800}
              />
            </div>
          </div>
        </div>
        {/* Price */}
        <div className="flex flex-row justify-center items-center mx-auto mb-10 animate-wiggle">
          <div className=" border-darkgreen border-4 w-auto h-auto rounded-lg text-center shadow-lg">
            <p className="text-darkgreen font-specialelite p-4">Demandez un devis en ligne</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default WebsiteCreation;
