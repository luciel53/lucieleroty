"use client";

import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import { useEffect } from "react";

const ServiceCard = ({ title, paragraph, ul, paragraph2, img, link }) => {
  return (

      <div className="flex flex-col lg:w-96 lg:mx-auto h-auto z-10 relative justify-center opacity-90 bg-verylightgray border-2 border-lightgreen rounded-lg">
        {/* Paragraph and button */}
        <div className="flex flex-col justify-center items-center">
          <h3 className=" font-specialelite text-xs lg:text-[100%] p-2 mt-2 text-center mx-auto">
            {title}
          </h3>
          <div className=" mx-3 md:mx-6  lg:w-72 px-2 lg:mx-auto my-3 lg:my-4 text-justify text-xs md:text-sm lg:text-base ">
            {paragraph}
            {ul}
            {paragraph2}
          </div>
        </div>
        <div className="w-full text-center">
          <Link href={link}>
            <button className=" relative overflow-hidden bg-darkgreen w-28 md:w-48 lg:w-60 md:h-8 mb-2 lg:mb-4 rounded-lg shadow-lg text-verylightgray text-[0.7rem] md:text-lg border-2 border-darkgreen hover:border-2  hover:border-darkgreen group">
              <span className="absolute inset-0 bg-verylightgray transition-transform transform -translate-x-full group-hover:translate-x-0 duration-300 ease-in-out"></span>
              <span className="relative text-verylightgray group-hover:text-darkgreen transition-colors duration-300 ease-in-out">
                Demandez une estimation
              </span>
            </button>
          </Link>
        </div>
      </div>
   
  );
};

export default ServiceCard;
