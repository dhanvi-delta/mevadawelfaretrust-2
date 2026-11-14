import type { GalleryImage } from "@/types";

/**
 * Photographs from the original gallery (img/Gallery/*) and site imagery.
 * Captions describe only what is visible in each photograph / its banner.
 * (Original 006.JPG no longer exists on the old server and is omitted.)
 */
export const galleryImages: GalleryImage[] = [
  {
    src: "/gallery/photo-007.jpg",
    width: 1784,
    height: 1180,
    alt: "Trust dignitaries seated on stage below the welcome banner of the 6th General Assembly, 2013",
    caption: "છઠ્ઠી સાધારણ સભા — 2013",
    category: "assembly",
  },
  {
    src: "/gallery/photo-001.jpg",
    width: 700,
    height: 500,
    alt: "A speaker addresses the gathering from a podium bearing the Trust's hands logo",
    caption: "સાધારણ સભા સંબોધન",
    category: "assembly",
  },
  {
    src: "/gallery/photo-009.jpg",
    width: 700,
    height: 500,
    alt: "Large gathering of community members seated under a decorated pandal",
    caption: "સમાજના સભાસદો — સાધારણ સભા",
    category: "assembly",
  },
  {
    src: "/gallery/photo-002.jpg",
    width: 700,
    height: 500,
    alt: "Guests seated at the dais beneath the Trust's welcome banner",
    caption: "મંચ ઉપર મહાનુભાવો",
    category: "assembly",
  },
  {
    src: "/gallery/photo-003.jpg",
    width: 700,
    height: 500,
    alt: "Committee members seated in front of a large audience during an assembly",
    caption: "સભામાં ઉપસ્થિત સભાસદો",
    category: "assembly",
  },
  {
    src: "/gallery/photo-010.jpg",
    width: 700,
    height: 500,
    alt: "A speaker at the podium during the 4th General Assembly held on 18-11-2007",
    caption: "ચતુર્થ સાધારણ સભા — 18-11-2007",
    category: "assembly",
  },
  {
    src: "/gallery/photo-005.jpg",
    width: 700,
    height: 500,
    alt: "Group photograph of Trust committee members in front of the Trust banner",
    caption: "કારોબારી સમિતિ — સમૂહ તસવીર",
    category: "committee",
  },
  {
    src: "/gallery/photo-004.jpg",
    width: 700,
    height: 500,
    alt: "Committee members reviewing and signing documents at a table",
    caption: "કારોબારી સભ્યો — કાર્યવાહી",
    category: "committee",
  },
  {
    src: "/gallery/photo-008.jpg",
    width: 700,
    height: 500,
    alt: "Members standing beside the Trust's year-wise membership and death-aid information display boards",
    caption: "સભ્ય સંખ્યા તથા મૃત્યુ સહાયની વિગત — માહિતી પ્રદર્શન",
    category: "activities",
  },
  {
    src: "/gallery/general-assembly-collage.png",
    width: 1700,
    height: 1200,
    alt: "Collage of four photographs from the Trust's general assemblies, including a cultural dance performance",
    caption: "સાધારણ સભાની ઝલક",
    category: "activities",
  },
];

export const galleryCategories: { id: GalleryImage["category"] | "all"; label: string }[] = [
  { id: "all", label: "All photos" },
  { id: "assembly", label: "General Assemblies" },
  { id: "committee", label: "Committee" },
  { id: "activities", label: "Activities & Displays" },
];
