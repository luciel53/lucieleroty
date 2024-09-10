import Image from "next/image";

const HomeCarouselCard = ({ img, title, quote, paragraph }) => {
  return (
    <div className="flex flex-row justify-center space-x-12 mx-auto lg:w-[55rem] lg:h-[20rem] bg-verylightgray rounded-xl border-2 border-lightgreen shadow-lg opacity-90">
      {/* Description of the card */}
      <div className="flex flex-col lg:w-64 justify-around">
        <div className="flex flex-row lg:mt-4">
          <Image
            src="/images/icons/stars.png"
            alt="Stars"
            width={55}
            height={55}
          />
          <h2 className="font-specialelite pl-1 pt-1 drop-shadow-lg">
            {title}
          </h2>
        </div>
        <quote className=" text-sm">{quote}</quote>
        <p className="text-justify">{paragraph}</p>
        <button className="bg-darkgreen w-20 h-7 mb-6 mx-44 rounded-lg shadow-lg text-verylightgray text-lg">
          En savoir +
        </button>
      </div>
      {/* Picture */}
      <div className="my-auto">
        <Image src={img} alt={title} width={800} height={800} />
      </div>
    </div>
  );
};

export default HomeCarouselCard;
