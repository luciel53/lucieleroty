"use client";

import Image from "next/image";
import AOS from "aos";
import { useEffect } from "react";

const WebsiteCreationCard = ({ srcImg, title, ul }) => {
  useEffect(() => {
    AOS.init({ duration: 1000,
	offset: 350 });
  }, []);

  return (
    <div
      className="flex flex-col bg-verylightgray justify-center items-center w-[40%] mb-10 px-5 mx-auto shadow-lg rounded-lg border-2 border-darkgreen"
      data-aos="fade-up" data-aos-transform="translate"
    >
      <h2 className="p-4 font-specialelite text-darkgreen">{title}</h2>
      <div className="flex flex-row pb-4">
        <div>
          <Image src={srcImg} alt={title} width={300} height={300} />
        </div>
        <div className="flex flex-col w-[60%]">
          <div>{ul}</div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteCreationCard;
