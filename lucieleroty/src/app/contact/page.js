import Footer from "../components/Footer";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Image from "next/image";
import localFont from "next/font/local";
import "../globals.css";

const card = {
  title: "Création de sites web sur mesure",
  paragraph:
    "Créer un site web sur mesure est une étape cruciale pour toute entreprise, qu'il s'agisse d'une PME, d'un artisan, d'une association... Un site vitrine, un site one page ou une landing page bien conçus peuvent considérablement améliorer votre visibilité en ligne et vous aider à attirer de nouveaux clients. Un site web professionnel à votre image reflète non seulement votre identité mais aussi votre sérieux et votre engagement envers vos clients. En optant pour une solution personnalisée, vous vous assurez que votre site répond parfaitement à vos besoins spécifiques et qu'il est optimisé pour offrir une expérience utilisateur optimisée. En fin de compte, un site web professionnel est un investissement essentiel pour faire grandir votre entreprise et se démarquer dans un marché compétitif.",
  img: "/images/CarouselHome/creation.png",
};

const glitch = localFont({
  src: "../../../public/fonts/Glitch.ttf",
  variable: "--font-glitch",
  weight: "100 900",
});

const Contact = () => {
  return (
    <main className="flex-grow">
      {/* title */}
      <div className="flex flex-col z-0 font-specialelite mt-1 lg:mt-3 mb-2 animate-flip-down">
        <h1 className="mx-auto drop-shadow-left text-[0.6rem] md:text-lg lg:text-xl">
          Contactez-moi
        </h1>
      </div>
      {/* Bubble */}
      <div className="lg:w-80 lg:h-80 bg-lightgreen z-0 absolute drop-shadow-lg rounded-full animate-fade animate-duration-1000 animate-delay-[400ms] animate-ease-in"></div>
      {/* Contact section */}
      <section className="flex flex-col md:flex-row justify-evenly items-center mx-auto md:mb-10 relative z-10 w-[80%] md:w-[90%] p-2 min-h-[28rem]">
        {/* Background image */}
        <div className="absolute inset-0 bg-tea bg-cover bg-center opacity-30 z-0"></div>

        {/* Presentation and contact */}
        <div className="z-10">
          {/* Logo */}
          <div className="flex flex-row">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={400}
              height={400}
              className="w-10 h-10 md:w-10 md:h-10 lg:w-16 lg:h-16 drop-shadow-left"
            />
            <span
              className={`font-glitch-important text-xs lg:text-lg mt-3 md:mt-4 -ml-1 md:-ml-2 ${glitch.variable} antialiased`}
            >
              EYE<span className="text-darkgreen">TO</span>PIXEL
            </span>
          </div>
          {/* Contact details */}
          <div className="flex flex-col text-sm lg:text-base">
            <p className="font-specialelite text-[60%] md:text-[60%] lg:text-base text-gray-500 -mt-2 mb-4">
              Développeuse web & Photographe
            </p>
            <div className="flex flex-row">
              <Image
                src="/images/icons/location1.png"
                alt="Localisation"
                width={30}
                height={30}
                className="w-5 h-5"
              />
              <p className="pl-1">Le Mans</p>
            </div>
            <div className="flex flex-row">
              <Image
                src="/images/icons/mail.png"
                alt="Adresse email"
                width={30}
                height={30}
                className="w-4 h-4 ml-0.5 mt-1"
              />
              <p className="pl-1.5">contact@eyetopixel.com</p>
            </div>
            <div className="flex flex-row">
              <Image
                src="/images/icons/phone.png"
                alt="Numéro de téléphone"
                width={30}
                height={30}
                className="w-5 h-5"
              />
              <p className="pl-1">07.78.95.65.12</p>
            </div>
            <div className="flex flex-row">
              <Image
                src="/images/icons/valise.png"
                alt="Localisation"
                width={30}
                height={30}
                className="w-4 h-4 ml-0.5 mt-0.5"
              />
              <p className="pl-1">818218117</p>
            </div>
          </div>
        </div>
        {/* Vertical bar */}
        <div className="hidden md:block w-[1px] h-60 z-10 bg-black"></div>
        {/* Contact form */}
        <div className="z-10">
          <form className="flex flex-col lg:mr-6 my-6 lg:my-16">
            <input
              type="text"
              placeholder="Nom"
              required
              className="text-xs mb-2 pl-2 py-1 lg:text-xs border rounded-sm shadow-lg w-36 mx-auto lg:w-full"
            />
            <input
              type="text"
              placeholder="Prénom"
              required
              className="text-xs mb-2 pl-2 py-1 lg:text-xs border rounded-sm shadow-lg w-36 mx-auto lg:w-full"
            />
            <input
              type="text"
              placeholder="Société ou association (facultatif)"
              className="text-xs mb-2 pl-2 py-1 lg:text-xs border rounded-sm shadow-lg w-36 mx-auto lg:w-full"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="text-xs mb-2 pl-2 py-1 lg:text-xs border rounded-sm shadow-lg w-36 mx-auto lg:w-full"
            />
            <input
              type="text"
              placeholder="Téléphone"
              className="text-xs mb-2 pl-2 py-1 lg:text-xs border rounded-sm shadow-lg w-36 mx-auto lg:w-full"
            />
            <input
              type="text"
              placeholder="Sujet"
              required
              className="text-xs mb-2 pl-2 py-1 lg:text-xs border rounded-sm shadow-lg w-36 mx-auto lg:w-full"
            />
            <textarea
              type="text"
              placeholder="Votre message"
              required
              className="text-xs mb-2 pl-2 py-1 lg:text-xs border rounded-sm shadow-lg w-36 mx-auto lg:w-full h-20"
            />
            {/* Checkbox */}
            <div className="md:w-40 lg:w-80 mb-4 ">
              <input
                type="checkbox"
                id="terms"
                required
                placeholder="J'accepte les conditions générales d'utilisation et autorise le traitement de mes données personnelles conformément à la politique de confidentialité."
              />
              <label
                htmlFor="terms"
                className="mb-2 pl-2 rounded-sm text-[60%] md:text-xs hover:cursor-pointer"
              >
                J'accepte les conditions générales d'utilisation et autorise le
                traitement de mes données personnelles conformément à la
                politique de confidentialité.
              </label>
            </div>
            <button className="relative overflow-hidden bg-darkgreen w-20 p-0.5 rounded-lg text-verylightgray mx-auto group">
              <span className="absolute inset-0 bg-verylightgray transition-transform transform -translate-x-full group-hover:translate-x-0 duration-300 ease-in-out"></span>
              <span className="relative text-verylightgray group-hover:text-darkgreen transition-colors duration-300 ease-in-out">
                Envoyer
              </span>
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
