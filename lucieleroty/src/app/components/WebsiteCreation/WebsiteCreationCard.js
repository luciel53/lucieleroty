"use client";

import Image from "next/image";
import { useEffect } from "react";


const WebsiteCreationCard = ({ srcImg, title, ul }) => {


  return (
    <div
      className="flex flex-col bg-verylightgray justify-center items-center z-10 relative w-[95%] lg:w-[40%] mt-5 md:mt-10 md:mb-10 px-5 mx-auto shadow-lg rounded-lg border-2 border-darkgreen"

    >
      <h3 className="p-4 font-specialelite text-darkgreen text-[70%] md:text-[90%] lg:text-[90%]">{title}</h3>
      <div className="flex flex-row pb-4">
        <div className="w-[25%]">
          <Image src={srcImg} alt={title} width={300} height={300} />
        </div>
        <div className="flex flex-col w-[75%]">
          <div className="text-[60%] md:text-[90%] lg:text-[100%]">{ul}</div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteCreationCard;
