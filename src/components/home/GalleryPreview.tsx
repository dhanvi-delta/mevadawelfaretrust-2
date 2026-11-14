import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { galleryImages } from "@/data/gallery";

const picks = ["/gallery/photo-009.jpg", "/gallery/photo-002.jpg", "/gallery/photo-005.jpg", "/gallery/photo-010.jpg", "/gallery/photo-008.jpg"];

export function GalleryPreview() {
  const images = picks.map((src) => galleryImages.find((g) => g.src === src)!);
  return (
    <section className="bg-mint/50 py-20 sm:py-24" aria-labelledby="gallery-heading">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            id="gallery-heading"
            eyebrow="Gallery"
            title="Moments from our gatherings"
            description="General assemblies and activities of the Trust over the years."
          />
          <ButtonLink href="/gallery" className="self-start md:self-auto">
            View all gallery
          </ButtonLink>
        </div>
        <div className="mt-12 grid auto-rows-[10rem] grid-cols-2 gap-3 sm:auto-rows-[12rem] sm:gap-4 lg:grid-cols-4">
          {images.map((img, i) => (
            <Reveal
              key={img.src}
              delay={i * 60}
              className={i === 0 ? "col-span-2 row-span-2" : i === 3 ? "col-span-2 lg:col-span-1" : undefined}
            >
              <Link
                href="/gallery"
                className="group relative block h-full overflow-hidden rounded-2xl bg-brand-100 shadow-soft"
                aria-label={`${img.alt} — open gallery`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes={i === 0 ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 50vw"}
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-brand-900/70 via-brand-900/0 to-transparent opacity-80 transition group-hover:opacity-100" />
                <span lang="gu" className="absolute right-3 bottom-3 left-3 flex items-center justify-between gap-2 text-sm font-semibold text-white">
                  <span className="line-clamp-1">{img.caption}</span>
                  <ArrowRight className="size-4 shrink-0 opacity-0 transition group-hover:opacity-100" aria-hidden="true" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
