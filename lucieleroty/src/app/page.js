import Image from "next/image";
import localFont from "next/font/local";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <div className="font-specialelite">
          <h1 className="">Développeuse Web Freelance</h1>
          <h2>& Photographe</h2>
        </div>
      </main>
      <Footer />
    </>
  );
}
