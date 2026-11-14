import Image from "next/image";
import { Images } from "lucide-react";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { Reveal } from "@/components/shared/Reveal";
import { galleryImages } from "@/data/gallery";

const picks = [
  "/gallery/photo-009.jpg",
  "/gallery/photo-002.jpg",
  "/gallery/photo-005.jpg",
];

export function GalleryPreview() {
  const images = picks.map((src) => galleryImages.find((g) => g.src === src) || galleryImages[0]);

  return (
    <section className="relative overflow-hidden bg-pale-teal/25 py-20 sm:py-24 border-b border-line/60" aria-labelledby="gallery-heading">
      <div className="container-page relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.35fr] lg:gap-14">
          {/* Left Column: text + button */}
          <Reveal>
            <div className="max-w-md">
              <span className="inline-flex items-center gap-2 text-[0.76rem] font-bold tracking-[0.14em] text-gold uppercase">
                <span className="h-0.5 w-6 bg-gold rounded-full" aria-hidden="true" />
                Gallery
              </span>
              <h2
                id="gallery-heading"
                className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl leading-tight"
              >
                Moments from our gatherings
              </h2>
              <p className="mt-4 text-[0.98rem] leading-relaxed text-muted">
                General assemblies and activities of the Trust over the years.
              </p>
              <div className="mt-8">
                <ButtonLink
                  href="/gallery"
                  variant="primary"
                  arrow
                  icon={<Images className="size-4 text-warm-gold" aria-hidden="true" />}
                  className="rounded-full shadow-md shadow-deep-teal/15"
                >
                  View all gallery
                </ButtonLink>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Screenshot-exact overlapping 3-photo collage with dot grid accents */}
          <Reveal delay={120} className="relative">
            {/* Top-right dot pattern */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-6 -right-6 h-28 w-28 opacity-40 [background-image:radial-gradient(#078C91_2px,transparent_2px)] [background-size:12px_12px]"
            />
            {/* Bottom-left dot pattern */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-6 -left-6 h-28 w-28 opacity-40 [background-image:radial-gradient(#078C91_2px,transparent_2px)] [background-size:12px_12px]"
            />

            <div className="relative grid grid-cols-12 gap-3.5 sm:gap-4.5 items-center">
              {/* Main larger photo on the left (spanning 7 cols) */}
              <div className="col-span-7 group relative aspect-[4/4.2] overflow-hidden rounded-[1.5rem] border-3 border-white bg-pale-teal shadow-lift ring-1 ring-teal/20 transition-all duration-500 hover:scale-[1.02] hover:ring-teal/40">
                <Image
                  src={images[0].src}
                  alt={images[0].alt}
                  fill
                  sizes="(min-width: 1024px) 30vw, 60vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span lang="gu" className="absolute right-3.5 bottom-3.5 left-3.5 text-xs font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 line-clamp-1">
                  {images[0].caption}
                </span>
              </div>

              {/* Two stacked photos on the right (spanning 5 cols) */}
              <div className="col-span-5 flex flex-col gap-3.5 sm:gap-4.5">
                {/* Photo 2 */}
                <div className="group relative aspect-[4/3] overflow-hidden rounded-[1.25rem] border-3 border-white bg-pale-teal shadow-lift ring-1 ring-teal/20 transition-all duration-500 hover:scale-[1.02] hover:ring-teal/40">
                  <Image
                    src={images[1].src}
                    alt={images[1].alt}
                    fill
                    sizes="(min-width: 1024px) 20vw, 40vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span lang="gu" className="absolute right-2.5 bottom-2.5 left-2.5 text-[0.72rem] font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 line-clamp-1">
                    {images[1].caption}
                  </span>
                </div>

                {/* Photo 3 */}
                <div className="group relative aspect-[4/3] overflow-hidden rounded-[1.25rem] border-3 border-white bg-pale-teal shadow-lift ring-1 ring-teal/20 transition-all duration-500 hover:scale-[1.02] hover:ring-teal/40">
                  <Image
                    src={images[2].src}
                    alt={images[2].alt}
                    fill
                    sizes="(min-width: 1024px) 20vw, 40vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span lang="gu" className="absolute right-2.5 bottom-2.5 left-2.5 text-[0.72rem] font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 line-clamp-1">
                    {images[2].caption}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
