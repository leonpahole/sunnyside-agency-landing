import { NavbarMobileLink } from "@/components/layout/navbar/mobile/NavbarMobileLink";
import { NavbarLinks } from "@/components/layout/navbar/Navbar";
import { NavbarContactLink } from "@/components/layout/navbar/NavbarContactLink";
import Image from "next/image";
import IconHamburger from "public/images/icon-hamburger.svg";
import { useState } from "react";

const MenuPopoverPadding = {
  left: 22,
  right: 24,
  top: 29,
};

const ArrowSize = 24;

export const NavbarMobileMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="d-block relative md:hidden">
      <button type="button" onClick={() => setIsOpen((o) => !o)}>
        <Image src={IconHamburger} alt="Toggle menu" />
      </button>
      <nav
        className={`
         before:content[''] 
         absolute right-0 flex flex-col items-stretch justify-center gap-8 bg-light py-10 px-2 text-center transition-opacity 
         before:absolute before:-top-5 before:right-0 before:h-0 before:w-0 before:border-12 before:border-l-transparent before:border-t-transparent before:border-r-white before:border-b-white 
         ${isOpen ? "block opacity-100" : "hidden opacity-0"}`}
        style={{
          left: `calc(-100vw + ${
            IconHamburger.width +
            MenuPopoverPadding.right +
            MenuPopoverPadding.left
          }px)`,
          top: MenuPopoverPadding.top + IconHamburger.height + ArrowSize,
        }}
      >
        {NavbarLinks.map((link) => (
          <NavbarMobileLink href={link.to}>{link.name}</NavbarMobileLink>
        ))}
        <NavbarContactLink className="self-center" />
      </nav>
    </div>
  );
};
