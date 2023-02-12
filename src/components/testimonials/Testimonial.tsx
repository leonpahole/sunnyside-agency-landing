import { TestimonialsModels } from "@/data/testimonials/testimonials.models";
import Image from "next/image";

interface IProps {
  testimonial: TestimonialsModels.Testimonial;
}

export const Testimonial = ({ testimonial }: IProps) => {
  return (
    <div className="flex max-w-[22rem] flex-1 flex-col items-center justify-between">
      <Image
        src={testimonial.person.profilePicture}
        alt=""
        className="h-20 w-20 rounded-full"
      />
      <p className="mt-8 text-desc font-semibold text-gray-300 md:mt-14">
        {testimonial.quote}
      </p>
      <p className="mt-8 font-serif text-xl font-black text-blue md:mt-20">
        {testimonial.person.fullName}
      </p>
      <p className="mt-2 text-sm text-gray-200">
        {testimonial.person.position}
      </p>
    </div>
  );
};
