import Image from "next/image";
import Link from "next/link";

const PhotographyCarouselCard = ({ img, title, quote }) => {
  return (
    <div className="relative flex flex-col z-20 justify-center mx-auto w-[15rem] h-[20rem] md:w-[24rem] md:h-[30rem] lg:h-[30rem] lg:w-[30rem] bg-verylightgray rounded-xl border-2 border-lightgreen shadow-lg opacity-90 transition-transform duration-500 ease-in-out transform">

      {/* Picture */}
      <div className="mx-auto max-w-[95%] max-h-[85%] relative group">
        <Image
          src={img}
          alt={title}
          width={800}
          height={800}
          priority
          className="object-cover w-full h-full"
        />


      {/* Quote */}
      <blockquote
          className="absolute bottom-0 left-0 w-full h-[10%] p-5 text-center bg-black bg-opacity-70 text-white text-xs md:text-sm lg:text-base flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        >
        {quote}
      </blockquote>
      </div>
    </div>
  );
};

export default PhotographyCarouselCard;
