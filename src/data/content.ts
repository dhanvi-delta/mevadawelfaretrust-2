/**
 * Core organisation details. Every value here is taken from the original
 * website (mevadawelfaretrust.com) or its official letterhead image.
 * Do not add facts that are not published by the Trust.
 */
export const site = {
  name: "Shree Mevada Suthar Samaj Welfare Trust, Palanpur",
  shortName: "Mevada Welfare Trust",
  nameGu: "શ્રી મેવાડા સુથાર સમાજ વેલફેર ટ્રસ્ટ, પાલનપુર",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://mevadawelfaretrust.com",
  registration: "Reg. No. F/1779, B.K., 31/07/2002",
  registrationNo: "F/1779, B.K.",
  registeredOn: "31/07/2002",
  foundedYear: 2002,
  description:
    "Shree Mevada Suthar Samaj Welfare Trust, Palanpur runs the Samajik Suraksha Yojana — a social security scheme that supports the heirs of a registered member at the time of the member's passing.",
  crmUrl: "https://crm.mevadawelfaretrust.com/",
  developer: { name: "Delta Infosoft Pvt. Ltd.", url: "http://deltainfosoft.com" },
} as const;

export const contact = {
  officeTitle: "શ્રી મેવાડા સુથાર સમાજ વેલફેર ટ્રસ્ટ, પાલનપુર",
  addressLines: [
    "ગોકુલ ફ્રેકચર એન્ડ ઓર્થોપેડીક હોસ્પીટલ,",
    "રેલ્વે બ્રીજના છેડે, રામલીલા મેદાન રોડ",
    "ગુરૂનાનક ચોક, પાલનપુર",
  ],
  addressEn: "Gokul Fracture & Orthopaedic Hospital, Railway Bridge end, Ramlila Maidan Road, Guru Nanak Chowk, Palanpur",
  /** Address printed on the Trust letterhead */
  letterheadAddress: "C/o. મેવાડા સુથાર છાત્રાલય, ડેરી રોડ, પાલનપુર",
  phoneDisplay: "૦૨૭૪૨ ૨૫૫૭૩૩",
  phoneDisplayEn: "02742 255733",
  phoneHref: "tel:+912742255733",
  email: "info@mevadawelfaretrust.com",
  addressChangeContacts: [
    { name: "મેવાડા રમેશભાઇ મફતલાલ (અમુઢ)", phone: "૯૯૭૯૦ ૫૭૪૧૬", tel: "+919979057416" },
    { name: "મેવાડા હિતેષ પ્રહલાદભાઇ (ટાકરવાડા)", phone: "૯૭૨૭૭ ૯૫૯૧૮", tel: "+919727795918" },
  ],
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.8961513268!2d72.42857710886757!3d24.170348096642055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395ce95e8c544af9%3A0x7acada74996d47b1!2sGokul+Orthopaedic+Hospital!5e0!3m2!1sen!2sin!4v1532762058751",
  mapLink: "https://www.google.com/maps/search/?api=1&query=Gokul+Orthopaedic+Hospital+Palanpur",
} as const;

/** Original "હેતુ" (purpose) paragraph from the About Us page */
export const purposeGu =
  "આ વેલફેર ટ્રસ્ટમાં નોંઘાયેલ કોઇપણ સભાસદનું અવસાન થાય તે સમયે તેમના કુટુંબ ઉપર આવી પડતી જવાબદારીમાં મદદરૂપ થઇ તેમના વારસદારોની આર્થિક સલામતી જળવાય તે હેતુસર આ સામાજીક સુરક્ષા યોજના શરૂ કરવામાં આવી છે.";

/** Original member-detail message (from index.aspx) */
export const memberUpdateMessageGu = {
  salutation: "પ્રિય સાભસદ,",
  body:
    "સોફ્ટવેર માં નવીન સુધારા અમલમાં કરવા માટે, અને વધુ સારી સેવા પુરી પાડવા વેલફેર ટ્રસ્ટ દ્વવારા બનાવેલ સોફ્ટવેરમાં આપનો સભાસદ નંબર અથવા નામ સર્ચ કરી, આપનું લેટેસ્ટ એડ્રેસ, મોબાઈલ નંબર તથા ઇ-મેલ આઈડી અપડેટ કરવા વિનંતી. આ ઉપરાંત વેલફેર ટ્રસ્ટ દ્વારા આગામી મૃત્યુ સહાય ફાળો ભરવા માટે ઓનલાઈન પેમેન્ટની સુવિધા ચાલુ કરવામાં આવનાર છે, જેથી આપ આપનો મૃત્યુ સહાય ફાળો વેલફેર ટ્રસ્ટની વેબસાઈટ પરથી ઓનલાઇન ભરી શકશો અને તેની ડિજિટલ રિશીપટ આપ મેળવી શકશો.(આ અંગેની વધુ માહિતી મૃત્યુ સહાય ફાળાના લેટર સાથે પુરી પાડવામાં આવશે)",
  linkLabel: "CRM Software of Welfare Trust",
  closing: "We Belive in Give you Detail Information about what we Do. And we Always Happy to Help you !!!",
} as const;

/**
 * Verified figures only — each one is traceable to published content.
 */
export const verifiedStats = [
  {
    value: 2002,
    label: "Year of registration",
    detail: "Reg. No. F/1779, B.K. dated 31/07/2002",
    format: "plain" as const,
  },
  {
    value: 7941,
    label: "Member numbers allotted",
    detail: "Total Members",
    format: "number" as const,
  },
  {
    value: 25,
    label: "Collection centres",
    detail: "Across 12 cities and villages",
    format: "number" as const,
  },
  {
    value: 29,
    label: "Executive committee",
    detail: "6 office bearers and 23 executive members",
    format: "number" as const,
  },
];
