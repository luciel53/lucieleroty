import Image from "next/image";

const HomeCarouselCard = ({ img, title, quote, paragraph }) => {
  return (
    <div className="flex flex-wrap-reverse md:flex-row md:justify-center md:space-x-12 mx-auto w-[11rem] h-auto lg:w-[55rem] lg:h-[20rem] bg-verylightgray rounded-xl border-2 border-lightgreen shadow-lg opacity-90 transition-transform duration-500 ease-in-out transform">
      {/* Description of the card */}
      <div className="flex flex-col w-36 lg:w-64 justify-around">
        <div className="flex flex-row lg:mt-4 w-4 h-4 mx-8">
          <Image
            src="/images/icons/stars.png"
            alt="Stars"
            width={55}
            height={55}
          />
          <h2 className="font-specialelite text-[0.6rem] lg:text-[0.9rem] whitespace-nowrap pl-1 drop-shadow-lg">
            {title}
          </h2>
        </div>
        <quote className="text-[0.4rem] md:text-[0.5rem] mx-auto">{quote}</quote>
        <p className="text-justify text-[0.5rem] md:text-[1rem]">{paragraph}</p>
        <button className="bg-darkgreen w-12 h-4 md:w-20 md:h-8 mb-6 mx-20 md:mx-44 rounded-lg shadow-lg text-verylightgray text-[0.6rem] md:text-lg">
          En savoir +
        </button>
      </div>
      {/* Picture */}
      <div className="my-auto">
        <Image src={img} alt={title} width={800} height={800} className="rounded-2xl p-2" />
      </div>
    </div>
  );
};

export default HomeCarouselCard;
