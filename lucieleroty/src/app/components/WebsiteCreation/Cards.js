"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import gsap from "gsap";

export default function Cards({ title, p1, p2, p3, p4, p5, link, price }) {
  const cardRef = useRef(null);

  // to zoom on hover card
  useEffect(() => {
    const card = cardRef.current;

    gsap.set(card, { scale: 1, transformOrigin: "center" });

    const handleMouseEnter = () => {
      gsap.to(card, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    // add the events
    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);


    return () => {
      // Clean the listen events
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);


  return (
    <div ref={cardRef} className="card relative flex flex-col justify-between mx-2 px-4 py-3 mt-4 border border-darkgreen bg-white rounded-lg shadow-lg ">
      {/* Bandeau - 20% */}
      <div className="absolute top-2 md:top-0 -right-1 md:-right-1 bg-indigo-500 text-white text-xs font-bold rounded-lg px-2 py-1 font-geist">
        <p className="text-center">-20%</p>
      </div>
      {/* Container Prix + Pack */}
      <div className="bg-lightgreen bg-opacity-40 p-2 rounded-md mb-2">
        <h3 className="text-md font-specialelite mb-4">{title}</h3>

        <p className="w-auto font-bold">{price}</p>
      </div>
      <div className="flex flex-col">
        {p1 && (
          <div className="flex flex-row text-justify mb-1.5">
            <FaCheck className="w-7 text-darkgreen pr-2 mt-1" />
            <p className="w-80">{p1}</p>
          </div>
        )}
        {p2 && (
          <div className="flex flex-row text-justify mb-1.5">
            <FaCheck className="w-7 text-darkgreen pr-2 mt-1" />
            <p className="w-80">{p2}</p>
          </div>
        )}
        {p3 && (
          <div className="flex flex-row text-justify mb-1.5">
            <FaCheck className="w-7 text-darkgreen pr-2 mt-1" />
            <p className="w-80">{p3}</p>
          </div>
        )}
        {p4 && (
          <div className="flex flex-row text-justify mb-1.5">
            <FaCheck className="w-7 text-darkgreen pr-2 mt-1" />
            <p className="w-80">{p4}</p>
          </div>
        )}
        {p5 && (
          <div className="flex flex-row text-justify mb-1.5">
            <FaCheck className="w-7 text-darkgreen pr-2 mt-1" />
            <p className="w-80">{p5}</p>
          </div>
        )}
      </div>

      <div className="flex flex-row justify-center items-center mt-4">
        <Link href={link}>
          <button className="relative overflow-hidden bg-darkgreen w-20 md:w-32 md:h-8 mb-2 lg:mb-0 mx-10 rounded-lg shadow-lg text-verylightgray text-[0.6rem] md:text-lg border-2 border-darkgreen hover:border-2 hover:border-darkgreen group">
            <span className="absolute inset-0 bg-verylightgray transition-transform transform -translate-x-full group-hover:translate-x-0 duration-300 ease-in-out"></span>
            <span className="relative text-verylightgray group-hover:text-darkgreen transition-colors duration-300 ease-in-out">
              Contactez-moi
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}
