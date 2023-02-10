import Image from "next/image";
import Link from "next/link";
import Logo from "public/images/logo.svg";
import { NavbarContactLink } from "./NavbarContactLink";
import { NavbarLink } from "./NavbarLink";

const Links = [
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
    <header className="z-10 absolute left-0 right-0 top-0 py-8 pr-12 pl-10 flex items-center justify-between gap-2">
      <Link href="/">
        <Image src={Logo} alt="Sunnyside agency home" />
      </Link>
      <div className="text-white flex gap-12 items-center">
        {Links.map((link) => (
          <NavbarLink href={link.to} key={link.name}>
            {link.name}
          </NavbarLink>
        ))}
        <NavbarContactLink />
      </div>
    </header>
  );
};
