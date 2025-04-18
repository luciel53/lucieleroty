"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Card from "./Card";
import Image from "next/image";

const cards = [
  {
    img: "/images/CarouselHome/creation.png",
    title: "Création de sites web",
    quote: '"Votre entreprise, votre histoire, votre site web."',
    paragraph:
      "Je crée des sites web, sites vitrines pour les artisans, PME... Un site sur mesure permet de répondre à vos besoins et objectifs particuliers. Démarquez-vous avec un site web professionnel à votre image, adapté à tous les écrans (tablettes, mobiles..) ! Un site web est important pour attirer de nouveaux clients et faire grandir votre entreprise. ",
    link: "/website-creation",
    },
  {
    img: "/images/CarouselHome/design.png",
    title: "Création de designs",
    quote: '"Le design est la pensée rendue visuelle." Saul Bass',
    paragraph:
      "Réalisation de maquettes pour vos sites web, vos flyers ou encore vos logos. Je suis à l'éccoute de vos préférences pour mettre en place une chartre graphique qui vous ressemble.",
    link: "/design",
    },
  {
    img: "/images/CarouselHome/chenonceau.jpg",
    title: "Photographie",
    quote:
      '"La photographie est le seul langage qui peut être compris partout dans le monde." Bruno Barbey',
    paragraph:
      "Possibilité de réaliser des photos pour illustrer votre site web, mais je suis également disponible  pour les particuliers (grossesse, mariage, cérémonies, photos familiales, reportages photos, animaux, paysages, ...)",
    link: "/photography",
    },
];

// Arrows
const ArrowLeft = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="lightgray"
    className="w-4 h-4 lg:w-5 lg:h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 19l-7-7 7-7"
    />
  </svg>
);

const ArrowRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="lightgray"
    className="w-4 h-4 lg:w-5 lg:h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

const HomeCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null); // Use a ref to keep track of the interval

  const nextCard = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  }, []);

  const prevCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

   // Function to start the interval
   const startAutoSlide = useCallback(() => {
    intervalRef.current = setInterval(() => {
      nextCard();
    }, 15000);
  }, [nextCard]);

  // Function to stop the interval
  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };


  useEffect(() => {
    startAutoSlide(); // Start the auto-slide on component mount

    // Clean up interval on unmount
    return () => {
      stopAutoSlide();
    };
  }, [startAutoSlide]);

  return (
    <div
    className="flex flex-row items-center justify-center -space-x-5 md:-space-x-12 z-0"
    onMouseEnter={stopAutoSlide} // Stop auto-slide on hover
    onMouseLeave={startAutoSlide} // Restart auto-slide when the mouse leaves
  >
      {/* Left button */}
      <button
        onClick={prevCard}
        className="bg-darkgreen relative z-30 p-0.5 md:p-2 left-2 md:left-6 rounded-full shadow-md hover:bg-lightgreen transition"
      >
        <ArrowLeft />
      </button>
      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {cards.map((card, index) => (
            <div key={index} className="flex-none w-full max-w-full">
              <Card {...card} />
            </div>
          ))}
        </div>
      </div>
      {/* Right button */}
      <button
        onClick={nextCard}
        className="bg-darkgreen relative right-2 md:right-6 z-30 p-0.5 md:p-2 rounded-full shadow-md hover:bg-lightgreen transition"
      >
        <ArrowRight />
      </button>
    </div>
  );
};

export default HomeCarousel;
