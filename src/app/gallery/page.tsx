import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { PageHero } from "@/components/shared/PageHero";
import { galleryCategories, galleryImages } from "@/data/gallery";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Gallery",
  description: "Photographs from the General Assemblies, committee meetings and activities of Mevada Welfare Trust, Palanpur.",
  path: "/gallery",
  image: "/gallery/photo-009.jpg",
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Photo Gallery"
        titleGu="ફોટો ગેલેરી"
        breadcrumbs={[{ name: "Gallery", path: "/gallery" }]}
        description="Moments from the Trust's General Assemblies and activities. Select any photo to view it larger."
      />
      <section className="py-14 sm:py-16">
        <div className="container-page">
          <GalleryGrid images={galleryImages} categories={galleryCategories} />
        </div>
      </section>
    </>
  );
}
