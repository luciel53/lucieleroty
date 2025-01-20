"use client";

import Bio from "./components/Home/Bio.js";
import Intro from "./components/Home/Intro.js";
import RoundedCard from "./components/Home/RoundedCard.js";
import HomeCarousel from "./components/HomeCarousel/CarouselHome.js";
import AOS from "aos";
import { useEffect } from "react";
import Link from "next/link.js";


export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 400, offset: 50 });
  }, []);

  return (
    <main className="flex-grow">
      {/* title */}
      <div className="flex flex-row justify-center space-x-36">
        <div className="flex flex-col z-0 font-specialelite mt-1 lg:mt-4 mb-2 lg:mb-0 animate-flip-down">
          <h1 className="mx-auto drop-shadow-left text-[0.8rem] md:text-xl">
            Développeuse Web Freelance
          </h1>
          <h2 className="mx-auto drop-shadow-left text-gray-500 text-[0.7rem] md:text-sm lg:text-md -mt-1">
            & Photographe
          </h2>
        </div>
      </div>
      {/* Bubble */}
      <div className="lg:w-12 lg:h-12 bg-gradient-to-br from-neutral-300 to-gray-100 z-0 left-0 mt-10 ml-12 absolute drop-shadow-md rounded-full animate-fade animate-duration-1000 animate-delay-[400ms] animate-ease-in"></div>
      <div className="lg:w-40 lg:h-40 bg-gradient-to-t from-neutral-300 to-gray-100 z-0 left-0 mt-40 ml-64 absolute drop-shadow-md rounded-full animate-fade animate-duration-1000 animate-delay-[400ms] animate-ease-in"></div>
      <div className="xl:w-60 xl:h-60 bg-gradient-to-l from-neutral-300 to-gray-100 z-0 right-0 -mt-5 absolute drop-shadow-md rounded-full animate-fade animate-duration-1000 animate-delay-[400ms] animate-ease-in"></div>
      {/* intro */}
      <Intro />
      <section
        className="flex flex-col"
        data-aos="fade-up"
        data-aos-transform="translate"
        id="services"
      >
        <h2 className="font-specialelite text-sm text-center mb-4 z-10">
          Mes services
        </h2>

        <div className="flex flex-wrap justify-center space-x-0">
          <Link href="/website-creation">
            <RoundedCard
              image="/images/icons/web.svg"
              title="JE CRÉE VOTRE SITE VITRINE"
            />
          </Link>
          <Link href="/design">
            <RoundedCard
              image="/images/icons/camera.svg"
              title="J'ILLUSTRE VOTRE SITE WEB"
            />
          </Link>
          <Link href="/photography">
            <RoundedCard
              image="/images/icons/flyer.svg"
              title="JE CRÉE VOS SUPPORTS DE COMMUNICATION"
            />
          </Link>
        </div>
      </section>
      {/* Services Carousel */}
      {/* <section
        data-aos="fade-up"
        data-aos-transform="translate"
        className="z-0 relative lg:mt-2 mb-6 animate-fade animate-duration-1000 animate-delay-[400ms] animate-ease-in"
      >
        <h2 className="font-specialelite text-center mb-4">Mes services</h2>
        <HomeCarousel />
      </section> */}

      {/* Bio */}
      <section id="bio">
        <Bio />
      </section>

    </main>
  );
}
