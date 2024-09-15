"use client";

import { useState, useEffect, useRef } from "react";
import Card from "./PhotographyCarouselCard";

const cards = [
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
    img: "/images/CarouselPhotos/test/enfant-dune-du-pylat.jpg",
    title: "Dune du pylat",
    quote: "Dune du pylat",
    },
  {
    img: "/images/CarouselPhotos/test/enfant-dune-du-pylat.jpg",
    title: "Dune du pylat",
    quote: "Dune du pylat",
    },
    {
      img: "/images/CarouselPhotos/test/pied-nourrisson.jpg",
      title: "Naissance",
      quote: "Naissance",
      },
];

// Arrows
const ArrowLeft = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="lightgray"
    className="w-4 h-4 lg:w-8 lg:h-8"
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
    className="w-4 h-4 lg:w-8 lg:h-8"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

const PhotographyCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null); // Use a ref to keep track of the interval

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

   // Function to start the interval
   const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      nextCard();
    }, 15000);
  };

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
  }, [])

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

export default PhotographyCarousel;
