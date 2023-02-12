import { ServicesModels } from "@/data/services/services.models";
import ImageTransform from "public/images/desktop/image-transform.jpg";
import ImageStandOut from "public/images/desktop/image-stand-out.jpg";
import ImageGraphicDesign from "public/images/desktop/image-graphic-design.jpg";
import ImagePhotography from "public/images/desktop/image-photography.jpg";

export namespace ServicesData {
  export const Services: ServicesModels.Service[] = [
    {
      content: {
        heading: "Transform your brand",
        description:
          "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
        link: {
          href: "/",
          text: "Learn more",
          hoverColor: "yellow",
        },
      },
    },
    {
      image: {
        src: ImageTransform,
        alt: "",
      },
      priorityOrderMobile: true,
    },
    {
      image: {
        src: ImageStandOut,
        alt: "",
      },
    },
    {
      content: {
        heading: "Stand out to the right audience",
        description:
          "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. ",
        link: {
          href: "/",
          text: "Learn more",
          hoverColor: "red",
        },
      },
    },
    {
      content: {
        heading: "Graphic Design",
        description:
          "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.",
      },
      image: {
        src: ImageGraphicDesign,
        alt: "",
      },
    },
    {
      content: {
        heading: "Photography",
        description:
          "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",
      },
      image: {
        src: ImagePhotography,
        alt: "",
      },
    },
  ];
}
