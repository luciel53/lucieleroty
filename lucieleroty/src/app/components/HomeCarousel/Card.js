import Image from "next/image";
import Link from "next/link";

const HomeCarouselCard = ({ img, title, quote, paragraph, link }) => {
  return (
    <div className="flex flex-wrap-reverse z-20 md:flex-row md:justify-center mx-auto w-[11rem] md:w-[24rem] h-auto lg:pl-12 lg:w-[46rem] lg:h-[16.5rem] bg-verylightgray rounded-xl border-2 border-lightgreen shadow-lg opacity-90 transition-transform duration-500 ease-in-out transform">
      {/* Description of the card */}
      <div className="flex flex-col text-center  lg:flex-grow w-[8rem] md:w-80 lg:w-64 justify-around mx-auto lg:p-4">
        {/* Title & icon */}
        <div className="flex flex-row md:justify-center md:mt-2 lg:-mt-1 mb-2 lg:mb-0 ">
          <Image
            src="/images/icons/stars.png"
            alt="Stars"
            width={55}
            height={55}
            className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5"
          />
          <h2 className="font-specialelite text-[0.6rem] md:text-[0.8rem] lg:text-[0.9rem] whitespace-nowrap lg:pt-0.5 pl-1 drop-shadow-lg">
            {title}
          </h2>
        </div>
        <quote className="text-[0.4rem] md:text-[0.5rem] lg:text-[0.7rem] mx-auto mb-2 lg:mb-0">
          {quote}
        </quote>
        {/* paragraph */}
        <p className="text-justify text-[0.5rem] md:text-[0.8rem] lg:text-[0.9rem] mb-2 lg:my-0">
          {paragraph}
        </p>
        <Link href={link}>
          <button className="relative overflow-hidden bg-darkgreen w-12 h-4 md:w-20 md:h-8 mb-2 lg:mb-2 mx-20 md:mx-60 lg:mx-44 rounded-lg shadow-lg text-verylightgray text-[0.6rem] md:text-lg border-2 border-darkgreen hover:border-2 hover:border-darkgreen group">
            <span className="absolute inset-0 bg-verylightgray transition-transform transform -translate-x-full group-hover:translate-x-0 duration-300 ease-in-out"></span>
            <span className="relative text-verylightgray group-hover:text-darkgreen transition-colors duration-700 ease-in-out">
              En savoir +
            </span>
          </button>
        </Link>
      </div>
      {/* Picture */}
      <div className="my-auto lg:mx-auto lg:flex-grow ">
        <Image
          src={img}
          alt={title}
          width={800}
          height={800}
          priority
          className="rounded-2xl p-2 lg:pr-auto lg:w-80"
        />
      </div>
    </div>
  );
};

export default HomeCarouselCard;
