import Link from "next/link";

interface IProps {
  href: string;
  children: React.ReactNode;
}

export const NavbarLink = ({ href, children }: IProps) => {
  return (
    <Link href={href} className="font-semibold text-lg">
      {children}
    </Link>
  );
};
