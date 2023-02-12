import Image from "next/image";
import Link from "next/link";
import IconFacebook from "public/images/icon-facebook.svg";
import IconInstagram from "public/images/icon-instagram.svg";
import IconPinterest from "public/images/icon-pinterest.svg";
import IconTwitter from "public/images/icon-twitter.svg";

const SocialLinks = [
  {
    image: IconFacebook,
    alt: "Go to our Facebook profile",
    link: "/",
  },
  {
    image: IconInstagram,
    alt: "Go to our Instagram profile",
    link: "/",
  },
  {
    image: IconTwitter,
    alt: "Go to our Twitter profile",
    link: "/",
  },
  {
    image: IconPinterest,
    alt: "Go to our Pinterest profile",
    link: "/",
  },
];
export const FooterSocialLinks = () => {
  return (
    <div className="mt-20 flex flex-wrap gap-7">
      {SocialLinks.map((link) => (
        <Link href={link.link}>
          <Image src={link.image} alt={link.alt} />
        </Link>
      ))}
    </div>
  );
};
