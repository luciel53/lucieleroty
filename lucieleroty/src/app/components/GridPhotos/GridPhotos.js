import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const GridPhotos = () => {
  const cardsRefGrid = useRef(null);

  // images appear one after the other
  useEffect(() => {
    if (cardsRefGrid.current) {
      gsap.fromTo(
        cardsRefGrid.current.children,
        { opacity: 0, y: 150 }, // initial
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRefGrid.current, // animation when the section appears
            start: "top 80%",
            end: "bottom bottom",
            toggleActions: "play none none none", // Play animation once
          },
        }
      );
    }
  }, []);

  return (
    <div ref={cardsRefGrid} className="grid grid-cols-2 lg:grid-cols-4 gap-1 px-1">
      <div className="relative w-full h-20 md:h-40">
        <Image
          src="/images/GridPhotos/1puydufou.webp"
          alt="Le Puy-du-fou en Vendée"
          layout="fill"

          className="rounded-lg object-cover"
        />
      </div>
      <div className="relative w-full h-20 md:h-40">
        <Image
          src="/images/GridPhotos/2etna2_1.webp"
          alt="LE volcan Etna, en Sicile, Italie"
          layout="fill"

          className="rounded-lg object-cover"
        />
      </div>
      <div className="relative w-full h-20 md:h-40">
        <Image
          src="/images/GridPhotos/3PerthByNight_1.webp"
          alt="Perth, en Australie, de nuit"
          layout="fill"

          className="rounded-lg object-cover"
        />
      </div>
      <div className="relative w-full h-20 md:h-40">
        <Image
          src="/images/GridPhotos/4usineAbandonee.webp"
          alt="Urbex dans une usine abandonnée"
          layout="fill"

          className="rounded-lg object-cover"
        />
      </div>
	  <div className="relative w-full h-20 md:h-40">
        <Image
          src="/images/GridPhotos/5macaque.webp"
          alt="Macaque crabier à Bali en Indonésie"
          layout="fill"

          className="rounded-lg object-cover"
        />
      </div>
	  <div className="relative w-full h-20 md:h-40">
        <Image
          src="/images/GridPhotos/6plitvice.webp"
          alt="Parc national de Plitvice en Croatie"
          layout="fill"

          className="rounded-lg object-cover"
        />
      </div>
	  <div className="relative w-full h-20 md:h-40">
        <Image
          src="/images/GridPhotos/7chenonceau.webp"
          alt="Château de Chenonceau"
          layout="fill"

          className="rounded-lg object-cover"
        />
      </div>
	  <div className="relative w-full h-20 md:h-40">
        <Image
          src="/images/GridPhotos/8floemeric.webp"
          alt="Mariage en Mayenne"
          layout="fill"

          className="rounded-lg object-cover"
        />
      </div>
	  <div className="relative w-full h-20 md:h-40">
        <Image
          src="/images/GridPhotos/9playaindo.webp"
          alt="Coucher de soleil en indonésie, à Bali"
          layout="fill"

          className="rounded-lg object-cover"
        />
      </div>
	  <div className="relative w-full h-20 md:h-40">
        <Image
          src="/images/GridPhotos/10broceliandre.webp"
          alt="Forêt de Broceliandre"
          layout="fill"

          className="rounded-lg object-cover"
        />
      </div>
	  <div className="relative w-full h-20 md:h-40">
        <Image
          src="/images/GridPhotos/11rizieres.webp"
          alt="Rizières d'Ubud à Bali en indonésie"
          layout="fill"

          className="rounded-lg object-cover"
        />
      </div>
	  <div className="relative w-full h-20 md:h-40">
        <Image
          src="/images/GridPhotos/12bebe.webp"
          alt="Naissance de bébé"
          layout="fill"

          className="rounded-lg object-cover"
        />
      </div>
	  <div className="relative w-full h-20 md:h-40">
        <Image
          src="/images/GridPhotos/13mtstmich.webp"
          alt="Mont-Saint-Michel en Normandie ou en Bretagne"
          layout="fill"

          className="rounded-lg object-cover"
        />
      </div>
	  <div className="relative w-full h-20 md:h-40">
        <Image
          src="/images/GridPhotos/14gorilla.webp"
          alt="Gorille au zoo de beauval"
          layout="fill"

          className="rounded-lg object-cover"
        />
      </div>
	  <div className="relative w-full h-20 md:h-40">
        <Image
          src="/images/GridPhotos/15bangkok.webp"
          alt="Bangkok de nuit en pose longue"
          layout="fill"

          className="rounded-lg object-cover"
        />
      </div>
	  <div className="relative w-full h-20 md:h-40">
        <Image
          src="/images/GridPhotos/16ileseoliennes.webp"
          alt="îles éoliennes en Sicile"
          layout="fill"

          className="rounded-lg object-cover"
        />
      </div>
    </div>
  );
};

export default GridPhotos;
