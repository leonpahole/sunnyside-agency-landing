import { StaticImageData } from "next/image";

export namespace ServicesModels {
  interface Image {
    src: StaticImageData;
    alt: string;
  }

  interface Content {
    heading: string;
    description: string;
    link?: Link;
  }

  interface Link {
    text: string;
    href: string;
    hoverColor: "red" | "yellow";
  }

  export interface Service {
    image?: Image;
    content?: Content;
    priorityOrderMobile?: boolean;
  }
}
