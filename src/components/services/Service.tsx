import { ServicesModels } from "@/data/services/services.models";
import Link from "next/link";

interface IProps {
  service: ServicesModels.Service;
}

export const Service = ({ service }: IProps) => {
  return (
    <div
      className={`flex 
      ${service.image ? "items-end" : "items-center"} 
      ${service.image && !service.content ? "h-[23.5rem] lg:h-auto " : ""} 
      ${service.image && service.content ? "h-[37.5rem] lg:h-auto" : ""} 
      ${service.priorityOrderMobile ? "order-first lg:order-none" : ""}
      justify-center bg-cover bg-center bg-no-repeat`}
      style={{
        backgroundImage: service.image
          ? `url(${service.image?.src.src})`
          : undefined,
      }}
    >
      {service.content && (
        <div
          className={` ${
            service.image
              ? "max-w-[23rem] px-3 pb-14 text-center"
              : "max-w-[40rem] py-16 px-6 text-center lg:max-w-[28rem] lg:py-40 lg:pl-[5.8%] lg:pr-[2%] lg:text-start"
          } `}
        >
          <ServiceContent service={service} />
        </div>
      )}
    </div>
  );
};

const ServiceContent = ({ service }: { service: ServicesModels.Service }) => {
  const { content } = service;

  if (!content) {
    return null;
  }

  return (
    <>
      <h2
        className={`font-serif font-black ${
          service.image ? `text-h2-alt opacity-60` : `text-h2 text-blue`
        }`}
      >
        {content.heading}
      </h2>
      <p
        className={`mt-8 ${
          service.image ? "text-desc-alt opacity-60" : "text-desc text-gray-100"
        } font-semibold`}
      >
        {content.description}
      </p>
      {content.link && <ServiceLink {...content.link} />}
    </>
  );
};

const ServiceLink = (
  link: NonNullable<NonNullable<ServicesModels.Service["content"]>["link"]>
) => {
  const textLinkColorMap: Record<typeof link.hoverColor, string> = {
    red: "bg-link-red",
    yellow: "bg-link-yellow",
  };

  return (
    <div className="group relative mt-10 inline-block">
      <Link
        className="relative z-10 font-serif text-link font-black uppercase"
        href={link.href}
      >
        Learn more
      </Link>
      <div
        className={`absolute inset-x-0 bottom-0  h-2.5 rounded-3xl opacity-25 group-hover:opacity-100 ${
          textLinkColorMap[link.hoverColor]
        }`}
      />
    </div>
  );
};
