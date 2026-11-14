import type { Metadata } from "next";
import { AboutPreview } from "@/components/home/AboutPreview";
import { Activities } from "@/components/home/Activities";
import { ContactCTA } from "@/components/home/ContactCTA";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { Hero } from "@/components/home/Hero";
import { MissionCards } from "@/components/home/MissionCards";
import { NoticesPreview } from "@/components/home/NoticesPreview";
import { ResourcesPreview } from "@/components/home/ResourcesPreview";
import { Stats } from "@/components/home/Stats";
import { TrusteesPreview } from "@/components/home/TrusteesPreview";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <MissionCards />
      <Activities />
      <Stats />
      <TrusteesPreview />
      <NoticesPreview />
      <ResourcesPreview />
      <GalleryPreview />
      <ContactCTA />
    </>
  );
}
