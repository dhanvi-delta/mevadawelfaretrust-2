import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Images } from "lucide-react";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { galleryImages } from "@/data/gallery";

const picks = [
  "/gallery/photo-009.jpg",
  "/gallery/photo-002.jpg",
  "/gallery/photo-005.jpg",
  "/gallery/photo-010.jpg",
  "/gallery/photo-008.jpg",
];

export function GalleryPreview() {
  const images = picks.map((src) => galleryImages.find((g) => g.src === src)!);

  return (
    <section className="relative overflow-hidden bg-mist/60 py-20 sm:py-24" aria-labelledby="gallery-heading">
      {/* Decorative dot pattern background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(#07596a_1px,transparent_1px)] [background-size:20px_20px]"
      />

      <div className="container-page relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-14">
          {/* Left Column: text + button */}
          <Reveal>
            <SectionHeading
              id="gallery-heading"
              eyebrow="Gallery"
              title="Moments from our gatherings"
              description="General assemblies and activities of the Trust over the years."
            />
            <div className="mt-8">
              <ButtonLink
                href="/gallery"
                variant="primary"
                arrow
                icon={<Images className="size-4.5 text-warm-gold" aria-hidden="true" />}
              >
                View all gallery
              </ButtonLink>
            </div>
          </Reveal>

          {/* Right Column: Overlapping rounded photo collage with teal borders, small shadows and dot pattern */}
          <Reveal delay={120} className="relative">
            <div className="grid grid-cols-2 gap-3.5 sm:gap-4.5">
              {/* Featured photo 1 */}
              <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl border-3 border-white bg-pale-teal shadow-lift ring-2 ring-teal/20 transition-all duration-500 hover:scale-[1.02] hover:ring-teal/50">
                <Image
                  src={images[0].src}
                  alt={images[0].alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span lang="gu" className="absolute right-3 bottom-3 left-3 text-xs font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 line-clamp-1">
                  {images[0].caption}
                </span>
              </div>

              {/* Photo 2 */}
              <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl border-3 border-white bg-pale-teal shadow-lift ring-2 ring-teal/20 transition-all duration-500 hover:scale-[1.02] hover:ring-teal/50">
                <Image
                  src={images[1].src}
                  alt={images[1].alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span lang="gu" className="absolute right-3 bottom-3 left-3 text-xs font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 line-clamp-1">
                  {images[1].caption}
                </span>
              </div>

              {/* Photo 3 */}
              <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl border-3 border-white bg-pale-teal shadow-lift ring-2 ring-teal/20 transition-all duration-500 hover:scale-[1.02] hover:ring-teal/50">
                <Image
                  src={images[2].src}
                  alt={images[2].alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span lang="gu" className="absolute right-3 bottom-3 left-3 text-xs font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 line-clamp-1">
                  {images[2].caption}
                </span>
              </div>

              {/* Photo 4 with view link overlay */}
              <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl border-3 border-white bg-pale-teal shadow-lift ring-2 ring-teal/20 transition-all duration-500 hover:scale-[1.02] hover:ring-teal/50">
                <Image
                  src={images[3].src}
                  alt={images[3].alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <Link
                  href="/gallery"
                  className="absolute inset-0 flex flex-col items-center justify-center bg-navy/60 p-3 text-center text-white backdrop-blur-xs transition-opacity duration-300 group-hover:bg-navy/75"
                  aria-label="View more photos in gallery"
                >
                  <span className="grid size-9 place-items-center rounded-full bg-gold text-navy shadow-sm">
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </span>
                  <span className="mt-2 text-xs font-bold tracking-wider uppercase">More Photos</span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
