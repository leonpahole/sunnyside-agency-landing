import ImageGalleryCone from "public/images/desktop/image-gallery-cone.jpg";
import ImageGalleryOrange from "public/images/desktop/image-gallery-orange.jpg";
import ImageGallerySugarcubes from "public/images/desktop/image-gallery-sugarcubes.jpg";
import ImageGalleryMilkbottles from "public/images/desktop/image-gallery-milkbottles.jpg";
import { ImageListModels } from "@/data/imageList/imageList.models";

export namespace ImageListData {
  export const Items: ImageListModels.Item[] = [
    {
      src: ImageGalleryMilkbottles,
      alt: "",
    },
    {
      src: ImageGalleryOrange,
      alt: "",
    },
    {
      src: ImageGalleryCone,
      alt: "",
    },
    {
      src: ImageGallerySugarcubes,
      alt: "",
    },
  ];
}
