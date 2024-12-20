import AboutSectionOne from "@/components/About/AboutSectionOne";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";
import Trophy from "@/components/Trophy/Trophy";

export const metadata: Metadata = {
  title: "Repsell Internacional – Líder en Premiaciones y Reconocimientos",
  description:
    "Repsell Internacional es el líder en la venta de trofeos, medallas y reconocimientos personalizados. Innovación en premiaciones y cristales en Costa Rica.",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Trophy />
      <AboutSectionOne />
      <Video />
      <Features />
      <Testimonials />
      <Pricing />
      <Brands />
      <Contact />
    </>
  );
}
