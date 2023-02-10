import ImageHeader from "public/images/desktop/image-header.jpg";
import IconArrowDown from "public/images/icon-arrow-down.svg";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="relative z-0">
      <Image alt="" src={ImageHeader} sizes="100vw" />
      <h1 className="text-center px-1 w-full font-serif uppercase text-6xl text-white absolute z-10 top-[24%] font-black tracking-wider">
        We are creatives
      </h1>
      <button
        type="button"
        className="mx-auto absolute z-10 top-[45%] inset-x-0"
      >
        <Image alt="Scroll down to the content" src={IconArrowDown} />
      </button>
    </div>
  );
};
