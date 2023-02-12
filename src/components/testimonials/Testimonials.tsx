import { Testimonial } from "@/components/testimonials/Testimonial";
import { TestimonialsModels } from "@/data/testimonials/testimonials.models";

interface IProps {
  testimonials: TestimonialsModels.Testimonial[];
}

export const Testimonials = ({ testimonials }: IProps) => {
  return (
    <div className="px-6 pt-16 pb-20 md:pt-40 md:pb-40">
      <h2 className="mx-auto text-center font-serif text-base font-black uppercase tracking-wider text-gray-200 md:text-xl">
        Client testimonials
      </h2>
      <div className="mt-16 flex flex-col items-center justify-center gap-16 text-center md:mt-20 md:flex-row md:items-stretch md:gap-8">
        {testimonials.map((testimonial, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <Testimonial testimonial={testimonial} key={i} />
        ))}
      </div>
    </div>
  );
};
