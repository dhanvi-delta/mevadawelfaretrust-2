import { ArrowUpRight, Building2, Phone } from "lucide-react";
import { CollectionCentreDirectory } from "@/components/shared/CollectionCentreDirectory";
import { PageHero } from "@/components/shared/PageHero";
import { PrintButton } from "@/components/shared/PrintButton";
import { collectionCentres, collectionCities } from "@/data/collectionCenters";
import { contact, site } from "@/data/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Collection Centres",
  description:
    "25 authorised collection centres of Mevada Welfare Trust in Palanpur, Ahmedabad, Mumbai, Surat, Sidhpur, Vadodara, Chhapi, Vadgam, Deesa, Unjha, Jalotra and Memadpur.",
  path: "/collection-centers",
});

export default function CollectionCentresPage() {
  return (
    <>
      <PageHero
        eyebrow="Pay your contribution"
        title="Collection Centres"
        titleGu="કલેકશન સેન્ટર"
        breadcrumbs={[
          { name: "Members", path: "/members" },
          { name: "Collection Centres", path: "/collection-centers" },
        ]}
        description={`Deposit your death-aid contribution at any of the ${collectionCentres.length} authorised centres across ${collectionCities.length} cities and villages — or pay online.`}
        aside={
          <div className="no-print hidden w-72 rounded-3xl bg-white p-6 shadow-lift ring-1 ring-line lg:block">
            <span className="grid size-11 place-items-center rounded-xl bg-saffron-50 text-saffron-600">
              <Building2 className="size-5" aria-hidden="true" />
            </span>
            <p className="mt-4 text-sm font-bold">Main office centre</p>
            <p lang="gu" className="mt-1 text-sm text-muted">
              વેલફેર ટ્રસ્ટની ઓફીસ, ગુરૂનાનક ચોક, પાલનપુર
            </p>
            <a href={contact.phoneHref} className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700">
              <Phone className="size-4" aria-hidden="true" /> {contact.phoneDisplayEn}
            </a>
          </div>
        }
      >
        <a
          href={site.crmUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 items-center gap-2 rounded-full bg-saffron-500 px-5 font-semibold text-brand-900 transition hover:bg-saffron-400"
        >
          Collection Chart / Pay online <ArrowUpRight className="size-4" aria-hidden="true" />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        <PrintButton label="Print directory" />
      </PageHero>

      <section className="py-14 sm:py-16">
        <div className="container-page">
          <CollectionCentreDirectory centres={collectionCentres} cities={collectionCities} />
        </div>
      </section>
    </>
  );
}
