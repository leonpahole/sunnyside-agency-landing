import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/layout/navbar/Navbar";
import { Services } from "@/components/services/Services";
import { Testimonials } from "@/components/testimonials/Testimonials";
import { ServicesData } from "@/data/services/services.data";
import { TestimonialsData } from "@/data/testimonials/testimonials.data";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sunnyside agency landing</title>
        <meta
          name="description"
          content="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
        />
      </Head>
      <Navbar />
      <Hero />
      <Services services={ServicesData.Services} />
      <Testimonials testimonials={TestimonialsData.Testimonials} />
    </>
  );
}
