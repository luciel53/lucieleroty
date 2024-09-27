import Bio from "./components/Home/Bio.js";
import HomeCarousel from "./components/HomeCarousel/CarouselHome.js";

export default function Home() {

  return (
    <main className="flex-grow">
      {/* title */}
      <div className="flex flex-col z-0 font-specialelite mt-1 lg:-mt-1 mb-2 lg:mb-0 animate-flip-down">
        <h1 className="mx-auto drop-shadow-left text-[0.7rem] md:text-lg">
          Développeuse Web Freelance
        </h1>
        <h2 className="mx-auto drop-shadow-left text-gray-500 text-[0.6rem] md:text-sm lg:text-md -mt-1">
          & Photographe
        </h2>
      </div>
      {/* Bubble */}
      <div className="lg:w-80 lg:h-80 bg-lightgreen z-0 absolute drop-shadow-lg rounded-full animate-fade animate-duration-1000 animate-delay-[400ms] animate-ease-in"></div>
      {/* Carousel */}
      <section className="z-0 relative lg:mt-2 mb-6 animate-fade animate-duration-1000 animate-delay-[400ms] animate-ease-in">
        <HomeCarousel />
      </section>

      {/* Bio */}
      <Bio  />
    </main>
  );
}
