import Image from "next/image";
import Link from "next/link";

export default function Realisations({ image, title, paragraph, link }) {
  return (
    <div className="flex flex-col justify-around items-center drop-shadow-md mb-2 lg:mb-1">
      <div className="flex flex-col lg:flex-row justify-center items-center w-48 md:w-96 lg:w-[80%] md:space-x-8 bg-verylightgray py-2 md:px-3 rounded-md">
        <div>
          <Link href={link} target="_blank" rel="noopener noreferrer">
            <Image
              src={image}
              alt={title}
              width={600}
              height={600}
              className=" w-40 md:w-80 rounded-lg transition-transform duration-100 ease-in-out hover:scale-105 hover:drop-shadow-xl"
            />
          </Link>
        </div>
        <div className=" text-sm mt-2 mx-auto">
          <h4 className="px-2 pb-2">{title}</h4>
          <p className="w-48 md:w-80 text-justify px-2">{paragraph}</p>
        </div>
      </div>
    </div>
  );
}
