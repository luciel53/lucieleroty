import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";


export const metadata = {
  metadataBase: new URL('https://www.eyetopixel.com'),
  title:
    "EyeToPixel - Création de sites web",
  description:
    "EyeToPixel vous propose des services de création de sites web professionnels et de photographie sur mesure au Mans (72). Découvrez comment nous pouvons transformer vos idées en réalité avec des solutions web et visuelles adaptées à vos besoins.",
  openGraph: {
    title: "EyeToPixel",
    description: "Création de sites web vitrine, design et photographie sue Le Mans",
    url: "https://www.eyetopixel.com",
    siteName: "EyeToPixel",
    images: [
      {
        url: "/images/eyetopixel.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="overflow-x-hidden">

      <body
        className={` font-primer antialiased flex flex-col min-h-screen w-full bg-wallpaper bg-cover text-base font-normal bg-no-repeat relative`}
      >
        {/* <div className="absolute inset-0 bg-white/50 z-0"></div> */}
        <Header />

        {children}
        <Footer />
      </body>
    </html>
  );
}
