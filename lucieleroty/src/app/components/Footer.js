import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="z-10 bottom-0 w-full py-4 text-[0.6rem] md:text-[0.8rem] bg-lightgray bg-opacity-0 text-center text-black ">
      <div>
        <Link href="/legalNotices">
          <p>Mentions Légales</p>
        </Link>
      </div>
      {/* Social networks links */}
      <div className="flex flex-row justify-center py-2">
        <a
          href="https://www.facebook.com/tonprofil"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/icons/malt.png"
            alt="Page professionnelle malt"
            width={30}
            height={30}
            className="w-3.5 h-3.5 mt-[2px] mr-1 hover:opacity-80 cursor-pointer"
          />
        </a>
        <Image
          src="/images/icons/facebook.png"
          alt="Page professionnelle facebook"
          width={30}
          height={30}
          className="mr-1 hover:opacity-80 cursor-pointer"
        />
        <Image
          src="/images/icons/insta.png"
          alt="Page professionnelle instagram"
          width={30}
          height={30}
          className="mr-1 hover:opacity-80 cursor-pointer"
        />
        <Image
          src="/images/icons/linkedin.png"
          alt="Page professionnelle linkedin"
          width={30}
          height={30}
          className="hover:opacity-80 cursor-pointer"
        />
      </div>
      <p>© EyeToPixel - Développeuse Web Freelance - 2024</p>
    </footer>
  );
};

export default Footer;
