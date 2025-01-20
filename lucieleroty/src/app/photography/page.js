"use client";

import AOS from "aos";
import { useEffect } from "react";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PhotographyCarousel from "../components/PhotographyCarousel/PhotographyCarousel";
import ServiceCard from "../components/ServiceCard";
import Link from "next/link";
import GridPhotos from "../components/GridPhotos/GridPhotos";

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
      <div className="flex flex-col z-0 font-specialelite  lg:mt-0 mb-2 animate-flip-down">
        <div className="z-10 relative mx-auto mt-3">
          <h1 className=" mx-auto drop-shadow-left text-[0.6rem] md:text-lg">
            Photographie
          </h1>
        </div>
      </div>

      <section className="flex flex-col items-center mb-10 text-justify animate-fade">
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
            {/* Bandeau - 20% */}
            <div className="absolute top-1 -right-1.5 bg-indigo-500 text-white text-[70%] font-bold rounded-lg w-8 h-6 font-geist">
              <p className=" text-center">- 20%</p>
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
            {/* Bandeau - 20% */}
            <div className="absolute top-1 -right-1.5 bg-indigo-500 text-white text-[70%] font-bold rounded-lg w-8 h-6 font-geist">
              <p className=" text-center">- 20%</p>
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
            {/* Bandeau - 20% */}
            <div className="absolute top-1 -right-1.5 bg-indigo-500 text-white text-[70%] font-bold rounded-lg w-8 h-6 font-geist">
              <p className=" text-center">- 20%</p>
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
            {/* Bandeau - 20% */}
            <div className="absolute top-1 -right-1.5 bg-indigo-500 text-white text-[70%] font-bold rounded-lg w-8 h-6 font-geist">
              <p className=" text-center">- 20%</p>
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
            {/* Bandeau - 20% */}
            <div className="absolute top-1 -right-1.5 bg-indigo-500 text-white text-[70%] font-bold rounded-lg w-8 h-6 font-geist">
              <p className=" text-center">- 20%</p>
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
            {/* Bandeau - 20% */}
            <div className="absolute top-1 -right-1.5 bg-indigo-500 text-white text-[70%] font-bold rounded-lg w-8 h-6 font-geist">
              <p className=" text-center">- 20%</p>
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
            {/* Bandeau - 20% */}
            <div className="absolute top-1 -right-1.5 bg-indigo-500 text-white text-[70%] font-bold rounded-lg w-8 h-6 font-geist">
              <p className=" text-center">- 20%</p>
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
            {/* Bandeau - 20% */}
            <div className="absolute top-1 -right-1.5 bg-indigo-500 text-white text-[70%] font-bold rounded-lg w-8 h-6 font-geist">
              <p className=" text-center">- 20%</p>
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
        <h2 className="text-center font-specialelite p-4">
          Quelques réalisations...
        </h2>
        <GridPhotos />
      </section>

      
    </main>
  );
};

export default Photography;
