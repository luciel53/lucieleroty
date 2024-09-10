import Image from "next/image";
import localFont from "next/font/local";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Bio from "./components/Bio.js";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        {/* title */}
        <div className="flex flex-col z-0 font-specialelite mt-1">
          <h1 className="mx-auto drop-shadow-left text-[0.7rem] md:text-lg lg:text-2xl">
            Développeuse Web Freelance
          </h1>
          <h2 className="mx-auto drop-shadow-left text-gray-500 text-[0.6rem] md:text-sm lg:text-lg -mt-1">
            & Photographe
          </h2>
        </div>
        {/* Bubble */}
        <div className="lg:w-80 lg:h-80 bg-lightgreen animate-bounce drop-shadow-lg rounded-full"></div>
        {/* Carousel */}
        <section></section>

        {/* Bio */}
        <Bio />
      </main>
      <Footer />
    </>
  );
}
