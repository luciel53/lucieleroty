"use client";

import Image from "next/image";
import Link from "next/link";
import GridPhotos from "../components/GridPhotos/GridPhotos";


const Photography = () => {

  return (
    <main className="flex-grow z-10">
      {/* title */}
      <div className="flex flex-col z-0 font-specialelite lg:mt-0 mb-0 md:mb-2">
        <div className="z-10 relative mx-auto mt-3">
          <h1 className=" mx-auto drop-shadow-left text-[0.8rem] md:text-lg">
            Photographie
          </h1>
        </div>
      </div>

      <section className="flex flex-col items-center mb-10 text-justify animate-fade">
        <div className=" py-2 md:py-6 mx-4 md:mx-20">
          <div className="z-10 relative text-xs md:text-sm">
            Je vous propose des séances photos adaptées à chaque étape de la vie
            : <strong>grossesse</strong>, <strong>naissance</strong>,{" "}
            <strong>famille</strong>, <strong>couple</strong>, mais aussi{" "}
            <strong>photos animalières</strong> et je me tiens à votre
            disposition pour des <strong>photo-reportages</strong> de{" "}
            <strong>mariage</strong> qui captureront l&apos;essence de votre journée.
          </div>
        </div>
        {/* Presentation grid */}
        <div className="grid grid-cols  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 md:gap-2">
          {/* Vignette Grossesse */}
          <div className=" flex flex-col items-center w-40 h-40 bg-verylightgray border-2 border-gray-200 rounded-lg drop-shadow-lg">
            <Image
              src="images/CarouselPhotos/couple1.webp"
              width={300}
              height={300}
              quality={75}
              sizes="(max-width: 768px) 100vw, 50vw"
              objectFit="cover"
              priority
              alt="Séance grossesse en couple"
              className="rounded-t-lg"
            />
            <div className="my-auto">
              <h2 className="font-specialelite text-xs ">Grossesse</h2>
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
              src="images/CarouselPhotos/test/main-bebe.webp"
              width={300}
              height={300}
              quality={75}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              alt="Séance photo de naissance"
              className="rounded-t-lg"
            />
            <div className="my-auto">
              <h2 className="font-specialelite text-xs ">Naissance</h2>
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
                src="images/CarouselPhotos/test/couple-amoureux1.webp"
                width={300}
                height={300}
                quality={75}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                alt="Séance grossesse en couple"
                className="rounded-t-lg"
              />
            </div>
            <div className="my-auto">
              <h2 className="font-specialelite text-xs ">Couple</h2>
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
              src="images/CarouselPhotos/test/famille2.webp"
              width={300}
              height={300}
              quality={75}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              alt="En famille"
              className="rounded-t-lg h-[67%]"
            />
            <div className="my-auto">
              <h2 className="font-specialelite text-xs ">Famille</h2>
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
                src="images/CarouselPhotos/test/enfant.webp"
                width={300}
                height="600"
                alt="Séance grossesse en couple"
                className="w-full h-40 object-cover"
              />
            </div>
            <div className="my-auto">
              <h2 className="font-specialelite text-xs ">Portrait</h2>
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
                src="images/CarouselPhotos/test/mariage1.webp"
                width={300}
                height={300}
                quality={75}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                alt="lightSéance grossesse en couple"
                className="w-full h-40 object-cover"
              />
            </div>
            <div className="my-auto">
              <h2 className="font-specialelite text-xs text-center">Mariage</h2>
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
                src="images/CarouselPhotos/test/chatbengal.webp"
                width={300}
                height={300}
                quality={75}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                alt="Séance grossesse en couple"
                className="w-full h-40 object-cover"
              />
            </div>
            <div className="my-auto">
              <h2 className="font-specialelite text-xs ">Photos animalières</h2>
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
                src="images/CarouselPhotos/croatie.webp"
                width={300}
                height={300}
                quality={75}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                alt="Séance grossesse en couple"
                className="w-full h-40 object-cover"
              />
            </div>
            <div className="my-auto">
              <h2 className="font-specialelite text-xs ">Professionnels</h2>
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
          <p className="italic mt-4 text-xs mx-4">
            *Offre de lancement valable jusqu&apos;au 31 mars 2025 inclus.
          </p>
        </div>
        <Link href="/contact">
          <button className="relative overflow-hidden bg-darkgreen w-28 md:w-40 lg:w-40 md:h-10 p-1 lg:p-0 mb-2 mt-4 lg:mt-2 mx-10 md:mx-28 lg:mx-auto rounded-lg shadow-lg text-verylightgray text-[0.9rem] md:text-lg border-2 border-darkgreen hover:border-2 hover:border-darkgreen group">
            <span className="absolute inset-0 bg-verylightgray transition-transform transform -translate-x-full group-hover:translate-x-0 duration-300 ease-in-out"></span>
            <span className="relative text-verylightgray group-hover:text-darkgreen transition-colors duration-300 ease-in-out">
              Réservez votre séance
            </span>
          </button>
        </Link>
      </section>

      {/* Photographie Grid Gallery */}
      <section className="z-10 relative w-screen">
        <h2 className="text-center text-sm font-specialelite p-4">
          Quelques réalisations...
        </h2>
        <GridPhotos />
      </section>


    </main>
  );
};

export default Photography;
