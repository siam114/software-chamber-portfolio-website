import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import ProcessSection from "@/components/ProcessSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import StackPowersSection from "@/components/StackPowersSection";
import HomePage from "@/components/HomePage";
import FaqSection from "@/components/FaqSection";
import TestimonialSection from "@/components/TestimonialSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
  <>
    <main className="">
      {/* <HomePage/> */}
      <HeroSection/>
      <StatsSection/>
      <ProcessSection/>
      <WhyChooseSection/>
      <StackPowersSection/>
      <FaqSection/>
      <TestimonialSection/>
      <ContactSection/>
      <FooterSection/>
    </main>
   </>
  );
}
