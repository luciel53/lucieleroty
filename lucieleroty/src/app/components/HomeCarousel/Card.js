import Image from "next/image";

const HomeCarouselCard = ({ img, title, quote, paragraph }) => {
  return (
    <div className="flex flex-wrap-reverse z-0 md:flex-row md:justify-center lg:space-x-12 lg:space-x-0 mx-auto w-[11rem] md:w-[24rem] h-auto lg:pl-12 lg:w-[55rem] lg:h-[20rem] bg-verylightgray rounded-xl border-2 border-lightgreen shadow-lg opacity-90 transition-transform duration-500 ease-in-out transform">
      {/* Description of the card */}
      <div className="flex flex-col lg:flex-grow w-[8rem] md:w-80 lg:w-64 justify-around mx-auto lg:p-10">
        {/* Title & icon */}
        <div className="flex flex-row md:justify-center md:mt-2 lg:mt-4 mb-2 ">
          <Image
            src="/images/icons/stars.png"
            alt="Stars"
            width={55}
            height={55}
            className="w-3 h-3 md:w-4 md:h-4"
          />
          <h2 className="font-specialelite text-[0.6rem] md:text-[0.8rem] lg:text-[0.9rem] whitespace-nowrap pl-1 drop-shadow-lg">
            {title}
          </h2>
        </div>
        <quote className="text-[0.4rem] md:text-[0.5rem] mx-auto mb-2 lg:mb-0">{quote}</quote>
        <p className="text-justify text-[0.5rem] md:text-[0.8rem]">{paragraph}</p>
        <button className="bg-darkgreen w-12 h-4 md:w-20 md:h-8 mb-2 lg:mb-6 mx-20 md:mx-40 rounded-lg shadow-lg text-verylightgray text-[0.6rem] md:text-lg">
          En savoir +
        </button>
      </div>
      {/* Picture */}
      <div className="my-auto lg:mx-auto lg:flex-grow ">
        <Image src={img} alt={title} width={800} height={800} className="rounded-2xl p-2 lg:pr-auto" />
      </div>
    </div>
  );
};

export default HomeCarouselCard;
