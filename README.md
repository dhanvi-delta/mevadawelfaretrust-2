# Mevada Welfare Trust — Website

Redesigned website for **Shree Mevada Suthar Samaj Welfare Trust, Palanpur**
(શ્રી મેવાડા સુથાર સમાજ વેલફેર ટ્રસ્ટ, પાલનપુર · Reg. No. F/1779, B.K., 31/07/2002).

Built with **Next.js 16 (App Router, Cache Components)**, **React 19**, **TypeScript**, **Tailwind CSS v4** and **Lucide** icons.
Every page is statically prerendered; only `/api/contact` runs on the server.

## Getting started

```bash
npm install
cp .env.example .env.local   # optional: SMTP for the contact form
npm run dev                  # http://localhost:3000
npm run build && npm start   # production
npm run lint
```

## Pages

| Route | Content (source on old site) |
| --- | --- |
| `/` | Hero, about, purpose, activities, verified stats, office bearers, notices, resources, gallery, contact CTA |
| `/about` | Purpose (હેતુ), registration, letterhead, how the scheme works, entry-fee table, application rules (`AboutUs.html`) |
| `/vision-mission` | Purpose and principles quoted from the scheme rules; placeholder for a formal vision statement (not published by the Trust) |
| `/trustees` | 6 office bearers with photos + searchable list of 23 executive members, 2 internal auditors, 12 advisors (`Executivegroup.html`) |
| `/welfare-schemes` | Full Social Security Scheme rules with table of contents, printable (`AboutUs.html`) |
| `/members` | Member-detail message, CRM portal, address-change contacts, member responsibilities (`index.aspx`; `MemberList.aspx` returned a server error) |
| `/death-members` | Deceased-member counts per notice period, contribution lookup by member number, slab tables, claim rules |
| `/collection-centers` | 25 collection centres in 12 places — search, city filter, pagination (`CollectionCenter.html`) |
| `/notices`, `/notices/[slug]` | June-2022 and June-2020 death-aid notices + member update, searchable/filterable, printable (`index.html`, `index.aspx`) |
| `/downloads` | Resource library: printable rules/notices/directories, office forms, CRM portal |
| `/gallery` | 10 original photos with category filter and keyboard-accessible lightbox (`gallery.html`; `006.JPG` no longer exists on the old server) |
| `/contact` | Office address, phone, e-mail, address-change contacts, Google Map, validated contact form (`ContactUs.html`) |

Old URLs (`/AboutUs.html`, `/Executivegroup.html`, `/CollectionCenter.html`, `/gallery.html`, `/ContactUs.html`, `/MemberList.aspx`, `/index.aspx`) permanently redirect to the new routes (see `next.config.ts`).

The external **CRM / online payment portal** (`https://crm.mevadawelfaretrust.com/`, "Collection Chart") is linked, never re-implemented.

## Content rules

All organisation content lives in `src/data/` and is transcribed **verbatim** from the original website (Gujarati text, including original spellings and dates, is unchanged). Nothing was invented:

- The "350 / 150 / 200" counters on the old homepage were leftovers from a purchased template and were **not** carried over.
- Statistics on the homepage are only figures traceable to published content (registration year, highest allotted member number, number of collection centres, committee size).
- Where the old site had no content (vision statement, PDF forms, a name-wise deceased-member list) the new site says so clearly instead of filling it in.

### Editing content

| To change | Edit |
| --- | --- |
| Address, phone, e-mail, CRM URL | `src/data/content.ts` |
| Committee members / photos | `src/data/trustees.ts`, `public/images/trustees/` |
| Scheme rules and fees | `src/data/schemes.ts` |
| Add a new contribution notice | `src/data/notices.ts` — add an entry with its slab table; mark it `isLatest: true` (and remove the flag from the previous one). The lookup tool, notices page, death-aid page and sitemap update automatically. |
| Collection centres | `src/data/collectionCenters.ts` |
| Gallery | add the image to `public/gallery/` and an entry to `src/data/gallery.ts` |
| Publish a PDF form | put it in `public/documents/` and add an entry with `kind: "file"` to `src/data/documents.ts` |
| Navigation | `src/data/navigation.ts` |

## Contact form

`POST /api/contact` validates input (shared rules in `src/lib/contactValidation.ts`, also used client-side) and sends the enquiry by SMTP using the variables in `.env.example`. If SMTP is not configured the API answers `503` and the form offers a pre-filled "Send via e-mail app" fallback, so no message is silently lost. A honeypot field filters simple bots.

## Project structure

```
public/            images/ (letterhead, trustees), logo/, gallery/, documents/, icons/
src/app/           one folder per route + layout, sitemap.ts, robots.ts, manifest.ts, api/contact
src/components/    layout/ (Header, Navigation, MobileMenu, Footer, TopBar, Logo)
                   home/ (homepage sections) · trustees/ · schemes/ · gallery/ · downloads/
                   shared/ (PageHero, Reveal, Counter, list controls, notice/contribution components, ContactForm)
src/data/          all site content (typed)
src/hooks/         useInView, usePagination
src/lib/           utils (Gujarati digit handling, search), seo (metadata, JSON-LD), contact validation
src/types/         shared TypeScript interfaces
```

## Design system

- Colours (`src/app/globals.css`): deep teal `#145B59` primary, emerald `#239B79`, saffron `#F09030` sampled from the Trust's hands logo, off-white `#FAFAF7`, mint `#EAF5F0`, charcoal `#202C2B`.
- Type: Plus Jakarta Sans (Latin) + Noto Sans Gujarati via `next/font`; all Gujarati text is marked `lang="gu"` for correct font, line height and screen-reader pronunciation.
- Light theme only; animations are CSS-only and disabled under `prefers-reduced-motion`.
- Printing: every page has print styles; rules, notices and directories have a "Print / Save PDF" button.

## SEO & accessibility

Per-page titles, descriptions, canonical URLs, Open Graph/Twitter cards, `sitemap.xml`, `robots.txt`, web manifest, NGO and breadcrumb JSON-LD. Skip link, visible focus rings, keyboard-operable dropdowns/menu/lightbox, labelled form fields with inline errors, live-region result counts.
