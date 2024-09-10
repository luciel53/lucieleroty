"use client";

import { useState } from "react";
import Card from "./Card";

const cards = [
  {
    img: "/images/CarouselHome/creation.png",
    title: "Création de sites web",
    quote: '"Votre entreprise, votre histoire, votre site web."',
    paragraph:
      "Je crée des sites web, sites vitrines pour les artisans, PME... Un site sur mesure permet de répondre à vos besoins et objectifs particuliers. Démarquez-vous avec un site web professionnel à votre image, adapté à tous les écrans (tablettes, mobiles..) ! Un site web est important pour attirer de nouveaux clients et faire grandir votre entreprise. ",
  },
  {
    img: "/images/CarouselHome/design.png",
    title: "Création de designs",
    quote: '"Le design est la pensée rendue visuelle." Saul Bass',
    paragraph:
      "Réalisation de maquettes pour vos sites web, vos flyers ou encore vos logos. Je suis à l'éccoute de vos préférences pour mettre en place une chartre graphique qui vous ressemble.",
  },
  {
    img: "/images/CarouselHome/chenonceau.jpg",
    title: "Photographie",
    quote:
      '"La photographie est le seul langage qui peut être compris partout dans le monde." Bruno Barbey',
    paragraph:
      "Je crée des sites web, sites vitrines pour les artisans, PME... Un site sur mesure permet de répondre à vos besoins et objectifs particuliers. Démarquez-vous avec un site web professionnel à votre image, adapté à tous les écrans (tablettes, mobiles...)! Un site web est important pour attirer de nouveaux clients et faire grandir votre entreprise.",
  },
];

// Arrows
const ArrowLeft = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className="w-8 h-8"
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
    stroke="currentColor"
    className="w-8 h-8"
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

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className=" flex items-center justify-center -space-x-16">
      <button
        onClick={prevCard}
        className="bg-darkgreen relative z-30 p-2 rounded-full shadow-md hover:bg-lightgreen transition"
      >
        <ArrowLeft />
      </button>
      <div>
        <Card {...cards[currentIndex]} />
      </div>
      <button
        onClick={nextCard}
        className="bg-darkgreen relative z-30 p-2 rounded-full shadow-md hover:bg-lightgreen transition"
      >
        <ArrowRight />
      </button>
    </div>
  );
};

export default HomeCarousel;
