"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import burger from "../../../public/images/icons/burgertablet.png";
import logo from "../../../public/images/logo.png";
import localFont from "next/font/local";
import "../globals.css";

const glitch = localFont({
  src: "../../../public/fonts/Glitch.ttf",
  variable: "--font-glitch",
  weight: "100 900",
});

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex flex-row justify-between w-full lg:justify-around">
      {/* Logo */}
      <Link href="/">
        <div className="flex flex-row animate-rotate-y animate-once animate-delay-[1000ms] animate-ease-in">
          <Image
            src={logo}
            alt="Logo"
            className="w-10 h-10 md:w-16 md:h-16 lg:w-16 lg:h-16 drop-shadow-left"
          />
          <span
            className={`font-glitch-important text-xs md:text-lg mt-3 md:mt-4 -ml-1 md:-ml-2 ${glitch.variable} antialiased`}
          >
            EYE<span className="text-darkgreen">TO</span>PIXEL
          </span>
        </div>
      </Link>
      {/* Container to hide overflow */}
      <div className="relative overflow-hidden">
        {/* Burger Menu for tablet and mobile */}
        <button
          onClick={toggleMenu}
          className="relative z-30 block bg-darkgreen rounded-full w-16 md:w-20 h-16 md:h-20 -mt-6 md:-mt-4 -mr-6 md:-mr-6 lg:hidden p-2"
        >
          <span className="sr-only">Ouvrir le menu</span>
          <Image
            src={burger}
            alt="Menu"
            className="mt-6 md:mt-3 ml-2 md:ml-3 w-3 h-3 md:w-5 md:h-5"
          />
        </button>
      </div>
      {/* Navbar */}
      <nav
        className={`lg:flex lg:space-x-6 ${
          isMenuOpen ? "block animate-fade-down" : "hidden"
        } absolute z-20 right-0.5 w-32 md:w-40 p-3 rounded-bl-xl bg-verylightgray shadow-lg lg:relative lg:top-0 lg:left-auto lg:flex lg:space-x-6 lg:w-auto lg:bg-transparent lg:shadow-none`}
      >
        <ul
          className={`lg:z-30 lg:flex flex-row lg:space-x-10 text-xs md:text-base lg:text-lg lg:mr-4 lg:mt-1`}
        >
          <li>
            <Link href="/">
              <p class="text-lg group relative w-max">
                <span>Accueil</span>
                <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-darkgreen group-hover:w-3/6 duration-300"></span>
                <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-darkgreen group-hover:w-3/6  duration-300"></span>
              </p>
            </Link>
          </li>
          <li>
            <Link href="/website-creation">
              <p class="text-lg group relative w-max">
                <span>Création de sites</span>
                <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-darkgreen group-hover:w-3/6 duration-300"></span>
                <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-darkgreen group-hover:w-3/6 duration-300"></span>
              </p>
            </Link>
          </li>
          <li>
            <Link href="/design">
              <p class="text-lg group relative w-max">
                <span>Design</span>
                <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-darkgreen group-hover:w-3/6 duration-300"></span>
                <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-darkgreen group-hover:w-3/6 duration-300"></span>
              </p>
            </Link>
          </li>
          <li>
            <Link href="/photography">
              <p class="text-lg group relative w-max">
                <span>Photographie</span>
                <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-darkgreen group-hover:w-3/6 duration-300"></span>
                <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-darkgreen group-hover:w-3/6 duration-300"></span>
              </p>
            </Link>
          </li>
          <li className="lg:text-white">
            <Link href="/contact">
            <p class="text-lg group relative w-max">
                <span>Contact</span>
                <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-verylightgray group-hover:w-3/6 duration-300"></span>
                <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-verylightgray group-hover:w-3/6 duration-300"></span>
              </p>
              </Link>
          </li>
        </ul>
        {/* Bubble on Contact */}
        <div className="relative">
          <span className="lg:z-10 flex absolute drop-shadow-lg animate-bounce animate-duration-[800ms] animate-delay-[20000ms] animate-ease-out hover:animate-none lg:w-40 lg:h-40 lg:bg-darkgreen text-white rounded-full lg:-mt-20 lg:-right-12 overflow-hidden"></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
