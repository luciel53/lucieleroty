"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

export default function RoundedCard({ image, title }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;

    // Apparition fluide avec rebond
    gsap.fromTo(
      el,
      { opacity: 0, scale: 0.3, y: 50 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.2,
        ease: "elastic.out(1, 0.5)",
      }
    );

    // Effet de flottement permanent
    gsap.to(el, {
      y: -5,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div
      ref={cardRef}
      className="w-40 h-40 rounded-full bg-darkgreen shadow-xl flex flex-col items-center justify-center text-white text-center p-4 my-1 md:my-0 mx-3 transition-all duration-300"
    >
      {/* Image */}
      <Image
        src={image}
        alt={title}
        width={150}
        height={150}
        className="w-14 h-14 mb-2 object-contain transition-transform duration-300"
      />

      {/* Titre toujours visible */}
      <span className="text-sm font-semibold">{title}</span>

      {/* Effet hover dynamique */}
      <style jsx>{`
        div:hover {
          transform: rotate(3deg) scale(1.1);
          box-shadow: 0px 0px 20px rgba(0, 255, 100, 0.7);
        }
      `}</style>
    </div>
  );
}
