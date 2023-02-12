import ImageHeader from "public/images/desktop/image-header.jpg";
import IconArrowDown from "public/images/icon-arrow-down.svg";
import Image from "next/image";
import Link from "next/link";
import { MainContentId } from "@/pages";

export const Hero = () => {
  return (
    <div className="relative z-0">
      <div className="relative h-screen overflow-hidden">
        <Image
          alt=""
          src={ImageHeader}
          sizes="100vw"
          fill
          className="object-cover"
        />
      </div>
      <h1 className="absolute top-[26%] w-full px-1 text-center font-serif text-4xl font-black uppercase tracking-wider text-white md:top-[24%] md:text-6xl">
        We are creatives
      </h1>
      <div className="absolute inset-x-0 top-[45%] z-10 flex justify-center">
        <Link href={`#${MainContentId}`}>
          <Image alt="Scroll down to the content" src={IconArrowDown} />
        </Link>
      </div>
    </div>
  );
};
