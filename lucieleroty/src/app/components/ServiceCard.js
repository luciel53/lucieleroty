import Image from "next/image";
import Link from "next/link";

const ServiceCard = ({ title, paragraph, ul, paragraph2, img, link }) => {
  return (
    <section className="mx-1 md:mx-4 lg:mx-20 lg:mt-5 lg:mb-10 animate-fade animate-duration-1000 animate-delay-[400ms] animate-ease-in">
      <div className="flex flex-wrap-reverse lg:flex-nowrap md:flex-row h-auto z-10 relative justify-center opacity-90 bg-verylightgray border-2 border-lightgreen rounded-lg">
        {/* Paragraph and button */}
        <div className="flex flex-col lg:w-1/2">
          <div className="lg:ml-8 mx-3 md:mx-6 lg:mx-0 my-3 lg:my-4 text-justify text-xs md:text-sm lg:text-base ">
            {paragraph}
            {ul}
            {paragraph2}
          </div>
          <Link href={link}>
            <button className="relative overflow-hidden bg-darkgreen w-20 md:w-40 lg:w-40 md:h-8 mb-2 lg:mb-4 mx-10 md:mx-28 lg:mx-56 rounded-lg shadow-lg text-verylightgray text-[0.6rem] md:text-lg border-2 border-darkgreen hover:border-2  hover:border-darkgreen group">
              <span className="absolute inset-0 bg-verylightgray transition-transform transform -translate-x-full group-hover:translate-x-0 duration-300 ease-in-out"></span>
              <span className="relative text-verylightgray group-hover:text-darkgreen transition-colors duration-300 ease-in-out">
                Demandez une estimation
              </span>
            </button>

          </Link>
        </div>
        {/* Image */}
        <div className="mt-3 lg:m-8 w-2/3 lg:w-1/2 lg:my-auto">
          <Image src={img} alt={title} width={800} height={800} priority />
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
