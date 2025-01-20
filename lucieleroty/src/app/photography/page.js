"use client";

import AOS from "aos";
import { useEffect } from "react";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PhotographyCarousel from "../components/PhotographyCarousel/PhotographyCarousel";
import ServiceCard from "../components/ServiceCard";
import Link from "next/link";

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
  useEffect(() => {
    AOS.init({ duration: 700, offset: 150 });
  }, []);

  return (
    <main className="flex-grow z-10">
      {/* title */}
      <div className="flex flex-col z-0 font-specialelite mt-1 lg:mt-0 mb-2 animate-flip-down">

        <div className="z-10 relative mx-auto mt-3">
          <h1 className=" mx-auto drop-shadow-left text-[0.6rem] md:text-lg">
            Photographie
          </h1>
        </div>
      </div>

      <section className="flex flex-col items-center mb-20 text-justify animate-fade">
        <div className="py-6 mx-4 md:mx-20">
          <h2 className="z-10 relative">
            Je vous propose des séances photos adaptées à chaque étape de la vie
            : <strong>grossesse</strong>, <strong>naissance</strong>,{" "}
            <strong>famille</strong>, <strong>couple</strong>, mais aussi{" "}
            <strong>photos animalières</strong> et je me tiens à votre
            disposition pour des <strong>photo-reportages</strong> de{" "}
            <strong>mariage</strong> qui captureront l'essence de votre journée.
          </h2>
        </div>
        {/* Presentation grid */}
        <div className="grid grid-cols  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 md:gap-2">
          {/* Vignette Grossesse */}
          <div className=" flex flex-col items-center w-40 h-40 bg-verylightgray border-2 border-gray-200 rounded-lg drop-shadow-lg">
            <Image
              src="images/CarouselPhotos/couple1.jpg"
              width="300"
              height="300"
              priority
              alt="Séance grossesse en couple"
              className="rounded-t-lg"
            />
            <div className="my-auto">
              <h3 className="font-specialelite text-xs ">Grossesse</h3>
              <p>
                <span className="line-through">120€</span> 96€*
              </p>
            </div>
            {/* Bandeau -20% */}
            <div className="absolute top-1 -right-1.5 bg-indigo-500 text-white text-[70%] font-bold rounded-lg w-8 h-6 font-geist">
              <p className="mt-1 text-center">-20%</p>
            </div>
          </div>
          {/* Vignette Naissance */}
          <div className=" flex flex-col items-center w-40 h-40 bg-verylightgray border-2 border-gray-200 rounded-lg drop-shadow-lg">
            <Image
              src="images/CarouselPhotos/test/main-bebe.jpg"
              width="300"
              height="300"
              priority
              alt="Séance photo de naissance"
              className="rounded-t-lg"
            />
            <div className="my-auto">
              <h3 className="font-specialelite text-xs ">Naissance</h3>
              <p>
                <span className="line-through">120€</span> 96€*
              </p>
            </div>
            {/* Bandeau -20% */}
            <div className="absolute top-1 -right-1.5 bg-indigo-500 text-white text-[70%] font-bold rounded-lg w-8 h-6 font-geist">
              <p className="mt-1 text-center">-20%</p>
            </div>
          </div>
          {/* Vignette Couple */}
          <div className="flex flex-col items-center w-40 h-40 bg-verylightgray border-2 border-gray-200 rounded-lg drop-shadow-lg relative">
            <div className="w-full h-[67%] overflow-hidden rounded-t-lg">
              <Image
                src="images/CarouselPhotos/test/couple-amoureux1.jpg"
                width="300"
                height="300"
                priority
                alt="Séance grossesse en couple"
                className="w-full h-40 object-cover"
              />
            </div>
            <div className="my-auto">
              <h3 className="font-specialelite text-xs ">Couple</h3>
              <p>
                <span className="line-through">120€</span> 96€*
              </p>
            </div>
            {/* Bandeau -20% */}
            <div className="absolute top-1 -right-1.5 bg-indigo-500 text-white text-[70%] font-bold rounded-lg w-8 h-6 font-geist">
              <p className="mt-1 text-center">-20%</p>
            </div>
          </div>
          {/* Vignette Famille */}
          <div className=" flex flex-col items-center w-40 h-40 bg-verylightgray border-2 border-gray-200 rounded-lg drop-shadow-lg">
            <Image
              src="images/CarouselPhotos/test/famille2.JPG"
              width="300"
              height="300"
              priority
              alt="En famille"
              className="rounded-t-lg h-[67%]"
            />
            <div className="my-auto">
              <h3 className="font-specialelite text-xs ">Famille</h3>
              <p>
                <span className="line-through">120€</span> 96€*
              </p>
            </div>
            {/* Bandeau -20% */}
            <div className="absolute top-1 -right-1.5 bg-indigo-500 text-white text-[70%] font-bold rounded-lg w-8 h-6 font-geist">
              <p className="mt-1 text-center">-20%</p>
            </div>
          </div>
          {/* Vignette Portrait */}
          <div className=" flex flex-col items-center w-40 h-40 bg-verylightgray border-2 border-gray-200 rounded-lg drop-shadow-lg">
            <div className="w-full h-[67%] overflow-hidden rounded-t-lg">
              <Image
                src="images/CarouselPhotos/test/enfant.jpg"
                width="300"
                height="600"
                alt="Séance grossesse en couple"
                className="w-full h-40 object-cover"
              />
            </div>
            <div className="my-auto">
              <h3 className="font-specialelite text-xs ">Portrait</h3>
              <p>
                <span className="line-through">120€</span> 96€*
              </p>
            </div>
            {/* Bandeau -20% */}
            <div className="absolute top-1 -right-1.5 bg-indigo-500 text-white text-[70%] font-bold rounded-lg w-8 h-6 font-geist">
              <p className="mt-1 text-center">-20%</p>
            </div>
          </div>
          {/* Vignette Mariage */}
          <div className=" flex flex-col items-center w-40 h-40 bg-verylightgray border-2 border-gray-200 rounded-lg drop-shadow-lg">
            <div className="w-full h-[67%] overflow-hidden rounded-t-lg">
              <Image
                src="images/CarouselPhotos/test/mariage1.JPG"
                width="300"
                height="300"
                priority
                alt="lightSéance grossesse en couple"
                className="w-full h-40 object-cover"
              />
            </div>
            <div className="my-auto">
              <h3 className="font-specialelite text-xs text-center">Mariage</h3>
              <p>
                <span className="line-through">800€</span> 640€*
              </p>
            </div>
            {/* Bandeau -20% */}
            <div className="absolute top-1 -right-1.5 bg-indigo-500 text-white text-[70%] font-bold rounded-lg w-8 h-6 font-geist">
              <p className="mt-1 text-center">-20%</p>
            </div>
          </div>
          {/* Vignette Animaux */}
          <div className=" flex flex-col items-center w-40 h-40 bg-verylightgray border-2 border-gray-200 rounded-lg drop-shadow-lg">
            <div className="w-full h-[67%] overflow-hidden rounded-t-lg">
              <Image
                src="images/CarouselPhotos/test/chatbengal.jpg"
                width="300"
                height="300"
                priority
                alt="lightSéance grossesse en couple"
                className="w-full h-40 object-cover"
              />
            </div>
            <div className="my-auto">
              <h3 className="font-specialelite text-xs ">Photos animalières</h3>
              <p className="text-center">
                <span className="line-through">120€</span> 96€*
              </p>
            </div>
            {/* Bandeau -20% */}
            <div className="absolute top-1 -right-1.5 bg-indigo-500 text-white text-[70%] font-bold rounded-lg w-8 h-6 font-geist">
              <p className="mt-1 text-center">-20%</p>
            </div>
          </div>
          {/* Vignette Professionnels */}
          <div className=" flex flex-col items-center w-40 h-40 bg-verylightgray border-2 border-gray-200 rounded-lg drop-shadow-lg">
            <div className="w-full h-[67%] overflow-hidden rounded-t-lg">
              <Image
                src="images/CarouselPhotos/croatie.jpg"
                width="300"
                height="300"
                priority
                alt="Séance grossesse en couple"
                className="w-full h-40 object-cover"
              />
            </div>
            <div className="my-auto">
              <h3 className="font-specialelite text-xs ">Professionnels</h3>
              <p className="text-center">
                <span className="line-through">150€</span> 120€*
              </p>
            </div>
            {/* Bandeau -20% */}
            <div className="absolute top-1 -right-1.5 bg-indigo-500 text-white text-[70%] font-bold rounded-lg w-8 h-6 font-geist">
              <p className="mt-1 text-center">-20%</p>
            </div>
          </div>
        </div>
        {/* Button to book */}
        <div>
          <p className="italic mt-4  mx-4">
            *Offre de lancement valable jusqu'au 28 février 2025 inclus.
          </p>
        </div>
        <Link href="/contact">
          <button className="relative overflow-hidden bg-darkgreen w-28 md:w-40 lg:w-40 md:h-8 p-1 lg:p-0 mb-2 mt-4 lg:mt-2 mx-10 md:mx-28 lg:mx-auto rounded-lg shadow-lg text-verylightgray text-[0.9rem] md:text-lg border-2 border-darkgreen hover:border-2 hover:border-darkgreen group">
            <span className="absolute inset-0 bg-verylightgray transition-transform transform -translate-x-full group-hover:translate-x-0 duration-300 ease-in-out"></span>
            <span className="relative text-verylightgray group-hover:text-darkgreen transition-colors duration-300 ease-in-out">
              Réservez votre séance
            </span>
          </button>
        </Link>
      </section>

      {/* Photographie Grid Gallery */}
      <section className="z-10 relative w-screen">
        <h2 className="text-center font-specialelite p-4">Réalisations</h2>
        <div  className="grid grid-cols-4">


        </div>
      </section>
      <section className="mx-1 md:mx-4 lg:mx-20 lg:mt-5 lg:mb-10 animate-fade animate-duration-1000 animate-delay-[400ms] animate-ease-in">
        <div className="flex flex-wrap-reverse lg:flex-nowrap md:flex-row h-auto z-10 relative justify-center bg-verylightgray border-2 border-lightgreen rounded-lg">
          {/* Paragraph */}
          <div className="lg:ml-8 mx-3 md:mx-0 lg:mx-0 my-3 lg:my-8 text-justify text-xs md:text-sm lg:text-base md:w-[80%] lg:w-1/2">
            {/* Professionals */}
            <div className="flex flex-row">
              <Image
                src="/images/icons/hand.png"
                alt="Vous êtes un professionnel"
                width={30}
                height={30}
                className="w-3 h-3 md:w-5 md:h-5 mr-2 md:mr-4"
              />
              <p className="mb-4">
                Vous êtes un <em>professionnel</em> ou une <em>association</em>,
                et vous avez besoin d&apos;illustrer votre{" "}
                <strong>site web</strong> ou vos{" "}
                <strong>supports de communication</strong> avec des{" "}
                <strong>photos uniques</strong> qui{" "}
                <em className="not-italic">reflètent votre identité</em> ?<br />
                Je vous accompagne dans la{" "}
                <em className="not-italic">réalisation de vos projets</em>, que
                ce soit pour une <strong>séance photo</strong> sur-mesure ou la{" "}
                <em className=" not-italic underline text-darkgreen hover:opacity-80">
                  <Link href="/website-creation">
                    création complète de votre site web
                  </Link>
                </em>{" "}
                et/ou de vos{" "}
                <Link href="/design">
                  <em className="not-italic underline text-darkgreen hover:opacity-80">
                    supports visuels
                  </em>
                </Link>
                . Ensemble, nous mettrons en valeur votre activité avec des{" "}
                <em className="not-italic">images percutantes</em>.
              </p>
            </div>
            {/* Particuliers */}
            <div className="flex flex-row mb-4">
              <Image
                src="/images/icons/hand.png"
                alt="Vous êtes un professionnel"
                width={30}
                height={30}
                className="w-3 h-3 md:w-5 md:h-5 mr-2 md:mr-4"
              />
              <p>
                Vous êtes un <em>particulier</em> et vous souhaitez{" "}
                <em className="not-italic">
                  immortaliser des moments précieux
                </em>{" "}
                ? Je vous propose des <strong>séances photos</strong> adaptées à
                chaque étape de la vie :{" "}
                <a href="#portraits">
                  <strong className="text-darkgreen underline">
                    grossesse
                  </strong>{" "}
                </a>
                ,{" "}
                <a href="#portraits">
                  <strong className="text-darkgreen underline">
                    naissance
                  </strong>
                </a>{" "}
                ,{" "}
                <a href="#portraits">
                  <strong className="text-darkgreen underline">famille</strong>
                </a>{" "}
                ,{" "}
                <a href="#animals">
                  <strong className="text-darkgreen underline">animaux</strong>
                  🐈🐶🐎
                </a>
                , et je me tiens à votre disposition pour des{" "}
                <a href="#portraits">
                  <strong className="text-darkgreen underline">
                    photo-reportages de mariage 👰
                  </strong>
                </a>{" "}
                qui captureront l&apos;essence de votre journée.
              </p>
            </div>
            {/* Immobilier */}
            <div className="flex flex-row mb-4">
              <Image
                src="/images/icons/hand.png"
                alt="Vous êtes un professionnel"
                width={30}
                height={30}
                className="w-3 h-3 md:w-5 md:h-5 mr-2 md:mr-4"
              />
              <p>
                Vous êtes en train de vendre{" "}
                <strong className="italic">votre bien immobilier</strong> ? De
                belles photos sont essentielles pour attirer des acheteurs
                potentiels et{" "}
                <em className=" not-italic">accélérer la vente</em>. Je suis à
                votre écoute pour valoriser votre bien avec des clichés mettant
                votre bien sous son meilleur jour.
              </p>
            </div>
            <p>
              <em>
                <small>
                  *Basée au Mans, je me déplace dans un rayon de 30 km. Au-delà,
                  des frais kilométriques sont appliqués.
                </small>
              </em>
            </p>
            {/* <Link href="/contact">
              <button className="relative overflow-hidden bg-darkgreen w-20 md:w-40 lg:w-40 md:h-8 mb-2  lg:mt-4 mx-10 md:mx-auto lg:mx-56 rounded-lg shadow-lg text-verylightgray text-[0.6rem] md:text-lg border-2 border-darkgreen hover:border-2 hover:border-darkgreen group">
                <span className="absolute inset-0 bg-verylightgray transition-transform transform -translate-x-full group-hover:translate-x-0 duration-300 ease-in-out"></span>
                <span className="relative text-verylightgray group-hover:text-darkgreen transition-colors duration-300 ease-in-out">
                  Demandez une estimation
                </span>
              </button>
            </Link> */}
          </div>
          {/* Image */}
          <div className="mt-3 lg:m-8 w-2/3 lg:w-1/2 lg:my-auto">
            <Image
              src="/images/CarouselPhotos/coquelicots.jpg"
              alt="Coqueliquots"
              width={800}
              height={800}
              priority
            />
          </div>
        </div>
      </section>

      {/* Carousel Pregnant, Birth, Portraits... */}
      {/* <div
        id="portraits"
        className=" scroll-mt-20 md:mb-10"
        data-aos="fade-up"
        data-aos-transform="translate"
      >
        <h2 className="text-center font-specialelite mt-5 md:mt-12 mb-3 text-[50%] md:text-sm">
          Portraits, Photos de grossesse, naissances, mariage...
        </h2>
        <PhotographyCarousel photos={portraitPhotos} />
      </div>
      <div
        className="md:mb-10"
        data-aos="fade-up"
        data-aos-transform="translate"
      >
        <h2 className="text-center font-specialelite mt-5 md:mt-12 mb-3 text-[50%] md:text-sm">
          Paysages, architecture, immobilier...
        </h2>
        <PhotographyCarousel photos={landscapePhotos} />
      </div>
      <div
        id="animals"
        className="scroll-mt-20 mb-10"
        data-aos="fade-up"
        data-aos-transform="translate"
      >
        <h2 className="text-center font-specialelite mt-5 md:mt-12 mb-3 text-[50%] md:text-sm">
          Photos animalières, chats, chiens, chevaux...
        </h2>
        <PhotographyCarousel photos={animalsPhotos} />
      </div> */}
      {/* Price */}
      {/* <div className="flex flex-row justify-center items-center mx-auto md:w-80 mb-10 lg:animate-wiggle">
        <Link href="/contact">
          <div className=" border-darkgreen bg-verylightgray border-4 w-32 md:w-auto h-auto rounded-lg text-center shadow-lg">
            <p className="text-darkgreen font-specialelite text-[60%] md:text-sm p-2 md:p-4">
              A partir de 60€ la séance
            </p>
            <p className="-mt-2 md:-mt-5 pb-2 text-xs">
              (me contacter pour une estimation)
            </p>
          </div>
        </Link>
      </div> */}
    </main>
  );
};

export default Photography;
