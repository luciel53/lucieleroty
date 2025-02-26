import "./globals.css";
import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";


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
      <Head>
        {/* Pre-load of the police */}
        <link
          rel="preload"
          href="/fonts/SpecialElite-Regular.ttf"
          as="font"
          type="font/ttf"
          crossorigin="anonymous"
        />
        <link
            rel="preload"
            href="/globals.css"
            as="style"
            type="text/css"
            crossorigin="anonymous"
          />
      </Head>
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
