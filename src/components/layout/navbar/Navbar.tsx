import { NavbarDesktopLinks } from "@/components/layout/navbar/desktop/NavbarDesktopLinks";
import { NavbarMobileMenu } from "@/components/layout/navbar/mobile/NavbarMobileMenu";
import Image from "next/image";
import Link from "next/link";
import Logo from "public/images/logo.svg";

export const NavbarLinks = [
  {
    name: "About",
    to: "/",
  },
  {
    name: "Services",
    to: "/",
  },
  {
    name: "Projects",
    to: "/",
  },
];

export const Navbar = () => {
  return (
    <header className="absolute left-0 right-0 top-0 z-10 flex items-center justify-between gap-2 py-8 pr-6 pl-6 md:pr-12 md:pl-10">
      <Link href="/">
        <Image src={Logo} alt="Sunnyside agency home" />
      </Link>
      <NavbarDesktopLinks />
      <NavbarMobileMenu />
    </header>
  );
};
