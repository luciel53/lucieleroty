import Footer from "../components/Footer";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import WebsiteCreationCard from "../components/WebsiteCreation/WebsiteCreationCard";

const card = {
  title: "Création de sites web sur mesure",
  paragraph:
    "Créer un site web sur mesure est une étape cruciale pour toute entreprise, qu'il s'agisse d'une PME, d'un artisan, d'une association... Un site vitrine, un site one page ou une landing page bien conçus peuvent considérablement améliorer votre visibilité en ligne et vous aider à attirer de nouveaux clients. Un site web professionnel à votre image reflète non seulement votre identité mais aussi votre sérieux et votre engagement envers vos clients. En optant pour une solution personnalisée, vous vous assurez que votre site répond parfaitement à vos besoins spécifiques et qu'il est optimisé pour offrir une expérience utilisateur optimisée. En fin de compte, un site web professionnel est un investissement essentiel pour faire grandir votre entreprise et se démarquer dans un marché compétitif.",
  img: "/images/CarouselHome/creation.png",
};

const WebsiteCreation = () => {
  return (
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
      <WebsiteCreationCard
        srcImg="/images/Photos/cahierdescharges.png"
        title="1. Etude du cahier des charges"
        ul={
          <ul className="ml-4 ">
            <li>- Analyse de vos besoins</li>
            <li>- Objectifs du site</li>
            <li>- Définir la structure (menu, ...)</li>
            <li>- Choix des technologies</li>
            <li>- Vos goûts</li>
          </ul>
        }
      />
      <WebsiteCreationCard
        srcImg="/images/Photos/maquette.png"
        title="2. Conception de la maquette"
        ul={
          <ul className="ml-4 ">
            <li>- Définition de la charte graphique</li>
            <li>- Réalisation de la maquette en tenant compte de vos goûts</li>
          </ul>
        }
      />
      <WebsiteCreationCard
        srcImg="/images/Photos/developpement.png"
        title="3. Développement"
        ul={
          <ul className="ml-4 ">
            <li>- Codage du site en suivant la maquette</li>
            <li>- Optimisation SEO</li>
            <li>- Site responsive</li>
            <li>
              - Options possibles (rédaction de contenus, photographies...)
            </li>
          </ul>
        }
      />
      <WebsiteCreationCard
        srcImg="/images/Photos/livraisondusite.png"
        title="4. La livraison"
        ul={
          <ul className="ml-4 ">
            <li>- Déploiement du site</li>
            <li>- Tests et corrections d'éventuels bugs</li>
            <li>- Définir la structure (menu, ...)</li>
            <li>- Livraison de votre site web!</li>
          </ul>
        }
      />
    </main>
  );
};

export default WebsiteCreation;
