import Link from "next/link";

interface IProps {
  className?: string;
}

export const NavbarContactLink = ({ className }: IProps) => {
  return (
    <Link
      href="/"
      className={`rounded-3xl bg-yellow py-4 px-8 font-serif text-sm font-bold uppercase text-blue md:bg-white md:hover:bg-opacity-25 md:hover:text-white ${className}`}
    >
      Contact
    </Link>
  );
};
