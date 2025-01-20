import Link from "next/link";
import ServiceCard from "../components/ServiceCard";
import WebsiteCreationCard from "../components/WebsiteCreation/WebsiteCreationCard";
import Realisations from "../components/Home/Realisations.js";
import Cards from "../components/WebsiteCreation/Cards";

const WebsiteCreation = () => {
  return (
    <main className="flex-grow">
      {/* title */}
      <div className="flex flex-col z-0 font-specialelite mt-1 mb-2 animate-flip-down">
        <h1 className="mx-auto drop-shadow-left text-[0.6rem] md:text-lg">
          Création de sites web sur mesure
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center relative z-10">
        <h2>Développez votre visibilité et attirez de nouveaux clients !</h2>
      </div>
      {/* Bubble */}
      <div className="lg:w-80 lg:h-80 bg-lightgreen z-0 absolute drop-shadow-lg rounded-full animate-fade animate-duration-1000 animate-delay-[400ms] animate-ease-in"></div>
      <section className="text-center py-0 relative z-10">
        <p className=" mb-8">
          Je suis à votre écoute pour créer un site vitrine sur mesure qui{" "}
          <em>vous ressemble</em>.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 xl:mx-12">
          <Cards
            title="Site Vitrine"
            p1="Un site web élégant et fonctionnel pour présenter votre activité, vos services ou votre portfolio."
            p2="Minimum 2 pages"
            p3="Site responsive (adapté aux formats tablettes et mobiles)"
            p4="Référencement naturel (SEO) pour améliorer votre visibilité sur les moteurs de recherche"
            p5="Mentions légales incluses"
            link="/contact"
            price="À partir de 800€"
          />
          <Cards
            title="Landing Page"
            p1="Une page optimisée pour convertir vos visiteurs en clients avec
              un design accrocheur."
            p2="1 page optimisée"
            p3="Référencement naturel (SEO) pour améliorer votre visibilité sur les moteurs de recherche"
            p4="Site responsive (adapté aux formats tablettes et mobiles)"
            p5="Mentions légales incluses"
            link="/contact"
            price="À partir de 400€"
          />
          <Cards
            title="Refonte de Site Web"
            p1="Modernisez votre site existant avec un design épuré et des performances optimisées."
            link="/contact"
            price="Prix: Me contacter"
          />
        </div>
      </section>

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
            <em className="not-italic">expérience utilisateur agréable</em>. En
            fin de compte, un <strong>site web de qualité</strong> est un{" "}
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
          Les étapes de la création d&apos;un site web sur mesure
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
      {/* <div className="flex flex-row justify-center items-center md:w-80 mx-auto mt-7 mb-10 md:animate-wiggle">
        <Link href="/contact">
          <button className=" border-darkgreen bg-verylightgray border-4 md:w-auto h-auto rounded-lg text-center shadow-lg">
            <p className="text-darkgreen font-specialelite p-3 md:p-4 text-xs md:text-base">
              Demandez une estimation
            </p>
          </button>
        </Link>
      </div> */}
      {/* Réalisations */}
      <section
        data-aos="fade-up"
        data-aos-transform="translate"
        className="z-20 relative mt-12 mb-0"
        id="realisations"
      >
        <div className="flex flex-row justify-center items-center mt-2 md:mt-2 md:ml-60 mb-4">
          <div className="w-5 h-5 md:w-12 md:h-12 bg-lightgreen z-0 relative drop-shadow-lg rounded-full animate-fade animate-duration-1000 animate-delay-[400ms] animate-ease-in"></div>
          <h2 className="z-10 w-40 md:w-80 lg:w-[30rem] text-[50%] md:text-[90%] lg:text-[100%] md:p-2 md:pt-9 lg:pt-2 mt-4 md:mt-2 -ml-3 md:-ml-10 font-specialelite">
            Quelques réalisations...
          </h2>
        </div>
        <Realisations
          image="/images/Photos/bebe-signe.png"
          title="👐 Les mains d'Audrey"
          paragraph="Site web fait entièrement sur mesure 📏 pour
            Audrey, auto-entrepreneuse spécialisée dans le Bébé Signe 👶 et la
            culture Sourde."
          link="https://www.lesmainsdaudrey44.com/"
        />
        <Realisations
          image="/images/Photos/haras.png"
          title="🏇 Site web équestre"
          paragraph="Site web réalisé pour un centre équestre fictif. Le template est disponible à la vente. Me contacter si intéressé."
          link="https://luciel53.github.io/Haras-Landingpage/"
        />
        <Realisations
          image="/images/Photos/mosquitokiller.png"
          title="🦟 Mosquito killer"
          paragraph="Petit jeu de type jeu de tirs, vous devez tuer un maximum de moustiques. Attention, il ne dois pas y en avoir plus de 30 à l'écran simultanément. Vous n'avez droit qu'à 5 erreurs."
          link="https://luciel53.github.io/MosquitoKiller-Dep/"
        />
        <Realisations
          image="/images/Photos/petmeeting.png"
          title="🐱 PetMeeting (En cours de développement)"
          paragraph="Outil pour aider les éleveurs de chats dans la recherche et sélection de reproducteurs."
          link=""
        />
      </section>
    </main>
  );
};

export default WebsiteCreation;
