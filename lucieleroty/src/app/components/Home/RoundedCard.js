import Image from "next/image";

export default function RoundedCard({ title, image }) {
  return (
    <div className="flex items-center justify-center m-2 relative transition-transform duration-100 ease-in-out hover:scale-105 hover:drop-shadow-xl">
      {/* Bandeau -20% */}
      <div className="flex flex-row justify-center absolute right-0 top-1 md:top-6 bg-indigo-500 text-white text-[70%] font-bold rounded-lg w-8 h-6 font-geist">
        <p className="">-20%</p>
      </div>
      <div className="rounded-full bg-gradient-to-br from-darkgreen to-lightgray p-1 shadow-lg">
        <div className="w-28 h-28 md:w-40 md:h-40 rounded-full bg-white flex items-center justify-center">
          <h2 className=" relative z-10 text-xs md:text-lg font-semibold px-10 text-gray-500 text-center">
            {title}
          </h2>
          <Image
            src={image}
            alt="Création de sites internet vitrines"
            width={400}
            height={400}
            className="w-16 z-0 absolute "
          />
        </div>
      </div>
    </div>
  );
}
