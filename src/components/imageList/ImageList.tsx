import { ImageListModels } from "@/data/imageList/imageList.models";
import Image from "next/image";

interface IProps {
  images: ImageListModels.Item[];
}

export const ImageList = ({ images }: IProps) => {
  return (
    <div className="grid auto-rows-fr grid-cols-2 md:grid-cols-4">
      {images.map((img, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <Image src={img.src} alt={img.alt} key={i} className="object-cover" />
      ))}
    </div>
  );
};
