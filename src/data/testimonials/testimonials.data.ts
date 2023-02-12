import { TestimonialsModels } from "@/data/testimonials/testimonials.models";
import ImageEmily from "public/images/image-emily.jpg";
import ImageJennie from "public/images/image-jennie.jpg";
import ImageThomas from "public/images/image-thomas.jpg";

export namespace TestimonialsData {
  export const Testimonials: TestimonialsModels.Testimonial[] = [
    {
      quote:
        "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
      person: {
        fullName: "Emily R.",
        position: "Marketing Director",
        profilePicture: ImageEmily,
      },
    },
    {
      quote:
        "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
      person: {
        fullName: "Thomas S.",
        position: "Chief Operating Officer",
        profilePicture: ImageThomas,
      },
    },
    {
      quote:
        "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
      person: {
        fullName: "Jennie F.",
        position: "Business Owner",
        profilePicture: ImageJennie,
      },
    },
  ];
}
