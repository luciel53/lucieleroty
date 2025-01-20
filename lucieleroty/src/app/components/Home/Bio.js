"use client";

import AOS from "aos";
import { useEffect } from "react";
import Image from "next/image";

const Bio = () => {
  useEffect(() => {
    AOS.init({ duration: 700, offset: 350 });
  }, []);
  return (
    <section
      className="flex flex-row mt-6 md:mt-10 lg:justify-evenly lg:space-x-72  mb-6"
      data-aos="fade-up"
      data-aos-transform="translate"
    >
      <div className="flex flex-col z-10 w-56 h-auto mt-10 md:mt-0 md:w-96 md:h-96 bg-lightgreen rounded-lg md:rounded-full drop-shadow-lg -ml-10 md:-ml-5 ">
        <div className="p-3 w-40 md:w-60 lg:w-72 h-auto ml-10 md:ml-20 lg:mx-auto">
          <h3 className="text-[0.6rem] md:text-[0.8rem] lg:text-[1.1rem] md:mt-1 lg:mt-3 ml-6 md:ml-12 lg:ml-16 md:mb-5 font-specialelite">
            Qui suis-je?
          </h3>
          <p className="text-[0.65rem] md:text-[0.8rem] lg:text-[0.9rem] text-justify">
            En tant que <strong>développeuse web freelance</strong> et{" "}
            <strong>photographe</strong>, issue de l&apos;école internationale{" "}
            <strong>Holberton School</strong>,{" "}
            <strong>je crée des sites internet sur-mesure</strong> qui reflètent{" "}
            <em>votre univers</em>. De la{" "}
            <strong className=" not-italic">conception graphique</strong> à la{" "}
            <strong className=" not-italic">programmation</strong>, je vous
            accompagne pas à pas pour donner vie à votre{" "}
            <em className=" not-italic">projet web</em>. Des sites
            &ldquo;one-page&rdquo; aux sites multipages, je m&apos;adapte à vos
            besoins. <strong>Passionnée de photographie</strong>, je vous
            accompagne également dans la réalisation de vos{" "}
            <strong>projets photographiques</strong> (particuliers ou
            professionnels).
          </p>
        </div>
      </div>
      {/* avatar */}
      <div className="w-20 md:w-36 h-20 md:h-36 absolute -mt-5 right-4 lg:right-auto overflow-hidden">
        <Image
          src="/images/Photos/CVme1.png"
          alt="Présentation de Lucie Leroty, dirigeante de Eyetopixel, développeuse web freelance"
          width={400}
          height={400}
          className=" relative"
        />
      </div>
    </section>
  );
};

export default Bio;
