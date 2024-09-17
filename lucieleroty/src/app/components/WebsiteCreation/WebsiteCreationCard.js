"use client";

import Image from "next/image";
import AOS from "aos";
import { useEffect } from "react";

const WebsiteCreationCard = ({ srcImg, title, ul }) => {
  useEffect(() => {
    AOS.init({ duration: 1000,
	offset: 250 });
  }, []);

  return (
    <div
      className="flex flex-col bg-verylightgray justify-center items-center w-[95%] lg:w-[40%] mt-5 md:mt-10 md:mb-10 px-5 mx-auto shadow-lg rounded-lg border-2 border-darkgreen"
      data-aos="fade-up" data-aos-transform="translate"
    >
      <h3 className="p-4 font-specialelite text-darkgreen text-[70%] md:text-[90%] lg:text-[120%]">{title}</h3>
      <div className="flex flex-row pb-4">
        <div className="w-[40%]">
          <Image src={srcImg} alt={title} width={300} height={300} />
        </div>
        <div className="flex flex-col w-[60%]">
          <div className="text-[60%] md:text-[90%] lg:text-[100%]">{ul}</div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteCreationCard;
