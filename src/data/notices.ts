import type { Notice } from "@/types";
import { memberUpdateMessageGu, site } from "./content";

/**
 * Notices published on the original website. Text preserved verbatim
 * (including dates exactly as printed in the original notice).
 */
export const notices: Notice[] = [
  {
    slug: "death-aid-contribution-june-2022",
    title: "જુન-૨૦૨૨ સુઘીના મૃત્યુ સહાય ફાળાની રકમ જમા કરાવવા બાબત",
    titleEn: "Death-aid contribution due for the period up to June 2022",
    date: "2022-08-15",
    dateLabel: "Due by 15/08/2022 · late fee till 15/09/2022",
    period: "January – June 2022",
    category: "death-aid",
    salutation: "સભાસદશ્રી",
    body: [
      "સવિનય જણાવવાનું કે, શ્રી મેવાડા સુથાર સમાજ વેલફેર ટ્રસ્ટ દ્વારા સંચાલીત સામાજીક સુરક્ષા યોજનામાં તા.૧/૧/૨૦૨૨ થી તા.૩૦/૦૬/૨૦૨૧ સુઘીમાં કુલ ૨૫ સભાસદોના અવસાન થયેલ છે. કારોબારી કમિટીએ કરેલ ઠરાવ મુજબ મૃત્યુ સહાય ફાળા પેટે નીચે જણાવેલ રકમ આ૫શ્રીએ તા.૧૫/૦૮/૨૦૨૨ સુધીમાં ફરજીયાત જમા કરાવવાની રહેશે તે ૫છી રૂા.૫૦/- લેટ ફી સાથે મોડામાં મોડા તા.૧૫/૦૯/૨૦૨૨ સુઘી રકમ સ્વીકારવામાં આવશે. તા.૧૫/૦૯/૨૦૨૨ સુધીમાં જે સભાસદ ફાળાની રકમ જમા કરાવશે નહિ તેમનું સભ્ય૫દ યોજનાના નિયમાનુંસાર આપોઆપ રદ થશે. મૃત્યુ સહાય ફાળાની રકમ આપને અનુકુળ કોઈપણ કલેકશન સેન્ટર પર અથવા https://crm.mevadawelfaretrust.com ૫રથી ઓનલાઈન જમા કરાવી શકાશે.",
    ],
    deceasedCount: 25,
    table: {
      caption: "મૃત્યુ સહાય ફાળાની ભરવાની થતી રકમ (મે-૨૦૨૧ સુઘી)",
      hasSerial: true,
      slabs: [
        { serial: "૧", rangeLabel: "0001 થી 7153", from: 1, to: 7153, amountLabel: "રૂ. 1250.00", amount: 1250 },
        { serial: "૨", rangeLabel: "7154 થી 7157", from: 7154, to: 7157, amountLabel: "રૂ. 1000.00", amount: 1000 },
        { serial: "૩", rangeLabel: "7158 થી 7167", from: 7158, to: 7167, amountLabel: "રૂ. 750.00", amount: 750 },
        { serial: "૪", rangeLabel: "7168 થી 7171", from: 7168, to: 7171, amountLabel: "રૂ. 500.00", amount: 500 },
        { serial: "૫", rangeLabel: "7172 થી 7185", from: 7172, to: 7185, amountLabel: "રૂ. 350.00", amount: 350 },
        { serial: "૬", rangeLabel: "7186 થી 7187", from: 7186, to: 7187, amountLabel: "રૂ. 300.00", amount: 300 },
      ],
    },
    signatories: [
      { name: "શ્રી ડો. શંકરભાઈ કે. મેવાડા", role: "પ્રમુખ" },
      { name: "શ્રી વિનુભાઇ એમ. મીસ્ત્રી", role: "મંત્રી" },
    ],
    link: { label: "ઓનલાઇન પેમેંટ કરવા અહીં ક્લિક કરો", href: site.crmUrl },
    isLatest: true,
  },
  {
    slug: "member-details-update-crm",
    title: "Welfare Trust Member Detail",
    titleEn: "Update your member details on the Trust's CRM software",
    date: "2020-08-31",
    dateLabel: "Published alongside the June-2020 notice",
    period: "Member records",
    category: "member-update",
    salutation: memberUpdateMessageGu.salutation,
    body: [memberUpdateMessageGu.body],
    link: { label: memberUpdateMessageGu.linkLabel, href: site.crmUrl },
  },
  {
    slug: "death-aid-contribution-june-2020",
    title: "જુન-૨૦૨૦ સુધીના મૃત્યુ સહાય ફાળાની રકમ જમા કરાવવા બાબત",
    titleEn: "Death-aid contribution due for the period up to June 2020",
    date: "2020-08-31",
    dateLabel: "Due by 31/08/2020 · late fee till 30/09/2020",
    period: "January – June 2020",
    category: "death-aid",
    salutation: "સભાસદશ્રી",
    body: [
      "શસવિનય સહ જણાવવાનું કે, શ્રી મેવાડા સુથાર સમાજ વેલફેર ટ્રસ્ટ દ્વારા સંચાલીત સામાજીક સુરક્ષામાં તા.૦૧/૦૧/૨૦૨૦ થી તા.૩૦/૦૬/૨૦૨૦ સુધીમાં કુલ ૨૪ સભાસદોના સ્વર્ગવાસ થયેલ છે, જેમાં સંસ્થાના નિયમ મુજબ મૃત્યુ સહાય ફાળા પેટે નીચે જણાવેલ રકમ આ૫શ્રીએ તા.૩૧/૦૮/૨૦૨૦ સુધીમાં ફરજીયાત જમા કરાવવાની રહેશે તે ૫છી રૂા. ૫૦/- લેટફી સાથે મોડામાં મોડા તા.૩૦/૦૯/૨૦૨૦ સુધી રકમ સ્વિકારવામાં આવશે. તા.૩૦/૦૯/૨૦૨૦ સુધી મૃત્યુ ફાળાની રકમ જમા ન કરાવનાર સભાસદશ્રીનું સભ્ય૫દ સંસ્થાના નિયમાનુંસાર આપોઆપ રદ થશે.",
    ],
    deceasedCount: 24,
    table: {
      hasSerial: false,
      slabs: [
        { rangeLabel: "૦૦૦૧ થી ૬૮૬૭", from: 1, to: 6867, amountLabel: "રૂ. ૧૨૦૦.૦૦", amount: 1200 },
        { rangeLabel: "૬૮૬૮ થી ૬૮૮૯", from: 6868, to: 6889, amountLabel: "રૂ. ૯૦૦.૦૦", amount: 900 },
        { rangeLabel: "૬૮૯૦ થી ૬૯૧૪", from: 6890, to: 6914, amountLabel: "રૂ. ૭૦૦.૦૦", amount: 700 },
        { rangeLabel: "૬૯૧૫ થી ૬૯૧૮", from: 6915, to: 6918, amountLabel: "રૂ. ૪૦૦.૦૦", amount: 400 },
        { rangeLabel: "૬૯૧૯ થી ૬૯૨૦", from: 6919, to: 6920, amountLabel: "રૂ. ૨૫૦.૦૦", amount: 250 },
        { rangeLabel: "૬૯૨૧ થી ૬૯૨૮", from: 6921, to: 6928, amountLabel: "રૂ. ૧૦૦.૦૦", amount: 100 },
      ],
    },
    signatories: [
      { name: "શ્રી ડો. શંકરભાઈ કે. મેવાડા", role: "પ્રમુખ" },
      { name: "શ્રી વિનુભાઇ એમ. મીસ્ત્રી", role: "મંત્રી" },
    ],
  },
];

export const sortedNotices = [...notices].sort((a, b) => b.date.localeCompare(a.date));
export const latestNotice = notices.find((n) => n.isLatest) ?? sortedNotices[0];
export const deathAidNotices = sortedNotices.filter((n) => n.category === "death-aid");

export function getNotice(slug: string) {
  return notices.find((n) => n.slug === slug);
}
