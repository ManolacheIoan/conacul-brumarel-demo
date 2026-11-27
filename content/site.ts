/**
 * TOT conținutul site-ului se editează aici.
 * Firma e FICTIVĂ (site demonstrativ Manotek). Valorile marcate „[exemplu]” sunt exemple.
 */

export const TBD = "[exemplu]";

/** true = arată eticheta „[exemplu]” lângă datele fictive. */
export const arataLipsuri = true;

/** Are valoare reală (nu e gol și nu e placeholder). */
export const are = (v?: string) => !!v && v.trim() !== TBD;

/*
 * POZE REALE DE LA LOCAL: pune fișierele în public/poze/ și scrie numele aici (ex. sala: "sala.jpg").
 * Cât timp un câmp e gol, se folosește fotografia ilustrativă din content/images.ts (marcată „Foto ilustrativă”)
 * sau, unde nu există una potrivită (ex. fațada), un placeholder elegant.
 */
export const imagini: Record<string, string> = {
  hero: "",
  fatada: "",
  sala: "",
  ballroom: "",
  platou: "",
  masa: "",
  gratar: "",
  ciorba: "",
  desert: "",
  vin: "",
  camera: "",
  camera2: "",
  camera3: "",
};

export const site = {
  nume: "Restaurant & Cazare Conacul Brumărel",
  numeScurt: "Conacul Brumărel",
  slogan: "Restaurant și cazare în Tecuci",
  descriere:
    "Conacul Brumărel, Tecuci (firmă fictivă, site demonstrativ): bucătărie românească, camere de cazare și evenimente în familie.",
  anInfiintare: 2008,

  adresa: {
    strada: "Str. Exemplu nr. 9",
    localitate: "Tecuci",
    judet: "jud. Galați",
    judetCod: "GL",
    codPostal: "805300",
    tara: "RO",
  },

  telefon: {
    afisat: "07XX XXX XXX",
    tel: "+40700000000",
    // Număr WhatsApp (format internațional, fără +). Șterge-l („”) ca să ascunzi butoanele WhatsApp.
    whatsapp: "40700000000",
  },

  google: {
    rating: "4,7",
    recenzii: "120 de recenzii [exemplu]",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=restaurant+Tecuci",
    embedUrl: "https://maps.google.com/maps?q=45.8486,27.4339&z=15&output=embed",
  },

  facebook: {
    nume: "Conacul Brumărel",
    url: "https://www.facebook.com/",
  },

  email: "rezervari@exemplu.ro",

  // Program de funcționare
  program: [
    { zile: "Luni – Vineri", ore: `10:00 – 23:00 ${TBD}` },
    { zile: "Sâmbătă", ore: `10:00 – 24:00 ${TBD}` },
    { zile: "Duminică", ore: `11:00 – 22:00 ${TBD}` },
  ],

  firma: {
    denumire: `Conacul Brumărel SRL ${TBD}`,
    cui: `RO00000000 ${TBD}`,
    regCom: `J17/000/2008 ${TBD}`,
  },

  // Endpoint Formspree (ex. "https://formspree.io/f/abcdwxyz"). Cât timp e gol, formularele oferă doar WhatsApp / telefon.
  formspreeEndpoint: "",

  // Bandă demo afișată pe toate paginile.
  bandaDemo: "Site demonstrativ realizat de Manotek — firmă fictivă. Datele și prețurile sunt exemple.",
} as const;

export const despre = {
  titlu: "Masă bună și odihnă, la aceeași adresă",
  paragrafe: [
    "Conacul Brumărel e un restaurant cu cazare din Tecuci, unde oaspeții vin la masă, rămân peste noapte sau își sărbătoresc momentele importante.",
    "Bucătărie românească, mese în familie și o sală pregătită pentru evenimente: totul la aceeași adresă.",
  ],
  // Specialitățile casei / povestea locului
  specialitati: "Ciorbă de burtă, sarmale în foi de varză și papanași cu smântână, după rețetele casei.",
  repere: [
    { valoare: "4,7", eticheta: "nota pe Google [exemplu]" },
    { valoare: "12", eticheta: "camere de cazare [exemplu]" },
    { valoare: "3 în 1", eticheta: "restaurant, cazare și evenimente" },
  ],
};

export type Produs = { nume: string; descriere?: string; gramaj?: string; pret: string };
export type CategorieMeniu = { id: string; titlu: string; subtitlu: string; produse: Produs[] };

const P = (nume: string, descriere: string, gramaj: string, lei: number): Produs => ({ nume, descriere, gramaj, pret: `${lei} lei` });

