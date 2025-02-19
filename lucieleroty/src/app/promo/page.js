import Link from "next/link";

export default function Promo() {
  return (
    <section className="bg-gray-100 py-12 z-10 relative">
      <div className="container mx-auto px-6 lg:px-16 text-center">
        <h1 className="text-md md:text-4xl font-bold text-gray-800 mb-6">
          Offre de Lancement Exceptionnelle
        </h1>
        <p className="text-xs md:text-lg text-gray-600 mb-8">
          Pour célébrer le lancement de notre activité, bénéficiez d&apos;une offre
          exclusive sur nos <Link href="/website-creation" className="underline">services de création de sites web</Link> et de{" "}
          <Link href="/photography" className="underline">photographie</Link>.
        </p>

        {/* Section Offre */}
        <div className="bg-white shadow-md rounded-lg p-4 md:p-8 mb-10 max-w-4xl mx-auto">
          <h2 className="text-xs md:text-3xl font-semibold text-gray-800 mb-4">
            -20% sur toutes nos prestations
          </h2>
          <p className="text-gray-600 mb-6">
            Que ce soit pour un <Link href="/website-creation" className="underline">site vitrine</Link>, une <Link href="/photography" className="underline">séance photo professionnelle</Link> {" "}
            ou un projet sur mesure, profitez de 20% de réduction sur nos tarifs
            habituels.
          </p>
          <p className="text-red-500 font-semibold text-lg">
            Offre valable jusqu&apos;au 31 mars 2025.
          </p>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
          <Link href="/contact">
            <button className="bg-indigo-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-500 transition">
              Demander un devis
            </button>
          </Link>
          <Link href="/contact">
            <button className="bg-darkgreen text-white py-3 px-6 rounded-lg shadow-lg hover:bg-green-500 transition">
              Contactez-nous
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
