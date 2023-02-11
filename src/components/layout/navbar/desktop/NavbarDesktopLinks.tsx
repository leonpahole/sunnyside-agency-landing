import { NavbarDesktopLink } from "@/components/layout/navbar/desktop/NavbarDesktopLink";
import { NavbarLinks } from "@/components/layout/navbar/Navbar";
import { NavbarContactLink } from "@/components/layout/navbar/NavbarContactLink";

export const NavbarDesktopLinks = () => {
  return (
    <div className="hidden items-center gap-12 text-white md:flex">
      {NavbarLinks.map((link) => (
        <NavbarDesktopLink href={link.to} key={link.name}>
          {link.name}
        </NavbarDesktopLink>
      ))}
      <NavbarContactLink />
    </div>
  );
};
