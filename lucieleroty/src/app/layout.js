import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const pompiere = localFont({
  src: "../../public/fonts/Pompiere.ttf",
  variable: "--font-pompiere",
  weight: "100 900",
});

export const metadata = {
  title:
    "Lucie Leroty - Développeuse web et photographe freelance - Création de sites web",
  description:
    "Lucie Leroty, développeuse web et photographe freelance, propose des services de création de sites web professionnels et de photographie sur mesure. Découvrez comment nous pouvons transformer vos idées en réalité avec des solutions web et visuelles adaptées à vos besoins.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="overflow-x-hidden">
      <body
        className={`${pompiere.variable} antialiased flex flex-col min-h-screen bg-wallpaper bg-cover bg-no-repeat zoom-out`}
      >
        <Header />

        {children}
        <Footer />
      </body>
    </html>
  );
}
