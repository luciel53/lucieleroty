import Image from "next/image";

const ServiceCard = ({ title, paragraph, ul, paragraph2, img }) => {
  return (
    <section className="mx-1 md:mx-4 lg:mx-20 lg:mt-5">
      <div className="flex flex-wrap-reverse lg:flex-nowrap md:flex-row h-auto z-10 relative justify-center opacity-90 bg-verylightgray border-2 border-lightgreen rounded-lg">
        {/* Paragraph */}
        <div className="lg:ml-8 mx-3 md:mx-6 lg:mx-0 my-3 lg:my-8 text-justify text-xs md:text-sm lg:text-base lg:w-1/2">
          {paragraph}
          {ul}
          {paragraph2}
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