// Meniu exemplu: prețurile sunt orientative.
export const meniu: CategorieMeniu[] = [
  {
    id: "ciorbe",
    subtitlu: "Ciorbe și supe, ca acasă",
    titlu: "Ciorbe",
    produse: [
      P("Ciorbă de burtă", "Cu smântână, ardei iute și oțet de mere", "400 ml", 24),
      P("Ciorbă de perișoare", "Acrită cu borș, cu leuștean proaspăt", "400 ml", 21),
      P("Supă de pui cu tăiței de casă", "Fiartă încet, cu legume", "400 ml", 18),
    ],
  },
  {
    id: "feluri-principale",
    subtitlu: "Preparate românești gătite în casă",
    titlu: "Feluri principale",
    produse: [
      P("Sarmale cu mămăliguță", "În foi de varză, cu smântână și ardei iute", "350 g", 36),
      P("Tochitură moldovenească", "Cu mămăliguță, brânză și ou ochi", "450 g", 42),
      P("Papricaș de pui", "Cu găluște de casă", "400 g", 34),
    ],
  },
  {
    id: "gratar",
    subtitlu: "De pe grătar, la comandă",
    titlu: "Grătar",
    produse: [
      P("Mici", "Porție de 5, cu muștar", "250 g", 25),
      P("Ceafă de porc la grătar", "Cu cartofi țărănești și salată", "300 g", 39),
      P("Piept de pui la grătar", "Cu legume la grătar", "300 g", 33),
    ],
  },
  {
    id: "deserturi",
    subtitlu: "Ceva dulce la final",
    titlu: "Deserturi",
    produse: [
      P("Papanași", "Cu smântână și dulceață de afine", "250 g", 26),
      P("Clătite cu brânză dulce", "Cu stafide și vanilie", "200 g", 19),
    ],
  },
  {
    id: "bauturi",
    subtitlu: "Răcoritoare, cafea, vinuri",
    titlu: "Băuturi",
    produse: [
      P("Limonadă de casă", "Cu mentă sau cu fructe de pădure", "400 ml", 15),
      P("Espresso", "", "", 9),
      P("Vin de casă", "Alb sau roșu, la carafă", "500 ml", 35),
    ],
  },
];

export type Camera = { tip: string; descriere: string; dotari: string[]; pret: string };

// Camere exemplu: tipurile, dotările și prețurile sunt orientative.
export const camere: Camera[] = [
  { tip: "Cameră dublă", descriere: "Pat matrimonial, liniștită, cu vedere spre curte.", dotari: ["Baie proprie", "Aer condiționat", "TV", "Wi-Fi"], pret: `240 lei / noapte ${TBD}` },
  { tip: "Cameră twin", descriere: "Două paturi single, potrivită pentru colegi sau prieteni.", dotari: ["Baie proprie", "Aer condiționat", "Birou", "Wi-Fi"], pret: `240 lei / noapte ${TBD}` },
  { tip: "Cameră familie", descriere: "Pat matrimonial și canapea extensibilă, pentru până la 4 persoane.", dotari: ["Baie proprie", "Aer condiționat", "Frigider", "Wi-Fi"], pret: `340 lei / noapte ${TBD}` },
];

export const cazareInfo = {
  checkIn: `de la 14:00 ${TBD}`,
  checkOut: `până la 11:00 ${TBD}`,
  parcare: `Gratuită, în curte ${TBD}`,
  micDejun: `Inclus, 07:30 – 10:00 ${TBD}`,
};

export const evenimente = {
  titlu: "Evenimente în familie",
  intro: "Botezuri, aniversări și mese festive, cu sală elegantă, meniu stabilit împreună și o echipă care se ocupă de detalii.",
  capacitate: `până la 150 de invitați ${TBD}`,
  meniuri: `meniuri de la 180 lei / persoană ${TBD}`,
  tipuri: [
    { titlu: "Botezuri", text: "O zi frumoasă pentru cel mic, cu masa pregătită pentru toată familia." },
    { titlu: "Aniversări", text: "Zile de naștere, cununii, aniversări de căsătorie, la masa potrivită." },
    { titlu: "Mese festive", text: "Mese de sărbători, întâlniri de familie și mese de firmă." },
  ],
};

export const nav = [
  { href: "/#despre", label: "Despre" },
  { href: "/meniu/", label: "Meniu" },
  { href: "/cazare/", label: "Cazare" },
  { href: "/#evenimente", label: "Evenimente" },
  { href: "/#contact", label: "Contact" },
];
