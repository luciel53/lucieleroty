"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import ServiceCard from "../components/ServiceCard";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Design = () => {
  const visitRef = useRef(null);
  const flyersRef = useRef(null);
  const priceRef = useRef(null);

  useEffect(() => {
    // Animate sections with scrollTrigger
    const animateSections = [visitRef, flyersRef, priceRef];

    animateSections.forEach((section) => {
      if (section.current) {
        gsap.fromTo(
          section.current,
          { opacity: 0, y: 200 }, // initial
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section.current,
              start: "top 80%", // Animation starts when top of the section is at 80% of viewport
              end: "bottom bottom", // Animation finish when bottom of section is at top of viewport
              scrub: false,
            },
          }
        );
      }
    });

    // refresh after config
    ScrollTrigger.refresh();
  }, []);


  return (
    <main className="flex-grow z-10 animate-fade">
      {/* title */}
      <div className="flex flex-col z-0 font-specialelite mt-1 mb-2">
        <h1 className="mx-auto drop-shadow-left text-[0.8rem] md:text-lg">
          Création de designs
        </h1>
      </div>
      {/* Bubble */}
      <div className="lg:w-80 lg:h-80 bg-lightgreen z-0 absolute drop-shadow-lg rounded-full animate-fade animate-duration-1000 animate-delay-[400ms] animate-ease-in"></div>
      <section className=" mx-2 md:mx-4 lg:mx-0 mt-6 lg:mt-0 lg:mb-0 animate-fade animate-duration-1000 animate-delay-[400ms] animate-ease-in">
      <ServiceCard
        title="Création de supports de communication"
        ul={
          <ul>
            <li className="flex flex-row">
              <span className="w-1 h-1 mt-2.5 mr-2 bg-black rounded-full" />
              <a href="#flyers">
                <strong className="text-darkgreen">Flyers</strong>
              </a>
            </li>
            <li className="flex flex-row">
              <span className="w-1 h-1 mt-2.5 mr-2 bg-black rounded-full" />
              <strong>Maquettes</strong>
            </li>
            <li className="flex flex-row">
              <span className="w-1 h-1 mt-2.5 mr-2 bg-black rounded-full" />
              <a href="#cards">
                <strong className="text-darkgreen">Cartes de visite</strong>
              </a>
            </li>
            <li className="flex flex-row">
              <span className="w-1 h-1 mt-2.5 mr-2 bg-black rounded-full" />
              <strong>Affiches</strong>
            </li>
            <li className="flex flex-row">
              <span className="w-1 h-1 mt-2.5 mr-2 bg-black rounded-full" />
              <strong>Logos</strong>
            </li>
          </ul>
        }
        paragraph2={
          <p>
            Le tout en respectant votre <strong>charte graphique</strong> ou en
            la créant si elle n&apos;est pas encore définie!
          </p>
        }
        img="/images/CarouselHome/design.png"
        link="/contact"
      />
      </section>
      {/* Cartes de visites */}
      <section ref={visitRef}
        id="cards"
        className="flex flex-wrap scroll-mt-20 lg:flex-nowrap md:flex-col h-auto w-[90%] p-2 mt-2 md:mt-5 mx-auto md:mb-10 z-10 relative justify-center items-center opacity-90 bg-verylightgray border-2 border-lightgreen rounded-lg"
        data-aos="fade-up"
        data-aos-transform="translate"
      >
        <p className="pb-0 font-specialelite text-[70%] md:text-sm drop-shadow-left">
          Cartes de visite
        </p>
        <div className="flex flex-col md:flex-row  justify-center ">
          <div className="p-0.5">
            <Image
              src="/images/design/llrecto.png"
              alt="Carte de visite de Lucie Leroty"
              width={600}
              height={600}
            />
          </div>
          <div className="p-0.5">
            <Image
              src="/images/design/llverso.png"
              alt="Carte de visite de Lucie Leroty"
              width={600}
              height={600}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row  justify-center ">
          <div className="p-0.5">
            <Image
              src="/images/design/jrrecto.png"
              alt="Carte de visite de Lucie Leroty"
              width={600}
              height={600}
            />
          </div>
          <div className="p-0.5">
            <Image
              src="/images/design/jrverso.png"
              alt="Carte de visite de Lucie Leroty"
              width={600}
              height={600}
            />
          </div>
        </div>
      </section>
      {/* Flyers */}
      <section
        ref={flyersRef}
        id="flyers"
        className="flex flex-wrap scroll-mt-20 w-[90%] lg:flex-nowrap md:flex-col h-auto p-2 mt-2 md:mt-5 mx-auto z-10 relative justify-center items-center opacity-90 bg-verylightgray border-2 border-lightgreen rounded-lg mb-10"
        data-aos="fade-up"
        data-aos-transform="translate"
      >
        <p className="pb-1 font-specialelite text-[70%] md:text-sm drop-shadow-left">
          Flyers
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
      </section>
      {/* Price */}
      <section ref={priceRef} className="flex flex-row justify-center items-center mx-auto mb-10 md:w-80 lg:animate-wiggle">
        <Link href="/contact">
          <div className=" border-darkgreen bg-verylightgray border-4 w-32 md:w-auto h-auto rounded-lg text-center shadow-lg">
            <p className="text-darkgreen font-specialelite text-[60%] md:text-sm p-2 md:p-4">
              Demandez une estimation
            </p>
          </div>
        </Link>
      </section>
    </main>
  );
};

export default Design;
