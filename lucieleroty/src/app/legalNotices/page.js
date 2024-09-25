const LegalNotices = () => {
  return (
    <main className="flex flex-col">
      <h1 className="font-specialelite text-xl mt-5 text-center">
        Mentions Légales
      </h1>

      {/* Company informations */}
      <div className="ml-40 mt-16">
        <h2 className="mb-2 underline font-specialelite text-base">
          L'entreprise :
        </h2>
        <p>
          <strong>EyeToPixel</strong>
        </p>
        <p>7 rue Edouard de la boussinière</p>
        <p>Le Mans</p>
        <p>07.78.95.65.12</p>
        <p>
          <a
            href="mailto:contact@eyetopixel.com"
            className="text-darkgreen hover:text-lightgreen underline"
          >
            contact@eyetopixel.com
          </a>
        </p>
        <p>
          <a
            href="http://www.eyetopixel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-darkgreen hover:text-lightgreen underline"
          >
            www.eyetopixel.com
          </a>
        </p>
        <p>n° de SIREN : 818218117</p>
        <p>
          Directrice et créatrice de la publication : Lucie Leroty, dirigeante
          de EyeToPixel
        </p>
      </div>

      {/* Hosting company */}
      <div className="ml-40 mt-6">
        <h2 className="mb-2 underline font-specialelite text-base">
          L'hébergeur :
        </h2>
        <p>Hostinger International Ltd.</p>
        <p>61 Lordou Vironos Street, 6023</p>
        <p>Larnaca, Cyprus</p>
        <p>
          <a
            href="https://www.hostinger.com/contacts"
            target="_blank"
            rel="noopener noreferrer"
            className="text-darkgreen hover:text-lightgreen underline"
          >
            www.hostinger.com/contacts
          </a>
        </p>
      </div>

      {/* Data privacy */}
      <div className="ml-40 mt-6 mb-10">
        <h2 className="mb-2 underline font-specialelite text-base">
          Protection des données :
        </h2>
        <p className=" w-[83%] text-justify">
          Vos données personnelles sont traitées avec la plus stricte
          confidentialité. Nous ne collectons que les informations nécessaires
          afin de vous contacter via notre formulaire de contact.
        </p>
        <p className=" w-[83%] text-justify">
          Vous avez le droit d'accéder à vos données, de les modifier ou de
          demander leur suppression à tout moment. Pour exercer ces droits,
          veuillez nous contacter à l'adresse suivante:{" "}
          <a
            href="mailto:contact@eyetopixel.com"
            className="text-darkgreen hover:text-lightgreen underline"
          >
            contact@eyetopixel.com
          </a>
          .
        </p>
      </div>
    </main>
  );
};

export default LegalNotices;
