import Link from "next/link";
import ServiceCard from "../components/ServiceCard";
import WebsiteCreationCard from "../components/WebsiteCreation/WebsiteCreationCard";

const WebsiteCreation = () => {
  return (
    <main className="flex-grow">
      {/* title */}
      <div className="flex flex-col z-0 font-specialelite mt-1 mb-2 animate-flip-down">
        <h1 className="mx-auto drop-shadow-left text-[0.6rem] md:text-lg">
          Création de sites web sur mesures
        </h1>
      </div>
      {/* Bubble */}
      <div className="lg:w-80 lg:h-80 bg-lightgreen z-0 absolute drop-shadow-lg rounded-full animate-fade animate-duration-1000 animate-delay-[400ms] animate-ease-in"></div>
      <ServiceCard
        title="Création de sites web sur mesure"
        paragraph={
          <p>
            Créer un <strong>site web sur mesure</strong> est une étape cruciale
            pour toute entreprise, qu&apos;il s&apos;agisse d&apos;une{" "}
            <em>PME</em>, d&apos;un <em>artisan</em>, d&apos;une{" "}
            <em>association</em>... Un <strong>site vitrine</strong>, qu&apos;il
            soit <em className="not-italic">&ldquo;one-page&rdquo;</em> (
            <strong>landingpage</strong>) ou &ldquo;multipages&rdquo;, bien
            conçu, peut considérablement{" "}
            <strong className="italic">
              améliorer votre visibilité en ligne
            </strong>{" "}
            et vous aider à{" "}
            <strong className="italic">attirer de nouveaux clients</strong>. Un{" "}
            <strong>site web professionnel</strong> <em>à VOTRE image</em>{" "}
            reflète non seulement <em>votre identité</em> mais aussi votre
            sérieux et votre engagement envers vos clients. En optant pour une{" "}
            <strong className="italic">solution personnalisée</strong>, vous
            vous assurez que votre site répond parfaitement à vos besoins
            spécifiques et qu&apos;il est optimisé pour offrir une{" "}
            <em className="not-italic">expérience utilisateur optimisée</em>. En
            fin de compte, un <strong>site web professionnel</strong> est un{" "}
            <em>
              investissement essentiel pour faire grandir votre entreprise et se
              démarquer dans un marché compétitif
            </em>
            .
          </p>
        }
        link="/contact"
        img="/images/Photos/creation.png"
      />
      {/* title of steps */}
      <div className="flex flex-row justify-center items-center mt-2 md:mt-2 md:ml-10">
        <div className="w-5 h-5 md:w-12 md:h-12 bg-lightgreen z-0 relative drop-shadow-lg rounded-full animate-fade animate-duration-1000 animate-delay-[400ms] animate-ease-in"></div>
        <h2 className="z-10 w-40 md:w-80 lg:w-[30rem] text-[50%] md:text-[90%] lg:text-[100%] md:p-2 md:pt-9 lg:pt-2 mt-4 md:mt-2 -ml-3 md:-ml-10 font-specialelite">
          Les étapes de la création d&apos;un site web sur mesures
        </h2>
      </div>
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
            <li>- Tests et corrections d&apos;éventuels bugs</li>
            <li>- Définir la structure (menu, ...)</li>
            <li>- Livraison de votre site web!</li>
          </ul>
        }
      />
      {/* Price */}
      <div className="flex flex-row justify-center items-center md:w-80 mx-auto mt-7 mb-10 md:animate-wiggle">
        <Link href="/contact">
          <div className=" border-darkgreen bg-verylightgray border-4 md:w-auto h-auto rounded-lg text-center shadow-lg">
            <p className="text-darkgreen font-specialelite p-3 md:p-4 text-xs md:text-base">
              Demandez une estimation
            </p>
          </div>
        </Link>
      </div>
    </main>
  );
};

export default WebsiteCreation;
