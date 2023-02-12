import { StaticImageData } from "next/image";

export namespace TestimonialsModels {
  export interface Testimonial {
    quote: string;
    person: {
      profilePicture: StaticImageData;
      fullName: string;
      position: string;
    };
  }
}
