import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";


// const montserrat = localFont({
//   src: "../../public/fonts/Montserrat.ttf",
//   variable: "--font-montserrat",
//   weight: "100 900",
//   fontFamily: "normal",
// });

// const Cartoonist = localFont({
//   src: "../../public/fonts/Cartoonist.ttf",
//   variable: "--font-Cartoonist",

// });

export const metadata = {
  metadataBase: new URL('https://www.eyetopixel.com'),
  title:
    "EyeToPixel - Création de sites web",
  description:
    "EyeToPixel vous propose des services de création de sites web professionnels et de photographie sur mesure. Découvrez comment nous pouvons transformer vos idées en réalité avec des solutions web et visuelles adaptées à vos besoins.",
  openGraph: {
    title: "EyeToPixel",
    description: "Création de sites web vitrine, design et photographie",
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
        className={` font-primer antialiased flex flex-col min-h-screen bg-wallpaper bg-cover text-base font-normal bg-no-repeat zoom-out relative`}
      >
        <div className="absolute inset-0 bg-white/50 z-0"></div>
        <Header />

        {children}
        <Footer />
      </body>
    </html>
  );
}
