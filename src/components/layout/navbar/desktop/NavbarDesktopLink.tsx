import Link from "next/link";

interface IProps {
  href: string;
  children: React.ReactNode;
}

export const NavbarDesktopLink = ({ href, children }: IProps) => {
  return (
    <Link href={href} className="text-lg font-semibold">
      {children}
    </Link>
  );
};
