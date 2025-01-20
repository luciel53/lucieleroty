"use client";

import AOS from "aos";
import { useEffect } from "react";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Link from "next/link";

const WebsiteCreation = () => {
  useEffect(() => {
    AOS.init({ duration: 500, offset: 200 });
  }, []);

  return (
    <main className="flex-grow z-10">
      {/* title */}
      <div className="flex flex-col z-0 font-specialelite mt-1 mb-2 animate-flip-down">
        <h1 className="mx-auto drop-shadow-left text-[0.6rem] md:text-lg">
          Création de designs
        </h1>
      </div>
      {/* Bubble */}
      <div className="lg:w-80 lg:h-80 bg-lightgreen z-0 absolute drop-shadow-lg rounded-full animate-fade animate-duration-1000 animate-delay-[400ms] animate-ease-in"></div>
      <ServiceCard
        title="Création de Designs"
        paragraph={
          <p>
            <strong>Création de supports de communication tels que:</strong>
          </p>
        }
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
      {/* Cartes de visites */}
      <div
        id="cards"
        className="flex flex-wrap scroll-mt-20 lg:flex-nowrap md:flex-col h-auto w-[50%] p-4 mt-2 md:mt-5 mx-auto md:mb-10 z-10 relative justify-center items-center opacity-90 bg-verylightgray border-2 border-lightgreen rounded-lg"
        data-aos="fade-up"
        data-aos-transform="translate"
      >
        <p className="pb-4 font-specialelite text-[40%] md:text-sm drop-shadow-left">
          Cartes de visite
        </p>
        <div className="flex flex-row justify-center ">
          <div className="p-0.5">
            <Image
              src="/images/design/llrecto.png"
              alt="Carte de visite de Lucie Leroty"
              width={400}
              height={400}
            />
          </div>
          <div className="p-0.5">
            <Image
              src="/images/design/llverso.png"
              alt="Carte de visite de Lucie Leroty"
              width={400}
              height={400}
            />
          </div>
        </div>
        <div className="flex flex-row justify-center ">
          <div className="p-0.5">
            <Image
              src="/images/design/jrrecto.png"
              alt="Carte de visite de Lucie Leroty"
              width={400}
              height={400}
            />
          </div>
          <div className="p-0.5">
            <Image
              src="/images/design/jrverso.png"
              alt="Carte de visite de Lucie Leroty"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
      {/* Flyers */}
      <div
        id="flyers"
        className="flex flex-wrap scroll-mt-20 lg:flex-nowrap md:flex-col h-auto w-[50%] p-4 mt-2 md:mt-5 mx-auto z-10 relative justify-center items-center opacity-90 bg-verylightgray border-2 border-lightgreen rounded-lg mb-10"
        data-aos="fade-up"
        data-aos-transform="translate"
      >
        <p className="pb-4 font-specialelite text-[40%] md:text-sm drop-shadow-left">
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
      </div>
      {/* Price */}
      <div className="flex flex-row justify-center items-center mx-auto mb-10 md:w-80 lg:animate-wiggle">
        <Link href="/contact">
          <div className=" border-darkgreen bg-verylightgray border-4 w-32 md:w-auto h-auto rounded-lg text-center shadow-lg">
            <p className="text-darkgreen font-specialelite text-[60%] md:text-sm p-2 md:p-4">
              Demandez une estimation
            </p>
          </div>
        </Link>
      </div>
    </main>
  );
};

export default WebsiteCreation;
