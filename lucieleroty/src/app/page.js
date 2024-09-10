import Image from "next/image";
import localFont from "next/font/local";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <div className="flex flex-col z-0 font-specialelite mt-1">
          <h1 className="mx-auto drop-shadow-left text-[0.7rem] md:text-lg lg:text-2xl">Développeuse Web Freelance</h1>
          <h2 className="mx-auto drop-shadow-left text-gray-500 text-[0.6rem] md:text-sm lg:text-lg -mt-1">& Photographe</h2>
        </div>
      </main>
      <Footer />
    </>
  );
}
