"use client";

import Bio from "./components/Home/Bio.js";
import Intro from "./components/Home/Intro.js";
import RoundedCard from "./components/Home/RoundedCard.js";
import HomeCarousel from "./components/HomeCarousel/CarouselHome.js";
import { useEffect, useRef } from "react";
import Link from "next/link.js";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  // create a ref for each section to animate
  const titleRef = useRef(null);
  const bioRef = useRef(null);
  const servicesRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    // Animate sections with scrollTrigger
    const sections = [bioRef, servicesRef];

    sections.forEach((section) => {
      if (section.current) {
        gsap.fromTo(
          section.current,
          { opacity: 0, y: 200 }, // initial
          {
            opacity: 2,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section.current,
              start: "top 70%", // Animation starts when top of the section is at 80% of viewport
              end: "bottom bottom", // Animation finish when bottom of section is at top of viewport
              scrub: true,
            },
          }
        );
      }
    });

    // refresh after config
    ScrollTrigger.refresh();
  }, []);

  // RoundCards appear one after the other
  useEffect(() => {
    if (cardsRef.current) {
      gsap.fromTo(
        cardsRef.current.children,
        { opacity: 0, y: 50 }, // initial
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current, // animation when the section appears
            start: "top 80%",
            end: "bottom bottom",
            toggleActions: "play none none none", // Play animation once
          },
        }
      );
    }
  }, []);

  // bubbles effect
  useEffect(() => {
    gsap.utils.toArray(".bubble").forEach((bubble) => {
      gsap.to(bubble, {
        y: "+=" + gsap.utils.random(90, 200, 5),
        x: "+=" + gsap.utils.random(0, -200, 5),
        duration: gsap.utils.random(3, 5),
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    });
  }, []);

  return (
    <main className="flex-grow">
      {/* title */}
      <div className="flex flex-row justify-center space-x-36">
        <div className="flex flex-col z-0 font-specialelite mt-1 lg:mt-4 mb-2 lg:mb-0">
          <h1 className="mx-auto drop-shadow-left text-[0.8rem] md:text-xl">
            Développeuse Web Freelance
          </h1>
          <h2 className="mx-auto drop-shadow-left text-gray-500 text-[0.7rem] md:text-sm lg:text-md -mt-1">
            & Photographe
          </h2>
        </div>
      </div>

      {/* Bubble */}
      <div className="bubble lg:w-12 lg:h-12 bg-gradient-to-br from-neutral-300 to-gray-100 z-0 left-0 mt-10 ml-12 absolute drop-shadow-md rounded-full animate-fade animate-duration-1000 animate-delay-[400ms] animate-ease-in"></div>
      <div className="bubble lg:w-40 lg:h-40 bg-gradient-to-t from-neutral-300 to-gray-100 z-0 left-0 mt-40 ml-64 absolute drop-shadow-md rounded-full animate-fade animate-duration-1000 animate-delay-[400ms] animate-ease-in"></div>
      <div className="bubble xl:w-60 xl:h-60 bg-gradient-to-l from-neutral-300 to-gray-100 z-0 right-0 -mt-5 absolute drop-shadow-md rounded-full animate-fade animate-duration-1000 animate-delay-[400ms] animate-ease-in"></div>

      {/* intro */}
      <Intro />

      {/* Services */}
      <section
        ref={servicesRef}
        id="services"
        className="flex flex-col scroll-section -mt-5 md:mt-0"
      >
        <h2 className="font-specialelite text-sm text-center mb-4 z-10">
          Mes services
        </h2>

        <div ref={cardsRef} className="flex flex-wrap justify-center space-x-0">
          <Link href="/website-creation">
            <RoundedCard
              ref={(el) => (cardsRef.current[0] = el)}
              image="/images/icons/web.svg"
              title="JE CRÉE VOTRE SITE VITRINE"
            />
          </Link>
          <Link href="/design">
            <RoundedCard
              ref={(el) => (cardsRef.current[1] = el)}
              image="/images/icons/camera.svg"
              title="J'ILLUSTRE VOTRE SITE WEB"
            />
          </Link>
          <Link href="/photography">
            <RoundedCard
              ref={(el) => (cardsRef.current[2] = el)}
              image="/images/icons/flyer.svg"
              title="JE CRÉE VOS SUPPORTS DE COMMUNICATION"
            />
          </Link>
        </div>
      </section>

      {/* Bio */}
      <section ref={bioRef} className="scroll-section" id="bio">
        <Bio />
      </section>
    </main>
  );
}
