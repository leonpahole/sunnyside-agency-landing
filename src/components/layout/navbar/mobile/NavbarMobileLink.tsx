import Link from "next/link";

interface IProps {
  href: string;
  children: React.ReactNode;
}

export const NavbarMobileLink = ({ href, children }: IProps) => {
  return (
    <Link href={href} className="text-xl font-semibold text-gray-100">
      {children}
    </Link>
  );
};
