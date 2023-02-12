import { NavbarLinks } from "@/components/layout/navbar/Navbar";
import Link from "next/link";

export const FooterLinks = () => {
  return (
    <nav className="mt-10 flex flex-col items-center gap-8 md:flex-row md:gap-14">
      {NavbarLinks.map((link) => (
        <Link
          href={link.to}
          className="text-lg font-semibold text-green-100 hover:text-white"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};
