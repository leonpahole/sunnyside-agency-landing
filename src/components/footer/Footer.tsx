import { FooterLinks } from "@/components/footer/FooterLinks";
import { FooterSocialLinks } from "@/components/footer/FooterSocialLinks";
import Image from "next/image";
import LogoGreen from "public/images/logo-green.svg";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center bg-green-200 py-20">
      <Image src={LogoGreen} alt="" />
      <FooterLinks />
      <FooterSocialLinks />
    </footer>
  );
};
