import Image from "next/image";
import Link from "next/link";

const Intro = () => {
  return (
    <section id="intro" className="flex flex-row  justify-center text-xs md:text-sm -mt-1 lg:mt-1 mb-6 p-2 z-0 relative rounded-lg bg-white bg-opacity-40 mx-2 md:mx-6 xl:mx-32 shadow-sm">
      <div className="flex flex-col items-center">
        <h2 className="mt-2 w-[94%] md:w-80 lg:w-[80%] text-justify">
          <strong>Développeuse web freelance</strong> et{" "}
          <strong>photographe au Mans</strong>, je crée des{" "}
          <strong>sites sur mesure</strong> partout en France.
        </h2>

        <div className="flex flex-col justify-center items-center mx-auto">
          <article className=" w-[94%] md:w-80 lg:w-[80%] mb-3 mt-1  mx-auto">
            <p className=" text-justify">Spécialisée dans la{" "}
            <Link
              className="underline text-darkgreen hover:text-lightgreen "
              href="/website-creation"
            >
              <strong>création de sites vitrines</strong>
            </Link>{" "}
            pour <strong>les PME et les artisans</strong>, je vous accompagne de
            A à Z pour <em>concrétiser vos projets</em> en ligne.
            </p>
            <p className="text-justify">En plus du{" "}
            <strong>développement web</strong>, je propose également des
            services de{" "}
            <Link
              className="underline text-darkgreen hover:text-lightgreen"
              href="/photography"
            >
              <strong>photographie</strong>
            </Link>{" "}
            professionnelle et de <strong>création de visuels{" "}</strong>
            pour vos{" "}
            <Link
              className="underline text-darkgreen hover:text-lightgreen"
              href="/design"
            >
              <strong>supports de communication</strong>
            </Link>
            .</p>
            <p className="text-justify">
              Ensemble, donnons vie à vos idées en{" "}
              <em>respectant votre personnalité.</em>
            </p>
          </article>
          <div className="flex flex-row justify-center items-center w-40 md:w-80 -space-x-1 md:space-x-2">
            <Link href="/contact">
              <button className="relative overflow-hidden bg-darkgreen w-[170px] h-9 md:w-48 lg:w-48 md:h-10 mt-2 mb-2 lg:mb-4 mx-1 md:mx-0 lg:mx-auto rounded-lg shadow-lg text-verylightgray text-xs md:text-lg border-2 border-darkgreen hover:border-2  hover:border-darkgreen group">
                <span className="absolute inset-0 bg-verylightgray transition-transform transform -translate-x-full group-hover:translate-x-0 duration-300 ease-in-out"></span>
                <span className="relative text-verylightgray group-hover:text-darkgreen transition-colors duration-300 ease-in-out">
                  Parlez-moi de votre projet
                </span>
              </button>
            </Link>
            <Link href="/promo">
              <button className="relative overflow-hidden bg-indigo-500 w-[170px] h-9 md:w-48 lg:w-48 md:h-10 mt-2 mb-2 lg:mb-4 mx-1 md:mx-0 lg:mx-auto rounded-lg shadow-lg text-verylightgray text-xs md:text-lg border-2 border-indigo-500 hover:border-2 hover:border-indigo-500 group">
                <span className="absolute inset-0 bg-verylightgray transition-transform transform -translate-x-full group-hover:translate-x-0 duration-300 ease-in-out"></span>
                <span className="relative text-verylightgray group-hover:text-indigo-500 transition-colors duration-300 ease-in-out">
                  Offre de lancement à -20%*
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-row items-center w-[94%] md:w-80">
          <p className="italic text-xs text-justify">
            *En ce moment profitez de l&apos;offre de lancement à -20% sur tous les
            services ! Attention, durée limitée !
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
