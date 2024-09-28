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
      className="flex flex-row md:mt-10 lg:justify-evenly lg:space-x-72  mb-6"
      data-aos="fade-up"
      data-aos-transform="translate"
    >
      <div className="flex flex-col z-10 w-56 h-56 md:w-80 lg:w-96 md:h-80 lg:h-96 bg-lightgreen rounded-full drop-shadow-lg -ml-10 md:-ml-5 ">
        <div className="p-3 w-40 md:w-52 lg:w-72 h-auto ml-10 md:ml-12">
          <h3 className="text-[0.6rem] md:text-[0.8rem] lg:text-[1.1rem] md:mt-1 lg:mt-3 ml-6 md:ml-12 lg:ml-16 mb-5 font-specialelite">
            Qui suis-je?
          </h3>
          <p className="text-[0.55rem] md:text-[0.8rem] lg:text-[1rem] text-justify">
            En tant que <strong>développeuse web freelance</strong> et{" "}
            <strong>photographe</strong>, issue de l&apos;école{" "}
            <strong>internationale Holberton School</strong>,{" "}
            <strong>je crée des sites internet sur-mesure</strong> qui reflètent
            votre univers. De la{" "}
            <em className=" not-italic">conception graphique</em> à la{" "}
            <em className=" not-italic">programmation</em>, je vous accompagne
            pas à pas pour donner vie à votre{" "}
            <em className=" not-italic">projet web</em>. Des sites
            &ldquo;one-page&rdquo; aux sites multipages, je m&apos;adapte à vos
            besoins. <strong>Passionnée de photographie</strong>, je vous
            accompagne également pour la réalisation de vos projets
            photographiques (particuliers ou professionnels).
          </p>
        </div>
      </div>
      {/* avatar */}
      <div className="w-20 md:w-36 h-20 md:h-36 absolute -mt-5 right-4 lg:right-auto overflow-hidden">
        <Image
          src="/images/Photos/CVme1.png"
          alt="Avatar"
          layout="responsive"
          width={400}
          height={400}
          className=" relative"
        />
      </div>
    </section>
  );
};

export default Bio;
