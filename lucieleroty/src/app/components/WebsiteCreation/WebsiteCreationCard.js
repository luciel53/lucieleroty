import Image from "next/image";

const WebsiteCreationCard = ({ srcImg, title, ul }) => {
  return (
    <div className="flex flex-col bg-verylightgray justify-center items-center w-[40%] mb-10 px-5 mx-auto shadow-lg rounded-lg border-2 border-lightgreen animate-fade-up animate-duration-[2000ms] animate-ease-out">
      <h2 className="p-4 font-specialelite">{title}</h2>
      <div className="flex flex-row pb-4">
        <div>
          <Image src={srcImg} alt={title} width={300} height={300} />
        </div>
        <div className="flex flex-col">
          <div>{ul}</div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteCreationCard;
