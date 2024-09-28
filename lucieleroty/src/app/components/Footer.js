import Link from "next/link";

const Footer = () => {
	return (
		<footer className="z-10 bottom-0 w-full py-4 text-[0.6rem] md:text-[0.8rem] bg-lightgray bg-opacity-0 text-center text-black ">
			<div>
			<Link href="/legalNotices"><p>Mentions Légales</p></Link>
			</div>
			<p>© EyeToPixel - Développeuse Web Freelance - 2024</p>
		</footer>
	)
};

export default Footer;
