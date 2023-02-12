import { StaticImageData } from "next/image";

export namespace ImageListModels {
  export interface Item {
    src: StaticImageData;
    alt: string;
  }
}
