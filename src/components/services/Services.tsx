import { Service } from "@/components/services/Service";
import { ServicesModels } from "@/data/services/services.models";

interface IProps {
  services: ServicesModels.Service[];
}

export const Services = ({ services }: IProps) => {
  return (
    <div className="grid grid-cols-1 lg:auto-rows-fr lg:grid-cols-2">
      {services.map((service, i) => (
        /* eslint-disable-next-line react/no-array-index-key */
        <Service key={i} service={service} />
      ))}
    </div>
  );
};
